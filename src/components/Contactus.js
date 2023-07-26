import React, { useState } from 'react';

const ContactUs = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <>
    <div className="container mx-auto mt-8 w-6/12 border shadow-sm p-10 ">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {feedbackSubmitted ? (
        <div className="text-green-600 font-semibold mb-4">Thank you for your valuable feedback!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Send Us Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Feedback
              </button>
            </form>
          </div>
          
        </div>
      )}
    </div>
    <div className=' mt-7 mb-10 ml-96'>
            <h2 className="text-xl font-semibold mb-2">Contact via Mail</h2>
            <p className="text-gray-700 mb-4">
              For any inquiries or feedback, you can also contact us through email.
            </p>
            <p className="font-semibold">Email: hemshu@fooddelivery.com</p>
          </div>
          </>
  );
};

export default ContactUs;

