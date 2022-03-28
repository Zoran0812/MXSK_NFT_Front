import ScriptTag from 'react-script-tag';

import img_footer_logo from "assets/image/svg/footer-logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="shell">
                <div className="footer__logo">
                    <a href="#">
                        <img src={img_footer_logo} alt="" />
                    </a>
                </div>

                <div className="footer__bar">
                    <div className="footer__nav">
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
                                <a href="/events">Events</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__entry">
                        <p>Join us and celebrate artists, creators and collectors around the world.</p>
                    </div>
                </div>
            </div>
            <ScriptTag type="text/javascript" src="../../js/bundle.js" />
        </footer>
    )
}

export default Footer;