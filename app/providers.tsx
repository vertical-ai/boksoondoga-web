'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SpeedInsights />
    </>
  );
} 