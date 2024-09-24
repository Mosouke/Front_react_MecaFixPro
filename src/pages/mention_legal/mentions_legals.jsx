import { Link } from "react-router-dom";
import logo from '/image/logo_mecafixpro.webp';
import '../mention_legal/mentions_legals.scss';

export default function MentionsLegals() {
    return (
        <>
            <div className="logo_mentions_legales">
                <Link to="/accueil">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <section className="mentions_legales">
                <h1>Mentions légales de MechaFixPro</h1>
                <article>
                    <h2>1. Éditeur</h2>
                    <p>MechaFixPro est édité par NikoDevWeb</p>
                    <p><strong>Adresse :</strong> Rue de la Liberté, 12, Bâtiment 1, 45000 Nantes, France</p>
                    <p><strong>Téléphone :</strong> +33 (0)7 67 83 18 04</p>
                    <p><strong>Email :</strong> <Link to="mailto:nikodevweb@gmail.com">nikodevweb@gmail.com</Link></p>
                </article>
                <article>
                    <h2>2. Hébergeur</h2>
                    <p>MechaFixPro est hébergé par versel</p>
                    <p><strong>Adresse :</strong> Vercel Inc.
                    340 S Lemon Ave #4133
                    Walnut, CA 91789
                    États-Unis</p>
                    <p><strong>Téléphone :</strong> +33 (0)6 00 00 00 00</p>                   
                </article>
                <article>
                    <h2>3. Propriété intelectuelle</h2>
                    <p>Le contenu du site MecaFixPro, incluant les textes, images, et graphismes, est la propriété exclusive de MecaFixPro. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de MecaFixPro.</p>
                </article>
                <article>
                    <h2>4. Protection des données personnelles</h2>
                    <p>Conformément au Règlement Général sur la Protection des Données (RGPD), MecaFixPro s'engage à protéger les données personnelles des utilisateurs. Les informations collectées sont nécessaires pour le traitement des demandes des utilisateurs et ne sont en aucun cas transmises à des tiers sans consentement préalable.</p>
                    <p><strong>Responsable du traitement des données :</strong> NikoDevWeb</p>
                    <p>Traitement des données : Collecte, utilisation et stockage des données personnelles pour le développement et l'amélioration du site MecaFixPro.</p>
                    <p><strong>Droits des utilisateurs :</strong> Les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et de portabilité des données personnelles les concernant. Ils peuvent également s'opposer au traitement de leurs données pour des motifs légitimes. Pour exercer ces droits, contactez-nous à l'adresse suivante : <Link to="mailto:nikodevweb@gmail.com">nikodevweb@gmail.com</Link>.</p>
                </article>
                <article>
                    <h2>5. Utilisation des cookies</h2>
                    <p>Le site MecaFixPro utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. En naviguant sur notre site, vous acceptez l'utilisation de ces cookies. Vous pouvez configurer votre navigateur pour refuser les cookies. Pour plus d'informations, consultez notre politique de Cookies. <Link to="#">ici</Link></p>
                </article>
                <article>
                    <h2>6. Limitation de responsabilité</h2>
                    <p>MecaFixPro s'efforce de fournir des informations précises et à jour. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations disponibles sur le site. En conséquence, MecaFixPro décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.</p>
                </article>
                <article>
                    <h2>7. Droit applicable et attribution de juridiction</h2>
                    <p>Tout litige en relation avec l'utilisation du site MecaFixPro est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents en matière de litiges.</p>
                </article>
                <article>
                    <h2>8. Contact</h2>
                    <p>Si vous avez des questions ou des commentaires sur le site MecaFixPro, n'hésitez pas à nous contacter à l'adresse suivante : <Link to="mailto:nikodevweb@gmail.com">nikodevweb@gmail.com</Link>.</p>
                </article>
                <Link className="btn" to="/">Retour</Link>
            </section>
        </>
    )
}