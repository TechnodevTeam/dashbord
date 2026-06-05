// app/dashboard/page.tsx
"use client";

import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import('./adminPanel'), { ssr: false });

export default function DashboardPage() {
  return <AdminPanel />;
}