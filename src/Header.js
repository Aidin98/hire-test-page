import React, { useState } from 'react'
import './Header.css'
import {
  MenuItem,
  FormControl,
  Select,
  Avatar,
} from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Close from '@material-ui/icons/Close';

function Header() {
    const [headerOption,setHeaderOption]=useState('SELECT OPTION')
    const [isOpen,setIsOpen]=useState(false)
   
  
    const options=[{id:1,name:'OPTION 1'},{id:2,name:'OPTION 2'},{id:3,name:'OPTION 3'}]

    return (
      <div className="header">
        <Link className="header__logo" to="/">
          <img
            src="https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/logo-header.png"
            alt="home-logo"
          />
        </Link>
        <div className="header__options">
          <ul>
            <li>
              <img
                className="ul__arrow"
                src="https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/arrow-select.png"
                alt="arrow"
              />
              <p className="select">{headerOption}</p>
              <ul className="dropdown">
                <li
                  style={{ background: "red" }}
                  onClick={() => setHeaderOption("Option 1")}
                >
                  <img
                    src="https://previews.dropbox.com/p/thumb/ABHQ3qyptSOvsW_sbr_ytfd7-t-xNJ2oGjfeXkhoRJeBqzgQCt85cQ5jUS8ZQg5j4C7Yj_zbMg1tg0mH7Y_yR0vqpc8UWYAtMLiL1VjaJwHoZnIPMQ04IfGz85SRTFO6NY_4CKmsfzD723a8-fOl4qTqR_E_soAeuBoONt51EcJyCOtEQyvMW4ArahUV9BbTAm-Ar0n96cZ9eTOGxp_XCSmQ6v0A8dQ-ja8p9UCbOlhinHukLBLEwWmEWrFBdmCv_4TdJjYez9P0OHm9NsHrmwy3RKOk-tSGrjsSKqJcnHyMicgBW2Y33LMxv-7nJ619o2eHphNf9n_l43KBAAUTj_P0BWDfNv7IPT5Fl0qoJolWtNLbnf9eZAv6MA4L6VG-6jk/p.png?fv_content=true&size_mode=5"
                    alt="option1"
                  />
                  OPTION 1
                </li>
                <li
                  style={{ background: "white", color: "black" }}
                  onClick={() => setHeaderOption("Option 2")}
                >
                  <img
                    src="https://previews.dropbox.com/p/thumb/ABFPdfpJCmPVbzIzPb_ZkPcd-44Jc0x9xDtY1rLgBzHuAEV4Q-PBDAXKVeku5JP4Q-aYb17OGnKzDKDxoyhhK0c9USDwD7xdNPTgsMDJJcwTor8bh5ARwWPPglmkO_E6wAdwlNe4POsxA6zlC6vEjDQWQ4fS78LudRMxFck13Qb7UYVgLaT29rP_CpSMXUwquQn_aGeUxY02H4bYva2nzMcboeXRvcamX07zI-soIokBweJEV_qrd2ILRzi6lbaxObjJHYNVg24zBbsV-mqejWFcA2wkeNOQKwUJbpYQ9W-AgO__ZPo_iTlMj26xIUMKWkDcUTps0yYvoixxOGgNOXl6m_DwPeQ3ITU1UkRKErZtbQ/p.png?fv_content=true&size_mode=5"
                    alt="option2"
                  />
                  OPTION 2
                </li>
                <li
                  style={{ background: "red" }}
                  onClick={() => setHeaderOption("Option 3")}
                >
                  <img
                    src="https://previews.dropbox.com/p/thumb/ABEIEhHDAIntP9hBVJKet_f0_8r2kOSS9CIzHGzaDg5jUdHVvFhkhw836BRF763FdXR_NuAKFK7QIOWviCJqa4wfuK2JnsCuAbyr7NnHI0iPBmbTtC0jGm0lRVtjaR0f5nSDLyE-bZbgYilgm4xPa3WRAgGtIWTyjSkjBwSYUgDtjEAsUz0lmLR066tT8-wb5J4KyrptIAhsdPOupbpUrIcclpotlgDzxGfgInmGWEr5DY0MVuY6-xtzaeGmCsOT-jLIuvJ7vFDYJSjJ_MP7GZvFpaMZKuHjMJ11iepB0d5RWCQjH3TH_b1mjW4tTMF84Ss_3LwV8YtpupgU18PiXx6EgSmAAUm7_0E1we0z-NWOJg/p.png?fv_content=true&size_mode=5"
                    alt="option 3"
                  />
                  OPTION 3
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {!isOpen ? (
          <MenuIcon
            className="header__menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <Close className="header__menu" onClick={() => setIsOpen(!isOpen)} />
        )}
        <div className={isOpen ? "header__pages active" : "header__pages"}>
          <NavLink
            className="header__Link"
            exact
            to="/"
            activeClassName="header__Link-active"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            Page 1
          </NavLink>
          <NavLink
            className="header__Link"
            exact
            to="/page1"
            activeClassName="header__Link-active"
            onClick={() => setIsOpen(false)}
          >
            Page 2
          </NavLink>
          <NavLink
            className="header__Link"
            exact
            to="page2"
            activeClassName="header__Link-active"
            onClick={() => setIsOpen(false)}
          >
            Page 3
          </NavLink>
        </div>
        <div className="header__contact">
          <div className="inf">
            <CallIcon
              style={{
                color: "grey",
                marginRight: "20px",
                background: "darkGrey",
                padding: "5px",
              }}
            />
            <div className="information">
              <h3>012/345-678</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <Avatar
            src="https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/flag-lng.png"
            style={{ marginLeft: "50px" }}
          />
        </div>
      </div>
    );
}

export default Header
