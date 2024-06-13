import React from "react";
import styles from "./items.module.css"

function Items() {



    let items = [
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 4060",
            price: 48000,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 4080",
            price: 60000,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 4090",
            price: 70000,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 5080",
            price: 90000,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 4060",
            price: 48000,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 4060",
            price: 48000,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "rtx 4060",
            price: 48000,
        },


    ]


    console.log(items)
    return (
        <div className={styles.items}>
            {
                items.map((item) => (
                    <div className='item'>
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <div>
                            <h3>{item.price}</h3>
                            <div>
                                <button>В избранные</button>
                                <button>в корзину</button>
                            </div>
                        </div>

                    </div>
                ))
            }


        </div>
    )
}

export default Items



