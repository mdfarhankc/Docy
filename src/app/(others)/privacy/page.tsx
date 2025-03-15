import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-primary">Privacy Policy</h1>
        <p className="mb-6">
          Your privacy is important to us. It is ZDocs&apos;s policy to respect
          your privacy regarding any information we may collect from you across
          our app, ZDocs, and other sites we own and operate.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          2. Use of Information
        </h2>
        <p className="mb-4">
          We use collected information solely to provide or improve our services
          to you. We do not share any personally identifying information
          publicly or with third-parties, except when required to by law.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          3. Data Storage
        </h2>
        <p className="mb-4">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          4. Your Rights
        </h2>
        <p className="mb-4">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          5. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Z-Docs. All rights reserved.
        </p>
        <div className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Go Home
          </Link>
          <Link
            href="terms-of-service"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
