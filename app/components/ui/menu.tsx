import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Menu({ }: Props) {
    return <div>
        <ul className='flex p-4'>
            <li className='p-2 hover:bg-pink-500'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-2 hover:bg-purple-500'>
                <Link href="/cars">Cars</Link>
            </li>
            <li className='p-2 hover:bg-blue-500'>
                <Link href="/trucks">Trucks</Link>
            </li>
        </ul>
    </div>;
}