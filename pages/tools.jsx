import React from 'react'
import Main from './layout/Main'
import style from '@/styles/pages/tools.module.css'
import Link from "next/link"
import Image from 'next/image'
import {useSession,signIn} from 'next-auth/react'
import data from '@/data/toolsdata.json';

export default function tools() {
	/*const session = useSession();
	
	if(session.data = 'undefined'){
		return(
			<main className={style.main}>
				<button class="btn btn-primary" onClick={signIn}>Login</button>
			</main>
		)
	}*/
  return (
    <>
        <Main>
		{/*<div class="alert alert-primary alert-dismissible fade show" role="alert">
          Hii,{session?.user?.username}. Welcome, Now you can use the tools.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>*/}
            <div className={style.header}>
              Tools
            </div>
            <div className={style.grid}>
              {data.map((tool)=>(
                <div className={style.tool}>
                  <div class="card">
                    <div className={style.padding}>
                      <img class="card-img-top" src={tool.img} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">{tool.name}</h5>
                        <Link href={tool.link} class="btn btn-primary">Use the Tool</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>            
        </Main>
    </>
  )
}
