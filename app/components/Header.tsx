"use client"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { useSession } from "next-auth/react"


export default function Header(){
    const {data: session} = useSession()
    const user = session?.user;
    console.log(user)
    return (
        <header className="bg-slate-600 text-gray-100 shadow-lg">
            <nav className="flex items-center justify-between p-4">
                <Link href="/" className="text-xl font-bold">
                    Book Commerce
                </Link>
                <div className="flex items-center gap-1">
                    <Link
                        href="/"
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm"
                    >
                        ホーム
                    </Link>
                    <Link
                        href="/login"
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm"
                    >
                        ログイン
                    </Link>
                    <Link
                        href={`/profile`}
                    >
                        <Image
                            width={50}
                            height={50}
                            alt="profile_icon"
                            src={user?.image || "/default_icon.png"}
                            className="rounded-3xl"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    )
}