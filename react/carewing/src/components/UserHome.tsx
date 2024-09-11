import { red } from "@mui/material/colors";
import './UserHome.css'
import myimage from './wings.jpeg'
import Background from "./Background";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Nav from "./Nav";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from "@mui/material/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LanguageIcon from '@mui/icons-material/Language';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';



export default function UserHome() {
    return (

    <>
    <Nav></Nav>
    
    {/* <header className="header">
        <a href="#" className="logo">Developer</a>
        <nav className="nav-items">
             <a href="#">Home</a>
             <a href="#">About</a>
             <a href="#">Contact</a>
        </nav>
    </header> */}



    

    <main>
        <div className="intro">
             <h1>WELCOME TO CAREWING </h1>
             <p>THANK YOU FOR YOUR WINGS, THAT FLY FOR CARE!</p>
             <Button
            className="my-donation"
            variant="text"
            href="#home-1"
            sx={{
              height: "50px",
              width: "200px",
              bgcolor: "lightgrey",
              color: "navy",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            LEARN MORE
          </Button>
        </div>
        <div className="achievements" id="home-1">
            <div className="work">
                <FavoriteBorderIcon sx={{ fontSize: 60 }} ></FavoriteBorderIcon>
                <p className="work-heading"><strong>Bridging Compassion</strong></p>
                <p className="work-text"> At Care Wing, we believe in the power of connection to foster change and uplift communities. As a non-profit organization dedicated to social welfare, we serve as the vital link between non-governmental organizations (NGOs) and the public. Our mission is to illuminate the essential work of NGOs and mobilize community support to meet pressing needs.</p>
            </div>
            <div className="work">
                <LanguageIcon sx={{ fontSize: 60 }} ></LanguageIcon>
                <p className="work-heading"><strong>Our Mission</strong></p>
                <p className="work-text">Our mission is to enhance the visibility of NGOs and to articulate their significant impact on society. We understand that awareness is the first step towards action. By informing the public about the critical needs and ongoing projects of various NGOs, we enable individuals and groups to make informed decisions about where and how to contribute their time, resources, and energy.</p>
            </div>
             <div className="work">
                <AutoGraphIcon sx={{ fontSize: 60 }} ></AutoGraphIcon>
                <p className="work-heading"><strong>Our Vision</strong></p>
                <p className="work-text">We envision a world where every NGO has the support it needs to achieve its goals and where community involvement and cooperation are commonplace. Through our efforts, we aim to create a more informed and engaged public, ready to act and support the causes that resonate with their values.</p>
             </div>
        </div>
        <div className="about-me">
            <div className="about-me-text">
                <h2>Join Us</h2>
                <p>Your involvement could transform lives. Explore our website to learn more about the NGOs we partner with, the projects that need your help, and how you can get involved. Together, we can bridge gaps, build communities, and bring about lasting change.</p>      
            </div>
    
            <img src="https://www.hhsi.us/wp-content/uploads/2019/03/Pediatrics-masthead-4.jpg"/>
        </div>
         
    </main>

    <footer className="footer">
        <div className="copy">&copy; Care Wing</div>
        <div className="links">
            <span>Get in Touch</span>
            <a href="#">Email :  carewinghelp@gmail.com</a>
            <a href="#">Phone : (857)-398-3330</a>
            <a href="#">Land Line : 6752357823</a>
        </div>
        <div className="links">
            <span>Social Links</span>
            <a href="https://www.facebook.com/login.php/"><FacebookIcon /></a>
            <a href="https://twitter.com/i/flow/login"><TwitterIcon /></a>
            <a href="https://www.instagram.com/"><InstagramIcon /></a>
        </div>
    </footer>

    
   
    </>

    )
}
