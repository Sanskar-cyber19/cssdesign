import React, { useState } from 'react'
import Main from '../layout/Main';
import style from '@/styles/pages/tools/Tools.module.css'

function Shape() {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(250);
  const [radius, setradius] = useState(10);
  const handlewidth = (e) => {
    setWidth(e.target.value);
  }
  const handleheight = (e) => {
    setHeight(e.target.value);
  }
  const handleradius = (e) => {
    setradius(e.target.value);
  }
  
  const code = `.shape{
	  width:${width}px;
      height:${height}px;
      border-radius:${radius}px;
  }`
  return(
    <>
      <Main>
        <div class="container px-4 py-5" id="featured-3">
			<h2 class="pb-2 border-bottom">Normal Shape Generator</h2>
        </div>
        <div className={style.work}>
			<div className={style.container}>
			  <div 
				style={{
				  width:`${width}px`,
				  height:`${height}px`,
				  background:'#0f0f0f',
				  borderRadius: `${radius}px`}}>
			  </div>
			</div>
        <div className={style.controls}>
          <div className={style.note}>
            <h2>Note</h2>
            1. Width use Between 0px to 999px(for screen width)<br/>
            2. Height use Between 0px to 500px(for better design).<br/>
          </div>
          <div className={style.inputs}>
          <label>Width:</label>
            <input type="number" value={width} className="form-control" onChange={handlewidth}/><br/>
          </div>
          <div className={style.inputs}>
            <label>Height:</label>
            <input type="number" value={height} className="form-control" onChange={handleheight}/><br/>
          </div>
<div           className={style.inputs}>
            <label>Radius:</label>
            <input type="range" value={radius} className="form-control" onChange={handleradius}/><br/>
          </div>
        </div>
        </div>
        <h3>Css Code</h3>
        <div className={style.code}>
          <code>
				{code}
          </code>
        </div>
      </Main>
    </>
    );
}

export default Shape