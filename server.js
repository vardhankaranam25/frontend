import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import initializeRoutes from './app/routes/index.js';

const mongoURI = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/usersDb';
const mongoURI_Ngo = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/NgoDb';
const mongoURI_donations = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/DonationDb';
const volunteer_mongoURI = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/volunteerDb';
const fund_mongoURI = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/FundDb';
const volunteerOpps_mongoURI = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/VolunteerOpp'

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(session({
  secret: 'CareWing',  
  resave: false,              // Don't save session if unmodified
  saveUninitialized: false,   // Don't create session until something stored
  cookie: { secure: false }   
}));



export const userConnection = mongoose.createConnection(mongoURI);
export const NgoConnection = mongoose.createConnection(mongoURI_Ngo);
export const DonationConnection = mongoose.createConnection(mongoURI_donations);
export const volunteerConnection = mongoose.createConnection(volunteer_mongoURI);
export const fundConnection = mongoose.createConnection(fund_mongoURI);
export const volunteerOppsConnection = mongoose.createConnection(volunteerOpps_mongoURI);

userConnection.once('connected', () => {
    console.log('Successfully connected to  users database');
  });

  NgoConnection.once('connected', () => {
    console.log('Successfully connected to Ngo database');
  });

  DonationConnection.once('connected', () => {
    console.log('Successfully connected to Donations database');
  });

  volunteerConnection.on('connected', () => {
    console.log('Successfully connected to volunteer database');
  })

  fundConnection.on('connected', () => {
    console.log('Successfully connected to funds database');
  })

  volunteerOppsConnection.on('connected', () => {
     console.log('Successfully connected to volunteer Opps database');
  })
  

const userSchema = new mongoose.Schema({
    user_email: String,
    name: String,
    password: String,
    address: String,
    zip: String
});

export const userModel = userConnection.model('Users', userSchema);

const ngoSchema = new mongoose.Schema({
  ngo_email: String,
  name: String,
  password: String,
  address: String,
  zip: String
});

export const ngoModel = NgoConnection.model('Ngos', ngoSchema);


const DonationSchema = new mongoose.Schema({
  username: String,
  user_id : String,
  item: String,
  date: String,
  description: String,
  lifetime: String,
  user_email: String
});

export const DonationModel = DonationConnection.model('Donation', DonationSchema);


 const volunteerSchema = new mongoose.Schema ({
    username: String,
    userId: String,
    course: String,
    description: String,
    hours: String,
    userEmail : String
 });

 export const volunteerModel = volunteerConnection.model('volunteer', volunteerSchema);

const volunteerOpportunity = new mongoose.Schema({
   subject: String,
   timings: String,
   volunteersNeeded: Number
 });

export const volOppModel = volunteerOppsConnection.model('volunteerops', volunteerOpportunity);

 const fundSchema = new mongoose.Schema ({
  ngo: String,
  title: String,
  description: String,
  target_amount : String,
  current_amount: String
});

export const fundModel = fundConnection.model('fund', fundSchema);

initializeRoutes(app);






const port = 5001



//initialise(app);


app.listen(port, () => console.log(`Server running on port ${port}`));

export default{userConnection, NgoConnection,DonationConnection, volunteerConnection,
 volOppModel, volunteerModel, DonationModel ,userModel, ngoModel, session, fundModel, fundConnection};

