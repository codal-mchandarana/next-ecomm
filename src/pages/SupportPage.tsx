import type { JSX } from "react";

const SupportPage:React.FC = ():JSX.Element => {
  return (
    <div className="mx-auto my-16 flex max-w-4xl flex-col gap-4 rounded-md p-6 sm:gap-5">
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-3xl font-bold">Customer Support</h1>
        <p className="mt-4 text-lg">
          Need help? Our support team is here to assist you with any questions
          or issues. Explore our FAQs or contact us directly for assistance.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">1. Contact Support</h2>
          <p>
            Our dedicated support team is available to help you with order
            issues, product inquiries, and technical assistance. You can reach
            us via email, phone, or live chat.
          </p>
          <p>
            Email:{' '}
            <a href="mailto:support@ecommerce.com" className="text-blue-500">
              support@ecommerce.com
            </a>
          </p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Live Chat: Available Mon-Fri, 9 AM - 6 PM</p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">2. Order Tracking</h2>
          <p>
            Want to check your order status? Use our order tracking tool to get
            real-time updates. Simply enter your order ID and email address to
            see your shipment details.
          </p>
          <a href="/track-order" className="text-blue-500">
            Track My Order
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">3. Returns & Refunds</h2>
          <p>
            We want you to be completely satisfied with your purchase. If you&apos;re
            not happy with a product, you can return it within 30 days for a
            full refund. Check our return policy for details.
          </p>
          <a href="/returns-policy" className="text-blue-500">
            View Return Policy
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">4. Payment & Billing</h2>
          <p>
            We accept multiple payment methods, including credit cards, PayPal,
            and digital wallets. If you experience any billing issues, please
            contact us immediately.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">5. Technical Support</h2>
          <p>
            Having trouble with our website or your account? Our technical
            support team can assist with login issues, payment errors, and other
            technical difficulties.
          </p>
          <a href="/help-center" className="text-blue-500">
            Visit Help Center
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">6. Shipping Information</h2>
          <p>
            Shipping times and costs vary by location. We provide standard and
            express shipping options. Use our shipping calculator at checkout to
            estimate delivery times.
          </p>
          <a href="/shipping-info" className="text-blue-500">
            Learn More About Shipping
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-2xl font-semibold">
            7. Frequently Asked Questions (FAQs)
          </h2>
          <p>
            Have a question? Check out our FAQs for quick answers about orders,
            shipping, payments, and more.
          </p>
          <a href="/faqs" className="text-blue-500">
            View FAQs
          </a>
        </div>
      </div>

      <p className="mt-6 text-center">Last updated: January 2025</p>
    </div>
  );
};

export default SupportPage;