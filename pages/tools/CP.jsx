import React, { useState } from 'react'
import Main from '../layout/Main'
import style from '@/styles/pages/tools/Tools.module.css'

function CP() {
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
    };
    return (
        <>
            <Main>
                <div class="container px-4 py-5" id="featured-3">
					<h2 class="pb-2 border-bottom">Solid Color Picker</h2>
				</div>
                <div className={style.work}>
					<div className={style.container}>
						<div
						style={{
							backgroundColor,
							width: '250px',
							height: '200px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '24px',
							border:'1px solid #000000',
						}}
						>
						Box
						</div>
					</div>
                    <div className={style.controls}>
                        <div className={style.inputs}>
                            <label>Color:</label>
                            <input
                            type="color"
                            value={backgroundColor}
                            className="form-control"
                            onChange={handleColorChange}
                            />
                        </div>
                    </div>
                </div><br/>
                <h3>Css Code</h3>
                <div className={style.code}>
                <code>
                    color:{backgroundColor};
                </code>
                </div>
            </Main>
        </>
    );
}

export default CP