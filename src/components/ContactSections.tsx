import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-medium">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Let's Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <form 
            name="formContact" 
            action="https://formsubmit.co/ab5de6c200178acf60060d82d28a2027" 
            method="POST"
            className="space-y-6 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium uppercase text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-[#5651e5] focus:border-transparent
                           transition duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium uppercase text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-[#5651e5] focus:border-transparent
                           transition duration-200 outline-none"
                  placeholder="Your phone number (optional)"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email"
                className="block text-sm font-medium uppercase text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-[#5651e5] focus:border-transparent
                         transition duration-200 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label 
                htmlFor="subject"
                className="block text-sm font-medium uppercase text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-[#5651e5] focus:border-transparent
                         transition duration-200 outline-none"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label 
                htmlFor="message"
                className="block text-sm font-medium uppercase text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-[#5651e5] focus:border-transparent
                         transition duration-200 outline-none resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#5651e5] to-[#709dff]
                       text-white font-medium text-lg
                       transform transition duration-200
                       hover:shadow-lg hover:scale-[1.02]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5651e5]
                       disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;