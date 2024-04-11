import React from 'react'
import style from '@/styles/components/Nav.module.css'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

function Nav() {
  return (
    <>
      <main className={style.main}> 
		<div className={style.logo}>CSS TOOLS</div>
		<div className={style.content}>
			<Link href='/' className={style.menu}>
				<FaHome/>
				Home
			</Link>
			<Link href='/tools' className={style.menu}>
				<FaInfoCircle />
				Tools
			</Link>
			<Link href='/about' className={style.menu}>
				<FaTools />
				About
			</Link>
		</div>
      </main>      
    </>
  )
}

export default Nav