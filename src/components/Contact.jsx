import { useState, useEffect } from 'react';
import {
  Mail,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Send,
} from 'lucide-react';

export default function Contact({ selectedPlan }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState(selectedPlan || 'Researcher Pro');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setPlan(selectedPlan);
    }
  }, [selectedPlan]);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., alex@domain.com).';
    }

    if (!message.trim()) {
      newErrors.message = 'Please tell us a little about your project or workflow.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters so we can assist you better.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-softIvory dark:bg-darkChocolate transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Get Started &amp; Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory leading-tight">
            Bring clarity to your next project
          </h2>
          <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
            Ready to organize your research, hackathon specs, or team knowledge?
            Request early workspace access or send us a message—we would love to
            hear how you work.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige/70 dark:border-walnutBrown/50">
              <div className="w-10 h-10 rounded-lg bg-darkChocolate dark:bg-walnutBrown/40 border border-transparent dark:border-caramel/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-caramel" />
              </div>
              <div>
                <p className="text-sm font-semibold text-darkChocolate dark:text-softIvory">
                  Direct Inquiries
                </p>
                <p className="text-sm text-walnutBrown dark:text-warmBeige">
                  hello@contextiq.ai
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige/70 dark:border-walnutBrown/50">
              <div className="w-10 h-10 rounded-lg bg-darkChocolate dark:bg-walnutBrown/40 border border-transparent dark:border-caramel/30 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-caramel" />
              </div>
              <div>
                <p className="text-sm font-semibold text-darkChocolate dark:text-softIvory">
                  Guided Workspace Walkthrough
                </p>
                <p className="text-sm text-walnutBrown dark:text-warmBeige">
                  Available for student teams, research labs, and startups.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-walnutBrown dark:text-warmBeige pt-2">
            <ShieldCheck className="w-4 h-4 text-caramel shrink-0" />
            <span>Your workspace data remains private and never trains public models.</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-vanillaCream/80 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-darkChocolate dark:bg-walnutBrown/40 border border-caramel/40 text-caramel flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory">
                  Request Received, {name}!
                </h3>
                <p className="text-sm sm:text-base text-walnutBrown dark:text-warmBeige max-w-md mx-auto leading-relaxed">
                  We have reserved your workspace request for the{' '}
                  <strong className="text-darkChocolate dark:text-softIvory">{plan}</strong> plan and
                  sent confirmation details to{' '}
                  <strong className="text-darkChocolate dark:text-softIvory">{email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-lg bg-darkChocolate dark:bg-caramel text-softIvory text-sm font-medium hover:bg-caramel dark:hover:bg-walnutBrown transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory">
                    Request Workspace Access
                  </h3>
                  <p className="text-sm text-walnutBrown dark:text-warmBeige mt-1">
                    Fill out the details below and we will set up your ContextIQ environment.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-darkChocolate dark:text-softIvory mb-1.5"
                  >
                    Full Name <span className="text-caramel">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g., Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-lg bg-softIvory dark:bg-darkChocolate border text-sm text-darkChocolate dark:text-softIvory placeholder:text-walnutBrown/50 dark:placeholder:text-warmBeige/40 focus:outline-none focus:ring-2 focus:ring-caramel ${
                      errors.name
                        ? 'border-red-600 dark:border-amber-400'
                        : 'border-warmBeige dark:border-walnutBrown/60'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700 dark:text-amber-300">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium text-darkChocolate dark:text-softIvory mb-1.5"
                  >
                    Email Address <span className="text-caramel">*</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g., alex@university.edu"
                    className={`w-full px-4 py-2.5 rounded-lg bg-softIvory dark:bg-darkChocolate border text-sm text-darkChocolate dark:text-softIvory placeholder:text-walnutBrown/50 dark:placeholder:text-warmBeige/40 focus:outline-none focus:ring-2 focus:ring-caramel ${
                      errors.email
                        ? 'border-red-600 dark:border-amber-400'
                        : 'border-warmBeige dark:border-walnutBrown/60'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700 dark:text-amber-300">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="planSelect"
                    className="block text-sm font-medium text-darkChocolate dark:text-softIvory mb-1.5"
                  >
                    Selected Plan
                  </label>
                  <select
                    id="planSelect"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 text-sm text-darkChocolate dark:text-softIvory focus:outline-none focus:ring-2 focus:ring-caramel"
                  >
                    <option value="Student & Builder">
                      Student &amp; Builder ($0 / forever)
                    </option>
                    <option value="Researcher Pro">
                      Researcher Pro ($12 / month)
                    </option>
                    <option value="Team & Startup">
                      Team &amp; Startup ($28 / month)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="workflowMessage"
                    className="block text-sm font-medium text-darkChocolate dark:text-softIvory mb-1.5"
                  >
                    How do you plan to use ContextIQ?{' '}
                    <span className="text-caramel">*</span>
                  </label>
                  <textarea
                    id="workflowMessage"
                    rows={3}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell us about your research papers, hackathon project, or team documentation..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-softIvory dark:bg-darkChocolate border text-sm text-darkChocolate dark:text-softIvory placeholder:text-walnutBrown/50 dark:placeholder:text-warmBeige/40 focus:outline-none focus:ring-2 focus:ring-caramel ${
                      errors.message
                        ? 'border-red-600 dark:border-amber-400'
                        : 'border-warmBeige dark:border-walnutBrown/60'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700 dark:text-amber-300">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-caramel text-softIvory text-sm font-semibold hover:bg-darkChocolate dark:hover:bg-walnutBrown transition-colors shadow-sm"
                >
                  <span>Request Early Access</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}