// import cors from 'cors';
// import express from 'express';
// import mongoose from 'mongoose';

// import initializeRoutes from "./routes/index.js"
// //mongodb+srv://vardhan:<password>@carewingcluster.gwbe3sl.mongodb.net/?retryWrites=true&w=majority&appName=CareWingCluster
// const mongoURI = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/usersDb';
// const mongoURI_Ngo = 'mongodb+srv://vardhan:ocY9j94hndaNPaY1@carewingcluster.gwbe3sl.mongodb.net/NgoDb';
// const db = mongoose.connection;

// db.on('connected', () => {
//   console.log('Mongoose is connected to MongoDB Atlas');
// });

// const initialise = (app) => {
//    // mongoose.connect('@coursecluster.p3xgg1g.mongodb.net/notesdb?');
//      const userConnection = mongoose.createConnection(mongoURI);
//      const NgoConnection = mongoose.createConnection(mongoURI_Ngo);
//     app.use(cors());
//     app.use(express.json());
//     app.use(express.urlencoded());
//     //mongoose.connect(process.env.MONGO_CONNECTION);
//     initializeRoutes(app);
// }

// export default {initialise, userConnection, NgoConnection};