import React from 'react'
import "./Header.css"
const Header = () => {
    const [open, setIsOpen] = React.useState(false)
    return (
        <header className="header ">
            <div className="header_container">
                <div>
                    <h1>CoolFit</h1>
                </div>


                <div className="header_links">
                    <a href="#">Lorem</a>
                    <a href="#">ipsum</a>
                    <a href="#">cortae</a>
                    <a href="#">lemna</a>
                    <a href="#">sum</a>
                </div>
                <div className="header_login">
                    <a href="#">Login</a>
                </div>
                <div className='hamburger_section'>

                    <span onClick={() => setIsOpen(prev => !prev)}>CLICK</span>
                    {
                        open && (
                            <div className='small_header'>
                                <a href="#">Lorem</a>
                                <a href="#">ipsum</a>
                                <a href="#">cortae</a>
                                <a href="#">lemna</a>
                                <a href="#">sum</a>
                                <div className="header_login">
                                    <a href="#">Login</a>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header