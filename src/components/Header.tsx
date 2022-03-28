import React, { useState, useEffect } from "react";
import { useWallet } from "wallets/wallet";
import { useHistory } from "react-router-dom";
import { shortenAddr } from "web3/utils";
import { Button } from "react-bootstrap";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { AiOutlinePoweroff } from "react-icons/ai";
import $ from 'jquery';
import img_logo from "../assets/image/svg/logo.svg";
import img_instagram from "../assets/image/svg/ico-instagram.svg";
import img_twitter from "../assets/image/svg/ico-twitter.svg";

const RightMenu = styled.div`
  margin-left: 2rem;
  position: relative;
  z-index: 4;
  display: flex;
`;

const ContactBtn = styled(Button)`
  background-color: transparent;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0 0.5rem;
  border: 2px solid #fff;
  min-width: 8.5rem;
  text-shadow: 0px 3px 14px #000;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 2px solid #fff;
  }
  &:not(:disabled):not(.disabled):active {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 5%);
  }
`;

const ContactLink = styled.div`
  background-color: transparent;
  font-size: 1.2rem;
  padding: 0 0.5rem;
  border: 2px solid #fff;
  min-width: 8.5rem;
  line-height: 32px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  text-shadow: 0px 3px 14px #000;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 2px solid #fff;
  }
`;

const Header: React.FC = () => {

  let history = useHistory();
  const wallet = useWallet();

  function handleWalletConnect() {
    wallet.showWalletsModal();
  }

  function handleWalletDisconnect() {
    wallet.disconnect();
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sticky, setSticky] = useState(false);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleDisconnect = () => {
    handleWalletDisconnect();
    handleClose2();
    history.push("/");
  };

  const handleScroll = (event) => {
    console.log("scroll");
    var st = $(this).scrollTop();
    if (st + $(window).height() < $(document).height()) {
        setSticky(true);
        if (st == 0) {
            setSticky(false);
        }
    }
  }

  useEffect(() => {
    //window.addEventListener("scroll", handleScroll);
  }, []);

  const onBurgerClick = (e) => {
    e.preventDefault();
    $('.js-burger').toggleClass('is-active');
    $('.header__nav').toggleClass('is-active');
    $('.header__actions').toggleClass('nav-expanded');
  }
 
  const ITEM_HEIGHT = 48;

  return (
    <header className="header">
      <div className="shell">
        <div className="header__inner">
          <a href="#" className="logo">
            <img src={img_logo} alt="" />
          </a>

          <div className="header__nav">
            <div className="header__nav-inner">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                
                <li>
                  <a href="/masks">Masks</a>
                </li>
                
                <li>
                  <a href="/minting">Minting</a>
                </li>
                
                <li>
                  <a href="/physical-masks">Physical masks</a>
                </li>
                
                <li>
                  <a href="/about">About</a>
                </li>
                
                <li>
                  <a href="/roadmap">Roadmap</a>
                </li>
                
                <li>
                  <a href="/events">Events</a>
                </li>
                
                <li>
                  <a href="/hunting-club">Hunting Club</a>
                </li>
              </ul>

              <div className="socials">
                <ul>
                  <li>
                    <a href="#">
                      <img src={img_instagram} alt="" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src={img_twitter} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header__aside">
            <a href="#" className="burger-btn js-burger" onClick={onBurgerClick}>
              <span></span>
              
              <span></span>
              
              <span></span>
            </a>

            <RightMenu>
              {!wallet.isActive ? (
                <ContactBtn onClick={handleWalletConnect}>CONNECT</ContactBtn>
              ) : (
                <ContactLink onClick={handleClick2}>{shortenAddr(wallet.account ? wallet.account : "")}</ContactLink>
              )}
            </RightMenu>
          </div>
        </div>
      </div>
      <Menu
        id="connect-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={open2}
        onClose={handleClose2}
        PaperProps={{
          style: {
            background: "rgba(54, 54, 54, 0.99)",
            color: "white",
            marginTop: "60px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "150px",
          },
        }}
      >
        <MenuItem onClick={handleDisconnect}>
          <AiOutlinePoweroff size={22} color="#DC920F" />
          &nbsp;&nbsp;Disconnect
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
