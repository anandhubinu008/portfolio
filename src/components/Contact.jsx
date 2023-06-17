import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    
    setForm({...form,[name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(

      'service_u0fjz2b',
      'template_yl86evh',
      {
        form_name: form.name,
        to_name:'Anandhu',
        from_email: form.email,
        to_email:'postboxnumber008@gmail.com',
        message:form.message,
      },
      'U1n2TD9LksnWaxJjX'
    )
    .then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.');
      setForm({
        name:'',
        email:'',
        message:''
      });
    }),
    (error) => {
      setLoading(false)
      console.error(error);
      alert('Sorry somthing went wrong.')
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left',"tween",0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input type="text"  name="name" onChange={handleChange} placeholder="Enter your name" value={form.name}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span> 
              <input type="email"  name="email" onChange={handleChange} placeholder="email" value={form.email}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span> 
              <textarea  name="message" onChange={handleChange} placeholder="What do you want to say..." value={form.message}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"/>
          </label>

          <button type='submit' className="bg-tertiary px-8 py-3 outline-none text-white font-bold shadow-primary shadow-md w-fit rounded-xl">
            {loading ? "Sending.." : "Send"}
          </button>

        </form>

      </motion.div>

      <motion.div variants={slideIn('right',"tween",0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
        
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")