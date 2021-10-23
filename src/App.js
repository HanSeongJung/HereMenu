import React, { useState } from "react";
import "./App.css";
import "./css/select.css";
import StoreImage from "./components/StoreImage";
import SubNavi from "./components/SubNavi";
import NaviButton from "./components/NaviButton";
import MenuList from "./components/MenuList";
import MenuItem from "./components/MenuItem";
import MENUS from "./constant/MENUS";

const createMenuItem = (menuArr) => {
  const menu = menuArr.map(({ name, price, imgSrc }, index) => {
    return <MenuItem key={index} name={name} price={price} imgSrc={imgSrc} />;
  });

  return menu;
};

function App() {
  let [menu, setMenu] = useState(createMenuItem(MENUS.mainMenu));
  const menuClick = (e) => {
    const target = e.target;
    document.querySelectorAll(".active")[0].classList.remove("active");
    target.classList.add("active");

    let menuArr = [];
    const value = target.innerHTML;

    value === "주류"
      ? (menuArr = createMenuItem(MENUS.alcohol))
      : (menuArr = createMenuItem(MENUS.mainMenu));

    setMenu(menuArr); //menu list setting
  };

  return (
    <>
      <StoreImage />
      <SubNavi>
        <NaviButton onClick={menuClick} className="active">
          메인 메뉴
        </NaviButton>
        <NaviButton onClick={menuClick}>주류</NaviButton>
      </SubNavi>
      <MenuList>{menu}</MenuList>
    </>
  );
}

export default App;
