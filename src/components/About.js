import React from 'react';
// countup
import CountUp from 'react-countup';
// import CountUp from 'react-countup/build/CountUp';
// intersection observer hook
import { InView, useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  return <section className='section' id='about'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
            I'm a Front-end Developer with over 2 years of experience.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel accusamus in doloribus numquam id explicabo laborum et doloremque qui facere sed sapiente distinctio, alias modi natus voluptatibus culpa esse!
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={5} duration={5} /> : null} {/* CHECAR */}
              </div>
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Years of <br />
              Experience
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={5} duration={5} /> : null} {/* CHECAR!!! */}
              </div>
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Years of <br />
              Experience
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;

