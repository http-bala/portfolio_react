import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get input values
    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate inputs
    if (!name || !email || !message) {
      toast.error('All fields are required.', { position: 'top-right' });
      return;
    }

    emailjs
      .sendForm('service_jd4euyn', 'template_nhyhdnq', form.current, {
        publicKey: 'UGjpjGPs40x0swCpo',
      })
      .then(
        () => {
          toast.success('Your message has been sent successfully!', {
            position: 'top-right',
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            position: 'top-right',
          });
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <div className="bg-white" id="contact">
      <section className="max-w-screen-xl mx-auto px-6 py-16 pb-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl text-center font-extrabold leading-tight text-gray-900">
          Get in  <span style={{ color: '#F2BE21' }}>Touch 💡</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Have a project or collaboration in mind? Reach out, and let's bring your ideas to life!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between">
          {/* Contact Information Section */}
          <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Balakrishna Kolla, a passionate full-stack developer specializing in building
              responsive websites, web applications, and backend systems. Feel free to reach out for
              project discussions or collaborations!
            </p>
            <ul>
              <li className="flex items-center mb-6">
                <div className="p-3 bg-purple-200 rounded-full">
                <FaMapMarkerAlt className="text-xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Address</h4>
                  <p className="text-gray-500 hover:text-accent">Preal Residency, Bhimpore, Nani Daman-396210</p>
                </div>
              </li>
              <li className="flex items-center mb-6">
                <div className="p-3 bg-purple-200 rounded-full">
                <FaPhoneAlt className="text-xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Contact</h4>
                  <p className="text-gray-500">
                  <a href="tel:+918154954408" className="hover:text-accent">+91 81549 54408</a>
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-6">
                <div className="p-3 bg-purple-200 rounded-full">
                <FaEnvelope className="text-xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-500">
                    <a
                      href="mailto:balakrishnakolla00014@gmail.com"
                      className="hover:text-accent"
                    >
                      balakrishnakolla00014@gmail.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 bg-gray-100 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-md hover:shadow-xl"
                  style={{
                    boxShadow: '0 0 10px rgba(128, 90, 213, 0.8)',
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
