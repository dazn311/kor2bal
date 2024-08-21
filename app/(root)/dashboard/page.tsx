'use client';
import React, {FC} from "react";
import {useSession} from "next-auth/react";
import {notFound} from "next/navigation";
import './dashboard.styles.css';

// export const dynamic = 'force-static';
export const dynamic = 'force-dynamic';

export const DashboardPage:FC = () => {
  const {data: session} = useSession();
  console.log('[13 DashboardPage] user:',JSON.stringify(session,null,2));
  if (!session) {
    return notFound();
  }

  return (
    <div className="ProfilePage">
        Profile Page
    </div>
  )
}
export default DashboardPage;
