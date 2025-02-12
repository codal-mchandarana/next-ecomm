import type { JSX } from "react";

const AccessibilityPage:React.FC = ():JSX.Element => {
  return (
    <div className="mx-auto my-16 flex max-w-4xl flex-col gap-4 rounded-md p-6 sm:gap-5">
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-3xl font-bold">Accessibility Statement</h1>
        <p className="mt-4 text-lg">
          We are committed to ensuring our website is accessible to all users,
          including individuals with disabilities. If you encounter any
          accessibility barriers, please let us know.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">1. Our Commitment</h2>
          <p>
            We strive to provide an inclusive online shopping experience for all
            users. Our website follows Web Content Accessibility Guidelines
            (WCAG) to improve usability for people with disabilities.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">2. Accessibility Features</h2>
          <p>
            Our website includes features designed to improve accessibility,
            including:
          </p>
          <ul className="list-disc pl-6">
            <li>Keyboard navigability for all interactive elements</li>
            <li>
              Screen reader compatibility for clear and structured content
            </li>
            <li>Alt text for images and multimedia elements</li>
            <li>High-contrast color options for better readability</li>
            <li>Resizable text without loss of functionality</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">
            3. Third-Party Integrations
          </h2>
          <p>
            Some third-party services on our website, such as payment gateways
            and embedded content, may not fully meet accessibility standards. We
            are working with our partners to improve accessibility.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">
            4. Reporting Accessibility Issues
          </h2>
          <p>
            If you experience any difficulty accessing content on our website,
            please contact us. We value your feedback and will take steps to
            address any issues.
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:accessibility@ecommerce.com"
              className="text-blue-500"
            >
              accessibility@ecommerce.com
            </a>
          </p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">5. Future Improvements</h2>
          <p>
            We are continuously working to enhance the accessibility of our
            website. Our goal is to ensure a seamless shopping experience for
            all users, regardless of their abilities.
          </p>
        </div>
      </div>

      <p className="mt-6 text-center">Last updated: January 2025</p>
    </div>
  );
};

export default AccessibilityPage;
