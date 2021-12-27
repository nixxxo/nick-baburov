// Functional
import SideBar from './components/Sidebar.js';
import Pagetran from './components/Pagetran';
import { isMobile } from 'react-device-detect';
import { motion } from "framer-motion"
import Socials from './components/Socials.js';
import ProgressBar from "@ramonak/react-progress-bar";
import Popup from './components/Popup.js';


// Images
import portrait from './assets/portrait.png'
import boat_portrait from './assets/boat-portrait.jpg'
// import work_portrait from './assets/proof-of-work.jpeg'

// const portraitFormat = "block w-max h-4/6 mr-4 border-8 border-white rounded-sm"

// let animationVar = isMobile === true ? -550 : -100

const h2Format = "font-neo transition underline mb-3 text-2xl md:text-3xl text-blue-700 hover:text-blue-900 font-semibold"
const h4Format = "font-neo transition text-xl mb-2 md:text-2xl text-blue-400 hover:text-blue-600 font-medium"
const pFormat = "transition font-roboto leading-4 text-sm md:text-base text-gray-700 font-light"
const skillsFormat = "mb-1 bg-white hover:bg-blue-200 p-1 hover:p-10 rounded-md"
const refFormat = "flex flex-col pt-16 px-2 justify-end text-white bg-cover rounded lg:rounded-lg"

const About = () => {
    return (
        <div>
            <SideBar className="flex"/>
            <Pagetran classNames="bg-gray-100 h-full" other_div={
                
                <div> 
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-neo pt-12 text-5xl text-gray-800 text-center font-bold">
                            nick baburov
                        </h1>
                        <p className="mt-4 px-14 text-center text-base italic font-mono">
                            A kid who grew up knowing nothing, wanting to learn everything.
                        </p>
                        <Socials/>
                        {/* <motion.div
                        animate={{x:[0,animationVar]}} 
                        transition={{ 
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 10,
                            ease:"linear" }}
                        className="flex flex-row mt-10 h-96">
                            <img src={boat_portrait} alt="boat_portrait" className={portraitFormat}/>
                            <img src={portrait} alt="portrait" className={portraitFormat}/>
                            <img src={work_portrait} alt="work_portrait" className={portraitFormat}/>
                        </motion.div> */}
                    </div>
                    <div className="my-10 w-9/12 md:w-1/2 m-auto">
                        <h2 className="transition text-center underline mb-3 text-2xl md:text-3xl text-blue-700 hover:text-blue-900 font-semibold">about me</h2>
                        <p className={pFormat}>A teen, a minimalist, a computer-geek pushing his limits everyday, working towards his financial freedom. </p>
                        <p className="transition mt-2 italic p-4 border-l-2 border-gray-300 hover:border-gray-900 leading-3 text-sm md:text-base text-gray-700 font-serif font-light">"There isn't anything I cannot learn, there isn't anything I cannot try. Setting new boundaries for the word <i>impossible</i> from my birth."</p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 w-9/12 lg:w-8/12 m-auto gap-6">
                        <div className="col-span-1">
                            {/* <img className="transition bg-white hover:bg-blue-200 w-full p-2 hover:p-10 rounded-sm" src={} alt="portrait"/> */}
                            <div>
                            <h2 className={h2Format}>skills</h2>
                            <div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={100} customLabel="Windows" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={80} customLabel="Linux" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={90} customLabel="Python" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={78} customLabel="JavaScript" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={58} customLabel="SQL" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={100} customLabel="HTML" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={80} customLabel="CSS" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={62} customLabel="Flutter" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={70} customLabel="React" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={50} customLabel="PHP" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={40} customLabel="C#" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={67} customLabel="Adobe" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={88} customLabel="Office Suite" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={100} customLabel="English" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={75} customLabel="German" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                                <div className={skillsFormat}>
                                    <ProgressBar completed={80} customLabel="Russian" height="1.5rem" borderRadius="5px" labelAlignment="left" bgColor='#8ab9ff'/>
                                </div>
                            </div>
                            </div>
                            <div>
                                <h2 className={h2Format}>achievements</h2>
                                <ul className={pFormat}>
                                    <li>2021 · English C2 Proficiency</li>
                                    <li>2017 · Represntative at "European Night of Scientists"</li>
                                    <li>2015 · Won Coca-Cola Soccer Cup</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-2 px-0 md:px-4'>
                            
                            <div className="mb-6">
                                <h2 className={h2Format}>expirience</h2>
                                <ul>
                                    <li className="mb-2">
                                        <h4 className={h4Format}>Asset Entities · 2021 - now</h4>
                                        <p className={pFormat}>Fullstack developer for <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://assetentities.com/">Asset Entities </a> - in charge of building and managing website, discord bots, user expirience, unpublished app, user data collection, data managment, as well as mentoring and being in charge of other supporting developers.</p>
                                    </li>
                                    <li className="mb-2">
                                        <h4 className={h4Format}>CEZ · Summer 2021</h4>
                                        <p className={pFormat}>Paid internship at <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://www.cez.bg/">CEZ </a>
                                        - one of the biggest conglomerates in Europe, with its core business in the generation, distribution, trade in, and sales of electricity and heat, trade in and sales of natural gas, and coal extraction.</p>
                                    </li>
                                    <li className="mb-2">
                                        <h4 className={h4Format}><a className="text-blue-400 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://pressstart.bg/">PressStart</a> · 2017 - 2019</h4>
                                        <p className={pFormat}>Internship - helping the organisation and managing of gaming events with famous YouTubers, work with which I was later recommended to <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://www.youtube.com/c/TheClashers"> The Clashers</a> and worked for him at Comic Con 2018.</p>
                                    </li>
                                    <li className="mb-2">
                                        <h4 className={h4Format}>Voluntary Work · 2017 - 2020</h4>
                                        <p className={pFormat}>Helped, managed or build websites for 
                                        <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://tvbulgare.bg/"> TV Bulgare</a>, <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://globaldentalclinic.bg/">Global Dental Clinic</a>, <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://rayuvtsistars.com/">Stars under the Stars</a>, <a className="text-blue-300 hover:text-blue-600" rel="noreferrer" target="_blank" href="http://nakbg.com/">NAK</a> and that is just the peek of iceberg.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <h2 className={h2Format}>entrepreneurship</h2>
                                <ul>
                                    <li className="mb-2">
                                        <h4 className={h4Format}><a className="text-blue-400 hover:text-blue-600" rel="noreferrer" target="_blank" href="https://www.minimalistset.com/">The Minimalist Set</a> · 2021 - now</h4>
                                        <p className={pFormat}>Dropshipping store connected with favourite theme of mine - Minimalism.</p>
                                    </li>
                                    {/* <li className="mb-2">
                                        <h4 className={h4Format}>Common Your Sense · 2020 - now</h4>
                                        <p className={pFormat}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit necessitatibus ducimus itaque accusamus autem error molestias repudiandae perferendis placeat consequatur.</p>
                                    </li> */}
                                    <li className="mb-2">
                                        <h4 className={h4Format}><a className="text-blue-400 hover:text-blue-600" rel="noreferrer" target="_blank" href="http://championofchampions.eu/">Champion Of Champions</a> · 2015 - now</h4>
                                        <p className={pFormat}>Founding and continuing to develop children's sport from 2015. Originally founded by my dad, who brought me in the organisation of such huge events (~2000 people). Covering the financial part, technical calcualtions, time managment and social media manegment.</p>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="mb-6">
                                <h2 className={h2Format}>referees</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex flex-col pt-16 px-2 justify-end text-white bg-cover rounded lg:rounded-lg bg-igrachi">
                                            <h2>Igrachi FC</h2>
                                            <Popup classNames="text-gray-50"/>
                                        </div>
                                        <div className="flex flex-col pt-16 px-2 justify-end text-white bg-cover rounded lg:rounded-lg bg-press-start">
                                            <h2>Press Start</h2>
                                            <Popup classNames="text-gray-50"/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className={refFormat}>
                                            <h2>CEZ</h2>
                                            <Popup classNames="text-gray-50"/>
                                        </div>
                                        <div className="flex flex-col pt-16 px-2 bg-opacity-0 justify-end text-white bg-cover rounded lg:rounded-lg bg-slavi">
                                            <h2>The Clashers</h2>
                                            <Popup classNames="text-gray-50"/>
                                        </div>
                                        <div className={refFormat}>
                                            <h2>Eli Stefanova</h2>
                                            <Popup classNames="text-gray-50"/>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            }/>
        </div>
    );
}

export default About