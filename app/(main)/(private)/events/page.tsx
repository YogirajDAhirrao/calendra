import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarPlus } from "lucide-react";

export default function Page() {
  return (
    <section className="flex flex-col items-center gap-16 animate-fade-in">
      <div className="flex gap-4 items-baseline">
        <h1 className="text-4xl x1:text-5xl font-black mb-6">Events</h1>
        <Button
          className="bg-blue-500 hover:bg-blue-400 text-white py-6 hover:scale-110 duration-400 border-b-4 border-blue-700 hover:border-blue-300 rounded-2xl text-2xl font-black"
          asChild
        >
          <Link href="/events/new">
            <CalendarPlus className="mr-4 size-7" />
            Create Event
          </Link>
        </Button>
      </div>
    </section>
  );
}
