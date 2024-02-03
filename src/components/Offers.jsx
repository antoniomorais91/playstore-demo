import OffersItem from "./OffersItem"
import { gamesData } from "../utils/utils"

export default function Offers() {

    const arrayGamesData = gamesData.map(item => {
        return(
            <OffersItem
            id={item.id}
            caption={item.caption}
            src={item.src}
            alt={item.alt}
            discount={item.discount}
            price={item.price}
            oldPrice={item.oldPrice}
        />
        )
    })

    return (
        <>
        <article className="offersarticle">
        <h2>Ofertas</h2>
        <section className="offers">
            
            {arrayGamesData}
        </section>
        </article>
        </>
    )
}