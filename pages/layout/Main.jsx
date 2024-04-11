import React from 'react'
import style from '@/styles/Home.module.css'

function Main({children}) {
  return (
    <>
        <main className={style.main}>
            {children}
        </main>
    </>
  )
}

export default Main