import { Link } from "react-router-dom";
import '../header/style_header.scss';
import { useState } from "react";

import logo from '/image/logo_mecafixpro.webp';
import profileLogo from '/image/logo_navigateur.webp';

export default function Header() {
    const [isConnected, setIsConnected] = useState(false);

    const toggleConnection = () => {
        setIsConnected(prevState => !prevState);
    };

    return (
        <>
            <header>
                <div className={isConnected ? 'connected' : ''}>
                    <Link to="/">
                        <img src={logo} alt="logo du site MecaFixPro" />
                    </Link>
                    {isConnected && (
                        <Link to="/profil">
                            <img className="profile_img" src={profileLogo} alt="profile logo" />
                        </Link>
                    )}
                </div>
                <nav>
                    <ul className={isConnected ? 'connect' : ''}>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/recherche">Recherche</Link></li>
                        {!isConnected ? (
                            <li><Link to="/login">Connexion</Link></li>
                        ) : (
                            <li><Link to="/logout">Déconnexion</Link></li>
                        )}
                    </ul>
                </nav>
            </header>

            <div style={{ marginTop: '20px', textAlign: 'end' }}>
                <button onClick={toggleConnection}>
                    {isConnected ? 'Simulate Deconnection' : 'Simulate Connection'}
                </button>
            </div>
        </>
    );
}
