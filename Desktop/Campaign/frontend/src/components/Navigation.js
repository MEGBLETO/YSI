import React from 'react'
import Link from 'next/link'


const Navigation = () => {
  return (
    <div className='flex sticky  top-0 shadow-md z-30 justify-between bg-gray-800 w-full min-h-[10vh] items-center text-white'>
        <div className='flex-1'>
            <p>Logo</p>
        </div>
        <ul className='flex flex-1 justify-evenly'>
            <Link href="/">Accueil</Link>
            <Link href="/">Ressources</Link>
            <Link href="/">Campagnes</Link>
        </ul>
    </div>
  )
}

export default Navigation