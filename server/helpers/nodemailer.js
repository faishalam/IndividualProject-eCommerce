const nodemailer = require('nodemailer')

async function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "faishalabdulmajid@gmail.com",
            pass: "iedk blxq tmjg hhiy"
        }
    })
    const sendMail = transporter.sendMail({
        from: "noreply",
        to: `${email}`,
        subject: "REGISTERED TERMIANL ACCOUNT SUCCESSFULLY",
        text: 'Thank you for registering with us',
    })
    console.log("email berhasil dikirim")
}


module.exports = {
    sendEmail
}