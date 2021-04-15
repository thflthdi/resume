import React, { useEffect, useState } from 'react';

const ResizeEffect = () => {
    const [height, setHeight] = useState(window.innerHeight);
  
    const onResize = () => {
      setHeight(window.innerHeight);
    };

    useEffect(() => {
      window.addEventListener('resize', onResize);
      //EventListener의 인자(이벤트명, 콜백 함수 - 이벤트가 발생되면 실행, useCapture - 이벤트 버블링이나 캡처링을 사용할지)
  
      return () => {
        //이벤트 제거
        window.removeEventListener('resize', onResize);
      };
    }, []);
  
    return height;
  };

function SideBar() {
    const heightSize = ResizeEffect();
    return(
        <div style={{backgroundColor:"#b3b3b3", width:"25%", height:`${heightSize}px`, marginLeft:"5%", 
        color:'white'}}>
            <div id="profileImg">
                profile IMG
                {heightSize}
            </div>
            <div>
                Hwang Yejin<br/>
                Contact<br/>
                Phone: 010-4334-5174<br/>
                E-mail: thflthdi@gmail.com<br/>
                List<br/>
                About<br/>
                Skill<br/>
                Project<br/>
                Education<br/>
                Download
            </div>
        </div>
    )
}
export default SideBar;