import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'coupleflix',
    title: 'CoupleFlix',
    subtitle: 'Synchronized Cinema for Distant Hearts',
    category: ['ENTERTAINMENT', 'REAL-TIME', 'WEBRTC'],
    description: 'A synchronized watch-together platform designed to make watching movies together feel effortless, with sub-50ms audio/video sync and dynamic live reaction rooms.',
    longDescription: 'CoupleFlix eliminates the friction of long-distance movie nights. Built with peer-to-peer WebRTC data channels and a resilient WebSocket signaling server, it guarantees sub-second timeline synchronization, shared reaction emojis, synchronized pause/play/scrub states, and ultra-low-latency voice chat.',
    tags: ['WebRTC', 'React', 'Node.js', 'Socket.IO', 'TailwindCSS'],
    accentColor: '#FF4FA3',
    bgColor: '#FFF0F7',
    stats: [
      { label: 'Sync Latency', value: '< 45ms' },
      { label: 'Session Length', value: 'Avg 2.4 hrs' },
      { label: 'P2P Stream Quality', value: '1080p 60fps' }
    ],
    features: [
      'Sub-50ms synchronized video playback control across continents',
      'Integrated floating voice & video bubbles with spatial audio',
      'Interactive timestamped floating reactions and synchronized audio memes',
      'Adaptive bitrate streaming for high-quality playback on weak mobile connections'
    ],
    techStack: ['WebRTC Mesh', 'TypeScript', 'Node.js', 'Redis Pub/Sub', 'TailwindCSS', 'Web Audio API'],
    status: 'Live & Open Beta',
    type: 'entertainment',
    icon: 'film',
    image: './assets/project/coupleflix.png?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://coupleflix.in',
    url: 'https://coupleflix.in'
  },
  {
    id: 'secureauth',
    title: 'SecureAuth',
    subtitle: 'Zero-Trust Authentication & Identity Vault',
    category: ['SECURITY', 'AUTHENTICATION', 'TOTP'],
    description: 'A modern authentication and security experience built for simplicity, biometric Passkeys, multi-tenant RBAC, and instant zero-knowledge TOTP generation.',
    longDescription: 'SecureAuth brings consumer-grade elegance to enterprise security. It features hardware-backed WebAuthn (Touch ID, Face ID, YubiKey), hardware-level encryption keys, rapid token rotations, and a customizable embedded SDK that developers can integrate in under 10 lines of code.',
    tags: ['WebAuthn', 'Passkeys', 'TypeScript', 'PostgreSQL', 'Cryptography'],
    accentColor: '#00C2FF',
    bgColor: '#E6F9FF',
    stats: [
      { label: 'Auth Handshake', value: '< 120ms' },
      { label: 'Security Standard', value: 'FIPS 140-3' },
      { label: 'SDK Footprint', value: '4.2 kB gzipped' }
    ],
    features: [
      'Passwordless WebAuthn & biometric Passkey credential management',
      'Encrypted TOTP vault with cloud backup and QR provisioning',
      'Real-time anomaly & impossible travel risk engine with GeoIP telemetry',
      'Drop-in React & Vue authentication modal with customizable brand themes'
    ],
    techStack: ['WebAuthn', 'Argon2id', 'PostgreSQL', 'Node.js Express', 'TypeScript', 'Docker'],
    status: 'Production Ready',
    type: 'security',
    icon: 'shield-check',
    image: './assets/project/secureauth.png?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://secureauth.govt.hu',
    url: 'https://secureauth.govt.hu'
  },
  /*{
    id: 'phantomgram',
    title: 'PhantomGram',
    subtitle: 'High-Throughput Social Automation & Content Engine',
    category: ['SOCIAL', 'AUTOMATION', 'SYSTEMS'],
    description: 'An asynchronous social publishing and audience engagement pipeline engineered for creators, distributing rich media across multi-platform networks in real time.',
    longDescription: 'PhantomGram automates multi-channel social synchronization with intelligent content formatting, queueing, webhooks, and real-time engagement telemetry. Handles scheduled video slicing, automated caption transcription, and distributed queue rate limits without hitting API quotas.',
    tags: ['BullMQ', 'Redis', 'Node.js', 'FFmpeg', 'Next.js'],
    accentColor: '#5B4BFF',
    bgColor: '#F0EEFF',
    stats: [
      { label: 'Queue Throughput', value: '15k jobs/min' },
      { label: 'Video Processing', value: '3.2x Realtime' },
      { label: 'Uptime Score', value: '99.98%' }
    ],
    features: [
      'Multi-platform scheduled publishing with smart queue retry backoff',
      'Serverless FFmpeg video resizing, watermarking, and dynamic captioning',
      'Real-time webhook listener with instant event dispatching',
      'Deep engagement analytics dashboard with predictive trend heatmaps'
    ],
    techStack: ['Node.js', 'BullMQ', 'Redis', 'FFmpeg WASM', 'TailwindCSS', 'PostgreSQL'],
    status: 'Active Deployment',
    type: 'social',
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://coupleflix.in',
    url: 'https://coupleflix.in'
  },
  {
    id: 'notendo',
    title: 'NoteNDo',
    subtitle: 'Spatial Thinking & Dynamic Action Studio',
    category: ['PRODUCTIVITY', 'WEB APP', 'COLLABORATION'],
    description: 'A modern notes and spatial productivity canvas combining markdown documentation, interactive kanban cards, time-blocking calendars, and offline-first CRDT sync.',
    longDescription: 'NoteNDo reimagines how individuals and product squads brainstorm, plan, and execute. Featuring bi-directional note linking (wikilinks), graph visualization, natural language task scheduling, and sub-10ms local SQLite WASM caching synced via Conflict-free Replicated Data Types (CRDTs).',
    tags: ['CRDTs', 'IndexedDB', 'React', 'TailwindCSS', 'Canvas'],
    accentColor: '#FF7043',
    bgColor: '#FFF3EE',
    stats: [
      { label: 'Sync Resolution', value: 'Zero-Conflict' },
      { label: 'Local Cold Boot', value: '< 80ms' },
      { label: 'Keyboard Shortcuts', value: '60+ Bindings' }
    ],
    features: [
      'Bi-directional graph view connecting linked ideas and meeting notes',
      'Offline-first architecture with instant sync upon network reconnect',
      'Markdown + WYSIWYG hybrid editor with Slash commands & code snippets',
      'Integrated natural language task parsing with calendar auto-scheduling'
    ],
    techStack: ['React', 'Yjs CRDT', 'TypeScript', 'Web Workers', 'TailwindCSS'],
    status: 'Live Release',
    type: 'productivity',
    icon: 'layout',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://excalidraw.com',
    url: 'https://excalidraw.com'
  },
  {
    id: 'textsnap',
    title: 'TextSnap',
    subtitle: 'Lightning Developer Snippet & API Playground',
    category: ['DEVELOPER TOOLS', 'UTILITIES', 'PERFORMANCE'],
    description: 'A zero-friction, ultra-fast code snippet sharing, syntax highlighting, and live REST/WebSocket API inspector with instant shareable links.',
    longDescription: 'TextSnap gives developers a lightweight, beautiful alternative for sharing code samples, diffs, terminal outputs, and testing API endpoints. Instant URL sharing with client-side gzip compression in hash fragments for 100% ephemeral privacy when desired.',
    tags: ['WebAssembly', 'Monaco Editor', 'Cloudflare Workers', 'Edge'],
    accentColor: '#55D88A',
    bgColor: '#EEFBF3',
    stats: [
      { label: 'Link Generation', value: 'Instant / Hash' },
      { label: 'Supported Grammars', value: '140+ Langs' },
      { label: 'Edge Latency', value: '18ms Global' }
    ],
    features: [
      'Syntax highlighting with semantic token diffing and carbon-style themes',
      'Integrated cURL / Fetch command generator and live response tester',
      'Ephemeral zero-database URLs using URL fragment decompression',
      'Export to high-res SVG, PNG, or embeddable iframe widgets'
    ],
    techStack: ['Cloudflare Workers', 'Shiki', 'React', 'TypeScript', 'TailwindCSS'],
    status: 'Live Utility',
    type: 'developer',
    icon: 'terminal',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://carbon.now.sh',
    url: 'https://carbon.now.sh'
  },
  {
    id: 'orbitpulse',
    title: 'OrbitPulse',
    subtitle: 'Real-Time Distributed Telemetry & Infrastructure Monitor',
    category: ['DEVELOPER TOOLS', 'MONITORING', 'DISTRIBUTED'],
    description: 'High-throughput edge observability dashboard monitoring microservices, WebSocket uptime, and serverless compute metrics with instant anomaly detection.',
    longDescription: 'OrbitPulse aggregates distributed log streams and API latency times across worldwide edge nodes. Built on top of ClickHouse and eBPF network telemetry, it delivers sub-second metric querying, alerting pipelines, and dynamic incident drill-downs without degrading host system throughput.',
    tags: ['ClickHouse', 'TypeScript', 'WebSockets', 'TailwindCSS', 'eBPF'],
    accentColor: '#00C2FF',
    bgColor: '#E6F9FF',
    stats: [
      { label: 'Event Ingestion', value: '50k eps' },
      { label: 'Query Latency', value: '< 15ms' },
      { label: 'Alert Dispatch', value: '< 500ms' }
    ],
    features: [
      'Sub-second telemetry aggregation with interactive flamegraphs and latency heatmaps',
      'Anomaly detection engine analyzing traffic spikes and 5xx error cascades',
      'Configurable multi-channel webhook alerts for Slack, Discord, and PagerDuty',
      'Zero-agent eBPF network probe integration for lightweight container observability'
    ],
    techStack: ['Go', 'ClickHouse', 'React', 'TypeScript', 'TailwindCSS', 'WebSockets'],
    status: 'Production Ready',
    type: 'developer',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://grafana.com',
    url: 'https://grafana.com'
  },
  {
    id: 'syncdocs',
    title: 'SyncDocs',
    subtitle: 'Multiplayer Technical Documentation Engine',
    category: ['PRODUCTIVITY', 'COLLABORATION', 'ENGINEERING'],
    description: 'Collaborative real-time documentation workspace designed for engineering teams with live multiplayer cursor presence, git branch synchronization, and auto-generated API docs.',
    longDescription: 'SyncDocs unifies engineering API specifications with human-written documentation. Featuring live bidirectional syncing with GitHub repositories, OpenAPI spec parsing, interactive code execution playgrounds, and instant markdown versioning.',
    tags: ['Next.js', 'OpenAPI', 'Yjs', 'Monaco', 'TailwindCSS'],
    accentColor: '#FFD84D',
    bgColor: '#FFFDF0',
    stats: [
      { label: 'Multiplayer Latency', value: '< 25ms' },
      { label: 'Git Sync Speed', value: 'Realtime Webhooks' },
      { label: 'Export Support', value: 'MDX, PDF, HTML' }
    ],
    features: [
      'Real-time multiplayer editing with color-coded author presence and cursor tags',
      'Bi-directional git sync pulling OpenAPI and Markdown changes automatically',
      'Interactive request runner embedded inside generated API endpoint references',
      'Search index powered by client-side WebAssembly vector embeddings'
    ],
    techStack: ['React', 'Yjs CRDT', 'TypeScript', 'Node.js', 'TailwindCSS'],
    status: 'Live & In Use',
    type: 'productivity',
    icon: 'layout',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://excalidraw.com',
    url: 'https://excalidraw.com'
  },
  {
    id: 'hypervault',
    title: 'HyperVault',
    subtitle: 'Zero-Knowledge Cryptographic Secret Store',
    category: ['SECURITY', 'ENCRYPTION', 'KEY MANAGEMENT'],
    description: 'Client-side encrypted key-value vault and environment variable manager with automatic rotation, biometric approval, and ephemeral access grants.',
    longDescription: 'HyperVault guarantees that private keys and production environment variables are never transmitted in plaintext. Using AES-256-GCM and zero-knowledge client decryption, teams can safely share API secrets, manage staging credentials, and audit access logs.',
    tags: ['AES-256', 'WebCrypto', 'TypeScript', 'Zero-Knowledge', 'Audit'],
    accentColor: '#FF4FA3',
    bgColor: '#FFF0F7',
    stats: [
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Key Derivation', value: 'PBKDF2 / Argon2id' },
      { label: 'Access Audit', value: 'Immutable Logs' }
    ],
    features: [
      'Zero-knowledge encryption architecture ensuring server never sees plaintext keys',
      'CLI tool for instant injection of production secrets into local environment variables',
      'Multi-party time-boxed approval workflows for production credential access',
      'Cryptographic tamper-evident audit logs with cryptographic hash chaining'
    ],
    techStack: ['TypeScript', 'WebCrypto API', 'React', 'PostgreSQL', 'TailwindCSS'],
    status: 'Production Ready',
    type: 'security',
    icon: 'shield-check',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://webauthn.me/debugger',
    url: 'https://webauthn.me'
  }*/
];
