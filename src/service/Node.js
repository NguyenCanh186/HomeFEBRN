const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name, phone, email, business, customerType, address } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'leagueyasuo186@gmail.com', // Điền địa chỉ email của bạn
            pass: 'Anhkiet2512@*', // Điền mật khẩu email của bạn
        },
    });

    // Cấu hình email
    const mailOptions = {
        from: 'leagueyasuo186@gmail.com', // Địa chỉ email nguồn
        to: 'canh.nguyen3306@gmail.com', // Địa chỉ email đích
        subject: 'Thông tin từ biểu mẫu liên hệ',
        text: `
      Tên: ${name}
      Số điện thoại: ${phone}
      Email: ${email}
      Lĩnh vực kinh doanh: ${business}
      Loại khách hàng: ${customerType}
      Địa chỉ công ty: ${address}
    `,
    };

    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, error: error });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
