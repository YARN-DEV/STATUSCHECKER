import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import sharp from 'sharp';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handleUpload = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    const { picture } = files;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'loveandsweetsongs@gmail.com', // Your email
        pass: 'Fishbone1b$', // Your email password
      },
    });

    // Read and compress the file data
    const fileData = await sharp(picture.path)
      .resize(800) // Resize the image to a width of 800px
      .jpeg({ quality: 80 }) // Compress the image to 80% quality
      .toBuffer();

    // Send the email with the attachment
    const mailOptions = {
      from: 'loveandsweetsongs@gmail.com', // Your email
      to: 'loveandsweetsongs@gmail.com', // Recipient's email (can be the same as your email)
      subject: 'Image Upload',
      text: 'Please find the attached image.',
      attachments: [
        {
          filename: picture.name,
          content: fileData,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Image uploaded and email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  });
};

export default handleUpload;