import { userModel , ngoModel, DonationModel, volunteerModel, fundModel, volOppModel} from "../../server.js";
import nodemailer from 'nodemailer';

//const nodemailer = require('nodemailer');

export  const addUser = async (user) => {
    console.log("in add user");
    // var date = new Date();
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var finalDate = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + " EST";
     console.log(user.name);
     console.log(user.password);
    // console.log(note.actionItems);
    const newUser = new userModel({
      user_email: user.user_email,
      name: user.name,
      password: user.password,
      address: user.address,
      zip: user.zip
      //createdDate: finalDate
    });
  
    return await newUser.save();
  };


  export const loginUser = async (username, password) => {
    console.log(username);
    console.log(password);
    const user = await userModel.findOne({name : username, password : password}).exec();
     console.log(user);
     return user;
  }

  export const loginNGO = async (username, password) => {
    console.log(username);
    console.log(password);
    const ngo = await ngoModel.findOne({name : username, password : password}).exec();
     console.log(ngo);
     return ngo;
  }

  export const ngo_SignUp = async (ngo) => {
    console.log("in ngo signup");
    var date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var finalDate = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + " EST";
     console.log(ngo.name);
     console.log(ngo.password);

     const newNgo = new ngoModel({
      ngo_email: ngo.ngo_email,
      name: ngo.name,
      password: ngo.password,
      address: ngo.address,
      zip: ngo.zip
    });
  
    return await newNgo.save();

  }

  export const donate_item = async (item, userId, desc, time) => {
    console.log("in donate item user"); 

    var date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var finalDate = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + " EST";
     
    const user = await userModel.findById(userId);
    const username = user.name;
    const user_mail = user.user_email;
    const donateItem = new DonationModel({
       username: username,
       user_id: userId,
       item: item,
       date: finalDate,
       description: desc,
       lifetime: time,
       user_email: user_mail
    });

    return await donateItem.save();
  }

  

  //pxxk xvvr kiml zerc
  export const mail = async (req, res) => {
    try {
    console.log("in mail");
    const query = {...req.query};
    console.log(query);
    const user = await userModel.findById(query.userId);
    console.log(user.user_email + user.name);
    const mail_body = query.mail_body;
    const mail_sub = query.mail_sub;
    const user_email = user.user_email;
    //const query = {...req.query};
   // const ngo_mail = query.ngoMail;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vardhankaranam25@gmail.com',
        pass: 'pxxk xvvr kiml zerc' // For Gmail, it's safer to use an App Password if 2FA is enabled
      } 
    });

    let mailOptions = {
      from: 'vardhankaranam25@gmail.com',
      to: user_email,
      subject: mail_sub,
      text: mail_body
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
      }
    });

  } catch(error) {
    console.log(error);
  }


  

    
  


    
  }


  export const ngoMailSend = async (req, res) => {
    try {
    console.log("in mail");
    const query = {...req.query};
    console.log(query);
    const user = await ngoModel.findById(query.userId);
    console.log(user.ngo_email + user.name);
    const mail_body = query.mail_body;
    const mail_sub = query.mail_sub;
    const user_email = user.ngo_email;
    //const query = {...req.query};
   // const ngo_mail = query.ngoMail;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vardhankaranam25@gmail.com',
        pass: 'pxxk xvvr kiml zerc' // For Gmail, it's safer to use an App Password if 2FA is enabled
      } 
    });

    let mailOptions = {
      from: 'vardhankaranam25@gmail.com',
      to: user_email,
      subject: mail_sub,
      text: mail_body
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
      }
    });

  } catch(error) {
    console.log(error);
  }

    
  }




  export const volunteering = async (userId, course, desc, hours) => {
    console.log('in volunteering ');
    const user = userModel.findById(userId);
    const username = user.name;
    const mail_user = user.user_email;

    const volunteerUser = new volunteerModel({
       username: username,
        userId : userId,
        course : course,
        description: desc,
        hours: hours,
        userEmail: mail_user
    });

    return await volunteerUser.save();
  }

  export const raisefund = async(body) => {
    console.log("in raise fund");
    console.log(body.id);
    const ngo = await ngoModel.findById(body.id);
    const name = ngo.ngo_email;
    console.log(name);
    console.log(body.description);
    console.log(body.amt);
    const raise = new fundModel({
      ngo: ngo.name,
      title: body.title,
      description: body.description,
      target_amount: body.target_amount,
      current_amount: "0"
    });

    return await raise.save();
  }


  export const find_user = async (email) =>{
    console.log("in find user");
    const user = await userModel.find({user_email: email}).exec();
    console.log(user);
    console.log("this is finding" + user.length);
    if(user.length!=0) {
      return true;
    } else {
      return false;
    }
  }

  export const find_ngo = async (email) =>{
    const ngo = await ngoModel.find({ngo_email: email}).exec();
    console.log(ngo);
    console.log("this is finding" + ngo.length);
    if(ngo.length!=0) {
      return true;
    } else {
      return false;
    }
  }

  export const find_fund = async (id) => {
    console.log("in findfund");
    const ngo =  await ngoModel.findById(id);
    console.log(ngo.name);
    const fund = await fundModel.find({ngo: ngo.name}).exec();
    console.log(fund);

    if(fund.length!=0) {
      return true;
    } else {
      return false;
    }
  }
  

  export const view_donations = async (req, resp) => {
    console.log("in view donations");
    try {
        const donations = await DonationModel.find();
        console.log(donations);
        resp.json(donations);
      } catch (error) {
        resp.status(500).json({ message: error.message });
      }
  }

  export const view_user_donations = async (req, resp) => {
    console.log("in view donations user");
    try {
      const query = {...req.query};
       const userId = query.userId;
        const donations = await DonationModel.find({user_id: userId});
        console.log(donations);
        resp.json(donations);
      } catch (error) {
        resp.status(500).json({ message: error.message });
      }
  }

  export const view_user_volunteers = async (req, resp) => {
    console.log("in view volunteer user");
    try {
      const query = {...req.query};
       const userId = query.userId;
        const volunteer = await volunteerModel.find({userId: userId});
        console.log(volunteer);
        resp.json(volunteer);
      } catch (error) {
        resp.status(500).json({ message: error.message });
      }
  }

  export const getfunds = async (req, resp) => {
    console.log("in get funds");
    try {
        const funds = await fundModel.find();
        console.log(funds);
        resp.json(funds);
      } catch (error) {
        resp.status(500).json({ message: error.message });
      }
  }

  export const view_volunteers = async (req, resp) => {
    console.log("in view volunteers");
    try {
        const volunteers = await volunteerModel.find();
        console.log(volunteers);
        resp.json(volunteers);
      } catch (error) {
        resp.status(500).json({ message: error.message });
      }
  }

  
  export const contributefunds = async(body) => {
    console.log("in contribute funds");
     const fund = await fundModel.findOne({ngo: body.ngo});
     console.log(fund.ngo);
     let camt = Number(fund.current_amount) + Number(body.amount);
     console.log("the current amount " + camt);
     const raise = {
      ngo: fund.ngo,
      title: fund.title,
      description: fund.description,
      target_amount: fund.target_amount,
      current_amount: camt.toString()
    };
     const fund_update = await fundModel.findByIdAndUpdate(fund._id, raise);

     if(camt >= fund.target_amount) {
      await fundModel.findByIdAndDelete(fund._id);
     }

     return fund_update;

  }

  export const getAmounts = async(req, resp
    ) => {
    try {
      const query = {...req.query};
      const id = query.id;
      console.log(id);
      const ngo = await ngoModel.findById(id);
      const fund = await fundModel.findOne({ngo : ngo.name});
      const j = {
        target: fund.target_amount,
        current: fund.current_amount
      };
      console.log(j);
      resp.json(j);
    } catch(error) {
      console.log(error);
    }
  }

//adding Volunteering Opportunity posted by NGO into DB
export const addVolOpp = async (opp) => {
  console.log("in addvolopp")
  const newVolOpp =  new volOppModel({
    subject: opp.subject,
    timings: opp.timings,
    volunteersNeeded: opp.volunteersNeeded,
  });
  // console.log("service 1111 opp: " + opp.subject);
  // //return newVolOpp.save();
  console.log("after add");
  const savedVolOpp = await newVolOpp.save();
  console.log(savedVolOpp);
  //console.log("Volunteer opportunity saved successfully:", savedVolOpp);
  return savedVolOpp;
};

//Get all volunteer opps from the db to show users
export const getAllVolOpps = async (params) => {
  const allVolOpps = await volOppModel.find({});
  return allVolOpps;
};

//Update volunteer opportunity
export const updateVolOpps = async (id, updatedVolOpp) => {
  console.log('*********************SERVICE - ' + updatedVolOpp.volunteersNeeded);
  const volOpp = await volOppModel.findOneAndUpdate(id, updatedVolOpp);
  return volOpp;
};

export const update_donation = async(req, resp) => {
  try {
    console.log("in update donation");
    const id = req.body._id;
    console.log(id);
    const donation = await DonationModel.findByIdAndUpdate(id, req.body );
    console.log(donation);
    resp.json(donation);
  } catch(error) {
    console.log(error);
  }
}

export const delete_donation = async(req, resp) => {
  try {
    console.log("in delete donation")
    const query = {...req.query};
    const id = query.id;
    console.log(id);
    const donation = await DonationModel.findByIdAndDelete(id);
    console.log(donation);
    resp.json(donation);
  } catch(error) {
    console.log(error);
  }
 }

 export const delete_volunteer = async(req, resp) => {
  try {
    console.log("in delete volunteer")
    const query = {...req.query};
    const id = query.id;
    console.log(id);
    const donation = await volunteerModel.findByIdAndDelete(id);
    console.log(donation);
    resp.json(donation);
  } catch(error) {
    console.log(error);
  }
 }

 export const updateVolunteer = async(req, resp) => {
  try {
    console.log("in update volunteer");
    const id = req.body._id;
    console.log(id);
    const donation = await volunteerModel.findByIdAndUpdate(id, req.body );
    console.log(donation);
    resp.json(donation);
  } catch(error) {
    console.log(error);
  }
}

 
  
  export default {ngoMailSend, delete_volunteer, updateVolunteer, view_user_volunteers, addVolOpp, getAllVolOpps, updateVolOpps, addUser, loginUser, donate_item, mail, volunteering, loginNGO, find_user, find_ngo, view_donations, view_volunteers, raisefund, find_fund, getfunds, contributefunds, getAmounts, view_user_donations, update_donation, delete_donation};