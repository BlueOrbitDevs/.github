import React, { useState, useRef } from 'react';
import { InquiryFormState } from '../types';
import { FloatingObject } from './FloatingDecorations';
import { WaveDivider } from './WaveDivider';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Sparkles, Mail, Clock, DollarSign, Rocket } from 'lucide-react';
import { GOOGLE_FORM_ACTION, GOOGLE_FORM_FIELDS } from '../config/googleFormConfig';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formState, setFormState] = useState<InquiryFormState>({
    name: '',
    email: '',
    company: '',
    projectType: initialService || 'Web Application',
    budget: '$5k - $15k',
    timeline: '1 - 2 Months',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isSubmittedRef = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const projectTypes = [
    'Web Application',
    'SaaS Product',
    'Real-Time & WebRTC',
    'APIs & Backend',
    'Design System & UI',
    'Full MVP Launch'
  ];

  const budgetOptions = [
    'Under $5k',
    '$5k - $15k',
    '$15k - $30k',
    '$30k+'
  ];

  const timelineOptions = [
    'ASAP (< 1 month)',
    '1 - 2 Months',
    '3 - 6 Months',
    'Flexible'
  ];

  const triggerSuccessCelebration = () => {
    setStatus('success');
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5B4BFF', '#00C2FF', '#FF4FA3', '#FFD84D', '#55D88A']
      });
    } catch {
      // Fallback gracefully if canvas-confetti is not available
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Basic client-side validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      e.preventDefault();
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Work Email, and Project Details).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      e.preventDefault();
      setStatus('error');
      setErrorMessage('Please provide a valid email address so we can reach you.');
      return;
    }

    // Mark as active submission and switch to loading state
    isSubmittedRef.current = true;
    setStatus('loading');
    setErrorMessage('');

    // Fallback timer: in case cross-origin iframe load events are suppressed by the browser
    setTimeout(() => {
      if (isSubmittedRef.current) {
        isSubmittedRef.current = false;
        triggerSuccessCelebration();
      }
    }, 1500);
  };

  const handleIframeLoad = () => {
    // When Google Forms /formResponse loads inside the hidden iframe
    if (isSubmittedRef.current) {
      isSubmittedRef.current = false;
      triggerSuccessCelebration();
    }
  };

  const handleReset = () => {
    setFormState({
      name: '',
      email: '',
      company: '',
      projectType: 'Web Application',
      budget: '$5k - $15k',
      timeline: '1 - 2 Months',
      message: ''
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Project Inquiry Section"
      className="relative bg-[#F0EEFF] text-[#17152B] pt-16 sm:pt-24 pb-0 overflow-hidden"
    >
      <FloatingObject type="sparkle" top="8%" right="6%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="code-tag" top="20%" left="4%" color="#00C2FF" animation="medium" />

      {/* Hidden iframe to receive Google Forms /formResponse without page redirect */}
      <iframe
        name="hidden_google_form_iframe"
        id="hidden_google_form_iframe"
        title="Google Form Submission Receiver"
        style={{ display: 'none' }}
        onLoad={handleIframeLoad}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#151326]/15 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5B4BFF]" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6 text-[#17152B]">
            Let&apos;s make <br />
            <span className="text-[#5B4BFF]">something real.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#626078] leading-relaxed font-medium">
            Have a project in mind, an existing codebase to accelerate, or an idea to brainstorm? Tell us about it below.
          </p>
        </div>

        {/* Rounded Main Form Container */}
        <div className="rounded-[32px] bg-white border-3 border-[#151326] shadow-[8px_8px_0px_#151326] p-6 sm:p-10 md:p-12 relative overflow-hidden">
          
          {status === 'success' ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-[#55D88A]/20 border-3 border-[#151326] shadow-[4px_4px_0px_#151326] flex items-center justify-center mx-auto text-[#151326]">
                <CheckCircle2 className="w-10 h-10 text-[#55D88A]" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-[#17152B] flex items-center justify-center gap-2">
                <span>Inquiry Received!</span>
                <Rocket className="w-7 h-7 text-[#5B4BFF]" />
              </h3>

              <p className="text-base sm:text-lg text-[#626078] max-w-md mx-auto font-medium leading-relaxed">
                Thank you, <strong>{formState.name}</strong>. Our engineering leads have received your project details and will review them within 24 hours.
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F7FF] border border-[#151326]/15 max-w-sm mx-auto text-xs font-bold text-[#626078] space-y-1">
                <p>Project Type: <span className="text-[#17152B]">{formState.projectType}</span></p>
                <p>Timeline: <span className="text-[#17152B]">{formState.timeline}</span></p>
                <p>Contact: <span className="text-[#5B4BFF]">{formState.email}</span></p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-full bg-[#5B4BFF] text-white font-extrabold text-sm border-2 border-[#151326] shadow-[2px_2px_0px_#151326] hover:translate-y-[-2px] transition-transform cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              action={GOOGLE_FORM_ACTION}
              method="POST"
              target="hidden_google_form_iframe"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Hidden Google Form inputs for button-selected values */}
              <input
                type="hidden"
                name={GOOGLE_FORM_FIELDS.projectType}
                value={formState.projectType}
              />
              <input
                type="hidden"
                name={GOOGLE_FORM_FIELDS.budget}
                value={formState.budget}
              />
              <input
                type="hidden"
                name={GOOGLE_FORM_FIELDS.timeline}
                value={formState.timeline}
              />

              {/* Error Banner */}
              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-[#FFF0F7] border-2 border-[#FF4FA3] text-[#17152B] flex items-center gap-3 text-sm font-bold animate-shake">
                  <AlertCircle className="w-5 h-5 text-[#FF4FA3] shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1: Name, Email, Company */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name={GOOGLE_FORM_FIELDS.name}
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F7F7FF] border-2 border-[#151326]/20 focus:border-[#5B4BFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4BFF]/20 text-sm font-bold text-[#17152B] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name={GOOGLE_FORM_FIELDS.email}
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ada@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F7F7FF] border-2 border-[#151326]/20 focus:border-[#5B4BFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4BFF]/20 text-sm font-bold text-[#17152B] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name={GOOGLE_FORM_FIELDS.company}
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Acme Studio"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F7F7FF] border-2 border-[#151326]/20 focus:border-[#5B4BFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4BFF]/20 text-sm font-bold text-[#17152B] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Project Type Selection Pills */}
              <div>
                <label className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-3">
                  What are you building?
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormState({ ...formState, projectType: type })}
                      className={`px-4 py-2 rounded-xl text-xs font-extrabold border-2 transition-all cursor-pointer ${
                        formState.projectType === type
                          ? 'bg-[#5B4BFF] text-white border-[#151326] shadow-[2px_2px_0px_#151326] translate-y-[-2px]'
                          : 'bg-[#F7F7FF] text-[#626078] border-[#151326]/15 hover:border-[#151326]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-3">
                    Target Budget
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormState({ ...formState, budget: b })}
                        className={`p-2.5 rounded-xl text-xs font-bold border-2 text-center transition-all cursor-pointer ${
                          formState.budget === b
                            ? 'bg-[#00C2FF] text-[#151326] border-[#151326] shadow-[2px_2px_0px_#151326]'
                            : 'bg-[#F7F7FF] text-[#626078] border-[#151326]/15 hover:border-[#151326]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-3">
                    Ideal Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelineOptions.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormState({ ...formState, timeline: t })}
                        className={`p-2.5 rounded-xl text-xs font-bold border-2 text-center transition-all cursor-pointer ${
                          formState.timeline === t
                            ? 'bg-[#FFD84D] text-[#17152B] border-[#151326] shadow-[2px_2px_0px_#151326]'
                            : 'bg-[#F7F7FF] text-[#626078] border-[#151326]/15 hover:border-[#151326]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-black uppercase text-[#17152B] tracking-wider mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="contact-message"
                  name={GOOGLE_FORM_FIELDS.message}
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your product idea, existing architecture, target launch date, and key engineering goals..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#F7F7FF] border-2 border-[#151326]/20 focus:border-[#5B4BFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4BFF]/20 text-sm font-bold text-[#17152B] transition-all resize-y"
                />
              </div>

              {/* Submit CTA Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-[#F0EEFF]">
                <div className="text-xs text-[#626078] font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#5B4BFF]" />
                  <span>Direct inquiries: support@blueorbitdevs.org</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7043] text-white font-black text-base border-2 border-[#151326] shadow-[4px_4px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#151326] active:translate-y-[0px] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD84D]"
                >
                  {status === 'loading' ? (
                    <span>Dispatching Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* Wave Transition into Purple Footer */}
      <WaveDivider toColor="#5B4BFF" variant="organic-3" />
    </section>
  );
};
