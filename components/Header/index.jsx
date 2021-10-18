import Link from 'next/link'
import navlinks from './navlinks'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Header() {
    const [isShow, setIsShow] = useState(false)
    const router = useRouter()
    return (
        <header
            className='
            py-4 px-6
            flex justify-between items-center
            md:px-16
        '
        >
            <div className='text-black text-3xl font-bold'>
                <Link href='/'>Anh Khoa</Link>
            </div>
            <ul
                className={`
                    fixed right-0 w-full h-full top-0 max-w-[300px] 
                    bg-[#DEAA9A]
                    flex-center flex-col
                    transition-all translate-x-full z-50
                    ${isShow && 'active menu_link'}
                `}
            >
                <div
                    className='
                        text-white text-xl p-[6px]
                        bg-orange rounded-sm
                        absolute top-5 left-5 cursor-pointer
                    '
                    onClick={() => setIsShow(!isShow)}
                >
                    <FaTimes />
                </div>
                {navlinks.map(({ href, title }) => {
                    return (
                        <li
                            key={href}
                            className={`
                                uppercase text-white
                                font-bold mb-5 last:mb-0
                                ${router.pathname === href && 'active link'}
                            `}
                            onClick={() => setIsShow(!isShow)}
                        >
                            <Link href={href}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            <div className='flex justify-between items-center'>
                <div
                    className='
                        text-white text-xl p-[6px]
                        bg-orange rounded-sm cursor-pointer
                    '
                    onClick={() => setIsShow(!isShow)}
                >
                    <FaBars />
                </div>
            </div>
        </header>
    )
}
