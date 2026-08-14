import { TechNode } from '../types';

export const ORBIT_NODES: TechNode[] = [
  // Ring 1 (Inner Orbit)
  { name: 'TypeScript', category: 'frontend', color: '#00C2FF', ring: 1, angle: 0, description: 'Type-safe precision and bulletproof ergonomics across full-stack codebases.', iconType: 'typescript' },
  { name: 'React', category: 'frontend', color: '#5B4BFF', ring: 1, angle: 72, description: 'Component-driven interactive user interfaces with optimal render cycles.', iconType: 'react' },
  { name: 'Node.js', category: 'backend', color: '#55D88A', ring: 1, angle: 144, description: 'Event-driven, asynchronous JavaScript runtime for high-throughput backends.', iconType: 'node' },
  { name: 'PostgreSQL', category: 'database', color: '#FF7043', ring: 1, angle: 216, description: 'ACID-compliant relational database with powerful JSONB and indexing support.', iconType: 'database' },
  { name: 'WebRTC', category: 'realtime', color: '#FF4FA3', ring: 1, angle: 288, description: 'Ultra-low latency peer-to-peer audio, video, and bidirectional data transport.', iconType: 'webrtc' },

  // Ring 2 (Middle Orbit)
  { name: 'Next.js', category: 'frontend', color: '#17152B', ring: 2, angle: 30, description: 'Server-rendered React framework with hybrid static generation and edge middleware.', iconType: 'nextjs' },
  { name: 'Docker', category: 'infrastructure', color: '#00C2FF', ring: 2, angle: 90, description: 'Predictable containerization ensuring identical runtimes from dev to prod.', iconType: 'docker' },
  { name: 'Socket.IO', category: 'realtime', color: '#FFD84D', ring: 2, angle: 150, description: 'Bi-directional, event-based communication for real-time multiplayer states.', iconType: 'socket' },
  { name: 'Redis', category: 'database', color: '#FF4FA3', ring: 2, angle: 210, description: 'In-memory data structures, caching layers, and fast pub/sub message brokers.', iconType: 'redis' },
  { name: 'AWS', category: 'infrastructure', color: '#FF7043', ring: 2, angle: 270, description: 'Cloud compute, scalable storage, serverless lambdas, and VPC routing.', iconType: 'aws' },
  { name: 'Cloudflare', category: 'infrastructure', color: '#FFD84D', ring: 2, angle: 330, description: 'Global edge network, DDoS mitigation, DNS resolution, and Worker execution.', iconType: 'cloudflare' },

  // Ring 3 (Outer Orbit)
  { name: 'TailwindCSS', category: 'frontend', color: '#00C2FF', ring: 3, angle: 45, description: 'Utility-first CSS framework for rapid, mathematically consistent styling.', iconType: 'tailwind' },
  { name: 'MySQL', category: 'database', color: '#5B4BFF', ring: 3, angle: 135, description: 'Reliable relational storage for transactional integrity and structured queries.', iconType: 'mysql' },
  { name: 'Git & GitHub', category: 'infrastructure', color: '#55D88A', ring: 3, angle: 225, description: 'Distributed version control, collaborative code reviews, and CI automation.', iconType: 'git' },
  { name: 'Express', category: 'backend', color: '#7C5CFF', ring: 3, angle: 315, description: 'Minimalist web framework for routing, middleware pipelines, and REST APIs.', iconType: 'express' }
];

export const TECH_CATEGORIES = [
  {
    category: 'FRONTEND',
    accent: '#00C2FF',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Motion', 'Vite', 'HTML5 Canvas']
  },
  {
    category: 'BACKEND',
    accent: '#55D88A',
    technologies: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'BullMQ Queues', 'Webhooks']
  },
  {
    category: 'DATABASE',
    accent: '#FF7043',
    technologies: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite (WASM)', 'Drizzle ORM', 'Prisma']
  },
  {
    category: 'INFRASTRUCTURE',
    accent: '#FFD84D',
    technologies: ['Docker', 'AWS', 'Cloudflare Edge', 'Linux', 'Nginx', 'GitHub Actions CI/CD']
  },
  {
    category: 'REAL-TIME & SYNC',
    accent: '#FF4FA3',
    technologies: ['WebRTC Mesh', 'Socket.IO', 'WebSockets', 'Yjs CRDTs', 'Server-Sent Events']
  }
];
