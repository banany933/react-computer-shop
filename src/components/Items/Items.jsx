import React from "react";
import styles from "./items.module.css"



function Items() {



    let items = [
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "Видеокарта KFA2 GeForce RTX 4060 CORE Black",
            price: 34999,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/0ae93d58468425f2507619b7b035b3a9/0288e45a0f01d9efecdad117cbf1d71b3dcf1b24bb48f30ed0e1a55377a01dfa.jpg.webp",
            title: "Видеокарта MSI GeForce RTX 4070 SUPER GAMING X SLIM MLG",
            price: 87999,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/9943d1de8e70cc7955eba64373c29b48/927b7196d085e0d62c46e2ff5f8fe3006f23f1de4de6065670f0206438ae0aac.jpg.webp",
            title: "Видеокарта Palit GeForce GTX 1660 SUPER GamingPro",
            price: 22999,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/43fcd4c9ce8c4aaf26cf5fef0279f8a0/6fc1f030502b09e7a29a46176dc98a14b3aa2e5775cc695829841a44dbc0f051.jpg.webp",
            title: "Видеокарта ASUS GeForce GTX 1630 Phoenix EVO",
            price: 15499,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/a4040017974b0568f2bfd26ec28e240c/c39a0016caf53e948e8d29f43ed6db594838351d7cbd0a1b94f26423207c5a9b.jpg.webp",
            title: "Видеокарта MSI GeForce RTX 4080 SUPER VENTUS 3X OC",
            price: 136999,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/b9b56aa9ef18647d3317209e8b0ae450/ca6084efe2e95812418cd3de867a4485288d52bf0724ad1077ce8635366bda88.jpg.webp",
            title: "Видеокарта GIGABYTE GeForce RTX 2060 SUPER WINDFORCE OC",
            price: 22199,
        },
        {
            image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/5b05d8f0b2edc3feab6ecf0788980195/acda89bc24f2ee7e897c05738d5e76b2ce084484f126aedbcbe9b88a27147b40.jpg.webp",
            title: "Видеокарта INNO3D GeForce GTX 1650 TWIN X2 OC V3",
            price: 17399,
        },


    ]


    console.log(items)
    return (
        <div className={styles.items}>
            {
                items.map((item) => (
                    <div className={styles.item}>
                        <img src={item.image} />
                        <h3 className={styles.card_title}>{item.title}</h3>
                        <div className={styles.card_footer}>
                            <div className={styles.card_price}>
                                <h3>{item.price} ₽</h3>
                            </div>

                            <div className={styles.card_buttons}>
                                <button><svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 6.36912C0.25 3.07041 2.65767 0.25 5.79925 0.25C7.49913 0.25 8.99404 1.08608 10 2.36847C11.0059 1.08613 12.5006 0.25 14.1996 0.25C17.3423 0.25 19.75 3.07167 19.75 6.36912C19.75 7.69532 19.2489 8.97129 18.5251 10.1284C17.7997 11.2883 16.8229 12.3733 15.8015 13.3326C13.7592 15.2508 11.4589 16.7397 10.3901 17.3906C10.1504 17.5365 9.84927 17.5365 9.60965 17.3904C8.54109 16.7391 6.24079 15.2501 4.19851 13.3322C3.17709 12.3729 2.20033 11.288 1.47488 10.1283C0.751138 8.97123 0.25 7.69533 0.25 6.36912ZM5.79925 1.75C3.63983 1.75 1.75 3.73625 1.75 6.36912C1.75 7.31789 2.11117 8.31698 2.74658 9.33278C3.38027 10.3458 4.25947 11.3316 5.22537 12.2387C6.94066 13.8496 8.86662 15.1546 10.0001 15.8678C11.1335 15.1552 13.0594 13.8502 14.7746 12.2392C15.7405 11.3321 16.6197 10.3462 17.2534 9.33299C17.8888 8.31707 18.25 7.3179 18.25 6.36912C18.25 3.73751 16.3602 1.75 14.1996 1.75C12.7203 1.75 11.3843 2.66549 10.6719 4.10155C10.5452 4.35679 10.2849 4.51824 10 4.51824C9.71508 4.51824 9.45476 4.35679 9.32813 4.10155C8.61575 2.66559 7.2798 1.75 5.79925 1.75Z" fill="#AFAFAF"></path></svg></button>
                                <button><svg data-v-5d9baa8c="" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-5d9baa8c="" fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H4.38197C5.04482 2.25 5.65078 2.6245 5.94721 3.21738L5.27639 3.55279L5.94721 3.21738L6.46353 4.25H20.1384C21.0982 4.25 21.6999 5.28685 21.2237 6.12017L17.9391 11.8682C17.6275 12.4135 17.0477 12.75 16.4197 12.75H8.91567L7.59225 14.8675C7.48818 15.034 7.60789 15.25 7.80425 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H7.80425C6.42974 16.75 5.59176 15.2381 6.32025 14.0725L7.67159 11.9103L5.30898 5.295L4.60557 3.8882C4.56322 3.8035 4.47666 3.75 4.38197 3.75H3C2.58579 3.75 2.25 3.41421 2.25 3ZM7.06427 5.75L9.02855 11.25H16.4197C16.5094 11.25 16.5922 11.2019 16.6368 11.124L19.7076 5.75H7.06427ZM10 19.5C10 20.3284 9.32843 21 8.5 21C7.67157 21 7 20.3284 7 19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5ZM17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z" fill="#AFAFAF"></path></svg></button>
                            </div>
                        </div>

                    </div>
                ))
            }


        </div>
    )
}

export default Items




