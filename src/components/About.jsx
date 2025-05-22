import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I'm a full-stack developer with 4 years of experience building scalable, user-focused web applications. My core stack is Python(Django, Flask, FastAPI), JavaScript(NextJS, NodeJS), MongoDB, and PostgreSQL, but I'm comfortable moving across the stack and picking up new tools when needed. I've led projects end-to-end from architecture and infrastructure to frontend polish and backend performance and I thrive in fast-moving environments where ownership matters.
        <br/>
        Lately, I’ve been working on AI-driven systems, including leading a small team to fine-tune custom LLMs using reinforcement learning from human feedback (RLHF). I've also integrated tools like Pinecone, LangChain, and OpenAI APIs to build RAG systems and conversational interfaces across platforms like WhatsApp and Telegram.
        <br/>
        Outside of AI, I’ve built reliable APIs, implemented user management flows, handling payments with Stripe & PayPal, handled real-time features with WebSockets, and worked on multi-tenant platforms. I care about writing clean, maintainable code, and I enjoy collaborating with designers, PMs, and other engineers to ship products that actually solve problems.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
