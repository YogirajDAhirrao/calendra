import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center p-5 gap-5 animate-fade-in">
      <Image src="/assests/logo.svg" width={100} height={100} alt="Logo" />

      <div>
        <SignIn />
      </div>
    </main>
  );
}
