import React, { useState } from 'react'
import "./style.css"
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import Form from '../UI/Form';
import MiniCart from './MiniCart';
import { useDispatch, useSelector } from "react-redux"
import { login, signout, signup } from "../../actions/auth.actions"
import MenuMobile from './MenuMobile';
/**
* @author
* @function Header
**/

const Header = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const cart = useSelector((state) => state.cart);
    const [loginForm, setLoginForm] = useState(false);
    const [signupForm, setSignupForm] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cartForm, setCartForm] = useState(false)
    const [menuMobileForm, setMenuMobileForm] = useState(false)


    const handleOnLoginForm = () => {
        setSignupForm(false);

        setLoginForm(true);
    }

    const handleCloseLoginForm = () => {
        setLoginForm(false);

    }

    const handleOnSignupForm = () => {

        setLoginForm(false);
        setSignupForm(true);
    }

    const handleCloseSignupForm = () => {
        setSignupForm(false)

    }
    const handleOnCartForm = () => {
        setCartForm(true)
    }

    const handleCloseCartForm = () => {
        setCartForm(false)
    }

    const userSignup = () => {
        const user = { firstName, lastName, email, password }
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        ) {
            return
        }
        dispatch(signup(user))
        handleCloseSignupForm()
    }

    const userLogin = () => {
        dispatch(login({ email, password }))
        handleCloseLoginForm()
    }

    const userSignout = () => {
        dispatch(signout())
    }

    return (


        <header className="header">
            <div className="grid wide">
                <div className="header__box">
                    <div className="header__logo">
                        <div className="logo__img">
                            <svg className="logo__img-svg" viewBox="18.3 21 162.401 158.782">
                                <g>
                                    <path fill="#366a56" d="M169.9 84.9h-25.5l-15.7-36.5c4.9-2.3 8.3-7.2 8.3-13 0-7.9-6.4-14.3-14.3-14.3s-14.3 6.4-14.3 14.3c0 7.3 5.5 13.4 12.7 14.2l15.1 35.3H58.9L74 49.5c.7.1 1.4.2 2.2.2 7.9 0 14.3-6.4 14.3-14.3S84.1 21 76.2 21s-14.3 6.4-14.3 14.3c0 4.5 2 8.4 5.2 11.1L50.6 84.9H29.2s-10.9 0-10.9 9.3c0 0 0 9.3 12.4 9.3l10.9 68.4s0 7.8 15.6 7.8h88.6s10.9 1.6 12.4-9.3l7.8-66.9h2.3c12.4 0 12.4-9.3 12.4-9.3.1-9.3-10.8-9.3-10.8-9.3zm-47.2-42.8c-3.7 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8c3.7 0 6.8 3 6.8 6.8s-3 6.8-6.8 6.8zM76.2 28.6c3.7 0 6.8 3 6.8 6.8s-3 6.8-6.8 6.8-6.8-3-6.8-6.8 3.1-6.8 6.8-6.8zm-34.3 76.5c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4l31.3.1c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4l-31.3-.1zm18.8 55.5c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4v-38.9c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4v38.9zm15.2 0c0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1.1-2.4-2.4v-38.9c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4v38.9zm17 0c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4v-38.9c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4v38.9zm17.1 0c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4v-38.9c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4v38.9zm17.1 0c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4v-38.9c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4v38.9zm16.1 0c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4v-38.9c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4v38.9zm11-55.3l-63.7-.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4l63.6.2c1.3 0 2.4 1.1 2.4 2.4 0 1.4-1 2.4-2.3 2.4z" data-color={1} />
                                </g>
                            </svg>
                        </div>
                        <span className="logo__title">
                            Fresh Market
                        </span>
                    </div>
                    <nav className="header__navbar ">
                        <ul className="navbar__list">
                            <li className="navbar__item "><NavLink exact to="/" activeStyle={{ color: "#65dba9" }}  >Home</NavLink></li>
                            <li className="navbar__item"><NavLink exact to="/shop" activeStyle={{ color: "#65dba9" }} >Shop</NavLink></li>
                            <li className="navbar__item">About</li>
                            <li className="navbar__item">Contact</li>
                            <li className="navbar__item">

                                <div className="navbar__item-icon">
                                    {
                                        auth.authenticate ?
                                            (<div className="user">
                                                <div className="user-box1 ">
                                                    <FaUserCircle className="navbar__item-icon" />

                                                    <p className="user-name">
                                                        {auth.user.fullname}
                                                    </p>
                                                </div>

                                                <ul className="user-box2">
                                                    <li><Link to="/order" className="link-order" >My Orders</Link></li>
                                                    <li>My Addresses</li>
                                                    <li>My Wallet</li>
                                                    <li>My Accountv</li>
                                                    <li onClick={userSignout} style={{ borderTop: "1px solid #d6cccc" }} >Logout</li>
                                                </ul>
                                            </div>)
                                            :
                                            (<div className="no-user" onClick={handleOnLoginForm}>
                                                <FaUserCircle className="navbar__item-icon icon-user" />
                                                <p>Login</p>
                                            </div>)
                                    }


                                </div>


                            </li>
                            <li className="navbar__item  navbar__item-cart" >
                                <svg viewBox="5.7 0 105.5 126.1" onClick={handleOnCartForm}>
                                    <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z">
                                    </path>
                                    <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z">
                                    </path><text x="58.5" y={77} dy=".35em" textAnchor="middle">0</text>
                                </svg>
                                <p className="navbar__item-cart--number" onClick={handleOnCartForm} >{Object.keys(cart.cartItems).length}</p>
                                <MiniCart show={cartForm} handleCloseCartForm={handleCloseCartForm} />
                            </li>
                            <li className="navbar__item  navbar__mobile-item">
                                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => setMenuMobileForm(true)} >☰</span>

                                <MenuMobile
                                    menuMobileForm={menuMobileForm}
                                    setMenuMobileForm={setMenuMobileForm}
                                    auth={auth}
                                    handleOnLoginForm={handleOnLoginForm}
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* <div className="overlay">
                <div className="navbar__mobile">
                    <br />
                    <button className="btn__moblie-close" onclick="closeNav()">&times;</button>
                    <br />
                    <br />
                    <ul className="navbar__mobile-list">
                        <li className="navbar__mobile-item navbar__mobile-item--login">
                            <i className="fas fa-user-circle navbar__mobile-item--icon"></i>
                            <p>Login</p>
                        </li>
                        <li className="navbar__mobile-item navbar__mobile-item--active">Home</li>
                        <li className="navbar__mobile-item">Shop</li>
                        <li className="navbar__mobile-item">About</li>
                        <li className="navbar__mobile-item">Contact</li>
                    </ul>
                </div>
            </div> */}

            <div className={loginForm ? "box" : "box hiden"}>
                <Form
                    // show={loginForm}
                    title="Member login"
                    input={[
                        { type: "email", placeholder: "email", value: email, onChange: (e) => setEmail(e.target.value) },
                        { type: "password", placeholder: "password", value: password, onChange: (e) => setPassword(e.target.value) },
                    ]}
                    btn={[
                        { title: "login", color: "#2a6049", onClick: userLogin },
                    ]}
                    link={[{ title: "signup", color: "#0477c7", onClick: handleOnSignupForm }]}
                    close={handleCloseLoginForm}
                />
            </div>
            <div className={signupForm ? "box" : "box hiden"}>
                <Form
                    // show={signupForm}
                    title="Member Signup"

                    input={[
                        { type: "email", placeholder: "email", value: email, onChange: (e) => setEmail(e.target.value) },
                        { type: "text", placeholder: "firstName", value: firstName, onChange: (e) => setFirstName(e.target.value) },
                        { type: "text", placeholder: "lastName", value: lastName, onChange: (e) => setLastName(e.target.value) },
                        { type: "password", placeholder: "password", value: password, onChange: (e) => setPassword(e.target.value) },


                    ]}
                    btn={[
                        { title: "registration", color: "#2a6049", onClick: userSignup },
                    ]}
                    link={[{ title: "login", onClick: handleOnLoginForm }]}
                    close={handleCloseSignupForm}
                />

            </div>


        </header>

    )

}

export default Header