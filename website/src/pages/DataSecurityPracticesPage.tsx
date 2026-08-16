import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FloatingObject } from '../components/FloatingDecorations';
import { WaveDivider } from '../components/WaveDivider';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ArrowLeft, 
  Calendar,
  AlertTriangle,
  Award,
  Layers,
  Database,
  Cloud,
  FileCheck2,
  RefreshCw
} from 'lucide-react';

export const DataSecurityPracticesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: '1. Security Philosophy & Architecture' },
    { id: 'compliance', title: '2. Compliance & Certifications' },
    { id: 'cloud', title: '3. Cloud & Infrastructure Defense' },
    { id: 'encryption', title: '4. Encryption & Cryptography' },
    { id: 'access', title: '5. Identity & Access Controls (IAM)' },
    { id: 'ssdlc', title: '6. Secure Software Development (SSDLC)' },
    { id: 'vulnerability', title: '7. Vulnerability Management & Audits' },
    { id: 'incident', title: '8. Incident Response & Continuity' },
    { id: 'reporting', title: '9. Vulnerability Disclosure' },
  ];

  const scrollToSectionId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7FF] text-[#17152B] selection:bg-[#FF4FA3] selection:text-white pt-24 sm:pt-28 pb-20 relative overflow-hidden">
      {/* Background Floating Objects */}
      <FloatingObject type="sparkle" top="10%" left="5%" color="#00C2FF" animation="slow" />
      <FloatingObject type="code-tag" top="18%" right="6%" color="#55D88A" animation="medium" />
      <FloatingObject type="planet" bottom="20%" left="4%" color="#FFD84D" animation="slow" />
      <FloatingObject type="curly" bottom="15%" right="5%" color="#FF4FA3" animation="reverse" />

      {/* Hero Header Section */}
      <div className="bg-[#151326] text-white pt-12 sm:pt-16 pb-20 sm:pb-24 relative overflow-hidden">
        {/* Subtle grid and glowing orb */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#5B4BFF]/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#00C2FF]/20 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Studio Home</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#55D88A] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#55D88A]" />
                <span>ENTERPRISE SECURITY POSTURE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Data Security Practices
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/90 font-medium max-w-2xl leading-relaxed">
                Institutional-grade security protocols, encryption benchmarks, and infrastructure safeguards engineered into every product we build.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-xs sm:text-sm font-mono font-bold text-white shrink-0 self-start md:self-auto">
              <Calendar className="w-4 h-4 text-[#FFD84D]" />
              <span>Audited: August 2026</span>
            </div>
          </div>

          {/* Badges showcase row in header */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="text-xs font-mono uppercase tracking-wider text-white/60 font-bold w-full sm:w-auto">
              Verified Compliance & Accreditations:
            </span>
            <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap">
              <div className="bg-white/10 p-2 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm transition-transform hover:scale-105" title="AICPA SOC">
                <img
                  src="./assets/badge/SOS.svg"
                  alt="AICPA SOC"
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs sm:text-sm font-extrabold text-white hidden sm:inline">AICPA SOC</span>
              </div>
              <div className="bg-white/10 p-2 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm transition-transform hover:scale-105" title="MSME Registered">
                <img
                  src="./assets/badge/MSME.webp"
                  alt="MSME Registered"
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs sm:text-sm font-extrabold text-white hidden sm:inline">MSME Registered</span>
              </div>
              <div className="bg-white/10 p-2 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm transition-transform hover:scale-105" title="Cybersecurity Excellence 2026">
                <img
                  src="./assets/badge/CYBERSECURITY_2026.webp"
                  alt="Cybersecurity Excellence Awards"
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs sm:text-sm font-extrabold text-white hidden sm:inline">Excellence 2026</span>
              </div>
              <div className="bg-white/10 p-2 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 flex items-center gap-2.5 shadow-sm transition-transform hover:scale-105" title="AWS Partner">
                <img
                  src="./assets/badge/AWS.webp"
                  alt="AWS Partner"
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs sm:text-sm font-extrabold text-white hidden sm:inline">AWS Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider to content */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
          <WaveDivider toColor="#F7F7FF" variant="organic-2" />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border-2 border-[#151326] shadow-[6px_6px_0px_#151326] p-6">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b-2 border-[#F0EEFF]">
                <ShieldCheck className="w-5 h-5 text-[#5B4BFF]" />
                <h2 className="font-extrabold text-lg text-[#17152B]">Security Modules</h2>
              </div>
              <nav className="space-y-1.5">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSectionId(sec.id)}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#626078] hover:text-[#5B4BFF] hover:bg-[#F0EEFF] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{sec.title}</span>
                    <span className="text-[#5B4BFF] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t-2 border-[#F0EEFF]">
                <div className="p-4 rounded-2xl bg-[#E8FBF0] border border-[#55D88A] flex items-start gap-3">
                  <FileCheck2 className="w-5 h-5 text-[#249655] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-[#17152B]">Looking for Privacy Terms?</h3>
                    <p className="text-[11px] text-[#626078] mt-1 font-medium leading-normal">
                      Read our user data rights in our{' '}
                      <Link to="/privacy-policy" className="text-[#5B4BFF] underline font-bold">
                        Privacy Policy
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Practice Document Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1 */}
            <section id="overview" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#5B4BFF] text-white flex items-center justify-center font-black text-sm">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Security Philosophy & Architecture</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  At BlueOrbit Devs, security is not an afterthought or an add-on layer; it is fundamentally baked into our core system design and continuous integration pipelines. We operate under a strict <strong>Zero Trust Architecture (ZTA)</strong>, enforcing the premise that no internal or external entity is inherently trusted.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/20 text-center">
                    <Lock className="w-6 h-6 text-[#5B4BFF] mx-auto mb-2" />
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#17152B]">Zero Trust</h3>
                    <p className="text-[11px] text-[#626078] mt-1">Never trust, always authenticate and verify explicitly.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/20 text-center">
                    <Layers className="w-6 h-6 text-[#5B4BFF] mx-auto mb-2" />
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#17152B]">Defense-in-Depth</h3>
                    <p className="text-[11px] text-[#626078] mt-1">Layered controls across network, host, container, and app.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/20 text-center">
                    <Key className="w-6 h-6 text-[#5B4BFF] mx-auto mb-2" />
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#17152B]">Least Privilege</h3>
                    <p className="text-[11px] text-[#626078] mt-1">Granular scope restrictions on all credentials and tokens.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="compliance" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#55D88A] text-[#151326] flex items-center justify-center font-black text-sm">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Compliance & Certifications</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  We adhere to internationally recognized security frameworks and third-party audit standards:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border-2 border-[#E0DEF7] flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl border border-[#E0DEF7] shadow-sm shrink-0">
                      <img
                        src="./assets/badge/SOS.svg"
                        alt="AICPA SOC"
                        className="h-8 w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-[#17152B]">AICPA SOC Trust Services Criteria</h3>
                      <p className="text-xs sm:text-sm text-[#626078] mt-1">
                        Our operational practices and cloud engineering baselines align with AICPA SOC security, availability, and confidentiality trust services principles.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border-2 border-[#E0DEF7] flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl border border-[#E0DEF7] shadow-sm shrink-0">
                      <img
                        src="./assets/badge/MSME.webp"
                        alt="MSME Registered"
                        className="h-8 w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-[#17152B]">MSME Registered Enterprise</h3>
                      <p className="text-xs sm:text-sm text-[#626078] mt-1">
                        Formally recognized and registered under the Ministry of Micro, Small & Medium Enterprises (MSME), complying with enterprise business operational integrity, statutory transparency, and secure digital development protocols.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border-2 border-[#E0DEF7] flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl border border-[#E0DEF7] shadow-sm shrink-0">
                      <img
                        src="./assets/badge/CYBERSECURITY_2026.webp"
                        alt="Cybersecurity Excellence Awards 2024"
                        className="h-8 w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-[#17152B]">Cybersecurity Excellence Awards 2026 Recognition</h3>
                      <p className="text-xs sm:text-sm text-[#626078] mt-1">
                        Recognized for exemplary innovation and modern application security practices across cloud-native developer pipelines and web applications.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border-2 border-[#E0DEF7] flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl border border-[#E0DEF7] shadow-sm shrink-0">
                      <img
                        src="./assets/badge/AWS.webp"
                        alt="AWS Partner"
                        className="h-8 w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-[#17152B]">AWS Partner Network & Well-Architected Framework</h3>
                      <p className="text-xs sm:text-sm text-[#626078] mt-1">
                        Built upon verified Amazon Web Services architectures, utilizing multi-AZ redundancy, IAM permission boundaries, and AWS KMS cryptographic management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cloud" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#00C2FF] text-[#151326] flex items-center justify-center font-black text-sm">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Cloud & Infrastructure Defense</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>Our production hosting footprint leverages enterprise cloud capabilities:</p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF] mt-1 shrink-0" />
                    <span><strong>Isolated Virtual Private Clouds (VPCs):</strong> All backend database clusters and microservices reside in private subnets with strictly no direct ingress from the public Internet.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF] mt-1 shrink-0" />
                    <span><strong>DDoS Mitigation & Web Application Firewall (WAF):</strong> Intelligent layer-7 traffic scrubbing, rate-limiting, and malicious payload blocking.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF] mt-1 shrink-0" />
                    <span><strong>Immutable Container Deployments:</strong> Production workloads run in containerized environments with read-only root filesystems and minimal base images.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="encryption" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-black text-sm">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Encryption & Cryptography</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/30">
                    <div className="flex items-center gap-2 font-extrabold text-[#17152B] mb-2">
                      <Lock className="w-4 h-4 text-[#5B4BFF]" />
                      <span>Data in Transit</span>
                    </div>
                    <p className="text-xs text-[#626078]">
                      All data moving between clients, APIs, and cloud services is encrypted using <strong>TLS 1.3 / HTTPS</strong> with strong cipher suites and HSTS (HTTP Strict Transport Security) enabled.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/30">
                    <div className="flex items-center gap-2 font-extrabold text-[#17152B] mb-2">
                      <Database className="w-4 h-4 text-[#5B4BFF]" />
                      <span>Data at Rest</span>
                    </div>
                    <p className="text-xs text-[#626078]">
                      All stored records, backups, database snapshots, and persistent object stores are encrypted with <strong>AES-256</strong> using AWS KMS with automated key rotation cycles.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="access" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FFD84D] text-[#151326] flex items-center justify-center font-black text-sm">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Identity & Access Controls (IAM)</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Mandatory Multi-Factor Authentication (MFA):</strong> Hardware security keys or FIDO2/WebAuthn tokens enforced across all developer workstations, GitHub organizations, and AWS IAM roles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Role-Based Access Control (RBAC):</strong> Engineers have access only to systems strictly necessary for their current sprint or product milestone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Ephemeral Session Tokens:</strong> Long-lived static root keys are prohibited; temporary credential tokens expire automatically.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="ssdlc" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FF4FA3] text-white flex items-center justify-center font-black text-sm">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Secure Software Development (SSDLC)</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  Security testing is integrated directly into developer workflows:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Static Code Analysis (SAST)</h3>
                    <p className="text-xs text-[#626078]">Automated scanning on every pull request to identify injection, XSS, and authorization vulnerabilities.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Dependency Auditing (SCA)</h3>
                    <p className="text-xs text-[#626078]">Continuous CVE checking for third-party npm and yarn packages with automated patch pull requests.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Secret Detection</h3>
                    <p className="text-xs text-[#626078]">Pre-commit and CI git hooks that block and revoke accidental commits of API keys or credentials.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Mandatory Peer Review</h3>
                    <p className="text-xs text-[#626078]">All changes require approvals from senior engineers with branch protection rules enforced.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="vulnerability" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#5B4BFF] text-white flex items-center justify-center font-black text-sm">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Vulnerability Management & Audits</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  We conduct regular external penetration testing and independent third-party code reviews. Critical security patches are deployed under expedited SLAs (typically within 24 hours of zero-day disclosure).
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="incident" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#00C2FF] text-[#151326] flex items-center justify-center font-black text-sm">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Incident Response & Continuity</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  Our dedicated Security Incident Response Team (SIRT) maintains automated 24/7 telemetry alerting and an audited Incident Response Plan. In the unlikely event of a verified security incident affecting client data, affected parties are notified within 72 hours with comprehensive forensic summaries.
                </p>
                <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-[#5B4BFF]" />
                    <div>
                      <h3 className="font-extrabold text-xs sm:text-sm text-[#17152B]">RTO & RPO Benchmarks</h3>
                      <p className="text-xs text-[#626078]">Continuous cross-region backups with sub-hour Recovery Point Objectives.</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#55D88A] text-[#151326] font-black text-xs rounded-full border border-[#151326]">
                    99.9% SLA
                  </span>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="reporting" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-black text-sm">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Vulnerability Disclosure & Contact</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  We welcome reports from independent security researchers, ethical hackers, and clients. If you believe you have discovered a security vulnerability in any BlueOrbit Devs property:
                </p>
                <div className="p-5 rounded-2xl bg-[#F0EEFF] border-2 border-[#151326] shadow-[2px_2px_0px_#151326] space-y-2">
                  <div className="flex items-center gap-2 text-[#17152B] font-extrabold text-base">
                    <ShieldCheck className="w-5 h-5 text-[#5B4BFF]" />
                    <span>BlueOrbit Devs — Security & Incident Response</span>
                  </div>
                  <p className="text-xs text-[#626078]">
                    Email: <a href="mailto:support@blueorbitdevs.org" className="text-[#5B4BFF] font-bold hover:underline">support@blueorbitdevs.org</a>
                  </p>
                  <p className="text-xs text-[#626078]">
                    Please provide full reproduction steps and allow reasonable time for remediation prior to public disclosure.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
