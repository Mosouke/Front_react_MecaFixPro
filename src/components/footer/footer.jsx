import { Link } from "react-router-dom";
import '../footer/style_footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/image/logo_mecafixpro.webp" alt="logo du site MecaFixPro" />
                    </div>
                    <div className="footer-links">
                        <Link to="/mentions_légales">Mentions légales</Link>
                        
                        <Link to="mailto:nikodevweb@gmail.com">Contact</Link>
                    </div>
                    <div className="footer-copyright">
                        <p>Copyright © 2024 MecaFixPro. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }