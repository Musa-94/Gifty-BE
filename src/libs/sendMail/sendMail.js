const nodemailer = require('nodemailer');

class Nodemailer {
    constructor(service, auth) {
        this._service = service || 'mail';
        this._auth = auth || {
            user: process.env.AUTH_MAIL,
            pass: process.env.AUTH_MAIL_PASS,
        };
        this._mailOptions = {
            from: process.env.AUTH_MAIL,
            to: 'mc.zakvak@gmail.com',
            subject: 'GIFT GAME',
            text: 'WELCOME GIFT',
        };
    };

    createTransport = () => {
        return nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            service: this._service,
            auth: {
                user: this._auth.user,
                pass: this._auth.pass,
            }
        });
    };

    sendMail = mailOptions => {
        !mailOptions && (mailOptions = this._mailOptions);
        const transporter = this.createTransport();

        transporter.sendMail(mailOptions, function (error, info) {
            if(error) {
                console.log('ERROR', error);
            } else {
                console.log('Email sent: ', info);
            }
        });
    };
}

module.exports = Nodemailer;
