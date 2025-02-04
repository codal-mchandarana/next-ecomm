import React, { type JSX } from 'react';

const TermsAndConditionsPage = (): JSX.Element => {
  return (
    <div className="mx-auto my-16 flex max-w-4xl flex-col gap-4 rounded-md p-6 sm:gap-5">
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-3xl font-bold">Terms and Conditions</h1>
        <p className="mt-4 text-lg">
          These Terms and Conditions (&quot;Terms&quot;) govern your use of our
          website and services. By accessing or using our website, you agree to
          be bound by these terms. If you do not agree, please do not use the
          services.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to comply with these
            Terms and Conditions. If you do not agree, you must refrain from
            using the services. These terms may be updated at any time, and the
            revised terms will be posted on this page with a new effective date.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify, update, or revise these Terms at any
            time. It is your responsibility to check this page periodically for
            any updates. Your continued use of the website after any changes to
            these Terms constitutes your acceptance of the new terms.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <p>
            You agree to use the website in accordance with all applicable laws
            and regulations. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account. You agree not to use the website for
            any unlawful or prohibited activities.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">4. Account Security</h2>
          <p>
            You are responsible for the security of your account, including your
            username and password. You agree to notify us immediately if you
            suspect any unauthorized access to your account.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">
            5. Product Information and Availability
          </h2>
          <p>
            While we strive to provide accurate product descriptions, images,
            and pricing, we do not guarantee that the information is error-free.
            Product availability is subject to change without notice. We reserve
            the right to limit quantities or refuse orders if necessary.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">6. Payment and Billing</h2>
          <p>
            All payments for products and services must be made in full at the
            time of purchase. We accept payment through various methods,
            including credit cards and online payment services. By providing
            payment information, you authorize us to charge the appropriate
            amount to your selected payment method.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">7. Shipping and Delivery</h2>
          <p>
            Shipping times and availability may vary based on your location. We
            will make reasonable efforts to fulfill your order promptly, but we
            are not liable for delays caused by third-party shipping carriers or
            events beyond our control.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">8. Returns and Refunds</h2>
          <p>
            Our return and refund policy is outlined separately. Generally,
            items may be returned within a specified period after purchase,
            provided they are in unused condition with original packaging.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            damages, including but not limited to indirect, incidental, or
            consequential damages, arising out of the use or inability to use
            the website or services. Our liability is limited to the amount paid
            for the product or service.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">10. Dispute Resolution</h2>
          <p>
            Any disputes arising from or related to these Terms will be resolved
            through binding arbitration, rather than in court. You agree to
            resolve any claims with us on an individual basis, and not as part
            of a class action.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">11. Privacy Policy</h2>
          <p>
            Please review our Privacy Policy, which explains how we collect and
            use your personal information. Your use of the website indicates
            that you agree to our Privacy Policy.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of [Your
            Country], and any disputes will be subject to the jurisdiction of
            the courts located in [Your City/State].
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">13. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:
          </p>
          <p>
            Email:{' '}
            <a href="mailto:support@ecommerce.com" className="text-blue-500">
              support@ecommerce.com
            </a>
          </p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
      </div>

      <p className="mt-6 text-center">Last updated: January 2025</p>
    </div>
  );
};

export default TermsAndConditionsPage;
