import { useEffect } from "react"
import styles from "./costCalculation.module.css"
import { nanoid } from 'nanoid'


export function CostCalculationComponent() {
    
    function getAllDataFromDbUsers () {
        fetch('/api/')
        .then(response => response.json())
        .then(data => { console.log(data) }
        )
    }

    const onButtonClick = (e) => {
        let id = nanoid()
        e.preventDefault();
        console.log('hi');
        fetch('/api/bricks', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    useEffect(getAllDataFromDbUsers, []);

    return (
    
        <div>
            <h1>Рассчитать стоимость торта</h1>
            <br></br>
            <br></br>
            <h1>Заказать торт</h1>
            <form className={styles.form}>
                <input className={styles.form__name} placeholder="Укажите ваше имя"></input>
                <br></br>
                <input className={styles.form__phone} placeholder="Контактный номер телефона"></input>
                <br></br>
                <textarea className={styles.form__description} placeholder="Напишите, что вы ходите заказать, мы свяжемся с вами в течении дня"></textarea>
                <br></br>
                <button className={styles.form__btn} onClick={onButtonClick}> Отправить заказ</button>
            </form>
        </div>
    )
}
