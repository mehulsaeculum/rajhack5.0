// external packages
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const sendSMTPEmail = (data: any, recipient: string, subject: string, message: string) => {
  return new Promise((resolve, reject) => {
    let transport = nodemailer.createTransport({
      host: data.host,
      port: data.port,
      secure: true,
      auth: {
        user: data.username,
        pass: data.password,
      },
    })

    let body: Mail.Options = {
      from: data.from_email,
      replyTo: data.from_email,
      to: recipient,
      subject: subject,
      html: message
    }

    transport.sendMail(body, (error: any, info: any) => {
      if (error) {
        return reject(error)
      }
      return resolve(info)
    });
  })
}

export { sendSMTPEmail }
