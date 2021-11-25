import SideBar from './components/Sidebar.js';
import Pagetran from './components/Pagetran';
import { isMobile } from 'react-device-detect';
import { motion } from "framer-motion"
import Socials from './components/Socials.js';
import ProgressBar from "@ramonak/react-progress-bar";
import Popup from './components/Popup.js';


const Contact = (params) => {
    return (
        <div>
        <SideBar className="flex"/>
        <Pagetran classNames="bg-gray-100 h-screen" other_div={
            <div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-neo pt-12 text-5xl text-gray-800 text-center font-bold">contact me</h1>
                    <span className="mt-2 px-14 text-center text-base italic font-mono">for some reason</span>
                </div>
                <div className="mt-40 px-10">
                    <form
                    className="flex flex-col items-start" 
                    action="">
                        <div className="my-2">
                            <label className="mr-4">name: <input type="text" name="name"/></label>
                            <label className="">email: <input type="text" name="email"/></label>
                        </div>
                        <label className="my-2">message: 
                        <input 
                        className="w-96"
                        type="text" name="message"/></label>
                        <input 
                        className="mt-8 py-2 px-4 rounded-md bg-blue-300 text-white hover:bg-blue-400"
                        type="submit" value="send"/>
                    </form>
                </div>
            </div>
            }/>
        </div>
    );
}
export default Contact