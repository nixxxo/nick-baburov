import logo from './assets/Full-Logo.png';
import './index.css';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import Pagetran from './components/Pagetran';


/*
  Todo:
  * add loading animation
*/

const CalcAge = () => {
  var dob = new Date(2004,9,5) 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return (
    <li>{Math.abs(age_dt.getUTCFullYear() - 1970)} yrs old</li>);
}

const pageTransition = (event, info) => {
  console.log("Click");
}

const Welcome = () => {
    return (
        <Pagetran classNames="bg-gray-100 flex flex-col h-screen" other_div={
          <div className="flex flex-col items-center m-auto">
            <img src={logo} className="w-2/4 md:w-2/6 mb-5 mx-auto" alt="logo" />
            <ul className="text-center text-sm sm:text-lg">
              <CalcAge/>
              <li>Fullstack Developer</li>
              <li>CyberSec Enthusiast</li>
              <li>Calisthenics Athlete</li>
              <li>Event Organizer</li>
              <li>Wide reciever</li>
              <li>Videographer</li>
              <li>Minimalist</li>
            </ul>
            <Link to="/about">
              <motion.button initial={{scale:0}} animate={{scale:1}} 
              whileHover={{scale:1.2}} onTap={pageTransition} 
              className="transition-all transform bg-gradient-to-br hover:bg-gradient-to-tl hover:from-red-500 hover:via-red-500 hover:to-red-500 from-yellow-500 via-red-500 to-pink-500 text-white mt-8 py-2 px-6 rounded-full">See More</motion.button>
            </Link>
          </div>
        }>
      </Pagetran>
    );
}



export default Welcome