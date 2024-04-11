import { useState } from 'react';
import style from '@/styles/pages/tools/Tools.module.css'
import Main from '../layout/Main';

function BG() {
  const [colors, setColors] = useState(['#ff0000', '#0000ff']);
  const [angle, setAngle] = useState(45);

  const code = `linear-gradient(${angle}deg, ${colors.join(',')})`;

  const handleColorChange = (e, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = e.target.value;
    setColors(updatedColors);
  };

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
  };

  const generateGradient = () => {
    const gradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    return { background: gradient };
  };

  return (
    <>
      <Main>
        <div class="container px-4 py-5" id="featured-3">
			<h2 class="pb-2 border-bottom">Gradient Background</h2>
		</div>
        <div className={style.work}>
			<div className={style.container}>
				  <div
					style={{
					  width: '250px',
					  height: '200px',
					  display: 'flex',
					  justifyContent: 'center',
					  alignItems: 'center',
					  fontSize: '24px',
					  ...generateGradient(),
					}}
				  >
					Gradient Background
				  </div>
			</div>
          <div className={style.controls}>
            <div className={style.inputs}>
              <label>Colors:</label>
              {colors.map((color, index) => (
                <>
                <input
                  key={index}
                  type="color"
                  value={color}
                  className="form-control"
                  onChange={(e) => handleColorChange(e, index)}
                /><br/>
                </>
              ))}
            </div>
            <div className={style.inputs}>
              <label>Angle:</label>
              <input
                type="number"
                value={angle}
                className="form-control"
                onChange={handleAngleChange}
                min="0"
                max="360"
              />
            </div>
          </div>
          </div><br/>
          <h3>Css Code</h3>
          <div className={style.code}>
            <code>
              color:{code};
            </code>
          </div>
      </Main>
    </>
  );
}

export default BG;