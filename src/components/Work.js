import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/movies.png';
import Img2 from '../assets/taskHub.png';
import Img3 from '../assets/form.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto max-w-screen-lg'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Lastest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-4'>
                These are the last projects I have developed where you can see the experience I have. Also, this website is one of my latest developments.
              </p>
              <a href='https://github.com/ferpalacios9' className='btn btn-sm py-4'>
                View all projects
              </a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transation-all duration-500'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transation-all duration-500 z-50' >
                <a href='https://project1-movies.netlify.app/' className='text-gradient'>Digital Catalog</a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transation-all duration-700 z-50'>
                <a href='https://project1-movies.netlify.app/' className='text-3xl text-white'>Movies App</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col justify-between'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-8'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transation-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transation-all duration-500 z-50' >
                <a href='https://task-hub-khaki.vercel.app/' className='text-gradient'>Manage your project</a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transation-all duration-700 z-50'>
                <a href='https://task-hub-khaki.vercel.app/' className='text-3xl text-white'>TaskHub</a>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transation-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transation-all duration-500 z-50' >
                <a href='https://validated-form-two.vercel.app/?vercelToolbarCode=ZhH-j5xNeVjwdET' className='text-gradient'>Registration Form</a> 
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transation-all duration-700 z-50'>
                <a href='https://validated-form-two.vercel.app/?vercelToolbarCode=ZhH-j5xNeVjwdET' className='text-3xl text-white'>Pet Shop App</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;


