'use client';
import React from "react";
import {useSession} from "next-auth/react";
// import {getUserSession} from "../../lib/getUserSession";
import Image from "next/image";
import './profilePage.styles.css';

export default function ProfilePage() {
  const {data: session, status} = useSession();

  if (status === "loading") {
        return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <div>Вы не авторизованы</div>;
  }

  return (
    <div className="ProfilePage">
        <div className="container">
            <h2>Profile Page:</h2>
            <div>
                <Image
                    width={90}
                    height={90}
                    src={session?.user?.image ?? ''}
                    alt={session?.user?.name ?? 'image'}/>
            </div>
            <div>Name: {session?.user?.name || ''}</div>
            <div>email: {session?.user?.email || ''}</div>
        </div>
    </div>
  )
}

//  console.log('[22 ProfilePage] session:',JSON.stringify(session,null,2));
//[11 ProfilePage] session: {
//   "user": {
//     "name": "Sanya Monds",
//     "email": "alex2505@bk.ru",
//     "image": "https://filin.mail.ru/pic?d=8qSsnxEP80bXfZh2tCQIcTgjnksj3hplCbeuTKzEh4XC3LA8cUbqkrimw_I~&width=180&height=180"
//   },
//   "expires": "2024-09-20T08:07:49.159Z"
// }

// {
//   Object.keys(session.user).map(sKey => {
//     return <div key={sKey}>{session['user'][sKey]}</div>
//   })
// }


// export const dynamic = 'force-static';
// export const dynamic = 'force-dynamic';

// type user = {
//   name: string,
//   email: string,
//   image: string,
// }
// type TSession = {
//   user: user
// }
