import Styles from "./card.module.css"


const Card = ({ title, text, imgUrl, btnUrl, isLeft }: { title: string, text: string, imgUrl: string, btnUrl: string, isLeft: boolean }) => {
    return (
        <div className={Styles.cardContainer}>
            {!isLeft && <div className={Styles.cardImage}>
                <img src={imgUrl} />
            </div>}
            <div className={Styles.cardTexts}>
                <h2 className={Styles.cardTitle + " font-title"}>{title}</h2>
                <p className={Styles.cardText}>{text}</p>
                <a href={btnUrl} className={Styles.cardButton}>Learn more</a>
            </div>
            {isLeft && <div className={Styles.cardImage}>
                <img src={imgUrl} />
            </div>}

        </div>
    )
}

export default Card;