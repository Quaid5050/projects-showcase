import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string
    const resumeFile = formData.get("resume") as File | null

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    // Build attachments if resume uploaded
    const attachments: nodemailer.SendMailOptions["attachments"] = []
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      })
    }

    await transporter.sendMail({
      from: '"Lupin Project Group Careers" <lupinprojectgroup@gmail.com>',
      to: "lupinprojectgroup@gmail.com",
      subject: `New Job Application – ${position} – ${name}`,
      html: `
        <h2>New Job Application</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Position</td><td style="padding:8px">${position}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Experience</td><td style="padding:8px">${experience}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${message || "—"}</td></tr>
        </table>
        ${resumeFile ? `<p>Resume attached: <strong>${resumeFile.name}</strong></p>` : "<p>No resume attached.</p>"}
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Careers email error:", err)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
