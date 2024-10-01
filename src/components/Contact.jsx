import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE,TEMPLATE, form.current, {
        publicKey: USER,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for your message!');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-purple-700 justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-800"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-5xl font-bold text-white text-center">Let's Connect</h1>
        </div>
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      <div className="w-full lg:w-1/2 bg-gray-900 p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Your Name"
              />
              <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Your Email"
              />
              <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                placeholder="Your Message"
              ></textarea>
              <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
