import React, { useEffect, useState } from 'react';
import "./sidebar.scss"
import imagefile from './ssulss.jpg';
import {TelephoneFill, EnvelopeFill, Github} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function SideBar() {

    const onLinked=(e)=>{
        e.target.className = "linked"
        for(let list of document.getElementsByClassName("linked")){
                if(list.href!==e.target.href){
                    list.className = "list-link"
                }
            }
    }

    return(
        <div className="main">
            <div className="container">
                <img src={imagefile} alt="profile"/>
            </div>
            <div className="container">
                <div className="menutitle">Contact</div>
                <div className="flex-container">
                    <div className="bt-container">
                        <button><TelephoneFill id="icon"/></button> <span className="bt-text"> 010-4334-5174</span>
                    </div>
                    <div className="bt-container">
                        <button><EnvelopeFill id="icon"/></button> <span className="bt-text"> thflthdi@gmail.com</span>
                    </div>
                    <div className="bt-container">
                        <button><Github id="icon"/></button><span className="bt-text"> github.com/thflthdi</span> 
                    </div>
                </div>
                
            </div>

            <div className="container" >
                <div className="menutitle">List</div>
                <div className="list-container">
                    <Link className="list-link" onClick={onLinked} to="/">About</Link>
                </div>
                <div className="list-container">
                <Link className="list-link" onClick={onLinked} to="/skill">Skill</Link>
                </div>
                <div className="list-container">
                <Link className="list-link" onClick={onLinked} to="/project">Project</Link>
                </div>
                <div className="list-container">
                <Link className="list-link" onClick={onLinked} to="/education">Education</Link>
                </div>
            </div>
            <div className="container">
                <button id="down-btn" title="PDF로 이력서 다운로드">Download</button>
            </div>
        
        </div>

//         <Container>
//             <Row style={{marginTop:"20px"}}>
//                 <Col style={{textAlign:"center"}}>
//                < img src={imagefile} width={150} height={150} alt="profile" 
//                 style={{borderRadius: "50%", objectFit:"cover", border:"9px solid white"}}/>
//                 </Col>
//             </Row>
//             <Row style={{marginTop:"15px", backgroundColor:"yellow"}}>
//                 <Col xs={12} style={{backgroundColor:"#4a4b4b", textAlign:"center", 
//                 color:"white",letterSpacing:"5px",padding:"5px"}}>
//                     Contact
//                 </Col>
//             </Row>
//             <Row style={{marginTop:"10px"}}>
//                 <Col md={2} xs={1}>
//                     <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
//                         <TelephoneFill/></button>
//                 </Col>
//                 <Col md={9} xs={11}>010-4334-5174</Col>
//             </Row>
//             <Row style={{marginTop:"5px"}}>
//                 <Col md={2} xs={1}>
//                     <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
//                         <EnvelopeFill/></button>
//                 </Col>
//                 <Col md={9} xs={11}>thflthdi@gmail.com</Col>
//             </Row>
//             <Row style={{marginTop:"5px"}}>
//                 <Col md={2} xs={1}>
//                     <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
//                         <Github/></button>
//                 </Col>
//                 <Col md={9} xs={11}>github.com/thflthdi</Col>
//             </Row>
//             <Row style={{marginTop:"10px", backgroundColor:"yellow"}}>
//                 <Col xs={12} style={{backgroundColor:"#4a4b4b", textAlign:"center", 
//                 color:"white",letterSpacing:"5px",padding:"5px"}}>
//                     List
//                 </Col>
//             </Row>
//             <Row xs={4} md={1} style={{marginTop:"10px"}}>
//                 <Col style={{marginBottom:"5px"}}>About</Col>
//                 <Col style={{marginBottom:"5px"}}>Skill</Col>
//                 <Col style={{marginBottom:"5px"}}>Project</Col>
//                 <Col style={{marginBottom:"5px"}}>Education</Col>
//             </Row>
//             <Row>
//                 <Col xs={12}>
//                     <button title="PDF로 이력서 다운로드" 
//                         style={{ cursor:"hand", border:" 1.5px solid #4a4b4b", textAlign:"center", width:"100%",
//                         color:"#4a4b4b",letterSpacing:"5px",padding:"5px"}}>
//                             Download</button>
//                     </Col>
//             </Row>

//         </Container>
        
    )
}
export default SideBar;