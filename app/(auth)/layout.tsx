import React from 'react';

// This component wraps the sign-in and sign-up pages.
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      {/* ====== Left Panel: Branding ====== */}
      {/* - Hidden on mobile (`hidden`), visible on large screens (`lg:flex`).
        - Uses 'bg-card' and 'border-border' from your theme.
        - 'flex-col justify-center' centers the content vertically.
      */}
      <section className='hidden lg:flex flex-col justify-center p-12 lg:w-2/5 xl:w-1/3 bg-card border-r border-border relative'>
        <div className='space-y-1'>
          {/* The h1 will automatically pick up the gradient style from global.css */}
          
          <p className='text-xl text-primary uppercase'>Manage your files with</p>
          <h1 className='text-2xl'>YourDrive</h1>
          {/* The p tag will automatically pick up text-muted-foreground from global.css */}
          <p className='text-md leading-relaxed'>
            Welcome back. Sign in to access your dashboard and manage your account.
          </p>
        </div>

        <footer className='absolute bottom-10 text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Your Company Name Inc.
        </footer>
      </section>

      {/* ====== Right Panel: Form Area ====== */}
      {/* - Takes full width on mobile and remaining width on large screens (`flex-1`).
        - 'justify-center items-center' centers the form component in the available space.
      */}
      <section className='flex flex-1 justify-center items-center p-6 sm:p-12'>
        {/* {children} will be your <SignIn /> or <SignUp /> component */}
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;