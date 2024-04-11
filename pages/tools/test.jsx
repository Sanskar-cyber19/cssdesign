import { useState } from 'react';
import style from '@/styles/pages/tools/Tools.module.css'
import Main from '../layout/Main';

function test() {
	return(
		<Main>
			<div class="container px-4 py-5" id="featured-3">
				<h2 class="pb-2 border-bottom">Tools</h2>
			</div>
			<div className={style.work}>
				<div className={style.container}>
					<div className={style.tool}>BG</div>
				</div>
				<div className={style.contorls}> hi</div>
			</div>
		</Main>
	)
}

export default test;