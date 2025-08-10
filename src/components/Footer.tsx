'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: '#212121', fontFamily: 'var(--font-source-sans)' }} className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-16">
          {/* Menu Sections */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-16">
            {/* Company Section */}
            <div className="flex flex-col gap-10">
              <h3 style={{ fontFamily: 'var(--font-source-sans)' }} className="text-white text-[22px] font-bold leading-[120%]">
                Company
              </h3>
              <div className="flex flex-col gap-4">
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  About us
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Team
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Careers
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Blog
                </button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-10">
              <h3 style={{ fontFamily: 'var(--font-source-sans)' }} className="text-white text-[22px] font-bold leading-[120%]">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Help & support
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Partner with us
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Ride with us
                </button>
              </div>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col gap-10">
              <h3 style={{ fontFamily: 'var(--font-source-sans)' }} className="text-white text-[22px] font-bold leading-[120%]">
                Legal
              </h3>
              <div className="flex flex-col gap-4">
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Terms and conditions
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Refund & cancellation
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Privacy policy
                </button>
                <button style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-normal leading-[100%] text-left hover:text-white transition-colors">
                  Cookie policy
                </button>
              </div>
            </div>
          </div>

          {/* Follow + Subscription Section */}
          <div className="flex flex-col gap-11 lg:ml-auto">
            {/* Follow Us */}
            <div className="flex flex-col gap-10">
              <h3 style={{ fontFamily: 'var(--font-source-sans)' }} className="text-[#F5F5F5] text-[18px] font-bold leading-[120%] uppercase opacity-60">
                Follow Us
              </h3>
              <div className="flex gap-4 opacity-80">
                <button className="text-[#F5F5F5] text-[24px] hover:text-white transition-colors">
                  <svg width="21" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button className="text-[#F5F5F5] text-[24px] hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-[#F5F5F5] text-[24px] hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Subscription */}
            <div className="flex flex-col gap-10">
              <p style={{ fontFamily: 'var(--font-open-sans)' }} className="text-[#BBBBBB] text-[18px] font-bold leading-[140%]">
                Receive exclusive offers in your mailbox
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-4">
                <div className="flex items-center bg-[#424242] rounded-lg px-4 py-2 flex-1 max-w-[334px]">
                  <svg className="w-6 h-6 text-[#ADADAD] mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <input
                    type="email"
                    style={{ fontFamily: 'var(--font-open-sans)' }}
                    className="bg-transparent text-[#ADADAD] text-[18px] leading-[140%] placeholder-[#ADADAD] outline-none flex-1"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{ 
                    fontFamily: 'var(--font-source-sans)',
                    background: 'linear-gradient(92.84deg, #FFB800 -47.72%, #FF8A00 136.81%)',
                    boxShadow: '0px 5px 8px rgba(222, 151, 0, 0.24), 0px 14px 32px rgba(255, 178, 14, 0.29)'
                  }}
                  className="px-6 py-4 rounded-lg text-white text-[18px] font-bold leading-[100%] text-center min-w-[133px]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-[#424242] mb-4"></div>

        {/* Bottom Rights Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[15px]">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'var(--font-open-sans)' }} className="text-[#F5F5F5] leading-[120%]">All rights Reserved</span>
            <span className="text-[#F5F5F5]">©</span>
          </div>
          
          <div style={{ fontFamily: 'var(--font-open-sans)' }} className="text-[#F5F5F5] font-bold leading-[120%]">
            Food Management System, 2025
          </div>
          
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'var(--font-open-sans)' }} className="text-[#F5F5F5] leading-[120%]">Made with ❤️ by</span>
            <span style={{ fontFamily: 'var(--font-open-sans)' }} className="text-[#F5F5F5] font-bold leading-[120%]">
              Mostefa Terbche
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
