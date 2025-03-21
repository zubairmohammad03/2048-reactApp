import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-white  overflow-hidden shadow-lg">
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-10 px-5 text-center">
        <h1 className="text-4xl font-semibold">Disclaimer</h1>
        <p className="text-xl mt-3">Last Updated: 21/03/2025</p>
      </header>
      <main className="px-5 py-10 text-lg leading-relaxed">
        <section className="mb-10">
          <p>
            Welcome to{" "}
            <a
              href="https://kheliyo.com"
              target="_blank"
              className="text-orange-600 hover:text-orange-800"
            >
              Kheliyo
            </a>
            . By accessing this website, you acknowledge and agree to the
            disclaimers outlined below. If you do not agree with any part of
            this disclaimer, please discontinue use immediately.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            1. No Real-Money Gambling
          </h2>
          <p>
            Kheliyo is a free-to-play, skill-based gaming platform that does not
            offer gambling or betting services. No real-money deposits are
            required to participate in any games. All winnings are based solely
            on user skill and performance.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            2. No Guarantees of Earnings
          </h2>
          <p>
            Participation in games does not guarantee any winnings. Rewards and
            payouts are subject to leaderboard rankings, game performance, and
            platform policies. Kheliyo.com is not liable for any user
            expectations regarding earnings or rewards.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            3. Compliance with Local Laws
          </h2>
          <p>
            Users are responsible for ensuring that their participation in
            skill-based games complies with the laws of their jurisdiction.
            Kheliyo.com does not assume responsibility for users violating
            state, national, or international laws.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            4. Advertisements &amp; Third-Party Links
          </h2>
          <p>
            Kheliyo may display advertisements and sponsored content to support
            the platform. We do not endorse, control, or take responsibility for
            third-party websites, links, or services advertised on the platform.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            5. Technical Issues &amp; Availability
          </h2>
          <p>
            Kheliyo does not guarantee uninterrupted access to the website. We
            are not responsible for server downtime, technical failures, or user
            device issues that may affect gameplay or rewards.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            6. No Liability for Losses
          </h2>
          <p>
            Kheliyo is not responsible for any direct, indirect, incidental, or
            consequential losses arising from the use of our platform. Users
            acknowledge that they participate at their own risk.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            7. Changes to Disclaimer
          </h2>
          <p>
            Kheliyo reserves the right to modify this disclaimer at any time
            without prior notice. Continued use of the platform after changes
            implies acceptance of the updated terms.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <p>
            For any queries or concerns, please contact us at{" "}
            <a
              href="mailto:Contact@kheliyo.com"
              className="text-orange-600 hover:text-orange-800"
            >
              Contact@kheliyo.com
            </a>
            .
          </p>
          <p>
            By using Kheliyo, you confirm that you have read, understood, and
            agreed to this disclaimer.
          </p>
        </section>
      </main>
      <footer className="bg-gray-100 text-center py-5 text-sm text-gray-600 border-t border-gray-200">
        &copy; 2025 Kheliyo.com. All rights reserved.
      </footer>
    </div>
  );
};

export default Disclaimer;
