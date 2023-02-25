import React from 'react'
import Link from 'next/link'


const Navigation = () => {
  return (
    <div className='flex sticky  top-0 shadow-md z-30 justify-between bg-gray-800 w-full min-h-[10vh] items-center text-white'>
        <div className='flex flex-1 items-center  pl-10'>
            <p className='text-xl font-bold'>COMKING</p>
        </div>
        <ul className='flex flex-1 justify-evenly'>
            <Link className='cursor-pointer' href="/">Accueil</Link>
            <Link className='hover:cursor-pointer' href="/">Campagnes</Link>
            <Link className='cursor-pointer' href="/ressources">Ressources</Link>
        </ul>
    </div>
  )
}

export default Navigation