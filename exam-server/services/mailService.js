const nodemailer = require("nodemailer");

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

    registerContent: (email, password) => {
        return `<!DOCTYPE html>
                    <html lang="vi">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Thông tin Vòng 1 - Test Online</title>
                    </head>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
                            <h2 style="color: #2c3e50;">Thân gửi bạn,</h2>
                            <p><strong>CLB Chứng khoán Học viện Ngân hàng - SEC</strong> chân thành cảm ơn bạn đã dành sự quan tâm và đăng ký tham gia Cuộc thi <strong>Bản lĩnh Nhà đầu tư 2024</strong>.</p>
                            <p>BTC xin gửi bạn thông tin chi tiết để tham dự <strong>Vòng 1 - Test Online</strong>:</p>
                            <ul>
                                <li><strong>Tài khoản:</strong> ${email}</li>
                                <li><strong>Mật khẩu:</strong> ${password}</li>
                            </ul>
                            <h3>Hướng dẫn trước khi làm bài:</h3>
                            <ul>
                                <li>Bài thi gồm các câu hỏi trắc nghiệm kiểm tra kiến thức về lĩnh vực <strong>Kinh tế - Tài chính - Chứng khoán, IQ,...</strong> Ở mỗi câu hỏi, các thí sinh chỉ được lựa chọn <strong>01 đáp án</strong> duy nhất.</li>
                                <li>Thời gian làm bài: <strong>20 phút</strong>.</li>
                                <li>Bạn vui lòng truy cập vào <a href="https://www.blndt-sec-bav.com/welcome" style="color: #2980b9;">đây</a> để bắt đầu thi.</li>
                            </ul>
                            <p>Nếu có thắc mắc về <strong>Vòng 1 Cuộc thi Bản lĩnh Nhà đầu tư 2024</strong>, bạn vui lòng liên hệ Fanpage <a href="https://www.facebook.com/banlinhnhadautu.sec" style="color: #2980b9;">https://www.facebook.com/banlinhnhadautu.sec</a> hoặc gửi mail về địa chỉ <a href="mailto:notify.blndt@gmail.com" style="color: #2980b9;">notify.blndt@gmail.com</a> để BTC có thể giải đáp.</p>
                            <p>Cảm ơn bạn đã dành thời gian quan tâm đến cuộc thi và chúc bạn hoàn thành tốt bài thi của mình!</p>

                            <h3 style="color: #e74c3c;">LƯU Ý:</h3>
                            <ul>
                                <li>Với mỗi IP máy tính, các bạn chỉ được dự thi <strong>MỘT lần duy nhất</strong>! Vì vậy, bạn hãy chuẩn bị đầy đủ kiến thức và đảm bảo kết nối đường truyền máy tính của mình thật ổn định để tránh những lỗi đáng tiếc có thể xảy ra!</li>
                                <li>Hãy chọn 1 ca thi ở cuối phần thi.</li>
                            </ul>

                            <p>Trân trọng!</p>
                            <p>BTC Cuộc thi Bản lĩnh Nhà đầu tư</p>

                            <hr style="border: none; border-top: 1px solid #ddd;">

                            <p><strong>Mọi chi tiết vui lòng liên hệ:</strong></p>
                            <p>Fanpage CLB Chứng khoán Học viện Ngân hàng – SEC: <a href="https://www.facebook.com/sec.bav/" style="color: #2980b9;">https://www.facebook.com/sec.bav/</a></p>
                            <p>Fanpage Cuộc thi: <a href="https://www.facebook.com/banlinhnhadautu.sec" style="color: #2980b9;">https://www.facebook.com/banlinhnhadautu.sec</a></p>
                            <p>Email: <a href="mailto:notify.blndt@gmail.com" style="color: #2980b9;">notify.blndt@gmail.com</a></p>
                            <p>Hotline:</p>
                            <ul>
                                <li>0911 485 733 (Mr. Nhật Khôi)</li>
                                <li>0869 340 363 (Mr. Anh Dũng)</li>
                            </ul>
                            <p>Địa chỉ: 12 Chùa Bộc, Đống Đa, Hà Nội</p>
                        </div>
                    </body>
                    </html>
                    `
    }
}