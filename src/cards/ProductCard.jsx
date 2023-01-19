import React, {useState} from 'react'

const ProductCard = ({
                         title,
                         subtitle,
                         description1,
                         description2,
                         description3,
                         weight,
                         image,
                         introTitle,
                         buy,
                         introHoverTitle,
                         amount
                     }) => {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)

    const setCardHover = () => {
        active && setHover(!hover)
    }

    return (
        <figure>
            <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setCardHover()}
                 onClick={(i) => setActive(!active)}
                 className={active ? 'product-card active' : 'product-card'}>
                <div className='product-card__inner'>
                    <div
                        className={active && hover ? 'product-card__title-intro active' : 'product-card__title-intro disable'}>
                        {introHoverTitle}
                    </div>
                    <div
                        className={active && hover ? 'product-card__title-intro__def disable' : 'product-card__title-intro__def'}>
                        {introTitle}
                    </div>
                    <div className='product-card__title'>
                        {title}
                    </div>
                    <div className="product-card__title-subtitle">
                        {subtitle}
                    </div>
                    <div className='product-card__description'>
                        <p>{description1}</p>
                        <p>{description2}</p>
                        <p>{description3}</p>
                    </div>
                </div>
                <div className='product-card__content'>
                    <img className='product-card__image' src={image} alt='/'/>
                    <div className={active ? 'product-card__weight active' : 'product-card__weight'}>
                        <div>{weight}
                            <p>кг</p>
                        </div>
                    </div>
                </div>
            </div>
            <figcaption className='product-card__footer'>
                <div className='product-card__footer-buy'>
                    <div className={!active ? 'disable' : ''}>{buy}</div>
                    <div className={active ? 'disable' : ''}>Чего сидишь? Подаруй котэ,
                        <button onClick={() => setActive(!active)}
                                className='product-card__footer-buy__button'> купи.
                        </button>
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default ProductCard