# Form Delivery Report

## Forms Covered

- General business inquiry
- Product inquiry
- Request a Floor Assessment
- Distributor application
- Partnership inquiry
- Investment or project inquiry

## API Route

- Endpoint: `/api/inquiry`
- Storage: MongoDB through `Inquiry`
- Email delivery: Nodemailer SMTP through `lib/mailer.ts`
- Success status: `201`
- Validation failure status: `400`
- Timing/spam failure status: `429` or `400`

## Payload Fields

- `fullName`
- `companyName`
- `email`
- `phone`
- `country`
- `website`
- `businessType`
- `inquiryCategory`
- `productOrServiceNeeded`
- `quantityOrVolume`
- `targetMarket`
- `message`
- `consent`
- `source`
- `startedAt`
- `websiteHoneypot`

Safe Solution floor-assessment fields are encoded into the message body:

- Facility type
- Country and city
- Approximate floor area
- Surface type
- Current floor problem
- Desired assessment date
- Product or program interest

Distributor fields are encoded into the message body:

- Job title
- Company website
- City
- Requested territory
- Years in operation
- Industries served
- Current product lines
- Sales-team size
- Dealer/reseller network
- Warehousing capability
- Technical/service capability
- Main customer types
- Markets currently served
- Product interest
- Estimated annual sales opportunity
- Currency
- Estimated first-year volume
- Company-profile URL or note

## Required Environment Variables

- `MONGODB_URI`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `ADMIN_EMAIL`

## Production Verification Still Required

Real email delivery cannot be claimed until production SMTP credentials are available and test submissions are confirmed at the configured recipient inbox.

The current code validates payloads, stores accepted inquiries, prevents obvious honeypot spam, performs request-timing checks, escapes email HTML output, and does not return secrets to the client.
