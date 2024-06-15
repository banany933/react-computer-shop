import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [
        {
            id: 1,
            image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6f870593a36fe11ef1eee92ae6b4d36e/f1b6ba1dfa062a28dc3e77f10042664c4bd0981fd39cfc8f9599eda6b0e1741d.jpg",
            title: "Видеокарта KFA2 GeForce RTX 4060 CORE Black",
            price: 34999,
        },
        {
            id: 2,
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/0ae93d58468425f2507619b7b035b3a9/0288e45a0f01d9efecdad117cbf1d71b3dcf1b24bb48f30ed0e1a55377a01dfa.jpg.webp",
            title: "Видеокарта MSI GeForce RTX 4070 SUPER GAMING X SLIM MLG",
            price: 87999,
        },
        {
            id: 3,
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/9943d1de8e70cc7955eba64373c29b48/927b7196d085e0d62c46e2ff5f8fe3006f23f1de4de6065670f0206438ae0aac.jpg.webp",
            title: "Видеокарта Palit GeForce GTX 1660 SUPER GamingPro",
            price: 22999,
        },
        {
            id: 4,
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/43fcd4c9ce8c4aaf26cf5fef0279f8a0/6fc1f030502b09e7a29a46176dc98a14b3aa2e5775cc695829841a44dbc0f051.jpg.webp",
            title: "Видеокарта ASUS GeForce GTX 1630 Phoenix EVO",
            price: 15499,
        },
        {
            id: 5,
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/a4040017974b0568f2bfd26ec28e240c/c39a0016caf53e948e8d29f43ed6db594838351d7cbd0a1b94f26423207c5a9b.jpg.webp",
            title: "Видеокарта MSI GeForce RTX 4080 SUPER VENTUS 3X OC",
            price: 136999,
        },
        {
            id: 6,
            image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/b9b56aa9ef18647d3317209e8b0ae450/ca6084efe2e95812418cd3de867a4485288d52bf0724ad1077ce8635366bda88.jpg.webp",
            title: "Видеокарта GIGABYTE GeForce RTX 2060 SUPER WINDFORCE OC",
            price: 22199,
        },
        {
            id: 7,
            image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/5b05d8f0b2edc3feab6ecf0788980195/acda89bc24f2ee7e897c05738d5e76b2ce084484f126aedbcbe9b88a27147b40.jpg.webp",
            title: "Видеокарта INNO3D GeForce GTX 1650 TWIN X2 OC V3",
            price: 17399,
        },
    
    
    ]

}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {

    }
})

export const {  } = itemsSlice.actions

export default itemsSlice.reducer



