import nodemailer from "nodemailer";

export async function sendMail(req, res) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mail = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: "workwithsujal04@gmail.com",
      subject: req.body.subject || "Contact Form Submission",
      text: req.body.message,
      replyTo: req.body.email,
    });

    console.log("Message sent: %s", mail.messageId);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
}
