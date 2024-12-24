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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)
  };

  return (
    <section className="flex w-full items-center justify-center gap-20 py-40 bg-gradient-to-b from-white to-gray-50">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-5">
          Let's <span className='text-indigo-600'>Connect !</span>
        </h2>
        <p className='max-w-xs font-roboto'>
          If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
        </p>
      </div>
      {/* Form */}
      <form
        name="formContact"
        action="https://formsubmit.co/ab5de6c200178acf60060d82d28a2027"
        method="POST"
        className="max-w-xl space-y-2"
        onSubmit={handleSubmit}
      >

        {/* Name Field */}
        <input
          id="name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-indigo-600 focus:border-transparent
                           transition duration-200 outline-none"
          placeholder="Your name"
        />

        {/* Email Field */}
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-indigo-600 focus:border-transparent
                         transition duration-200 outline-none"
          placeholder="your.email@example.com"
        />

        {/* Message Field */}
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-indigo-600 focus:border-transparent
                         transition duration-200 outline-none resize-none"
          placeholder="What's on your mind?"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400
                       text-white font-medium text-base
                       transform transition duration-200
                       hover:shadow-lg hover:scale-[1.02]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                       disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;