import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Understand',
    description: 'We dig into the fundamental problem: user needs, constraints, technical feasibility, and the core why behind the concept.',
    color: '#5B4BFF',
    accent: '#F0EEFF',
    keyAction: 'Problem framing & architecture scoping',
    iconType: 'search'
  },
  {
    number: '02',
    title: 'Design & Wireframe',
    description: 'We construct low and high-fidelity interaction models, crafting distinctive visual identities, design tokens, and fluid user flows.',
    color: '#FF4FA3',
    accent: '#FFF0F7',
    keyAction: 'Visual systems & ergonomic UI blueprints',
    iconType: 'pen-tool'
  },
  {
    number: '03',
    title: 'Prototype & Validate',
    description: 'We build interactive click-throughs and functional spike builds to test edge cases, real latency, and tactile micro-interactions early.',
    color: '#00C2FF',
    accent: '#E6F9FF',
    keyAction: 'Live clickable proof-of-concept testing',
    iconType: 'sparkles'
  },
  {
    number: '04',
    title: 'Build & Engineer',
    description: 'We write clean, modular, type-safe TypeScript code with rigorous automated tests, optimized database queries, and modular services.',
    color: '#FFD84D',
    accent: '#FFFBEA',
    keyAction: 'High-velocity, resilient product engineering',
    iconType: 'code'
  },
  {
    number: '05',
    title: 'Ship & Orbit',
    description: 'We deploy to global edge infrastructure with automated CI/CD pipelines, real-time observability, and ongoing performance refinement.',
    color: '#55D88A',
    accent: '#EEFBF3',
    keyAction: 'Global edge deployment & production monitoring',
    iconType: 'rocket'
  }
];

export const VALUE_PILLARS = [
  {
    title: 'Think deeply',
    subtitle: 'Intentional Foundations',
    description: 'We care about why something should exist before deciding how to build it. Thoughtful questions save weeks of wasted code.',
    accentColor: '#5B4BFF',
    bgLight: '#F0EEFF',
    tag: 'STRATEGY'
  },
  {
    title: 'Build carefully',
    subtitle: 'Crafted Architecture',
    description: 'Clean architecture, strict type contracts, and thoughtful engineering matter. Fast code that breaks is not fast.',
    accentColor: '#00C2FF',
    bgLight: '#E6F9FF',
    tag: 'ENGINEERING'
  },
  {
    title: 'Move quickly',
    subtitle: 'Iterative Momentum',
    description: 'Prototype fast, learn fast, and improve continuously. We turn abstract ideas into testable software in record time.',
    accentColor: '#FF7043',
    bgLight: '#FFF3EE',
    tag: 'VELOCITY'
  },
  {
    title: 'Stay curious',
    subtitle: 'Continuous Evolution',
    description: 'Technology changes relentlessly. Curiosity keeps us exploring new paradigms, WebAssembly, edge networks, and creative frontiers.',
    accentColor: '#FF4FA3',
    bgLight: '#FFF0F7',
    tag: 'EXPLORATION'
  }
];
