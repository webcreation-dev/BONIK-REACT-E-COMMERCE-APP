import React, {useState} from "react"

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fa-solid fa-border-all"></span>
                        <h4>
                            Categories <i className="fa fa-chevron-down"></i>
                        </h4>
                    </div>

                    <div className="navlink">
                        <ul className={ MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize" } onClick={ () => setMobileMenu(false) } >
                            <li>
                                <a href="/">home</a>
                            </li>
                            <li>
                                <a href="/pages">pages</a>
                            </li>
                            <li>
                                <a href="/user">user account</a>
                            </li>
                            <li>
                                <a href="/vendor">vendor account</a>
                            </li>
                            <li>
                                <a href="/track">track my order</a>
                            </li>
                            <li>
                                <a href="/contact">contact</a>
                            </li>
                        </ul>

                        <button className="toogle" onClick={() => setMobileMenu(!MobileMenu)} >
                            {
                                MobileMenu ? <i className="fa fa-times close home-btn"></i> :
                                <i className="fa-solid fa-bars open"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar