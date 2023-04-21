interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      {children}
    </main>
  );
};
