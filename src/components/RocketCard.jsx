import rocketman from '../assets/rocketman.png'

export const RocketCard = ({itemClass, rocketName, rocketNameClass, price, priceClass, imageLocation, imageAlt, imageClass, tagline, taglineClass }) =>{
    return (
       <li className={itemClass}>
        <img src={rocketman} alt={imageAlt} className={imageClass} />
        <h3 className={rocketNameClass}>{rocketName}</h3>
        <p className={priceClass}>{price}</p>
        <p className={taglineClass}>{tagline}</p>
       </li>
    )
}