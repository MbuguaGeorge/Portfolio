import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  python,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'RAG Solutions Developer',
    icon: ux,
  },
  {
    title: 'LLM Integration',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Python Engineer',
    company_name: 'Turing',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2024 - May 2025',
  },
  {
    title: 'Software Developer',
    company_name: 'Crowdbotics',
    icon: microverse,
    iconBg: '#333333',
    date: 'April 2023 - March 2024',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Upwork',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2021 - April 2023',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Sonic Voice',
    description: 'A voice based search, NextJS web application that integrates the Spotify API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/MbuguaGeorge/sonic-voice',
    demo: 'https://tiny-treacle-649c98.netlify.app/login',
  },
  {
    id: 'project-2',
    name: 'Resume Tailor',
    description:
      'Tailor your resumes based on job descriptions and generate cover letters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/MbuguaGeorge/resume-tailor',
    demo: 'https://resume-tailor.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'Doc Chat',
    description: 'An innovative application that brings dynamic conversations to your PDF files.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://doc-chat-eurh.onrender.com/',
    demo: 'https://github.com/MbuguaGeorge/doc-chat',
  },
  {
    id: 'project-4',
    name: 'Chatty',
    description: `A real-time chat web application using React.js for the frontend, Node.js for the backend, and Socket.IO for seamless, bi-directional communication. Implemented user authentication and message persistence.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/MbuguaGeorge/chatapp',
    demo: 'https://george-chatapp.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
