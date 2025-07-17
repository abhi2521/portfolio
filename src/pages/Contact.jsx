import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const contactDetails = [
    {
      icon: <MdEmail size={24} />,
      title: 'Email',
      value: 'abhishek250404abhi@gmail.com',
      link: 'mailto:abhishek250404abhi@gmail.com',
    },
    {
      icon: <FaLinkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/abhishek-kumar-r',
      link: 'www.linkedin.com/in/abhishek-kumar-r-213644224',
    },
    {
      icon: <FaInstagram size={24} />,
      title: 'Instagram',
      value: '@_.abhxhxk._',
      link: 'https://instagram.com/abhi.codes',
    },
    {
      icon: <FaFacebook size={24} />,
      title: 'Facebook',
      value: 'fb.com/abhishek',
      link: 'https://www.facebook.com/share/16ziiW7HZi/',
    },
    {
      icon: <FaGithub size={24} />,
      title: 'GitHub',
      value: 'github.com/abhishekdev',
      link: 'https://github.com/Abhishek250404',
    },
  ];

  return (
    <section className="bg-white min-h-screen py-16 px-6 text-black">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white hover:bg-gray-100 transition p-5 rounded-xl shadow-md"
            >
              <div className="text-black">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
