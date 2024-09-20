'use client';

import React from "react";
import {useSession} from "next-auth/react";
import './dashboard.styles.css';

export default function DashboardPage() {
  const {data: session} = useSession();

  if (!session) {
    return <div>Вы не авторизованы</div>;
  }

  return (
    <div className="dashboard">
      Dashboard Page
    </div>
  )
}
// export default DashboardPage;

// export const dynamic = 'force-static';
// export const dynamic = 'force-dynamic';

//  console.log('[13 DashboardPage] session:',JSON.stringify(session,null,2));
// [13 DashboardPage] session: {
//   "user": {
//     "name": "Sanya Monds",
//         "email": "alex2505@bk.ru",
//         "image": "https://filin.mail.ru/pic?d=8qSsnxEP80bXfZh2tCQIcTgjnksj3hplCbeuTKzEh4XC3LA8cUbqkrimw_I~&width=180&height=180"
//   },
//   "expires": "2024-09-20T09:25:11.962Z"
// }