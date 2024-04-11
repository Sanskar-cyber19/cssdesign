import React, { useState } from 'react'
import Main from '../layout/Main';
import style from '@/styles/pages/tools/Tools.module.css'

function BS() {
    const [horizontalOffset, setHorizontalOffset] = useState(5);
    const [verticalOffset, setVerticalOffset] = useState(5);
    const [blurRadius, setBlurRadius] = useState(10);
    const [spreadRadius, setSpreadRadius] = useState(0);
    const [shadowColor, setShadowColor] = useState('#000000');

    const code = `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
    const generateBoxShadow = () => {
      return `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
    };
    const inputBackground = () => {
      return `${shadowColor}`;
    }
  
    return (
      <Main>
         <div class="container px-4 py-5" id="featured-3">
			<h2 class="pb-2 border-bottom">Box Shadow Generator</h2>
        </div>
        <div className={style.work}>
		<div className={style.container}>
			<div
			  style={{
				width: '200px',
				height: '200px',
				margin: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '24px',
				boxShadow: generateBoxShadow(),
			  }}
			>
			  Shadow Box
			</div>
		</div>
        <div className={style.controls}>
          <div className={style.inputs}>
            <label>Horizontal Offset:</label>
            <input
              type="number"
              class="form-control"
              value={horizontalOffset}
              onChange={(e) => setHorizontalOffset(e.target.value)}
            />
          </div>
          <div className={style.inputs}>
            <label>Vertical Offset:</label>
            <input
              type="number"
              class="form-control"
              value={verticalOffset}
              onChange={(e) => setVerticalOffset(e.target.value)}
            />
          </div>
          <div className={style.inputs}>
            <label>Blur Radius:</label>
            <input
              type="number"
              class="form-control"
              value={blurRadius}
              onChange={(e) => setBlurRadius(e.target.value)}
            />
          </div>
          <div className={style.inputs}>
            <label>Spread Radius:</label>
            <input
              type="number"
              class="form-control"
              value={spreadRadius}
              onChange={(e) => setSpreadRadius(e.target.value)}
            />
          </div>
          <div className={style.inputs}>
            <label>Shadow Color:</label>
            <input
              type="color"
              class="form-control"
              value={shadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
            />
          </div>
        </div>
      </div><br/>
      <h3>Css Code</h3>
      <div className={style.code}>
        <code>
            box-shadow:{code};
        </code>
      </div>
    </Main>
  );
}

export default BS