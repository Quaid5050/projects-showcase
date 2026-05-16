export type JoinApplicantFields = {
  firstName: string
  churchName: string
}

export type JoinAdminFields = JoinApplicantFields & {
  lastName: string
  email: string
  phone: string
  churchCity: string
  roleTitle: string
}

export type ApprovalFields = {
  firstName: string
  pastorName: string
  churchName: string
  email: string
}

export type AccountLoginFields = {
  firstName: string
  churchName: string
  email: string
  loginLink: string
  temporaryPassword: string
}

export function joinApplicantConfirmation(fields: JoinApplicantFields) {
  const subject = 'We Received Your Church Information – Cobb Church Network'
  const text = `Hi ${fields.firstName},

Thanks for your interest in the Cobb Church Network. We've received your submission for ${fields.churchName} and our team will review it soon.

If you have questions, reply to this email.

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(fields.firstName)},</p>
<p>Thanks for your interest in the Cobb Church Network. We've received your submission for <strong>${escapeHtml(fields.churchName)}</strong> and our team will review it soon.</p>
<p>If you have questions, reply to this email.</p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function joinAdminNotification(fields: JoinAdminFields) {
  const subject = 'New Church Submission – Review Needed'
  const text = `New join application:

Name: ${fields.firstName} ${fields.lastName}
Email: ${fields.email}
Phone: ${fields.phone}
Church: ${fields.churchName}
City: ${fields.churchCity}
Role: ${fields.roleTitle}

Review in admin: applications queue.`
  const html = `<p><strong>New join application</strong></p>
<ul>
<li>Name: ${escapeHtml(fields.firstName)} ${escapeHtml(fields.lastName)}</li>
<li>Email: ${escapeHtml(fields.email)}</li>
<li>Phone: ${escapeHtml(fields.phone)}</li>
<li>Church: ${escapeHtml(fields.churchName)}</li>
<li>City: ${escapeHtml(fields.churchCity)}</li>
<li>Role: ${escapeHtml(fields.roleTitle)}</li>
</ul>
<p>Review pending applications in the admin console.</p>`
  return { subject, text, html }
}

export function approvalEmail(fields: ApprovalFields) {
  const subject = "You're Approved – Welcome to Cobb Church Network"
  const text = `Hi ${fields.firstName},

Great news — ${fields.churchName} has been approved to join the Cobb Church Network.

Pastor/leader on file: ${fields.pastorName}

You'll receive a separate email with login details for ${fields.email}.

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(fields.firstName)},</p>
<p>Great news — <strong>${escapeHtml(fields.churchName)}</strong> has been approved to join the Cobb Church Network.</p>
<p>Pastor/leader on file: ${escapeHtml(fields.pastorName)}</p>
<p>You'll receive a separate email with login details for ${escapeHtml(fields.email)}.</p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function accountLoginEmail(fields: AccountLoginFields) {
  const subject = 'Your Login Details – Cobb Church Network'
  const text = `Hi ${fields.firstName},

Your church dashboard account for ${fields.churchName} is ready.

Login: ${fields.loginLink}
Email: ${fields.email}
Temporary password: ${fields.temporaryPassword}

Please sign in and change your password from your profile as soon as possible.

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(fields.firstName)},</p>
<p>Your church dashboard account for <strong>${escapeHtml(fields.churchName)}</strong> is ready.</p>
<p><a href="${escapeHtml(fields.loginLink)}">Sign in to your dashboard</a></p>
<p>Email: ${escapeHtml(fields.email)}<br/>
Temporary password: <code>${escapeHtml(fields.temporaryPassword)}</code></p>
<p>Please sign in and change your password as soon as possible.</p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function resourceSubmittedEmail(opts: {
  churchName: string
  title: string
  type: string
  category: string
}) {
  const isOffer = opts.type === 'OFFER'
  const subject = isOffer
    ? 'Your resource offer was submitted – Cobb Church Network'
    : 'Your resource request was submitted – Cobb Church Network'
  const text = `${opts.churchName} added a resource (${opts.type}): ${opts.title} [${opts.category}]`
  const html = `<p><strong>${escapeHtml(opts.churchName)}</strong> added a resource (${escapeHtml(opts.type)}): ${escapeHtml(opts.title)} <em>${escapeHtml(opts.category)}</em></p>`
  return { subject, text, html }
}

export function applicationRejectedEmail(firstName: string) {
  const subject = 'Update on your Cobb Church Network application'
  const text = `Hi ${firstName},\n\nThank you for applying to the Cobb Church Network. We're unable to move forward with this application at this time.\n\n— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(firstName)},</p><p>Thank you for applying to the Cobb Church Network. We're unable to move forward with this application at this time.</p>`
  return { subject, text, html }
}

export function resourceResponseToChurchEmail(opts: {
  resourceTitle: string
  resourceType: string
  /** Church that sent the response */
  respondingChurchName: string
  /** Pastor / leader name on the receiving church profile */
  pastorReceivingName: string
  contactName: string
  contactEmail: string
  contactPhone: string
  message: string
  dashboardUrl: string
}) {
  const subject = 'A Church Has Responded to Your Request'
  const text = `Hi ${opts.pastorReceivingName},

A church has responded regarding your network listing.

Resource: ${opts.resourceTitle} (${opts.resourceType})
Responding church: ${opts.respondingChurchName}

Contact: ${opts.contactName}
Email: ${opts.contactEmail}
Phone: ${opts.contactPhone}

Message:
${opts.message}

View messages: ${opts.dashboardUrl}/dashboard/messages

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(opts.pastorReceivingName)},</p>
<p><strong>A church has responded</strong> regarding your network listing.</p>
<p>Resource: <strong>${escapeHtml(opts.resourceTitle)}</strong> (${escapeHtml(opts.resourceType)})<br/>
Responding church: ${escapeHtml(opts.respondingChurchName)}</p>
<p>Contact: ${escapeHtml(opts.contactName)}<br/>Email: ${escapeHtml(opts.contactEmail)}<br/>Phone: ${escapeHtml(opts.contactPhone)}</p>
<p><strong>Message</strong></p><p>${escapeHtml(opts.message).replace(/\n/g, '<br/>')}</p>
<p><a href="${escapeHtml(opts.dashboardUrl)}/dashboard/messages">Open your dashboard messages</a></p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function eventRegistrationConfirmationEmail(opts: {
  eventTitle: string
  dateLabel: string
  time: string
  location: string
  /** Pastor or user display name */
  pastorOrUserName: string
  dashboardUrl: string
}) {
  const subject = `You're Registered – Cobb Church Network Event`
  const text = `Hi ${opts.pastorOrUserName},

You're registered for:
${opts.eventTitle}

When: ${opts.dateLabel} at ${opts.time}
Where: ${opts.location}

Your dashboard: ${opts.dashboardUrl}/dashboard/events

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(opts.pastorOrUserName)},</p>
<p>You're registered for <strong>${escapeHtml(opts.eventTitle)}</strong>.</p>
<p>${escapeHtml(opts.dateLabel)} at ${escapeHtml(opts.time)}<br/>${escapeHtml(opts.location)}</p>
<p><a href="${escapeHtml(opts.dashboardUrl)}/dashboard/events">View your events on the dashboard</a></p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function announcementEmail(opts: { pastorName: string; title: string; body: string; dashboardUrl: string }) {
  const subject = 'Cobb Church Network Update'
  const text = `Hi ${opts.pastorName},

${opts.title}

${opts.body}

Dashboard: ${opts.dashboardUrl}/dashboard

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(opts.pastorName)},</p>
<h2>${escapeHtml(opts.title)}</h2>
<div>${escapeHtml(opts.body).replace(/\n/g, '<br/>')}</div>
<p><a href="${escapeHtml(opts.dashboardUrl)}/dashboard">Open your dashboard</a></p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function crisisAlertEmail(opts: {
  pastorName: string
  title: string
  description: string
  urgency: string
  location: string
  instructions: string
  dashboardUrl: string
}) {
  const subject = 'Cobb Church Network – Urgent Community Response'
  const loc = opts.location.trim()
  const instr = opts.instructions.trim()
  const text = `Hi ${opts.pastorName},

Urgent community response — ${opts.title}
Urgency: ${opts.urgency}

${opts.description}
${loc ? `\nLocation: ${loc}` : ''}
${instr ? `\nInstructions:\n${instr}` : ''}

Respond here: ${opts.dashboardUrl}/dashboard/crisis

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(opts.pastorName)},</p>
<h2>${escapeHtml(opts.title)}</h2>
<p><strong>Urgency:</strong> ${escapeHtml(opts.urgency)}</p>
<p>${escapeHtml(opts.description).replace(/\n/g, '<br/>')}</p>
${loc ? `<p><strong>Location:</strong> ${escapeHtml(loc)}</p>` : ''}
${instr ? `<p><strong>Instructions:</strong><br/>${escapeHtml(instr).replace(/\n/g, '<br/>')}</p>` : ''}
<p><a href="${escapeHtml(opts.dashboardUrl)}/dashboard/crisis">Open crisis alerts on your dashboard</a></p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

export function donationReceiptEmail(opts: {
  amountDisplay: string
  donorName?: string | null
  frequencyLabel: string
}) {
  const subject = 'Thank You for Supporting Cobb Church Network'
  const raw = opts.donorName?.trim() || 'Friend'
  const first = raw.split(/\s+/)[0] || 'Friend'
  const text = `Hi ${first},

Thank you for supporting Cobb Church Network with ${opts.amountDisplay} (${opts.frequencyLabel}).

Your gift helps strengthen churches and serve families across Cobb County. This message serves as your receipt.

— Cobb Church Network`
  const html = `<p>Hi ${escapeHtml(first)},</p>
<p>Thank you for supporting Cobb Church Network with <strong>${escapeHtml(opts.amountDisplay)}</strong> (${escapeHtml(opts.frequencyLabel)}).</p>
<p>Your gift helps strengthen churches and serve families across Cobb County. This message serves as your receipt.</p>
<p>— Cobb Church Network</p>`
  return { subject, text, html }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
