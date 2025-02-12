import React, { type JSX } from 'react';

const PrivacyPolicyPage = (): JSX.Element => {
  return (
    <div className="mx-auto my-16 flex max-w-4xl flex-col gap-4 rounded-md p-6 sm:gap-5">
      <h1 className="mx-auto text-3xl font-bold">Privacy Policy</h1>
      <p className="text-lg">
        This Privacy Policy (&quot;Policy&quot;) explains how we collect, use,
        disclose, and safeguard your information when you visit our website or
        use our services. By accessing our website, you consent to the practices
        described in this Policy.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when
            you create an account, place an order, or contact customer support.
            This may include your name, email address, phone number, shipping
            address, and payment details.
          </p>
          <p>
            Additionally, we may automatically collect certain information when
            you use our website, including your IP address, browser type,
            operating system, and browsing behavior.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">2. Use of Information</h2>
          <p>
            We use the information we collect to provide and improve our
            services, process transactions, communicate with you, and comply
            with legal obligations. We may also use your information to send
            promotional materials, which you can opt out of at any time.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">3. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information to third parties.
            However, we may share your information with trusted service
            providers who assist us in operating our website, processing
            payments, or fulfilling orders. These third parties are obligated to
            maintain the confidentiality of your information.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">
            4. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. Cookies help us remember your preferences
            and analyze website traffic. You can manage your cookie preferences
            through your browser settings.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access, loss, or
            misuse. However, no method of transmission over the Internet or
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, such as the right to access, correct, or
            delete your data. To exercise these rights, please contact us using
            the information provided below.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            We encourage you to review the privacy policies of third-party
            websites you visit.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">8. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for use by children under the age of 13.
            We do not knowingly collect personal information from children. If
            we become aware that we have collected information from a child
            under 13, we will take steps to delete it.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">9. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The revised
            Policy will be posted on this page with a new effective date. We
            encourage you to review this Policy periodically to stay informed
            about how we are protecting your information.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p>
            Email:{' '}
            <a href="mailto:support@ecommerce.com" className="text-blue-500">
              support@ecommerce.com
            </a>
          </p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>

        <p className="mt-4 text-center">Last updated: January 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
