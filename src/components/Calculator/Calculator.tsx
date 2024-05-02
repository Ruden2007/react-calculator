import {CalculatorProps, MathOperator} from "./calculator.interfaces.ts"


function calc(x: number, y: number, operator: MathOperator) {
    switch (operator) {
    case "+": return x + y
    case "-": return x - y
    case "*": return x * y
    case "/": return x / y
    case "^": return Math.pow(x, y)
    }
}

export default function Calculator({x, y, operator}: CalculatorProps) {
    return <div>{calc(x, y, operator)}</div>
}