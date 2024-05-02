import {useState} from "react"
import "./App.css"
import CalcForm from "./components/CalcForm/CalcForm.tsx"
import {CalculatorProps, isMathOperator, MathOperator} from "./components/Calculator/calculator.interfaces.ts"
import Calculator from "./components/Calculator/Calculator.tsx"

function App() {
    const [calcData, setCalcData] = useState<CalculatorProps | null>(null)

    const formChangeHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
        const formData = new FormData(e.currentTarget)

        setCalcData({
            x: parseInt(formData.get("x") as string | null || "0" ),
            y: parseInt(formData.get("y") as string | null || "0" ),
            operator: isMathOperator(formData.get("operator") as string) ? formData.get("operator") as MathOperator : "+"
        })
    }

    return (
        <div>
            <CalcForm onChange={formChangeHandler}/>
            {calcData && <Calculator x={calcData.x} y={calcData.y} operator={calcData.operator}/>}
        </div>
    )
}

export default App
