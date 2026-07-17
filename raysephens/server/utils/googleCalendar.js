import { google } from 'googleapis';

const TIMEZONE = 'America/Toronto';

function getAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) return null;

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });
}

// Combines "2026-07-15" + "10:00 AM" into a Date. Falls back to next business day 10 AM if time/date missing.
function buildStartTime(preferredDate, preferredTime) {
  const base = preferredDate ? new Date(`${preferredDate}T00:00:00`) : new Date(Date.now() + 24 * 60 * 60 * 1000);

  let hours = 10;
  let minutes = 0;
  if (preferredTime) {
    const match = preferredTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (match) {
      hours = parseInt(match[1], 10) % 12;
      minutes = parseInt(match[2], 10);
      if (match[3].toUpperCase() === 'PM') hours += 12;
    }
  }
  base.setHours(hours, minutes, 0, 0);
  return base;
}

// Creates a 30-minute consultation event on the business calendar and invites the customer.
// Returns { eventId, meetLink, htmlLink } or null if Google Calendar isn't configured.
export async function createBookingEvent(booking) {
  const auth = getAuth();
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!auth || !calendarId) {
    console.warn('Google Calendar not configured — skipping calendar event creation.');
    return null;
  }

  const calendar = google.calendar({ version: 'v3', auth });

  const start = buildStartTime(booking.preferredDate, booking.preferredTime);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  const event = {
    summary: `Consultation — ${booking.name} (${booking.service})`,
    description: [
      `Service: ${booking.service}`,
      `Phone: ${booking.phone}`,
      `Notes: ${booking.message || 'None'}`,
    ].join('\n'),
    start: { dateTime: start.toISOString(), timeZone: TIMEZONE },
    end: { dateTime: end.toISOString(), timeZone: TIMEZONE },
    attendees: [{ email: booking.email, displayName: booking.name }],
    conferenceData: {
      createRequest: {
        requestId: `booking-${booking._id}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 30 },
      ],
    },
  };

  const response = await calendar.events.insert({
    calendarId,
    resource: event,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
  });

  return {
    eventId: response.data.id,
    meetLink: response.data.hangoutLink || null,
    htmlLink: response.data.htmlLink || null,
  };
}
