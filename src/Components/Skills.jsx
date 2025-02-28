import React from 'react';
import {FaCss3Alt, FaFireAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';

import logoTailwind from "/image/tailwind CSS.png";
import logoDaisy from "/image/daisyUI.png";
import logoJavaScripet from "/image/JavaScript.png";
import logoMongoDb from "/image/mongoDB.png";
import logoUxUi from "/image/ux-ui.png";

const Skills = () => {
    return ( 
          <div id='skill' className="mt-8 border-1 m-1 rounded">
            <h3 className="text-4xl font-bold mb-6 underline text-center text-blue-950">Skills & Technologies</h3>
                <ul className='grid md:grid-cols-5 sm:grid-cols-3 justify-between gap-2 items-center mb-4 font-bold w-10/12 mx-auto'>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><FaHtml5 className='mx-auto size-8 rounded bg-amber-50 p-1'/></span>HTML</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><FaCss3Alt className='mx-auto size-8 rounded bg-amber-50 p-1'/></span>CSS</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><img className='mx-auto size-8 rounded' src={logoJavaScripet} alt="" /></span>JavaScript</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><FaReact className='mx-auto size-8 rounded bg-amber-50 p-1'/></span>React</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><FaNodeJs className='mx-auto size-8 rounded bg-amber-50 p-1'/></span>Node.js</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><img className='mx-auto size-8 rounded ' src={logoMongoDb} alt="" /></span>MongoDB</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><FaFireAlt className='mx-auto size-8 rounded bg-amber-50 p-1'/></span>Firebase</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><img className='mx-auto size-8 rounded' src={logoTailwind} alt="" /></span>Tailwind</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><img className='mx-auto size-8 rounded' src={logoDaisy} alt="" /></span>DaisyUI</li>
                    <li className='bg-fuchsia-600 p-2 rounded text-center'><span><img className='mx-auto size-8 rounded' src={logoUxUi} alt="" /></span>UX/UI</li>
                    
                </ul>
        </div>
    );
};

export default Skills;