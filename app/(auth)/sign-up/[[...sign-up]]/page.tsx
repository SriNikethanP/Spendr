import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full  hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={400} width={400} alt="Logo" />
      </div>
      <div className="h-full lg:flex flex-col items-center justify-center">
        <div className="text-center pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">Welcome!</h1>
          <p className="text-base text-[#7e8c80]">
            Create an account to start tracking your expenses
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
