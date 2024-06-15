import React from "react";
import styles from './Cart.module.css'
import { items } from "../Items/Items";




const Cart = () => {



    return (
        <div className={styles.Cart}>
            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.item_wrapper}>
                        <div className={styles.item_img}>
                            <img src={items[0].image} alt="" />
                        </div>

                        <div className={styles.item_info}>
                            <div className={styles.item_title}>
                                <h3>{items[0].title}</h3>
                            </div>

                            <div className={styles.items_counter}>
                                <span className={styles.items_counter__bt}>-</span>
                                <span className={styles.items_count}>1</span>
                                <span className={styles.items_counter__bt}>+</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item_configurations}>
                        <div className={styles.item_remove__bt}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6663 3.125C12.0115 3.125 12.2913 2.84518 12.2913 2.5C12.2913 2.15482 12.0115 1.875 11.6663 1.875H8.33301C7.98783 1.875 7.70801 2.15482 7.70801 2.5C7.70801 2.84518 7.98783 3.125 8.33301 3.125L11.6663 3.125Z" fill="#AFAFAF"></path><path d="M17.2913 5C17.2913 5.34518 17.0115 5.625 16.6663 5.625L3.33301 5.625C2.98783 5.625 2.70801 5.34518 2.70801 5C2.70801 4.65482 2.98783 4.375 3.33301 4.375L16.6663 4.375C17.0115 4.375 17.2913 4.65482 17.2913 5Z" fill="#AFAFAF"></path><path d="M4.99967 7.70833C5.34485 7.70833 5.62467 7.98816 5.62467 8.33333V15.8333C5.62467 16.4086 6.09104 16.875 6.66634 16.875H13.333C13.9083 16.875 14.3747 16.4086 14.3747 15.8333V8.33333C14.3747 7.98816 14.6545 7.70833 14.9997 7.70833C15.3449 7.70833 15.6247 7.98816 15.6247 8.33333V15.8333C15.6247 17.099 14.5987 18.125 13.333 18.125H6.66634C5.40069 18.125 4.37467 17.099 4.37467 15.8333V8.33333C4.37467 7.98816 4.6545 7.70833 4.99967 7.70833Z" fill="#AFAFAF"></path><path d="M8.33301 9.375C8.67819 9.375 8.95801 9.65482 8.95801 10V14.1667C8.95801 14.5118 8.67819 14.7917 8.33301 14.7917C7.98783 14.7917 7.70801 14.5118 7.70801 14.1667V10C7.70801 9.65482 7.98783 9.375 8.33301 9.375Z" fill="#AFAFAF"></path><path d="M12.2913 10C12.2913 9.65482 12.0115 9.375 11.6663 9.375C11.3212 9.375 11.0413 9.65482 11.0413 10V14.1667C11.0413 14.5118 11.3212 14.7917 11.6663 14.7917C12.0115 14.7917 12.2913 14.5118 12.2913 14.1667V10Z" fill="#AFAFAF"></path></svg>
                        </div>
                        <div>
                            <h3>{items[0].price}₽</h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.order}>
                <h3>Условия заказа</h3>

                <div className={styles.order_info}>
                    <div className={styles.order_counter}>
                        <p>Итого:</p>
                        <h3>2 товара</h3>
                    </div>
                    <div className={styles.order_price}>
                        <h3>35 449 ₽</h3>
                    </div>
                </div>

                <div className={styles.order_bt}>
                    <button>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    )
}










export default Cart;