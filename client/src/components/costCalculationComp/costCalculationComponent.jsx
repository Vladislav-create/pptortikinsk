import { useEffect } from "react"
import styles from "./costCalculation.module.css"
import { nanoid } from 'nanoid'


export function CostCalculationComponent() {
    
    function getAllDataFromDbUsers () {
        fetch('/api/bricks')
        .then(response => response.json())
        .then(data => { console.log(data) }
        )
    }

    const onButtonClick = (e) => {
        let id = nanoid();
        const elemName = document.getElementById('name').value;
        const elemPhone = document.getElementById('phone').value;
        const elemDescription = document.getElementById('description').value;
        e.preventDefault();
        console.log('hi');
        fetch('/', {
            method: 'POST',
            body: JSON.stringify({ id, elemName, elemPhone, elemDescription}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        console.log(elemName);
        console.log(elemPhone);
        console.log(elemDescription);
    }

    useEffect(getAllDataFromDbUsers, []);

    return (
        <div className={styles.contentBox}>
            {/* <h1>Рассчитать стоимость торта</h1>
            <br></br> */}
            {/* 
                1) торт
                2) вес
                3) декор
            */}
            {/* <div className={styles.choiceBox}>
                <section className={styles.typesOfCakes}>
                    <h3>Торт</h3>
                    <div className={styles.typesOfCakes__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="cake1" name="cake"/>
                        <label className={styles.radioButton__lable} htmlFor="cake1">Торт 1</label>
                    </div>
                    <div className={styles.typesOfCakes__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="cake2" name="cake"/>
                        <label className={styles.radioButton__lable} htmlFor="cake2">Торт 2</label>
                    </div>
                    <div className={styles.typesOfCakes__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="cake3" name="cake"/>
                        <label className={styles.radioButton__lable} htmlFor="cake3">Торт 3</label>
                    </div>
                </section>
                <section className={styles.toppings}>
                    <h3>Вес</h3>
                    <div className={styles.toppings__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="toppings1" name="toppings"/>
                        <label className={styles.radioButton__lable} htmlFor="toppings1">Вес 1</label>
                    </div>
                    <div className={styles.toppings__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="toppings2" name="toppings"/>
                        <label className={styles.radioButton__lable} htmlFor="toppings2">Вес
                            2</label>
                    </div>
                    <div className={styles.toppings__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="toppings3" name="toppings"/>
                        <label className={styles.radioButton__lable} htmlFor="toppings3">Вес
                            3</label>
                    </div>
                </section>
                <section className={styles.toppings}>
                    <h3>Декор</h3>
                    <div className={styles.toppings__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="decor1" name="decor"/>
                        <label className={styles.radioButton__lable} htmlFor="decor1">Декор 1</label>
                    </div>
                    <div className={styles.toppings__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="decor2" name="decor"/>
                        <label className={styles.radioButton__lable} htmlFor="decor2">Декор
                            2</label>
                    </div>
                    <div className={styles.toppings__radioButton}>
                        <input className={styles.radioButton__imput} type="radio" id="decor3" name="decor"/>
                        <label className={styles.radioButton__lable} htmlFor="decor3">Декор
                            3</label>
                    </div>
                </section>
            </div>

            <br></br> */}
            <h1 className={styles.title}>Заказать торт</h1>
            <form className={styles.form}>
                <input id="name" className={styles.form__name} placeholder="Укажите ваше имя"></input>
                <br></br>
                <input id="phone" className={styles.form__phone} placeholder="Контактный номер телефона"></input>
                <br></br>
                <textarea id="description" className={styles.form__description} placeholder="Напишите, что вы ходите заказать, мы свяжемся с вами в течении дня"></textarea>
                <br></br>
                <button className={styles.form__btn} onClick={onButtonClick}> Отправить заказ</button>
            </form>
        </div>
    )
}
