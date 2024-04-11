import React, { useState } from 'react'
import Main from '../layout/Main';
import style from '@/styles/pages/tools/Tools.module.css'

function ThreeD() {
    const [rotateX, setRotateX] = useState(10);
    const [rotateY, setRotateY] = useState(10);

    const code = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
    const handleRotateXChange = (e) => {
      setRotateX(e.target.value);
    };
  
    const handleRotateYChange = (e) => {
      setRotateY(e.target.value);
    };
  
    return (
      <Main>
       <div class="container px-4 py-5" id="featured-3">
			<h2 class="pb-2 border-bottom">3D Rotate</h2>
        </div>
      <div className={style.work}>
		<div className={style.container}>
			<div className={style.counter}>
			  <div className="cube" style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
				<div className="face front">Front</div>
				<div className="face back">Back</div>
				<div className="face left">Left</div>
				<div className="face right">Right</div>
				<div className="face top">Top</div>
				<div className="face bottom">Bottom</div>
			  </div>
			</div>
		</div>
        <div className={style.controls}>
			  <label>Rotate X (degrees):</label>
			  <input
				type="range"
				min="0"
				max="360"
				className="form-control"
				value={rotateX}
				onChange={handleRotateXChange}
			  />
			<br/>
			  <label>Rotate Y (degrees):</label>
			  <input
				className={style.range}
				type="range"
				min="0"
				max="360"
				className="form-control"
				value={rotateY}
				onChange={handleRotateYChange}
			  /><br/>
        </div>
        <style jsx>{`
          .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
            
          }
          .face {
            width: 200px;
            height: 200px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #333;
            background-color: rgba(255, 255, 255, 0.8);
            color: #000000;
          }
          .front { transform: translateZ(100px); }
          .back { transform: translateZ(-100px) rotateY(180deg); }
          .left { transform: translateX(-100px) rotateY(-90deg); }
          .right { transform: translateX(100px) rotateY(90deg); }
          .top { transform: translateY(-100px) rotateX(90deg); }
          .bottom { transform: translateY(100px) rotateX(-90deg); }
          .controls {
            margin-top: 20px;
          }
          @keyframes spin {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            100% { transform: rotateX(360deg) rotateY(360deg); }
          }
        `}</style>
      </div><br/><br/><br/>
	  <h3>Css Code</h3>
       <div className={style.code}>
        <code>
            transform : {code} ;
        </code>
       </div>
      </Main>
    );
}

export default ThreeD