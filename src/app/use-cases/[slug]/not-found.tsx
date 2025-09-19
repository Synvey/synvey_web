import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-[90rem] px-3 py-16 sm:px-4 lg:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Use Case Not Found
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            The use case you're looking for doesn't exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/use-cases">View All Use Cases</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
