import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'; 
//link
import { Link } from 'react-scroll';

// services data

const services = [
  {
    name: 'UI Design',
    description:
      'Experience developing interfaces for devices, focusing on look and style. I have designed interfaces based on Figma prototypes, including responsive design.',
  },
  {
    name: 'UX Design',
    description:
      'I have developed projects focused on making sure that the user experience is as smooth and intuitive as possible..',
  },
  {
    name: 'Landing Page',
    description:
      'I have experience developing web pages specifically for marketing or advertising campaigns. The visitors “lands” after they click on a link in an email, Google ads, Facebook,  or similar places on the web.',
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 2 years of experience.
            </h3>
            <Link
                to='work'
                smooth={true}
                className='block'>
                <button className='btn btn-sm'>See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* service List */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20  mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight pb-4 text-justify'>
                        {description}
                      </p>
                    </div>
                  </div>
                );

              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
