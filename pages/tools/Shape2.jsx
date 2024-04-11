import React, { useState } from 'react';
import Main from '../layout/Main';
import style from '@/styles/pages/tools/Tools.module.css'

export default function Shape2() {
  
  const [topLeft, setTopLeft] = useState(10);
  const [topRight, setTopRight] = useState(10);
  const [bottomLeft, setBottomLeft] = useState(10);
  const [bottomRight, setBottomRight] = useState(10);
  
  //10% 20% 40% 30%

    const code = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
  const topleft = (e) => {
    setTopLeft(e.target.value);
  }
  const topright = (e) => {
    setTopRight(e.target.value);
  }
  const bottomleft = (e) => {
    setBottomLeft(e.target.value);
  }
  const bottomright = (e) => {
    setBottomRight(e.target.value);
  }
  return (
    <Main>
		<div class="container px-4 py-5" id="featured-3">
			<h2 class="pb-2 border-bottom">Shape Radius</h2>
        </div>
      <div className={style.work}>
		<div className={style.container}>
			<div className="shape-preview" style={{ borderRadius: `${code}`,backgroundColor:"#000000",
			width:"250px",height:"250px", }}></div>
		</div>
        <div className={style.controls}>
          <div className={style.inputs}>
            <label>Top Left</label>
            <input type="range" value={topLeft} className="form-control" onChange={topleft}/><br/>
          </div>
          <div className={style.inputs}>
            <label>Top Right</label>
            <input type="range" value={topRight} className="form-control" onChange={topright}/><br/>
          </div>
          <div className={style.inputs}>
            <label>Bottom Right</label>
            <input type="range" value={bottomRight} className="form-control" onChange={bottomright}/><br/>
          </div>
          <div className={style.inputs}>
            <label>Bottom Left</label>
            <input type="range" value={bottomLeft} className="form-control" onChange={bottomleft}/><br/>
          </div>
        </div>
      </div><br/>
       <h3>Css Code</h3>
       <div className={style.code}>
        <code>
            border-radius:{code};
        </code>
       </div>
    </Main>
  );
}