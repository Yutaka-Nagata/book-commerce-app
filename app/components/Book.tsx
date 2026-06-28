"use client"
import Image from "next/image"
import Link from "next/link"

export default function Book({book}:any){
    return(
        <>
            <style jsx global>{`
                @keyframes fadeIn{
                    from{
                        opacity : 0;
                        transform: scale(0.9);
                    }
                    to{
                        opacity : 1;
                        transform: scale(1)
                    }
                }
                .model {
                    animation: fadeIn 0.3s ease-out forwards;
                }

            `}</style>

            <div className="flex m-4 flex-col items-center">
                <a className="shadow-2xl cursor-pointer duration-300 hover:translate-y-1 hover:shadow-none">
                    <Image
                        priority
                        src={book.thumbnail}
                        alt={book.title}
                        width={450}
                        height={350}
                        className="rounded-t-md"
                    />
                    <div className="p-4 bg-slate-100 rounded-b-md">
                        <h2 className="text-lg font-semibold">
                            {book.title}
                        </h2>
                        <p className="mt-2 text-lg text-slate-600">
                            この本は○○...
                        </p>
                        <p className="mt-2 text-md text-slate-700">
                            値段：{book.price}
                        </p>

                    </div>
                </a>
            </div>
        </>
    )

}