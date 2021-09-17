import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, signup } from "../../../actions/auth.actions"
import "./style.css"
/**
* @author
* @function MenuMobile
**/

const MenuMobile = (props) => {

    const [dropdown, setDropdown] = useState(false)
    const { menuMobileForm, setMenuMobileForm, auth,handleOnLoginForm } = props
    const dispatch = useDispatch();


    return (
        <div className={menuMobileForm ? "menuMobile__box show" : "menuMobile__box"}>
            <div style={{ position: "relative", margin: "80px 50px" }}>
                <div className="menuMobile-user">
                <FaUserCircle className="navbar__item-icon icon-user" />
                    {
                        auth.authenticate ? (
                            <>     
                                <p className="user-name" > {auth.user.fullname}</p>
                                <div>
                                    <AiOutlineDown style={{ fontSize: "2rem", marginLeft: "10px" }} onClick={() => setDropdown(!dropdown)} />
                                    {
                                        dropdown ? (
                                            <ul className="dropdown" >
                                                <li><Link to="/order" className="link-order-mb" >My Orders</Link></li>
                                                <li>My Addresses</li>
                                                <li>My Wallet</li>
                                                <li>My Account</li>
                                                <li onClick={() => { dispatch(signout()) }}>Log Out</li>
                                            </ul>
                                        ) : null
                                    }

                                </div>
                            </>
                        ) : <span style={{ paddingLeft: "5px" }} onClick={handleOnLoginForm}  >Log In</span>
                    }




                </div>
                <ul className="menuMobile__items">
                    <li><NavLink to="/" exact activeStyle={{ color: "#65dba9" }}  >Home</NavLink></li>
                    <li><NavLink to="/shop" exact activeStyle={{ color: "#65dba9" }}  >Shop</NavLink></li>
                    <li><NavLink to="/about" exact activeStyle={{ color: "#65dba9" }} >About</NavLink></li>
                    <li><NavLink to="/contact" exact activeStyle={{ color: "#65dba9" }} >Contact</NavLink></li>
                </ul>
                <span className="menuMobile__close" onClick={() => setMenuMobileForm(false)} >
                    <svg viewBox="0 0 24 24" fill="currentColor" width={44} height={44}>
                        <path d="M17 6L12.001 10.999 7 6 6 7 11.001 11.999 6 17 7 18 12.001 12.999 17 18 18 17 13 11.999 18 7z">
                        </path>
                    </svg>
                </span>
            </div>
        </div >
    )

}

export default MenuMobile