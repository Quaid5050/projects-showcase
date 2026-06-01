import emailjs from '@emailjs/browser';

const PUBLIC_KEY  = 'N5f1KsP3okDspPauA';
const SERVICE_ID  = 'service_a8b9zfd';
const TEMPLATE_ID = 'template_t0fd8a5';

emailjs.init(PUBLIC_KEY);

export async function sendLead({ name, email, phone, service }) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    form_type:    'New Lead (Popup)',
    client_name:  name,
    client_email: email,
    client_phone: phone,
    service:      service,
    discount:     'TNO-FIRST10 (10% off)',
    date: '', time: '', apt_type: '', notes: '', message: '', subject: '',
  });
}

export async function sendBooking({ fname, lname, email, phone, service, notes, virtual, date, time }) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    form_type:    'Booking Request',
    client_name:  `${fname} ${lname}`,
    client_email: email,
    client_phone: phone,
    service:      service,
    date:         date,
    time:         time,
    apt_type:     virtual ? 'Virtual' : 'In-Person',
    notes:        notes || 'None',
    discount:     'TNO-FIRST10 (10% off)',
    message: '', subject: '',
  });
}

export async function sendContact({ fname, lname, email, phone, subject, message }) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    form_type:    'Contact Form',
    client_name:  `${fname} ${lname}`,
    client_email: email,
    client_phone: phone || 'Not provided',
    subject:      subject,
    message:      message,
    date: '', time: '', apt_type: '', notes: '', discount: '', service: '',
  });
}
