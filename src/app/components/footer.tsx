import Styles from "./footer.module.css"
import Link from "next/link";

const Footer = () => {
    return (
        <div className={Styles.footerContainer}>
            <p>Made by Iskren and Filip. &copy;All rights reserved.</p>
            <Link href="/sources">Click here for sources and tools</Link>
        </div>
    )
}

export default Footer;