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
//link
import { Link } from 'react-scroll';

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
            Passionate about the programming field and high problem-solving skills. In addition, I have worked
            with agile methodologies such as SCRUM and KANBAN.
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-8 mt-4'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={2} duration={10} /> : null} {/* CHECAR!!! */}
              </div>
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Years of <br />
              Experience
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <Link
              to='contact'
              smooth={true}
              className='block'>
              <button className='btn btn-lg'>Contact me</button>
            </Link>
            <Link
                to='work'
                smooth={true}
                className='block'>
                <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;

