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
        subject: "testing ya",
        text: 'mengirim email'
    })
    console.log("email berhasil dikirim")
}


module.exports = {
    sendEmail
}