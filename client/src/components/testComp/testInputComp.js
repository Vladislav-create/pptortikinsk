import { useRef, useState, useEffect } from "react"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import styles from "./test.module.css";

export const UserData = () => {
    const [value, setValue] = useState('');
    const userNameInput = useRef();
    const handlePressInput = (e) => {
        console.log(e.code);
    }

//5487879785000215 ОМС
    useEffect(() => {
        userNameInput.current?.focus();
        console.log(userNameInput.current);
    }, []);

    return (
        <div className={styles.borderP}>
            <input 
                ref={userNameInput} 
                placeholder="Введите Имя" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handlePressInput}
                />
            <p>{value}</p>
            <Button variant="contained" endIcon={<SendIcon />}>Отправить</Button>
        </div>
    )
}