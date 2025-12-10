import Link from "next/link";
import LoginForm from "./components/LoginForm";
import { HomeIcon } from "lucide-react";


const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo & Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-bold text-lg"><HomeIcon/></span>
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                Flat<span className="text-primary">Mate</span>
              </span>
            </Link>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Welcome Back
            </h1>
            <p className="mt-2 text-muted-foreground">
              Sign in to continue your search for the perfect home
            </p>
          </div>

          {/* Form */}
         <LoginForm />

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground">
            Dont have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-primary/80 font-semibold">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-primary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative z-10 max-w-md text-center text-primary-foreground p-8">
          <div className="w-24 h-24 mx-auto mb-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">
            Find Your Dream Home
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Join thousands of happy renters who found their perfect flat through FlatFinder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
