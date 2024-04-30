import styles from "./test.module.css";
import { nanoid } from "nanoid";
console.log(styles);

export function TestComp({ props1, props2, props3, props4, props5, films }) {
  console.log(films);
  return (
    <div className={styles.wrapper}>
      <h1>TestComp</h1>
      <p>props1: {props1}</p>
      <p>props2: {props2}</p>
      <p>props3: {JSON.stringify(props3)}</p>
      <button onClick={props4} className={styles.wrapper}>
        props4
      </button>
      <p>props5: {props5}</p>
      <div>
        <h3>props6:</h3>
        <div>
          {films.map((film) => (
            <div key={nanoid()}>
              <p>{film.title}</p>
              <p>{film.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/*C помощью пропcов мы можем передавать данные
от родительских компонентов дочерним.
Внутри JSX обращение к пропсам (а также любым другим переменным)
осуществляется с помощью фигурных скобок: <span>{variable}</span>.
*/
