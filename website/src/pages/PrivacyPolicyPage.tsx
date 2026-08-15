import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FloatingObject } from '../components/FloatingDecorations';
import { WaveDivider } from '../components/WaveDivider';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Server, 
  UserCheck, 
  Globe, 
  Mail, 
  ArrowLeft,
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction & Scope' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Information' },
    { id: 'sharing', title: '4. Data Sharing & Third Parties' },
    { id: 'cookies', title: '5. Cookies & Tracking' },
    { id: 'retention', title: '6. Data Retention & Storage' },
    { id: 'rights', title: '7. Your Rights & Privacy Choices' },
    { id: 'transfers', title: '8. International Data Transfers' },
    { id: 'contact', title: '9. Contact & Inquiries' },
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
      <FloatingObject type="sparkle" top="8%" left="4%" color="#FFD84D" animation="slow" />
      <FloatingObject type="code-tag" top="16%" right="5%" color="#5B4BFF" animation="medium" />
      <FloatingObject type="planet" bottom="25%" left="3%" color="#00C2FF" animation="slow" />
      <FloatingObject type="curly" bottom="12%" right="4%" color="#FF7043" animation="reverse" />

      {/* Hero Header Section */}
      <div className="bg-[#5B4BFF] text-white pt-12 sm:pt-16 pb-20 sm:pb-24 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#7C5CFF]/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00C2FF]/30 blur-3xl pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#FFD84D] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#FFD84D]" />
                <span>LEGAL & TRANSPARENCY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/90 font-medium max-w-2xl leading-relaxed">
                How BlueOrbit Devs collects, protects, uses, and respects your personal and project information.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-xs sm:text-sm font-mono font-bold text-white shrink-0 self-start md:self-auto">
              <Calendar className="w-4 h-4 text-[#00C2FF]" />
              <span>Effective: August 15, 2026</span>
            </div>
          </div>
        </div>

        {/* Wave divider to content */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
          <WaveDivider toColor="#F7F7FF" variant="organic-1" />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border-2 border-[#151326] shadow-[6px_6px_0px_#151326] p-6">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b-2 border-[#F0EEFF]">
                <FileText className="w-5 h-5 text-[#5B4BFF]" />
                <h2 className="font-extrabold text-lg text-[#17152B]">Table of Contents</h2>
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
                <div className="p-4 rounded-2xl bg-[#F0EEFF] border border-[#5B4BFF]/20 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#5B4BFF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-extrabold text-[#17152B]">Have security questions?</h3>
                    <p className="text-[11px] text-[#626078] mt-1 font-medium leading-normal">
                      Explore our enterprise architecture in{' '}
                      <Link to="/data-security-practices" className="text-[#5B4BFF] underline font-bold">
                        Data Security Practices
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Document Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1 */}
            <section id="introduction" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#5B4BFF] text-white flex items-center justify-center font-black text-sm">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Introduction & Scope</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  Welcome to BlueOrbit Devs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). BlueOrbit Devs is a specialized software engineering studio and digital product laboratory. We are dedicated to maintaining the highest ethical standards of transparency, confidentiality, and data protection.
                </p>
                <p>
                  This Privacy Policy applies to personal information collected through our official websites (including blueorbitdevs.org), client portals, interactive consultation forms, and direct communications regarding our design, engineering, and cloud development services.
                </p>
                <div className="p-4 rounded-2xl bg-[#E8FBF0] border border-[#55D88A] text-[#151326] flex items-start gap-3 mt-4">
                  <CheckCircle2 className="w-5 h-5 text-[#249655] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold">
                    <strong className="font-extrabold">Core Pledge:</strong> We never sell, rent, or trade your personal or business data to third parties. We treat your client product specifications and proprietary source code with rigorous institutional confidentiality.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="collection" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#00C2FF] text-[#151326] flex items-center justify-center font-black text-sm">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  Depending on how you interact with BlueOrbit Devs, we may collect the following categories of information:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Directly Provided Information:</strong> Name, professional email address, organization/company name, phone number, and project descriptions submitted via our consultation and project kick-off forms.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Client & Collaboration Data:</strong> Technical specifications, architecture briefs, repository access tokens, and staging credentials shared explicitly during active engineering engagements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Automated Technical Telemetry:</strong> Anonymized browser type, operating system, device characteristics, referral URLs, IP address (hashed for geographic analytics), and general session interactions.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="usage" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-black text-sm">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">How We Use Your Information</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>We process collected data exclusively for valid business and legal purposes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Service Delivery</h3>
                    <p className="text-xs text-[#626078]">Executing engineering contracts, architecture reviews, software builds, and technical advisory.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Client Communications</h3>
                    <p className="text-xs text-[#626078]">Responding to project inquiries, scheduling discovery calls, and providing technical support.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Infrastructure Defense</h3>
                    <p className="text-xs text-[#626078]">Detecting and preventing DDoS attacks, unauthorized access, and malicious activity.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#E0DEF7]">
                    <h3 className="font-extrabold text-sm text-[#17152B] mb-1">Continuous Improvement</h3>
                    <p className="text-xs text-[#626078]">Optimizing our web performance, site usability, and interactive developer toolkits.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FFD84D] text-[#151326] flex items-center justify-center font-black text-sm">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Data Sharing & Third Parties</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  We do not monetize your information. We only share data with vetted sub-processors essential to our infrastructure and workflow operations under strict Non-Disclosure Agreements (NDAs) and Data Protection Agreements (DPAs):
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Cloud Infrastructure Providers:</strong> Amazon Web Services (AWS) and Google Cloud Platform for secure encrypted hosting, compute, and database persistence.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Developer & Productivity Tools:</strong> GitHub Enterprise, Slack, and certified CI/CD automation pipelines strictly constrained to development workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Legal & Compliance:</strong> When strictly required by law, subpoena, or to protect the vital security of our network and personnel.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#55D88A] text-[#151326] flex items-center justify-center font-black text-sm">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Cookies & Tracking</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  We utilize minimal, privacy-respecting cookies and client-side storage tokens:
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Strictly Necessary:</strong> Session management, security tokens, and responsive UI state preferences.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4BFF] mt-2 shrink-0" />
                    <span><strong>Privacy-First Analytics:</strong> Aggregated, privacy-compliant metrics to measure traffic and feature adoption without cross-site tracking.</span>
                  </li>
                </ul>
                <p className="text-xs text-[#626078] mt-2">
                  You can configure your web browser to block or alert you about cookies; however, some parts of the site may lose styling or state preferences.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="retention" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FF4FA3] text-white flex items-center justify-center font-black text-sm">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Data Retention & Storage</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable tax, accounting, and legal requirements.
                </p>
                <p>
                  Client codebase copies and staging artifacts are securely scrubbed and decommissioned upon project completion or contract termination in accordance with our client data disposal schedules.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="rights" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#5B4BFF] text-white flex items-center justify-center font-black text-sm">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Your Rights & Privacy Choices</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  Under applicable global data protection regulations (including GDPR, CCPA, and CPRA), you have the right to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-semibold">
                  <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#17152B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF]" />
                    <span>Access your personal data</span>
                  </div>
                  <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#17152B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF]" />
                    <span>Request correction or update</span>
                  </div>
                  <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#17152B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF]" />
                    <span>Request permanent erasure (&quot;Right to be forgotten&quot;)</span>
                  </div>
                  <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#17152B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B4BFF]" />
                    <span>Restrict or object to processing</span>
                  </div>
                </div>
                <p className="text-xs text-[#626078] pt-2">
                  To exercise any of these rights, email us at <a href="mailto:support@blueorbitdevs.org" className="text-[#5B4BFF] font-bold underline">support@blueorbitdevs.org</a>. We respond to all verified requests within 30 calendar days.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="transfers" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#00C2FF] text-[#151326] flex items-center justify-center font-black text-sm">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">International Data Transfers</h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  As an engineering studio serving global partners, your information may be transferred to and processed in jurisdictions other than your country of residence. Where required, we implement Standard Contractual Clauses (SCCs) and enterprise encryption to guarantee equivalent safeguards.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="contact" className="bg-white rounded-3xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-black text-sm">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#17152B]">Contact & Privacy Inquiries</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4A4768] font-medium leading-relaxed">
                <p>
                  If you have questions, comments, or concerns about our Privacy Policy or data governance practices, please reach out to our privacy and legal team:
                </p>
                <div className="p-5 rounded-2xl bg-[#F0EEFF] border-2 border-[#151326] shadow-[2px_2px_0px_#151326] space-y-2">
                  <div className="flex items-center gap-2 text-[#17152B] font-extrabold text-base">
                    <ShieldCheck className="w-5 h-5 text-[#5B4BFF]" />
                    <span>BlueOrbit Devs — Privacy & Data Protection Office</span>
                  </div>
                  <p className="text-xs text-[#626078]">
                    Email: <a href="mailto:support@blueorbitdevs.org" className="text-[#5B4BFF] font-bold hover:underline">support@blueorbitdevs.org</a>
                  </p>
                  <p className="text-xs text-[#626078]">
                    Response Window: Within 24-48 business hours
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
