import Link from "next/link";
import React from "react";

const LearnMorePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-5xl mx-auto">
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold text-primary">Welcome to ZDocs</h1>
          <p className="mt-4 text-xl">
            Your Ultimate Tool for Creating, Editing, and Collaborating on
            Documents.
          </p>
        </section>
        <section className="py-12">
          <h2 className="text-4xl font-semibold text-primary">Features</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                ✓
              </span>
              <span>Create and edit documents in real-time.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                ✓
              </span>
              <span>Collaborate seamlessly with your team.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                ✓
              </span>
              <span>Access your documents from anywhere.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                ✓
              </span>
              <span>Secure and private by design.</span>
            </li>
          </ul>
        </section>
        <section className="py-12">
          <h2 className="text-4xl font-semibold text-primary">
            Why Choose ZDocs?
          </h2>
          <div className="mt-6 space-y-4">
            <p>
              ZDocs offers an intuitive interface and robust features that make
              document creation and collaboration a breeze. Whether you&apos;re
              working on a solo project or collaborating with a team, ZDocs has
              you covered.
            </p>
            <p>
              Our platform is built with security and privacy in mind, ensuring
              that your documents are safe and accessible only to those you
              share them with.
            </p>
            <p>
              Join thousands of users who have made ZDocs their go-to document
              management tool and experience the difference for yourself.
            </p>
          </div>
        </section>
        <section className="text-center py-12">
          <Link
            href="/documents"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-primary/80 transition-colors"
          >
            Create Your Stylish Documents Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LearnMorePage;
