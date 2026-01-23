import { Loader, Mail, MapPinned, Phone, Send } from "lucide-react";
import Title from "./Title";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  subject: "",
  email: "",
  message: "",
};

type AlertType = {
  type: "success" | "error";
  message: string;
};

const Contact: React.FC = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [isSending, setIsSending] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID!;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID!;
  const emailUser = import.meta.env.VITE_EMAIL_PUBLIC_USER!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setAlert(null);

    try {
      const result = await emailjs.send(serviceID, templateID, form, emailUser);

      if (result.status === 200) {
        setForm(INITIAL_FORM_STATE);
        setAlert({
          type: "success",
          message: "Message sent successfully. I will get back to you shortly.",
        });
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setAlert({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-base-300 py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <Title title="Contact Me" />
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            I am open to discussing new projects, creative ideas, or
            opportunities to collaborate. Feel free to contact me using the form
            below.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-4 divide-y-2 divide-accent">
            <div className="flex items-center gap-4 p-5 hover:bg-base-200 rounded-xl transition cursor-pointer">
              <MapPinned className="text-accent" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-base-content/70">Gisenyi, Rwanda</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 hover:bg-base-200 rounded-xl transition cursor-pointer">
              <Mail className="text-accent" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:jonathanuwineza@gmail.com"
                  className="text-sm text-base-content/70 hover:text-accent transition font-medium"
                >
                  jonathanuwineza@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 hover:bg-base-200 rounded-xl transition cursor-pointer">
              <Phone className="text-accent" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+250788635875"
                  className="text-sm text-base-content/70 hover:text-accent transition font-medium"
                >
                  +250 788 635 875
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-base-100 rounded-2xl shadow-2xl p-8">
            {/* Alert */}
            {alert && (
              <div
                className={`mb-6 rounded-xl px-4 py-3 text-sm font-medium ${
                  alert.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {alert.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Your name..."
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                    placeholder="Your phone number..."
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    required
                    placeholder="Your subject..."
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    placeholder="Enter your email..."
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-[#E0A15E] text-[#150C0C] font-semibold py-3 rounded-xl hover:bg-accent-focus transition shadow-2xl disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    Sending
                    <Loader className="animate-spin" size={18} />
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
