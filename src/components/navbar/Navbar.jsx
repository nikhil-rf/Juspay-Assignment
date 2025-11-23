import React, { useContext, useEffect, useRef, useState } from "react";
import NavbarStyles from "./NavbarStyled";
import { Tooltip } from "react-tooltip";
import FavIcon from "./Images/fav.svg";
import SearchIconImg from "./Images/search.svg";
import FavIconDark from "./Images/fav-dark.svg";
import SearchIconImgDark from "./Images/search-dark.svg";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import { AppContext } from "../../context/AppContext";
import { PanelLeft, PanelRight, Sun, Moon, History, Bell } from "lucide-react";

function Navbar() {
  const searchRef = useRef(null);
  const {
    leftPanelView,
    setLeftPanelView,
    rightPanelView,
    setRightPanelView,
    isMobile,
    isDarkMode,
    setIsDarkMode,
  } = useContext(AppContext);

  const handleLeftPanelToggle = () => {
    if (isMobile) {
      setLeftPanelView(!leftPanelView);
      if (!leftPanelView) {
        setRightPanelView(false);
      }
    } else {
      setLeftPanelView(!leftPanelView);
    }
  };

  const handleRightPanelToggle = () => {
    if (isMobile) {
      setRightPanelView(!rightPanelView);
      if (!rightPanelView) {
        setLeftPanelView(false);
      }
    } else {
      setRightPanelView(!rightPanelView);
    }
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <NavbarStyles.NavbarWrap isDarkMode={isDarkMode}>
        <NavbarStyles.NavbarLeftWrap>
          <PanelLeft
            className=""
            data-tooltip-id="leftSidebarTooltip"
            data-tooltip-content="Left Side Bar"
            onClick={handleLeftPanelToggle}
            size={17}
            strokeWidth={1.5}
            color={isDarkMode ? "#ffffff" : "#000000"}
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="favTooltip"
            data-tooltip-content="Favorites"
            src={isDarkMode ? FavIconDark : FavIcon}
            alt="fav"
            className="navbar-fav"
          />

          <BreadCrumbs isDarkMode={isDarkMode} />
        </NavbarStyles.NavbarLeftWrap>
        <NavbarStyles.NavbarRightWrap>
          <NavbarStyles.SearchBarWrap className="navbar-search-bar">
            <NavbarStyles.SearchIcon
              src={isDarkMode ? SearchIconImgDark : SearchIconImg}
              alt="search"
            />
            <NavbarStyles.SearchBar
              isDarkMode={isDarkMode}
              ref={searchRef}
              type="text"
              placeholder="Search"
            />
            <NavbarStyles.ShortcutDisplay isDarkMode={isDarkMode}>
              ⌘ /
            </NavbarStyles.ShortcutDisplay>
          </NavbarStyles.SearchBarWrap>
          <NavbarStyles.NavbarIcons
            as={isDarkMode ? Sun : Moon} // Shows Sun in dark mode, Moon in light mode
            data-tooltip-id="themeTooltip"
            data-tooltip-content="Switch Theme"
            onClick={handleDarkMode}
            color={isDarkMode ? "#ffffff" : "#000000"}
            size={20}
            strokeWidth={1.5}
          />
          <NavbarStyles.NavbarIcons
            as={History}
            data-tooltip-id="recentTooltip"
            data-tooltip-content="Recent Activities"
            color={isDarkMode ? "#ffffff" : "#000000"}
            className="navbar-notification"
            size={20}
            strokeWidth={1.5}
          />
          <NavbarStyles.NavbarIcons
            as={Bell}
            data-tooltip-id="notificationTooltip"
            data-tooltip-content="Notifications"
            color={isDarkMode ? "#ffffff" : "#000000"}
            size={20}
          />
          <PanelRight
            className="your-icon-class-name"
            data-tooltip-id="rightSidebarTooltip"
            data-tooltip-content="Right Side Bar"
            onClick={handleRightPanelToggle}
            size={17}
            strokeWidth={1.5}
            color={isDarkMode ? "#ffffff" : "#000000"}
          />
        </NavbarStyles.NavbarRightWrap>
      </NavbarStyles.NavbarWrap>

      <Tooltip id="leftPanelTooltip" />
      <Tooltip id="favTooltip" />
      <Tooltip id="themeTooltip" />
      <Tooltip id="recentTooltip" />
      <Tooltip id="notificationTooltip" />
    </>
  );
}

export default Navbar;
