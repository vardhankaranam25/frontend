import { addUser , loginUser ,raisefund, ngo_SignUp, donate_item, volunteering, loginNGO, find_user,find_fund ,find_ngo, contributefunds, addVolOpp, getAllVolOpps, updateVolOpps} from "../service/services.js";
import session from "express-session";

//for handling all the requests coming from react

//a signup control that registers a user
export const UserSignUp = async(request, response) => {
    try {
        console.log(request.body.user_email);
        //checking if the user exists or not
        const exist = await find_user(request.body.user_email);
        
    if(exist) {
        console.log("in if " + exist);
        res.status(500).send('User exists');
        response.json("user exists");
    } else {
    console.log("in else ");
    const body = request.body;
    console.log(body);
    //registering the user
    const saveUser = await addUser(body);
    response.json(saveUser);
    }
    } catch(error) {
        response.json(error);
    }
}

//a ngo signup that handles the registering part of a ngo
export const NgoSignUp = async(request, response) => {
    try {
        console.log(request.body.ngo_email);
        //checking if the ngo exists or not
        const exist = await find_ngo(request.body.ngo_email);
    if(exist) {
        res.status(500).send('NGO exists');
        response.json("ngo exists");
    } else {   
    const body = request.body;
    console.log(body);
    //registering ngo
    const saveNgo = await ngo_SignUp(body);
    response.json(saveNgo);
    }
    } catch(error) {
        response.json(error);
    }
}
//a login authorisation method that logins a user
export const UserLogin = async(req, resp) => {
    let userId;
 try {
    const query = {...req.query};
    const username = query.username;
    const password = query.password;
    //authorising user and logging him in
    const user = await loginUser(username, password);

    if(!user) {
        resp.status(404).send('Sorry, that resource was not found.');
        return;
    }
    req.session.userId = user.id;
    console.log(req.session.userId);
     console.log(user.name);
    resp.json(user);
    
    ///console.log(`Received request for URL: ${req.originalUrl}`);
 } catch(error) {
    resp.json(error);
 }
}

//logins a ngo
export const NGOLogin = async(req, resp) => {
   let ngoId;
 try {
    const query = {...req.query};
    const username = query.username;
    const password = query.password;
    //authorising the ngo creds and logging them in
    const ngo = await loginNGO(username, password);

    if(!ngo) {
        resp.status(404).send('Sorry, that resource was not found.');
        return;
    }
     ngoId = ngo.id;
     console.log(ngo.name);
    resp.json(ngo);
    
   
 } catch(error) {
    resp.json(error);
 }
}
//a method that handles donation of user
export const DonateUser = async(req, resp) => {
    
    try {
       const query = {...req.query};
       const item = query.item;
       const userId = query.userId;
       const desc = query.desc;
       const time = query.time;
       console.log( time);
       //donating item 
       const donated = await donate_item(item, userId, desc, time);
       resp.json(donated);
    } catch(err) {
        resp.json(err);
    } 
}
//method that handles the volunteer request of user
export const VolunteerUser = async(req, resp) => {
    try {
      
      const query = {...req.query};
      const course = query.course;
      const userId = query.userId;
      const desc = query.desc;
      const hours = query.hours;
      //volunteering request saving
      const volunteered = await volunteering(userId, course, desc, hours);
      console.log(volunteered);
      resp.json(volunteered);
    } catch(err) {
        resp.json(err);
    }
}
//method that gets all the donations made by users
export const GetDonations = async(req, resp) => {
    try {
    // fetching the data
      const data = await view_donations();
      console.log(data);
      resp.json(data); 
    }catch(error) {
        resp.json(error);
    }
}
//method that raises fund for the ngos
export const RaiseFund = async (req, resp) => {
    try {
        const body = req.body;
        console.log('in raise fund controller' + req.body.target_amount);
        const exist = await find_fund(req.body.id);
        if(exist) {
            console.log("in if");
            resp.json("fund already raised")
            return;
        } else {
            console.log("in else");
            const status = await raisefund(req.body);
            console.log(status);
            resp.json("successfully raised");
        }
    } catch(error) {
        resp.json(error);
    }
}

export const ContributeFunds = async (req, resp) => {
    try {
      const payment = contributefunds(req.body);
      resp.json(payment);
    } catch(error) {
        resp.json(error);
    }
}

//adding volunteer opportunity from NGO side
export const postVolOpp = async (request, response) => {
    try{
        console.log(request.body);
        const volOpp = {...request.body};
        const saveVolOpp = await addVolOpp(volOpp);
        response.json(saveVolOpp);
    }
    catch(error){
        response.json(error);
    }
}

//get all vol opps
export const viewAllVolOpps = async (request, response) => {
    try{
        const vo = await getAllVolOpps();
        response.json(vo);
    }
    catch(error){
        response.json(error);
    }
}

//get a Vol Opp and update
export const updateVolOpp = async (request, response) => {
    try {
        const updatedVolOpp = {...request.body};
        console.log('*******************CNTRL - ' + updatedVolOpp.volunteersNeeded);
        const newVolOpp = await updateVolOpps(updatedVolOpp._id, updatedVolOpp);
        response.json(newVolOpp);
    }
    catch(error) {
        response.json(error);
    }
}



export default {UserSignUp, UserLogin, NgoSignUp, DonateUser, VolunteerUser, NGOLogin, GetDonations, ContributeFunds, postVolOpp, viewAllVolOpps, updateVolOpp};