import "./App.css";
import StoreImage from "./components/StoreImage";
import SubNavi from "./components/SubNavi";
import NaviButton from "./components/NaviButton";
import MenuList from "./components/MenuList";
import MenuItem from "./components/MenuItem";

const menus = [{
  name: "김치찌개",
  price: "7,000원",
  imgSrc: "/image/kimchi.jpeg"
},{
  name: "김치찌개",
  price: "7,000원",
  imgSrc: "/image/kimchi.jpeg"
},{
  name: "김치찌개",
  price: "7,000원",
  imgSrc: "/image/kimchi.jpeg"
}];

function App() {
  return (
    <>
      <StoreImage src="/image/storeImage/storeImage.png" />
      <SubNavi>
        <NaviButton>메인메뉴</NaviButton>
        <NaviButton>주류</NaviButton>  
      </SubNavi>
      <MenuList>
        {menus.map(({ name, price, imgSrc}, index) => {
          return (
          <MenuItem key={index} name={name} price={price} imgSrc={imgSrc}/>
          )
        })}

      </MenuList>
    </>
  );
}

export default App;
