import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <UserButton/>
      </SignedIn>
      Home</div>
  );
}
