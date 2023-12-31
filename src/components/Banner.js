import React from 'react';
// images
import Image from '../assets/profile2.jpg';
// icons 
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
//link
import { Link } from 'react-scroll';
//pdf
import pdfFile from '../assets/Resume_Fernando_Palacios.pdf'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              FERNANDO <span>PALACIOS</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am</span>
              <TypeAnimation
                sequence={[
                  'a Developer',
                  2000,
                  'an Engineer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Engineer and Front End Developer with 2 years of experience in the programming field. High skills in HTML, CSS, and JavaScript.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link
                to='contact'
                smooth={true}
                className='block'>
                <button className='btn btn-sm'>Contact me</button>
              </Link>
              <Link
                to='work'
                smooth={true}
                className='block'>
                <a href='#' className='text-gradient btn-link'>My Portfolio</a>
              </Link>
            </motion.div> {/* CHECAR */}
            {/* socials */}
            <motion.div
              variants={fadeIn('left', 0.9)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:hidden'>
              <a href='https://github.com/ferpalacios9'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/fernando-palacios-bb91b4247/'>
                <FaLinkedin />
              </a>
              <a href={pdfFile} download="cv_FernandoPalacios.pdf">
                <FaFile />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <div className='flex-col'>
            <motion.div
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView={'show'}
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[320px] mix-blend-lighten pb-7 pt-8'>
              <img style={{ borderRadius: '50%' }} src={Image} alt='' />
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.9)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[20px] gap-x-6  mx-auto lg:mx-0 justify-center hidden lg:flex flex-row'>
              {/*className='flex text-[20px] gap-x-6  mx-auto lg:mx-0 justify-center hidden'>*/}  
              <a href='https://github.com/ferpalacios9'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/fernando-palacios-bb91b4247/'>
                <FaLinkedin />
              </a>
              <a href={pdfFile} download="cv_FernandoPalacios.pdf">
                <FaFile />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Banner;
