import { Link } from "react-router-dom";
import '../footer/style_footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/image/logo_mecafixpro.webp" alt="logo" />
                    </div>
                    <div className="footer-links">
                        <Link to="#">Mentions légales</Link>
                        
                        <Link to="#">Contact</Link>
                    </div>
                    <div className="footer-copyright">
                        <p>Copyright © 2024 MecaFixPro. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}