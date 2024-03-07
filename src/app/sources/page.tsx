import Styles from "./sources.module.css"
import Link from "next/link";
import Parallax from "../components/parallax";
import Footer from "../components/footer"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "True North - Sources",
    description: "Welcome to True North's sources page! Here you will find a collection of reliable and informative resources related to compasses, navigation, and all things directional. Whether you're a seasoned explorer or just curious about the science behind finding your way, our sources page will provide you with in-depth articles, books, and studies to deepen your understanding of True North.",
  };

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