import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <section className="relative pt-30 pb-5 sm:pt-50 min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-orange-300 rounded-full blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Auth Card */}
      <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-amber-100 z-10">
        <h1 className="text-4xl font-black text-center mb-6 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in to continue your sweet journey 🍬
        </p>

        <SignIn
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-600 text-white font-bold rounded-xl px-4 py-3 hover:shadow-xl transition-all",
              footerAction__signUp:
                "text-amber-600 font-semibold hover:text-orange-600",
              formFieldInput:
                "rounded-xl border-amber-200 focus:ring-amber-500",
            },
          }}
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          afterSignInUrl="/"
        />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default SignInPage;
