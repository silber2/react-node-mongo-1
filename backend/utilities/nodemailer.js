import nodemailer from 'nodemailer'
  
  let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "fransilber16@gmail.com",
        pass: "jkrd dqhx stgc rwqj",
      },
    });



export default transporter