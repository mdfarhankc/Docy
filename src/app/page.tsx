import { CloudIcon, CombineIcon, FilePenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10 dark:bg-secondary">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-4xl text-primary font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Effortless Document Creation and Collaboration
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Unlock the power of seamless document editing, real-time
              collaboration, and secure cloud storage with our Google Docs
              clone.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/documents"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-white dark:text-black px-8 text-sm font-medium shadow transition-colors hover:bg-primary/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/hero.gif"
              width={400}
              height={400}
              unoptimized
              alt="Hero"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#4285f4] rounded-md p-3 text-white">
              <FilePenIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Document Editing</h3>
            <p className="text-muted-foreground md:text-lg">
              Create, edit, and format documents with our intuitive interface.
              Enjoy seamless typing, formatting, and collaboration.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#34a853] rounded-md p-3 text-white">
              <CombineIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Real-Time Collaboration</h3>
            <p className="text-muted-foreground md:text-lg">
              Work together in real-time, see edits as they happen, and leave
              comments for your team.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#fbbc05] rounded-md p-3 text-white">
              <CloudIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Secure Cloud Storage</h3>
            <p className="text-muted-foreground md:text-lg">
              Store your documents securely in the cloud, access them from
              anywhere, and never worry about losing your work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
