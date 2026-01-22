import { Mail, MapPinned, Phone, Send } from "lucide-react";
import Title from "./Title";

const Contact: React.FC = () => {
  return (
    <div className="bg-base-300 py-16 px-4">
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
          {/* Contact info */}
          <div className="space-y-4 divide-y-2 divide-accent">
            <div className="flex items-center gap-4 p-5  ">
              <MapPinned className="text-accent" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-base-content/70">Gisenyi, Rwanda</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 ">
              <Mail className="text-accent" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-base-content/70">
                  jonathanuwineza@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 ">
              <Phone className="text-accent" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-base-content/70">+250 788 635 875</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-base-100 rounded-2xl shadow-2xl p-8">
            <form action="" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Your subject"
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-base-300 shadow-2xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center shadow-2xl gap-2 bg-accent text-white font-semibold py-3 rounded-xl hover:bg-accent-focus transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
