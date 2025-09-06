import React from 'react';

// An SVG icon for Google. You can replace this or add others (e.g., for GitHub, Apple).
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.16H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.84l3.66-2.75z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.16l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);


const SignIn = () => {
  return (
    // Main container for the sign-in form.
    // The card styling (bg-card, border, shadow, padding) has been removed.
    // max-w-md and space-y-8 are kept for responsiveness and vertical spacing.
    <div className='w-1xl max-w-md space-y-8'>

      {/* ====== Header ====== */}
      <div className='text-center'>
        <h2 className='text-xl text-gray-400'>Get Started with YourDrive</h2>
        <p className='mt-2 text-sm'>
          Enter your credentials to access your account.
        </p>
      </div>

      {/* ====== Form ====== */}
      <form className='space-y-6'>
        <div className='space-y-4'>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder='Email Address'
              className='w-full p-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-ring focus:outline-none'
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder='Password'
              className='w-full p-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-ring focus:outline-none'
            />
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a href="#" className="font-medium text-muted-foreground hover:text-primary">
              Forgot your password?
            </a>
          </div>
        </div>


        {/* Login Button */}
        <div>
          <button type="submit" className='w-full p-3 rounded-lg bg-primary text-primary-foreground font-bold'>
            Sign In
          </button>
        </div>
      </form>

      {/* ====== Divider ====== */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          {/* Removed 'bg-card' to make the background transparent */}
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* ====== Social Logins ====== */}
      <div>
        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-3 p-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border"
        >
          <GoogleIcon />
          <span>Sign in with Google</span>
        </button>
      </div>

       {/* ====== Sign Up Link ====== */}
       <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <a href="/sign-up" className="font-semibold leading-6 hover:text-primary">
          Sign up
        </a>
      </p>

    </div>
  );
};

export default SignIn;