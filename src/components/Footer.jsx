import { FaTwitter, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaTwitter,
      label: 'Twitter',
      url: 'https://twitter.com/honeypot1104',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      url: 'https://instagram.com/milestech117',
    },
    {
      icon: FaTiktok,
      label: 'TikTok',
      url: 'https://tiktok.com/@milestech117',
    },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Primary: +255 769 623 698',
      url: 'tel:+255769623698',
    },
    {
      icon: FaPhone,
      label: 'Secondary: +255 163 42002',
      url: 'tel:+25516342002',
    },
    {
      icon: FaEnvelope,
      label: 'iddyrajabu117@gmail.com',
      url: 'mailto:iddyrajabu117@gmail.com',
    },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-accent">Milestone</span>
              <span className="ml-2">Technologies</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Professional app development services by MilesTech117. Transforming ideas into powerful mobile applications with cutting-edge technology and exceptional design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors duration-300">Packages</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.url}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <contact.icon className="mr-2" />
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Milestone Technologies | MilesTech117. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 