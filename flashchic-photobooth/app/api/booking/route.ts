import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const packageLabels: Record<string, string> = {
  photobooth: 'Photobooth — $150/hr (2hr min)',
  videobooth: '360 Videobooth — $150/hr (2hr min)',
  combo: 'Photo + Video Combo — $250/hr (3hr min)',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName, lastName, email, phone,
      eventType, eventDate, startTime, endTime,
      eventLocation, guestCount, package: pkg,
      hours, theme, indoorOutdoor, additionalInfo,
    } = body

    if (!firstName || !email || !eventDate || !eventLocation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM || 'flashchic84@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    })

    const packageName = packageLabels[pkg] || pkg

    // Estimate price
    const hourlyRate = pkg === 'combo' ? 250 : 150
    const minHours = pkg === 'combo' ? 3 : 2
    const bookedHours = parseInt(hours) || minHours
    const estimatedTotal = hourlyRate * bookedHours
    const deposit = estimatedTotal * 0.5

    const mailToOwner = {
      from: `"Flashchic Bookings" <${process.env.EMAIL_FROM || 'flashchic84@gmail.com'}>`,
      to: process.env.EMAIL_TO || 'flashchic84@gmail.com',
      subject: `🎉 NEW BOOKING REQUEST — ${firstName} ${lastName} | ${eventDate}`,
      html: `
        <div style="font-family: sans-serif; max-width: 650px; margin: 0 auto; background: #111; color: #fff; padding: 40px; border: 2px solid #d4af37;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 26px; letter-spacing: 4px; text-transform: uppercase;">New Booking Request</h1>
            <h2 style="color: #fff; font-weight: 300; font-size: 18px; margin-top: 5px;">Flashchic Photobooth</h2>
          </div>

          <div style="background: #d4af37; padding: 15px 20px; text-align: center; margin-bottom: 25px;">
            <p style="color: #0a0a0a; font-weight: bold; font-size: 16px; margin: 0;">${packageName}</p>
          </div>

          <h3 style="color: #d4af37; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 15px;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 150px;">Full Name</td>
              <td style="padding: 10px 0; color: #fff; font-weight: bold;">${firstName} ${lastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Phone</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #fff;">${phone}</a></td>
            </tr>
          </table>

          <h3 style="color: #d4af37; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 15px;">Event Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            ${[
              ['Event Type', eventType],
              ['Event Date', eventDate],
              ['Start Time', startTime || 'TBD'],
              ['End Time', endTime || 'TBD'],
              ['Location', eventLocation],
              ['Guests', guestCount || 'TBD'],
              ['Indoor/Outdoor', indoorOutdoor || 'TBD'],
              ['Theme', theme || 'None'],
              ['Booth Hours', `${bookedHours} hours`],
            ].map(([label, value]) => `
              <tr style="border-bottom: 1px solid #222;">
                <td style="padding: 10px 0; color: #888; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 150px;">${label}</td>
                <td style="padding: 10px 0; color: #fff;">${value}</td>
              </tr>
            `).join('')}
          </table>

          ${additionalInfo ? `
          <div style="background: #1a1a1a; padding: 15px; border-left: 3px solid #d4af37; margin-bottom: 25px;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Client Notes</p>
            <p style="color: #ddd; line-height: 1.7;">${additionalInfo}</p>
          </div>
          ` : ''}

          <div style="background: #1a1a1a; padding: 20px; border: 1px solid #d4af37; text-align: center; margin-bottom: 25px;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">Estimated Total</p>
            <p style="color: #d4af37; font-size: 28px; font-weight: bold; margin: 5px 0;">$${estimatedTotal.toFixed(2)}</p>
            <p style="color: #888; font-size: 12px;">Deposit required: <strong style="color: #d4af37;">$${deposit.toFixed(2)}</strong> (50%)</p>
            <p style="color: #555; font-size: 11px; margin-top: 5px;">*Plus applicable taxes. Exact quote to be confirmed.</p>
          </div>

          <div style="display: flex; gap: 15px; text-align: center;">
            <a href="mailto:${email}" style="background: #d4af37; color: #0a0a0a; padding: 14px 30px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; display: inline-block; margin-right: 15px;">Email Client</a>
            <a href="tel:${phone}" style="background: transparent; color: #d4af37; border: 1px solid #d4af37; padding: 14px 30px; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; display: inline-block;">Call Client</a>
          </div>

          <p style="margin-top: 30px; color: #333; font-size: 11px; text-align: center;">Submitted via Flashchic Photobooth website booking form</p>
        </div>
      `,
    }

    const autoReply = {
      from: `"Flashchic Photobooth" <${process.env.EMAIL_FROM || 'flashchic84@gmail.com'}>`,
      to: email,
      subject: `Booking Request Received — ${eventDate} | Flashchic Photobooth`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 40px; border: 1px solid #d4af37;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 22px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 5px;">Flashchic Photobooth</h1>
            <p style="color: #888; font-size: 12px; letter-spacing: 2px;">Booking Request Received</p>
          </div>
          <hr style="border-color: #d4af37; opacity: 0.3; margin-bottom: 25px;" />
          <p style="color: #ddd; line-height: 1.7;">Hi ${firstName},</p>
          <p style="color: #ddd; line-height: 1.7;">Thank you for your booking request! We've received your reservation inquiry and will review the details right away.</p>

          <div style="background: #1a1a1a; padding: 20px; border-left: 3px solid #d4af37; margin: 25px 0;">
            <p style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">Your Request Summary</p>
            <p style="color: #ddd; margin: 5px 0;">📅 <strong>Date:</strong> ${eventDate}</p>
            <p style="color: #ddd; margin: 5px 0;">📦 <strong>Package:</strong> ${packageName.split('—')[0].trim()}</p>
            <p style="color: #ddd; margin: 5px 0;">📍 <strong>Location:</strong> ${eventLocation}</p>
            <p style="color: #ddd; margin: 5px 0;">🎉 <strong>Event:</strong> ${eventType}</p>
          </div>

          <p style="color: #ddd; line-height: 1.7;"><strong style="color: #d4af37;">What happens next?</strong></p>
          <ol style="color: #ddd; line-height: 2; padding-left: 20px;">
            <li>We'll confirm your date availability within <strong style="color: #d4af37;">24 hours</strong></li>
            <li>You'll receive an invoice for your 50% deposit to secure the date</li>
            <li>Your contract will be sent for e-signature</li>
          </ol>

          <p style="color: #ddd; line-height: 1.7; margin-top: 20px;">Questions? Call or text us: <a href="tel:5148318409" style="color: #d4af37; font-weight: bold;">(514) 831-8409</a></p>

          <hr style="border-color: #333; margin: 30px 0;" />
          <p style="color: #555; font-size: 12px; text-align: center;">Flashchic Photobooth · Laval, Québec<br/>
          <a href="https://instagram.com/flashchicphotobooth" style="color: #d4af37;">@flashchicphotobooth</a></p>
        </div>
      `,
    }

    await transporter.sendMail(mailToOwner)
    await transporter.sendMail(autoReply)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking email error:', error)
    return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 })
  }
}
