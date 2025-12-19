import nodemailer from "nodemailer";

export const sendContactMail = async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* 1️⃣ Mail to ADMIN (You) */
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your email
      subject: "New Contact Form Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    /* 2️⃣ Auto-Reply Mail to USER */
    await transporter.sendMail({
      from: `"Krishnas Jewellers | Gold, Diamond & Silver Jewellery" <${process.env.EMAIL_USER}>`,
      to: email, // USER email
      subject: "We received your message ✅",
      html: `
        <div style="background:#f3f4f6; padding:40px 15px;">
  <div style="
    max-width:600px;
    margin:0 auto;
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius:12px;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
    padding:24px;
    font-family:Arial, sans-serif;
  ">
    
    <h2 style="
      text-align:center;
      font-size:24px;
      font-weight:600;
      color:#1f2937;
      margin-bottom:16px;
    ">
      Thank You
    </h2>

    <p style="color:#374151; margin-bottom:10px;">
      Hello <b>${name}</b>,
    </p>

    <p style="
      color:#4b5563;
      line-height:1.6;
      margin-bottom:16px;
    ">
      Thank you for contacting us. We have successfully received your message and truly appreciate you reaching out to us. Your query is important to us, and our team is currently reviewing the details you have shared. We aim to respond as quickly as possible with accurate and helpful information. If any additional details are required, we will contact you using the information you provided. Thank you for your patience and trust in our services. We look forward to assisting you and resolving your query in a timely and professional manner.
    </p>

    <p style="color:#4b5563; margin-bottom:16px;">
      Our team will contact you shortly.
    </p>

    <div style="
      margin-top:24px;
      border-top:1px solid #e5e7eb;
      padding-top:16px;
      color:#374151;
    ">
      <p>Regards,</p>
      <p style="font-weight:600;">Krishnas Jewellers</p>
    </div>

  </div>
</div>


      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent & auto-reply email delivered",
    });

  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({
      success: false,
      message: "Email not sent",
    });
  }
};
