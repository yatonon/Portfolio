import React, { useRef } from 'react';
import { sendContactForm } from '@/features/index/contact';

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const contact = contactRef.current?.value;
    const message = messageRef.current?.value;

    if (name && contact && message) {
      const data = {
        name,
        contact,
        message,
      };
      
      await sendContactForm(data);
    }
  };

  return (
    <div className="bg-black w-full p-6 md:pt-20 md:pb-20">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            個人名/会社名
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            className="mt-1 block w-full md:w-1/2 p-2.5 bg-gray-700 border border-gray-600 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-300">
            連絡先
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            ref={contactRef}
            className="mt-1 block w-full md:w-1/2 p-2.5 bg-gray-700 border border-gray-600 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            内容
          </label>
          <textarea
            id="message"
            name="message"
            ref={messageRef}
            className="mt-1 block w-full h-32 p-2.5 bg-gray-700 border border-gray-600 text-white"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export { ContactForm };
