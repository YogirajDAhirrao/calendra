import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center p-5 gap-5 animate-fade-in">
      <Image src="/assests/logo.svg" width={100} height={100} alt="Logo" />

      <div>
        <SignUp />
      </div>
    </main>
  );
}
