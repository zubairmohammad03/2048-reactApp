import React from "react";

const Aboutus = () => {
  return (
    <div className="  bg-white  overflow-hidden shadow-lg">
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-10 px-5 text-center">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="text-xl mt-3">
          Welcome to Kheliyo – Play, Compete and Win!
        </p>
      </header>
      <main className="px-5 py-10">
        <section className="mb-10 text-lg leading-relaxed">
          <p>
            At{" "}
            <a
              href="https://kheliyo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Kheliyo
            </a>
            , we believe in making gaming fun, competitive and rewarding. Our
            platform is designed for players who love skill-based games and want
            to test their abilities while earning exciting rewards. Unlike
            traditional gaming websites, Kheliyo.com is a completely
            free-to-play platform where users can participate in games without
            any deposits or entry fees.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Our Mission
          </h2>
          <p>
            Our mission is simple – to create an engaging and fair gaming
            environment where players can enjoy skill-based challenges and get
            rewarded for their talent. We aim to build a community of passionate
            gamers who love competing and improving their skills.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            What We Offer
          </h2>
          <ul className="list-inside list-disc pl-6">
            <li>
              <strong>Skill-Based Games:</strong> Play exciting games that
              challenge your reflexes, strategy, and intelligence.
            </li>
            <li>
              <strong>Real Rewards:</strong> Earn real-money rewards based on
              your performance and leaderboard standings.
            </li>
            <li>
              <strong>Zero Investment Gaming:</strong> No deposits, no risk –
              just pure entertainment and rewards.
            </li>
            <li>
              <strong>Ad-Supported Model:</strong> We generate revenue through
              ads, allowing us to offer free gameplay and rewards.
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Why Choose Kheliyo?
          </h2>
          <ul className="list-inside list-disc pl-6">
            <li>100% Free-to-Play Platform</li>
            <li>Skill-Based Competitions</li>
            <li>Transparent Payout System</li>
            <li>Exciting Games &amp; Regular Updates</li>
            <li>Secure &amp; Fair Gaming Environment</li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Our Vision
          </h2>
          <p>
            We envision Kheliyo.com as a leading destination for skill-based
            gaming, where players from around the world can showcase their
            talents and win rewards without any financial risk. Our team
            continuously works to enhance the gaming experience, introduce new
            games and ensure fair play for all users.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Company Details
          </h2>
          <p>
            <strong>Kheliyo</strong> is owned and operated by Veganique
            Technologies Private Limited. Our company is dedicated to providing
            innovative and engaging gaming experiences while maintaining the
            highest standards of fairness and security. Join us &amp; start
            playing!
          </p>
          <p>
            <strong>Registered Address:</strong> Lodhi Road, India
            <br />
            <strong>GST Number:</strong> 07AAKCV2543A1ZL
            <br />
            <strong>PAN Number:</strong> AAKCV2543A
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <p>
            Whether you’re a casual gamer or a competitive player, Kheliyo.com
            has something for everyone. Sign up today, start playing, and
            experience the thrill of skill-based gaming like never before!
          </p>
          <p>
            For any inquiries or support, contact us at{" "}
            <a
              href="mailto:Contact@kheliyo.com"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Contact@kheliyo.com
            </a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-5 text-sm text-gray-600 border-t border-gray-200">
        &copy; 2025 Kheliyo.com. All rights reserved.
      </footer>
    </div>
  );
};

export default Aboutus;
