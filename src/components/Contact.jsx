import React, { useState } from 'react';
import axios from 'axios';

const Mailsend = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: ''
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const url = "http://localhost:8080/email";
      const response = await axios.post(url, emailData);
      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Send Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="to">
              To:
            </label>
            <input 
              type="email" 
              name="to" 
              value={emailData.to} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
              Subject:
            </label>
            <input 
              type="text" 
              name="subject" 
              value={emailData.subject} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="text">
              Message:
            </label>
            <textarea 
              name="text" 
              value={emailData.text} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            />
          </div>
          <button 
            type="submit" 
            className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <svg 
                className="animate-spin h-5 w-5 mr-3 inline-block text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                ></circle>
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                ></path>
              </svg>
            ) : (
              'Send Email'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mailsend;
