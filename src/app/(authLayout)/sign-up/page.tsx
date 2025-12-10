import { HomeIcon } from "lucide-react";
import Link from "next/link";
import SignUpForm from "./components/SignUpForm";
// import { useToast } from "@/hooks/use-toast";



const Signup = () => {


  return (
    <div className="min-h-screen bg-gradient-hero flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-secondary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative z-10 max-w-md text-center text-secondary-foreground p-8">
          <div className="w-24 h-24 mx-auto mb-8 bg-secondary-foreground/20 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            Create an account to save your favorites, get personalized recommendations, and connect with landlords directly.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-secondary-foreground/70">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5K+</div>
              <div className="text-sm text-secondary-foreground/70">Listings</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-secondary-foreground/70">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-lg w-full space-y-8">
          {/* Logo & Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-bold text-lg"><HomeIcon /></span>
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                Flat<span className="text-primary">Mate</span>
              </span>
            </Link>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Create Account
            </h1>
            <p className="mt-2 text-muted-foreground">
              Start your journey to find the perfect home
            </p>
          </div>

          {/* Form */}
          <SignUpForm/>

          {/* Sign In Link */}
          <p className="text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary/80 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
