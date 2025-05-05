
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Visit Our Store</h3>
            <div className="flex flex-col space-y-4 mb-6 md:mb-8">
              <div className="flex items-start">
                <MapPin className="text-navyellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">123 Fashion Street, Clothing District, City - 400001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-navyellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-navyellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 break-words">info@navkarfashion.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Store Hours</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Monday - Saturday</td>
                    <td className="py-2 text-gray-600">10:00 AM - 9:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Sunday</td>
                    <td className="py-2 text-gray-600">11:00 AM - 6:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navyellow focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navyellow focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navyellow focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
