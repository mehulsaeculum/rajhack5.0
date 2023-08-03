// email templates
import FORGOT_PASSWORD_EMAIL from '../email-template/forgot-password';
import RESET_PASSWORD_EMAIL from '../email-template/reset-password';
import WECLOME_EMAIL from '../email-template/welcome';

interface EMAIL_TEMPLATE {
    SUBJECT: string;
    HTML: string;
}

let SMTP_DETAILS: any = {
    host: 'smtp.gmail.com',
    port: 465,
    username: process.env.SMTP_EMAIL || '',
    password: process.env.SMTP_PASSWORD || '',
    from_email: process.env.SMTP_EMAIL || ''
}

let EMAIL_FORGOT_PASSWORD_CONFIG: EMAIL_TEMPLATE = {
    SUBJECT: 'Reset Password',
    HTML: FORGOT_PASSWORD_EMAIL
}

let EMAIL_RESET_PASSWORD_CONFIG: EMAIL_TEMPLATE = {
    SUBJECT: 'Password Reset Successfully',
    HTML: RESET_PASSWORD_EMAIL
}

let EMAIL_WELCOME_CONFIG: EMAIL_TEMPLATE = {
    SUBJECT: 'Welcome to Jagran',
    HTML: WECLOME_EMAIL
}

export {
    SMTP_DETAILS,
    EMAIL_FORGOT_PASSWORD_CONFIG,
    EMAIL_RESET_PASSWORD_CONFIG,
    EMAIL_WELCOME_CONFIG
}