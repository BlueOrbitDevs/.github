import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Peyush Bansal',
    role: 'Co-Founder & CEO',
    company: 'Lenskart',
    avatarColor: '#5B4BFF',
    review: 'The team turned our vision into a seamless digital experience with impressive attention to detail. The execution was fast, polished, and built to scale.',
    rating: 5,
    highlight: 'Exceptional Product Execution',
    image: './assets/testimonial/photo-4625788741775-53994a69daeb.png?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Inderjit Camotra',
    role: 'MD & CEO',
    company: 'Unity Small Finance Bank',
    avatarColor: '#00C2FF',
    review: 'The new banking experience feels clean, intuitive, and genuinely modern. Every interaction is thoughtfully designed, making the platform easier and more enjoyable for customers to navigate.',
    rating: 5,
    highlight: 'Modern Banking Experience',
    image: './assets/testimonial/photo-6245921562775-5399h4atdaeb.png?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: '3',
    name: 'Anil Nagar',
    role: 'Founder & CEO',
    company: 'Adda247',
    avatarColor: '#FF4FA3',
    review: 'Clean design, smoother navigation, and a noticeably better learner journey. Every detail feels purposeful and built around the user.',
    rating: 5,
    highlight: 'Smooth & Engaging UX',
    image: './assets/testimonial/photo-1580489944761-15a19d654956.png?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: '4',
    name: 'Amara Chen',
    role: 'Product Design Director',
    company: 'LatticeFlow Analytics',
    avatarColor: '#FFD84D',
    review: 'The interactive micro-interactions and smooth layout transitions they engineered brought our complex data dashboard to life. Our customers constantly praise how fluid and responsive the UI feels.',
    rating: 5,
    highlight: 'World-Class Micro-Interactions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: '5',
    name: 'Liam Gallagher',
    role: 'Co-Founder & CEO',
    company: 'HyperScale Networks',
    avatarColor: '#7C5CFF',
    review: 'BlueOrbit delivered our MVP two weeks ahead of schedule with 99.9% test coverage. Their transparent sprint communication and GitHub PR reviews set a new standard for development partners.',
    rating: 5,
    highlight: 'Ahead of Schedule Delivery'
    // Intentionally no image - tests initials avatar
  },
  {
    id: '6',
    name: 'Priyanka Patel',
    role: 'Head of Infrastructure',
    company: 'Nexus Robotics',
    avatarColor: '#00C2FF',
    review: 'From serverless edge workers to custom WebSocket synchronization protocols, BlueOrbit engineered an infrastructure foundation that handled our 10x traffic spike on launch day without breaking a sweat.',
    rating: 5,
    highlight: 'Rock-Solid Scalability',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=256&h=256&q=80'
  }
];
