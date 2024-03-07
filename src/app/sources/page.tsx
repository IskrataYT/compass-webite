import Styles from "./sources.module.css"
import Link from "next/link";
import Parallax from "../components/parallax";
import Footer from "../components/footer"

const Sources = () => {
    return (<>
        <Parallax></Parallax>
        <div className={Styles.sourcesContainer}>
            <h2 className={Styles.sourcesTitle}>Sources & tools we used to make this website:</h2>
            <ul className={Styles.sourcesList}>
                <a href={"https://www.wikipedia.org/"}>Wikipedia</a>
                <a href={"https://www.pexels.com"}>Pexels</a>
                <a href={"https://code.visualstudio.com/"}>VS code</a>
                <a href={"https://nodejs.org/en"}>NodeJS</a>
                <a href={"https://nextjs.org/"}>NextJS</a>
            </ul>
            <Link className={Styles.returnButton} href="/">Return back</Link>

        </div >
        <Footer></Footer>
        </>

    )
}
export default Sources;