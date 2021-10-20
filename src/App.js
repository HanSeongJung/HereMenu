import "./App.css";
import StoreImage from "./components/StoreImage";
import SubNavi from "./components/SubNavi";
import NaviButton from "./components/NaviButton";
import MenuList from "./components/MenuList";
import MenuItem from "./components/MenuItem";

const menus = [
  {
    name: "항정살 수육",
    price: "21,000원",
    imgSrc: "/image/menu/항정살수육.png",
  },
  {
    name: "돼지고기 가지볶음",
    price: "18,000원",
    imgSrc: "/image/menu/돼지고기가지볶음.png",
  },
  {
    name: "모듬 치킨",
    price: "17,000원",
    imgSrc: "/image/menu/모듬치킨.png",
  },
  {
    name: "항정살 수육",
    price: "21,000원",
    imgSrc: "/image/menu/항정살수육.png",
  },
  {
    name: "돼지고기 가지볶음",
    price: "18,000원",
    imgSrc: "/image/menu/돼지고기가지볶음.png",
  },
  {
    name: "모듬 치킨",
    price: "17,000원",
    imgSrc: "/image/menu/모듬치킨.png",
  },
];

function App() {
  return (
    <>
      <StoreImage />
      <SubNavi>
        <NaviButton>메인 메뉴</NaviButton>
        <NaviButton>주류</NaviButton>
      </SubNavi>
      <MenuList>
        {menus.map(({ name, price, imgSrc }, index) => {
          return (
            <MenuItem key={index} name={name} price={price} imgSrc={imgSrc} />
          );
        })}
      </MenuList>
    </>
  );
}

export default App;
