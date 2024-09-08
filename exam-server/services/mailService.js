
module.exports = {
    sendMail: async (email, html) => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                  user: process.env.EMAIL_NAME,
                  pass: process.env.EMAIL_APP_PASSWORD,
                },
              });
              let info = await transporter.sendMail({
                from: '"E_Quiz" <no-relply@quangtat.com>',
                to: email,
                subject: "Đăng ký thành công",
                html: html,
              });
              return info;
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },

    registerContent: () => {
        return 
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                </style>
            </head>
            <body>
                <div>Quang tat</div>
            </body>
            </html>`
    }
}