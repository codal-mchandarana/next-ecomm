import type { JSX } from "react";

const CookiesPage:React.FC = ():JSX.Element => {
  return (
    <div className="mx-auto my-16 flex max-w-4xl flex-col gap-4 rounded-md p-6 sm:gap-5">
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-3xl font-bold">Cookie Policy</h1>
        <p className="mt-4 text-lg">
          This Cookie Policy explains how we use cookies and similar
          technologies to enhance your browsing experience on our website. By
          using our site, you consent to the use of cookies in accordance with
          this policy.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help improve functionality, analyze site usage, and
            provide personalized content.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">2. Types of Cookies We Use</h2>
          <p>
            We use different types of cookies for various purposes, including:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Essential Cookies:</strong> Required for website
              functionality and security.
            </li>
            <li>
              <strong>Analytical Cookies:</strong> Help us analyze website
              traffic and performance.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to personalize ads and
              promotions.
            </li>
            <li>
              <strong>Preference Cookies:</strong> Store your settings and
              preferences for a better experience.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">3. How We Use Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience by remembering
            your preferences, improving website speed, and showing relevant
            product recommendations.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">4. Managing Cookies</h2>
          <p>
            You can control or disable cookies through your browser settings.
            However, disabling essential cookies may affect website
            functionality.
          </p>
          <a href="/cookie-settings" className="text-blue-500">
            Manage Cookie Preferences
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">5. Third-Party Cookies</h2>
          <p>
            Some cookies are set by third-party services, such as analytics
            providers and advertising networks. We do not have control over
            these cookies, but you can manage them through your browser
            settings.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will
            be posted on this page with the updated effective date.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, feel free to
            contact us at:
          </p>
          <p>
            Email:{' '}
            <a href="mailto:privacy@ecommerce.com" className="text-blue-500">
              privacy@ecommerce.com
            </a>
          </p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
      </div>

      <p className="mt-6 text-center">Last updated: January 2025</p>
    </div>
  );
};

export default CookiesPage;
