// import { response } from "express";
import { useEffect } from "react"

export function CostCalculationComponent() {
    
    useEffect(() => {
        fetch('/api/bricks').then(response => response.json()).then(data => {
            console.log(data);
        })
        console.log("CostCalculationComponent");
    }, []);

    return (
    
        <div>
            <h1>Рассчитать стоимость торта</h1>
            
        </div>
    )
}
