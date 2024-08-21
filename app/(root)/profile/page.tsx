'use client';
import React, {FC, useState} from "react";
import {useSession} from "next-auth/react";
import {notFound} from "next/navigation";
// import {getUserSession} from "../../lib/getUserSession";
import './profilePage.styles.css';

// export const dynamic = 'force-static';
export const dynamic = 'force-dynamic';

type user = {
  name: string,
  email: string,
  image: string,
}
type TSession = {
  user: user
}

export const ProfilePage:FC =  () => {
  const {data: session}:{session:TSession} = useSession();

  if (!session) {
    return notFound();
  }

  return (
    <div className="ProfilePage">
        <div className="container">
            <h2>Profile Page:</h2>
            <div>Name: {session.user.name}</div>
            <div>email: {session.user.email}</div>
        </div>
    </div>
  )
}
export default ProfilePage;

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