import { SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      Home</div>
  );
}
