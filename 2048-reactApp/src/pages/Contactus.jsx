import React from "react";

const Contactus = () => {
  return (
    <div className=" bg-white  overflow-hidden shadow-lg">
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-10 px-5 text-center">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="text-xl mt-3">We’d love to hear from you!</p>
      </header>
      <main className="px-5 py-10">
        <section className="mb-10 text-lg leading-relaxed text-center">
          <p>
            Whether you have a question, feedback, or need support, feel free to
            reach out to us. Our team is here to assist you.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Customer Support
          </h2>
          <p>
            For general inquiries, technical issues, or assistance, contact us
            at:
          </p>
          <ul className="list-inside list-disc pl-6">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:Support@kheliyo.com"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Support@kheliyo.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +91 9643763804
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Business &amp; Partnerships
          </h2>
          <p>
            Interested in collaborating with Kheliyo.com? Reach out to us for
            business inquiries, sponsorships, and advertising opportunities.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Contact@kheliyo.com"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Contact@kheliyo.com
            </a>
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Follow Us on Social Media
          </h2>
          <p>
            Stay updated with the latest news, game releases, and promotions by
            following us on social media:
          </p>
          <ul className="list-inside list-disc pl-6">
            <li>
              <strong>Facebook:</strong>{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Facebook Link
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Instagram Link
              </a>
            </li>
            <li>
              <strong>Twitter/X:</strong>{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Twitter Link
              </a>
            </li>
            <li>
              <strong>YouTube:</strong>{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                YouTube Link
              </a>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Visit Us
          </h2>
          <p>
            If you’d like to meet our team or send us physical correspondence,
            you can find us at:
          </p>
          <p>
            <strong>Address:</strong> Khanna Market, Lodhi Road, New
            Delhi-110003
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <p>
            We aim to respond to all queries within 24-48 hours. Thank you for
            being a part of Kheliyo.com!
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-5 text-sm text-gray-600 border-t border-gray-200">
        &copy; 2025 Kheliyo.com. All rights reserved.
      </footer>
    </div>
  );
};

export default Contactus;
