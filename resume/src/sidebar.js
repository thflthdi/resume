import React from 'react';
import imagefile from './ssulss.jpg';
import {TelephoneFill, EnvelopeFill, Github} from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';

function SideBar() {
    
    return(
        <Container>
            <Row style={{marginTop:"20px"}}>
                <Col style={{textAlign:"center"}}>
                <img src={imagefile} width={150} height={150} alt="profile" 
                style={{borderRadius: "50%", objectFit:"cover", border:"9px solid white"}}/>
                </Col>
            </Row>
            <Row style={{marginTop:"15px", backgroundColor:"yellow"}}>
                <Col xs={12} style={{backgroundColor:"#4a4b4b", textAlign:"center", 
                color:"white",letterSpacing:"5px",padding:"5px"}}>
                    Contact
                </Col>
            </Row>
            <Row style={{marginTop:"10px"}}>
                <Col md={2} xs={1}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
                        <TelephoneFill/></button>
                </Col>
                <Col md={9} xs={11}>010-4334-5174</Col>
            </Row>
            <Row style={{marginTop:"5px"}}>
                <Col md={2} xs={1}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
                        <EnvelopeFill/></button>
                </Col>
                <Col md={9} xs={11}>thflthdi@gmail.com</Col>
            </Row>
            <Row style={{marginTop:"5px"}}>
                <Col md={2} xs={1}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
                        <Github/></button>
                </Col>
                <Col md={9} xs={11}>github.com/thflthdi</Col>
            </Row>
            <Row style={{marginTop:"10px", backgroundColor:"yellow"}}>
                <Col xs={12} style={{backgroundColor:"#4a4b4b", textAlign:"center", 
                color:"white",letterSpacing:"5px",padding:"5px"}}>
                    List
                </Col>
            </Row>
            <Row xs={4} md={1} style={{marginTop:"10px"}}>
                <Col style={{marginBottom:"5px"}}>About</Col>
                <Col style={{marginBottom:"5px"}}>Skill</Col>
                <Col style={{marginBottom:"5px"}}>Project</Col>
                <Col style={{marginBottom:"5px"}}>Education</Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <button title="PDF로 이력서 다운로드" 
                        style={{ cursor:"hand", border:" 1.5px solid #4a4b4b", textAlign:"center", width:"100%",
                        color:"#4a4b4b",letterSpacing:"5px",padding:"5px"}}>
                            Download</button>
                    </Col>
            </Row>
{/* 
            <div className="container" style={{color:"#4a4b4b"}}>
                <div className="menutitle" style={{backgroundColor:"#4a4b4b", textAlign:"center", 
                color:"white",letterSpacing:"5px",padding:"6px"}}>Contact</div>
                <br/>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
                        <TelephoneFill style={{marginTop:"3px"}}/></button> 010-4334-5174
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
                        <EnvelopeFill style={{marginTop:"3px"}}/></button> thflthdi@gmail.com
                </div>
                <div className="bt-container" style={{marginBottom:"5px"}}>
                    <button style={{color:"white", backgroundColor:"#4a4b4b",border:"0px"}}>
                        <Github style={{marginTop:"3px"}}/></button> github.com/thflthdi
                </div>
            </div>

            <div className="container" style={{color:"#4a4b4b"}}>
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
            <div className="container">
                <button title="PDF로 이력서 다운로드" style={{ cursor:"hand", border:" 1.5px solid #4a4b4b", textAlign:"center", width:"250px",
                    color:"#4a4b4b",letterSpacing:"5px",padding:"6px"}}>Download</button>
            </div>
             */}
        </Container>
        
    )
}
export default SideBar;