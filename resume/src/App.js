import { useEffect, useState } from "react";
import About from "./components/about";
import SideBar from "./sidebar";
import { Container,Row,Col } from 'react-bootstrap';
import "./App.scss"

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

function App() {
  const heightSize = ResizeEffect();
  return (

    <div className="app">
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
      <div className="content">
        <About></About>
      </div>
    </div>

      // <Container fluid>
      //   <Row>
      //     <Col className="sidebar" md={{span:3, offset:1}} xs={12} style={{backgroundColor:"#dfdfdf", maxWidth:"300px"}}><SideBar/></Col>
      //     <Col md={7} xs={12} style={{backgroundColor:"blue"}}><About/></Col>
      //   </Row>
      // </Container>
  );
}

export default App;
