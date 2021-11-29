import React, { useRef } from 'react';
import SideBar from './components/Sidebar.js';
import Pagetran from './components/Pagetran';
import { isMobile } from 'react-device-detect';
import { motion } from "framer-motion"
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import {Helmet} from "react-helmet";
import {config} from './config.js'


const Contact = (params) => {

    

    const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs.sendForm(config.EMAIL_SERVICE_ID, config.EMIAL_TEMPLATE_ID, form.current, config.USER_EMAIL_TOKEN)
        .then((result) => {
            Swal.fire({
                title:'Sent!',
                icon: 'success',
                confirmButtonText: 'Done',
                iconColor:'#93c4fd',
                confirmButtonColor:"#93c4fd"
            })
        }, (error) => {
            Swal.fire({
                title:'Error!',
                icon: 'error',
                text: error.text,
                confirmButtonText: 'Go back',
                iconColor:'#fc7115',
                confirmButtonColor:"#93c4fd"
            })
        });
    };

    return (
        <div>
            <Helmet>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Helmet>
            <SideBar className="flex"/>
            <Pagetran classNames="bg-gray-100 h-screen" other_div={
                <div className="flex flex-col bg-gray-100 items-center ">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-neo pt-12 text-5xl text-gray-800 text-center font-bold">contact me</h1>
                        <span className="mt-2 px-14 text-center text-base italic font-mono">for some reason..?</span>
                    </div>
                    <div className="mt-16 mb-8 w-9/12 max-w-screen-md mx-auto p-12 bg-gray-50 rounded-md">
                        <form
                        ref={form} method="POST" onSubmit={sendEmail}
                        className="flex flex-col items-center" >
                            <div className="my-2">
                                <InputField name="from_name" label_text="name:" type="text" placeholder="John Snow"/>
                                <InputField name="from_email" label_text="email:" type="email" placeholder="email@email.com"/>
                            </div>
                            <textarea 
                            name="message"
                            className="h-60 w-full text-sm p-1.5 m-2 ring ring-transparent rounded-md focus:outline-none focus:ring-blue-400"
                            required maxlength="650" placeholder="type your message here"></textarea>
                            <div class="g-recaptcha" data-sitekey="6LfiDWkdAAAAAMWLS7vDjZQslhtoVNDpPLaBpJ9w"></div>
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

const InputField = ({label_text, name, control, type, placeholder}) => {

    return(
    <div>
        <label
        className="transition-all duration-500 font-neo font-normal text-lg hover:text-blue-400"
        >{label_text}</label>
        <input
        control={control}
        className="text-sm p-1.5 m-2 ring ring-transparent rounded-md focus:outline-none focus:ring-blue-400"
        type={type} name={name} placeholder={placeholder} required/>
    </div>
    )

}



export default Contact