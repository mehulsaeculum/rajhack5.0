let html = `<html>
<head>
    <style>
        html,
        body {
            padding: 0;
            margin: 0;
        }

        .disabled-link {
            pointer-events: none;
        }
    </style>
</head>

<body>
    <div
        style='font-family:Arial,Helvetica,sans-serif; line-height: 1.5; font-weight: normal; font-size: 15px; color: #2F3044; min-height: 100%; margin:0; padding:0; width:100%; background-color:#edf2f7'>
        <table align='center' border='0' cellpadding='0' cellspacing='0' width='100%'
            style='border-collapse:collapse;margin:0 auto; padding:0; max-width:600px'>
            <tbody>
                <tr>
                    <td align='center' valign='center' style='text-align:center; padding: 40px'>
                        <a href='' class='py-9 mb-5'>
                            <img alt='Logo' src='https://i.ibb.co/TwFThwZ/logo.png' class='h-60px'>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align='left' valign='center'>
                        <div
                            style='text-align:left; margin: 0 20px 20px; padding: 40px; background-color:#ffffff; border-radius: 6px'>
                            <table style='padding-bottom: 30px; font-size: 17px;'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong> Hello ##name##,</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style='padding-bottom: 10px;'>
                                <tbody>
                                    <tr>
                                        <td>
                                            Your password has successfully been reset.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style='padding-bottom: 30px;'>
                                <tbody>
                                    <tr>
                                        <td>
                                            Do not hesitate to contact us if you have any questions.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Regards,</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style='padding-bottom: 10px;'>
                                <tbody>
                                    <tr>
                                        <td>The Jagran Team.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>`
export default html