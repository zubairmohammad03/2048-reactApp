import React from "react";

const Term = () => {
  return (
    <div className=" bg-white overflow-hidden shadow-lg">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-10 px-5 text-center">
        <h1 className="text-4xl font-semibold">Terms & Conditions</h1>
        <p className="text-xl mt-3">Last Updated: 21/03/2025</p>
      </header>
      <main className="px-5 py-10 text-lg leading-relaxed">
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <p>
            Welcome to Kheliyo! These Terms & Conditions govern your use of our
            platform. By accessing or using Kheliyo.com, you agree to comply
            with these terms. If you do not agree, please discontinue use
            immediately.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            1. Eligibility
          </h2>
          <p>You must be at least 18 years old to use Kheliyo.com.</p>
          <p>
            By registering, you confirm that you are legally permitted to
            participate in skill-based games with real-money rewards in your
            jurisdiction.
          </p>
          <p>
            Users from regions where skill-based gaming with rewards is
            restricted are not eligible to participate.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            2. Nature of the Games
          </h2>
          <p>
            Kheliyo offers skill-based games where winnings are determined
            solely by a player's performance, not by chance.
          </p>
          <p>
            No deposits or entry fees are required to participate in any game.
          </p>
          <p>
            The platform operates as a free-to-play, reward-based gaming
            website.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            3. Rewards &amp; Payouts
          </h2>
          <p>
            Winners are determined based on performance, ranking, or leaderboard
            standings.
          </p>
          <p>
            Payouts are processed via UPI, bank transfers, or approved
            e-wallets.
          </p>
          <p>
            Users must complete identity verification (KYC) before requesting
            withdrawals.
          </p>
          <p>
            Winnings exceeding ₹10,000 will be subject to Tax Deducted at Source
            (TDS) as per Indian tax regulations.
          </p>
          <p>
            Kheliyo.com reserves the right to review and validate winnings
            before processing payouts.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            4. User Conduct
          </h2>
          <p>
            Users must not engage in any fraudulent activities, including but
            not limited to:
          </p>
          <ul className="list-inside pl-5">
            <li>Creating multiple accounts.</li>
            <li>Using bots, scripts, or unfair means to gain an advantage.</li>
            <li>Exploiting system bugs or vulnerabilities.</li>
          </ul>
          <p>
            Any violation of these rules may result in account suspension or
            disqualification from winnings.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            5. Advertisements &amp; Sponsorships
          </h2>
          <p>
            Kheliyo generates revenue through advertisements and sponsorships.
          </p>
          <p>
            Users may be required to view ads before, during, or after gameplay
            to maintain free access.
          </p>
          <p>Rewards are funded through ad revenue, not user deposits.</p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            6. Privacy &amp; Data Protection
          </h2>
          <p>
            Kheliyo collects and stores user data in accordance with our Privacy
            Policy.
          </p>
          <p>
            Personal data, including KYC information, is securely stored and
            will not be shared with third parties except as required by law.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            7. Limitation of Liability
          </h2>
          <p>Kheliyo is not responsible for:</p>
          <ul className="list-inside pl-5">
            <li>Technical issues, server downtime, or interruptions.</li>
            <li>Loss of earnings due to misinterpretation of rules.</li>
            <li>Unavailability of rewards due to unforeseen circumstances.</li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            8. Modifications to Terms
          </h2>
          <p>
            Kheliyo reserves the right to update or modify these terms at any
            time.
          </p>
          <p>
            Continued use of the platform after modifications constitutes
            acceptance of the updated terms.
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            9. Contact &amp; Support
          </h2>
          <p>
            For any queries, disputes, or support, please contact us at{" "}
            <a
              href="mailto:Contact@kheliyo.com"
              className="text-indigo-600 hover:text-purple-700"
            >
              Contact@kheliyo.com
            </a>
          </p>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <p>
            By using Kheliyo, you acknowledge that you have read, understood,
            and agreed to these terms.
          </p>
          <p>Happy gaming!</p>
        </section>
      </main>
      <footer className="bg-gray-100 text-center py-5 text-sm text-gray-600 border-t border-gray-200">
        &copy; 2025 Kheliyo. All rights reserved.
      </footer>
    </div>
  );
};

export default Term;
