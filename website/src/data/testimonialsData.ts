import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'Founder & Head of Product',
    company: 'SyncPulse Interactive',
    avatarColor: '#5B4BFF',
    review: 'BlueOrbit transformed our raw concept into a high-performance, real-time collaboration canvas. Their obsession with sub-50ms sync and playful visual polish gave us an unfair competitive edge.',
    rating: 5,
    highlight: 'Flawless Real-Time Engineering',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'AuraCloud Systems',
    avatarColor: '#00C2FF',
    review: 'Working with BlueOrbit felt like having a tier-one product lab inside our startup. The architecture is clean, the TypeScript contracts are rock-solid, and their design sensibilities are unmatched.',
    rating: 5,
    highlight: 'Enterprise-Grade Velocity'
    // Intentionally no image - tests initials avatar
  },
  {
    id: '3',
    name: 'Sophia Jin',
    role: 'Co-Founder & CTO',
    company: 'Kestrel Labs',
    avatarColor: '#FF4FA3',
    review: 'Most agencies either deliver pretty designs that fall apart at scale, or heavy backends with clunky UIs. BlueOrbit Devs is the rare team that excels in deep systems engineering AND delightful product craft.',
    rating: 5,
    highlight: 'Uncompromising Craft & Speed',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: '4',
    name: 'David Thorne',
    role: 'Principal Architect',
    company: 'Veloce Media',
    avatarColor: '#55D88A',
    review: 'They took our high-throughput video streaming ingestion pipeline and re-engineered the front-end player to feel instantaneous. Their attention to edge cases and WebRTC state machines saved us months.',
    rating: 5,
    highlight: 'Sub-Second Latency Architecture'
    // Intentionally no image - tests initials avatar
  },
  {
    id: '5',
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
    id: '6',
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
    id: '7',
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
