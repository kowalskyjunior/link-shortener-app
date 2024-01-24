import './Footer.css'
import FooterLogo from '../assets/logo.svg'
import FacebookLogo from '../assets/icon-facebook.svg'
import TwitterLogo from '../assets/icon-twitter.svg'
import PinterestLogo from '../assets/icon-pinterest.svg'
import InstagramLogo from '../assets/icon-instagram.svg'

export default function Footer() {
    return (
        <div className="footer">
            <div className="boost-wraper">
                <div className="boost-text">
                    <h2>Boost your links today</h2>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="container">
                <div className="footer-wraper">
                    <div className="footer-logo"><img src={FooterLogo} alt="" /></div>

                    <div className="footer-features">
                        <h2>Features</h2>
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>

                    <div className="footer-resources">
                        <h2>Resources</h2>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>

                    <div className="footer-company">
                        <h2>Company</h2>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>

                    <div className="social-wraper">

                        <div className="footer-social">
                            <div className="facebook"><img src={FacebookLogo} alt="" /></div>
                            <div className="twitter">
                                <img src={TwitterLogo} alt="" />
                            </div>
                            <div className="pinterest">
                                <img src={PinterestLogo} alt="" />
                            </div>
                            <div className="instagram">
                                <img src={InstagramLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
