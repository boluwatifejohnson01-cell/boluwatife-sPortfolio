import React, { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

// Create a free form at https://formspree.io and paste your endpoint here
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

const contactLinks = [
  {
    label: "Email",
    value: "boluwatifejohnson01@gmail.com",
    href: "mailto:boluwatifejohnson01@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/boluwatifejohnson01-cell",
    href: "https://github.com/boluwatifejohnson01-cell",
  },
];

const inputClass =
  "w-full border-2 border-[#1f0000] rounded-xl px-4 py-2.5 text-[#1f0000] text-[13px] md:text-[14px] bg-white placeholder:text-[#1f0000]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb7e14]";

const labelClass = "text-[#1f0000] text-[13px] md:text-[16px] font-bold";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto w-90 md:w-360 my-15 gap-15 md:mt-10 flex flex-col md:px-5 md:items-center md:pb-20">
      {/* Section header (same pattern as My Skills) */}
      <div className="flex flex-col gap-0.5">
        <p className="text-[#1f0000] font-medium text-[14px] md:text-[16px] tracking-tight uppercase">
          Contact Me
        </p>
        <div className="relative">
          <h3 className="text-[#eb7e14] font-bold text-[20px] md:text-[24px]">
            Let's Work Together
          </h3>
          <span className="w-10 bg-[#1f0000] h-0.5 absolute -bottom-1.5 md:left-20 left-40" />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16 md:w-full md:max-w-300">
        {/* Contact details */}
        <div className="flex flex-col gap-6">
          <p className="text-[#1f0000] text-[13px] md:text-[16px]">
            Have a project in mind or just want to say hello? Send a message and
            I'll reply as soon as I can.
          </p>

          <ul className="flex flex-col gap-4">
            {contactLinks.map(({ label, value, href }) => (
              <li
                key={label}
                className="border-2 border-[#1f0000] rounded-2xl p-4 flex flex-col gap-0.5 hover:bg-[#1f0000] cursor-pointer"
              >
                <span className="text-[#1f0000] text-[13px] md:text-[16px] font-bold hover:text-white">
                  {label}
                </span>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[#eb7e14] text-[13px] md:text-[14px] font-bold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb7e14] transition-colors break-all"
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 border-2 border-[#1f0000] rounded-2xl p-5 md:p-8 bg-white"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start bg-[#eb7e14] text-[#1f0000] text-[13px] md:text-[14px] font-bold rounded-full px-6 py-2.5 border-2 border-[#1f0000] hover:bg-[#1f0000] hover:text-[#eb7e14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb7e14] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <div aria-live="polite" className="min-h-5">
            {status === "success" && (
              <p className="text-[#1f0000] text-[13px] md:text-[14px] font-bold">
                Message sent. Thank you, I'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-[#1f0000] text-[13px] md:text-[14px] font-bold">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
