import Link from "next/link";
import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Terms of Service
        </h1>
        <p className="mb-6">
          Welcome to ZDocs. These terms and conditions outline the rules and
          regulations for the use of our app.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">1. Terms</h2>
        <p className="mb-4">
          By accessing this app, you are agreeing to be bound by these terms of
          service, all applicable laws and regulations, and agree that you are
          responsible for compliance with any applicable local laws.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          2. Use License
        </h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on ZDocs&apos;s app for personal,
          non-commercial transitory viewing only.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          3. Disclaimer
        </h2>
        <p className="mb-4">
          The materials on ZDocs&apos;s app are provided on an &apos;as is&apos;
          basis. ZDocs makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          4. Limitations
        </h2>
        <p className="mb-4">
          In no event shall ZDocs or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption).
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          5. Modifications
        </h2>
        <p className="mb-4">
          ZDocs may revise these terms of service for its app at any time
          without notice. By using this app you are agreeing to be bound by the
          then current version of these terms of service.
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

export default TermsOfServicePage;
