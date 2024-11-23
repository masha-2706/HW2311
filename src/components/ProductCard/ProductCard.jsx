// Создать 2 компонента. Первый - ProductCard, который будет рендерит карточку товара. Карточка содержит изображение в верхней части, под ним - название и цена (в одну строку), под этой строкой - описание, и под описанием список брендов. Список брендов рендерить как “плашки”. 


import React from 'react'
import styles from './ProductCard.module.css'
import { products } from '../ProdcutsList/ProdcutsList'


function ProductCard() {
    return (
        <>
            {products.map(el => {
                return (
                    <div className={styles.cardElem} key={el.name}>
                        <img className={styles.elemImage} src={el.image} alt="#" />
                        <h4 className={styles.elemName} >{el.name} <span>{el.price}</span></h4>
                        <p className={styles.elemDescription}>{el.description}</p>
                        <ul>
                            {el.brands.map( el => {
                                return(
                                    <ul className={styles.elemList}>
                                    <li>{el}</li>
                                    </ul>   
                                )
                            })}
                        </ul>
                    </div>
                )
            })
            }
        </>
    )
}

export default ProductCard
