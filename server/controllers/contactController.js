import nodemailer from "nodemailer";

export const sendContactMail = async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nikunjnavadiya7@gmail.com",
        pass: "glgq mhif slmd rvin",
      },
    });

    await transporter.sendMail({
      from: "nikunjnavadiya7@gmail.com",
      to: "nikunjnavadiya7@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({
      success: false,
      message: "Email not sent",
    });
  }
};
