import SideBar from "./sidebar";

function App() {
  const heightSize = window.innerHeight
  return (
    <div className="App" style={{height:`${heightSize}px`, backgroundColor:"#f0eeee"}}>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
