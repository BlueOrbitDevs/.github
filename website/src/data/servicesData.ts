import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'product-strategy',
    number: '01',
    title: 'Product Strategy & Architecture',
    description: 'We help early-stage visionaries and scaling teams map user journeys, define technical requirements, and architect scalable foundations from day one.',
    deliverables: ['System Architecture Blueprints', 'Tech Stack Evaluation', 'MVP Roadmapping', 'Data Flow Modeling'],
    accentColor: '#5B4BFF',
    iconName: 'compass'
  },
  {
    id: 'ui-ux-engineering',
    number: '02',
    title: 'UI / UX Engineering & Design Systems',
    description: 'Bespoke, human-centric design languages paired with production-grade front-end components. Motion, accessibility, and playful polish built into every interaction.',
    deliverables: ['Custom Design Systems', 'Framer & Tailwind UI Kits', 'WCAG AA Accessibility', 'Micro-interactions & Physics'],
    accentColor: '#FF4FA3',
    iconName: 'palette'
  },
  {
    id: 'web-development',
    number: '03',
    title: 'Modern Web Application Development',
    description: 'Lightning-fast, highly responsive single-page and server-rendered web applications built with modern React, Next.js, and TypeScript.',
    deliverables: ['SPA / SSR Applications', 'Sub-second Page Speeds', 'State Management & Caching', 'Interactive Dashboards'],
    accentColor: '#00C2FF',
    iconName: 'code-2'
  },
  {
    id: 'backend-apis',
    number: '04',
    title: 'Backend & High-Throughput APIs',
    description: 'Rock-solid REST, GraphQL, and gRPC backends designed for extreme reliability, strict data validation, and seamless developer ergonomics.',
    deliverables: ['REST & GraphQL APIs', 'Database Optimization', 'JWT / OAuth2 / WebAuthn Auth', 'Webhook Infrastructures'],
    accentColor: '#FFD84D',
    iconName: 'server'
  },
  {
    id: 'realtime-systems',
    number: '05',
    title: 'Real-Time & Collaborative Systems',
    description: 'Low-latency multiplayer canvases, WebRTC peer audio/video channels, WebSocket event streaming, and conflict-free CRDT synchronization.',
    deliverables: ['WebSockets & Socket.IO', 'WebRTC Voice/Video Rooms', 'Multiplayer Cursor & State Sync', 'Pub/Sub Event Brokers'],
    accentColor: '#FF7043',
    iconName: 'zap'
  },
  {
    id: 'cloud-devops',
    number: '06',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Containerized deployments, automated CI/CD pipelines, edge networks, zero-downtime rollouts, and proactive observability monitoring.',
    deliverables: ['Docker & Container Orchestration', 'AWS + Multi-Cloud / Cloudflare Edge Setup', 'Automated CI/CD Workflows', 'Log Aggregation & Metrics'],
    accentColor: '#55D88A',
    iconName: 'cloud'
  },
  {
    id: 'automation-workflows',
    number: '07',
    title: 'Workflow & Process Automation',
    description: 'Distributed background job queues, webhook routers, asynchronous media processing pipelines, and data synchronization workers.',
    deliverables: ['BullMQ & Redis Queues', 'Third-Party Webhook Integrations', 'Automated PDF/Media Generators', 'Scheduled Cron Pipelines'],
    accentColor: '#7C5CFF',
    iconName: 'cpu'
  },
  {
    id: 'ai-intelligent-products',
    number: '08',
    title: 'AI & Intelligent Product Integrations',
    description: 'Pragmatic, high-value AI solutions including structured LLM pipelines, semantic vector search, intelligent agents, and automated summarization engines.',
    deliverables: ['LLM Orchestration & Prompt Chains', 'Vector Embeddings & RAG Search', 'Automated Content Categorization', 'Smart Assistant Tool Calling'],
    accentColor: '#FF4FA3',
    iconName: 'sparkles'
  }
];
