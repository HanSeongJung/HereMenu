import "./App.css";
import StoreImage from "./components/StoreImage";
import SubNavi from "./components/SubNavi";
import NaviButton from "./components/NaviButton";

function App() {
  return (
    <>
      <StoreImage />
      <SubNavi>
        <NaviButton>메인 메뉴</NaviButton>
        <NaviButton>주류</NaviButton>
      </SubNavi>
    </>
  );
}

export default App;
