import React from "react";
import SideBar from '../components/Sidebar.js';
import Pagetran from '../components/Pagetran';
import Socials from "../components/Socials";


const Heading = ({ text }) => ( 
        <h2 className="py-1 md:py-2 text-3xl lg:text-5xl font-semibold lg:font-bold">{text}</h2>
     )


function BlogPost({header, date, link_back, link_next}) {
    return ( 
    <div>
        <SideBar className="flex"/>
        <Pagetran classNames="bg-gray-100 h-full" other_div={
            <div>
                <div className="bg-white shadow-md flex flex-col justify-center items-center text-center py-6">
                    <h1 className="font-neo text-3xl sm:text-4xl m-auto text-gray-800">{header}</h1>
                    <h3 className="text-sm sm:text-lg text-gray-600">{date}</h3>
                    <Socials/>
                </div>
                <div className="max-w-screen-xl px-10 py-6 md:px-20 lg:px-40 lg:py-10 m-auto">
                    <Heading text="heading"/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eius omnis consectetur, unde dicta repudiandae distinctio maxime cupiditate, esse iure, nemo deleniti! Veniam nam dicta unde ratione quisquam porro eligendi, corrupti a officiis doloremque! Beatae, totam vel laborum accusamus nobis praesentium odio odit pariatur animi in fugiat ex recusandae atque? Dolor vero autem, ex amet perferendis reprehenderit sequi cum minus omnis tenetur consequatur sint unde tempore natus? Quo, tempore. Voluptate, placeat aliquam eveniet dolore doloribus iure animi. Modi dolorum, eligendi temporibus culpa voluptate similique non! Impedit, commodi perspiciatis voluptate consequatur autem eaque voluptates alias mollitia odio illo exercitationem tenetur cumque.</p>
                    <Heading text="heading"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolores laboriosam. Et explicabo magni possimus quae natus modi aspernatur. Saepe sapiente necessitatibus amet, quaerat eius natus quos ea modi qui quas repellendus, officiis quasi, nam fugiat magnam tempora earum hic a voluptatem repellat fugit magni id tempore eos. Aspernatur delectus et magnam amet distinctio! Quis impedit, laborum voluptates optio soluta sunt alias earum placeat odio sequi, ullam tempora cum, explicabo esse blanditiis. Ullam provident suscipit quia, excepturi ratione, doloremque dicta odit nihil veniam pariatur cum sunt ut deleniti est, doloribus iusto eos consectetur quasi! Quam, laudantium. Expedita harum, perferendis itaque illo facilis ullam ipsum nostrum commodi temporibus officia, rem totam eos mollitia debitis, neque maxime magnam esse. Dolores dolorem saepe, eum inventore natus ipsam libero commodi earum non quasi maxime at eligendi odit explicabo quos amet sequi eaque. Reprehenderit illum cupiditate assumenda quaerat possimus soluta eaque aspernatur officiis animi natus.</p>
                    <Heading text="heading"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id harum earum sed iste facilis delectus quas nostrum eos, sint similique explicabo! Officiis veritatis laudantium cupiditate similique labore nostrum eaque nisi perspiciatis voluptas quisquam harum, soluta est reprehenderit pariatur minus quae ut quod illum quia! Repellendus ipsam fugit facilis rem explicabo soluta voluptate totam nemo. Ipsam ut natus fugiat soluta provident voluptatem doloremque incidunt mollitia, voluptas magnam rem autem optio suscipit ipsum hic sunt placeat distinctio minus accusamus quas. Aliquid corrupti modi placeat maiores nulla magni fugit ex, aliquam excepturi, aut ut explicabo nisi, blanditiis amet earum illum cupiditate labore? Fugit, hic optio ratione fuga repudiandae cumque, perferendis placeat totam aut labore earum facilis eaque distinctio voluptas quibusdam nobis qui neque explicabo rem deleniti repellendus quam quo repellat? Repellendus laborum quia fugit? Eos dolor maxime illum doloremque, molestias blanditiis? Nisi, laborum.</p>
                    <div className="mt-10 flex justify-between">
                        <button className="transition-all py-2 px-3 border-2 border-gray-600 hover:bg-gray-600 rounded hover:text-white"><a href={link_back}>← Previous</a></button>
                        <button className="transition-all py-2 px-3 border-2 border-blue-600 hover:bg-blue-600 rounded hover:text-white"><a href={link_next}>Next →</a></button>
                    </div>
                </div>
            </div>
        }/>
    </div> 
    );
}

export default BlogPost;