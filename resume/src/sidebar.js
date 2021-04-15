import React, { useEffect, useState } from 'react';
import imagefile from './ssulss.jpg';
import {TelephoneFill, EnvelopeFill, Github} from 'react-bootstrap-icons';
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
        <div style={{backgroundColor:"#dfdfdf", width:"300px", height:`${heightSize}px`, marginLeft:"300px", 
        color:'white'}}>
            <div id="profileImg" style={{textAlign:"center"}}>
                <img src={imagefile} alt="profile" style={{marginTop:"25px", width:"150px", height:"150px",
                borderRadius: "50%", objectFit:"cover"}}/>
            </div>

            <div className="container" style={{color:"#4a4b4b", margin:"25px 25px 15px 25px"}}>
                <div className="menutitle" style={{backgroundColor:"#4a4b4b", textAlign:"center", 
                color:"white",letterSpacing:"5px",padding:"6px"}}>Contact</div>
                <br/>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px", width:"25px",height:"25px"}}>
                        <TelephoneFill style={{marginTop:"3px"}}/></button> 010-4334-5174
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px", width:"25px",height:"25px"}}>
                        <EnvelopeFill style={{marginTop:"3px"}}/></button> thflthdi@gmail.com
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px", width:"25px",height:"25px"}}>
                        <Github style={{marginTop:"3px"}}/></button> github.com/thflthdi
                </div>
            </div>

            <div className="container" style={{color:"#4a4b4b", margin:"25px 25px 15px 25px"}}>
                <div className="menutitle" style={{backgroundColor:"#4a4b4b", textAlign:"center", 
                color:"white",letterSpacing:"5px",padding:"6px"}}>List</div>
                <br/>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    About
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    Skill
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    Project
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    Education
                </div>
            </div>
            <div className="container" style={{margin:"25px 25px 15px 25px"}}>
                <button title="이력서 PDF 다운로드" style={{border:" 1.5px solid #4a4b4b", textAlign:"center", width:"250px",
                    color:"#4a4b4b",letterSpacing:"5px",padding:"6px"}}>Download</button>
            </div>
            
        </div>
    )
}
export default SideBar;