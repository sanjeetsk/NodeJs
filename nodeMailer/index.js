// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question("Please enter your mail ", (mail) => {
    sendMail(mail);
    rl.close();
  })
};

async function sendMail(mail){
  //create email transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj'
    },
  });

  //Configure email content
  const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: `${mail}`,
    subject: 'Coding Ninjas',
    text: "The world has enough coders; be a coding ninja!"
  };

  //Send the email
  try{
    const result = await transporter.sendMail(mailOptions);
    console.log("Success: Email sent to ", mail);
  }
  catch(err){
    console.log('Email sent fail with error ', err);
  }
}

export default Solution;
