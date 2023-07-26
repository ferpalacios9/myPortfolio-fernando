import React, { useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// form 
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zfrfr0h', 'template_8qa9h7g', form.current, 'i7h39JJTTSsZn7mrE')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          alert("Your message was sent");
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong");
      });
  };

  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'
        >
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch           
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          ref={form} 
          onSubmit={sendEmail}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text'
          placeholder='Your name'
          required
          name='user_name'
          />
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='email'
          placeholder='Your email'
          required
          name='user_email'
          />
          <textarea 
          className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
          placeholder='Your message'
          required
          name='message'
          ></textarea>
          <button type="submit" value="Send" id='submit' className='btn btn-lg'>
            Send message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
  )
};

export default Contact;
