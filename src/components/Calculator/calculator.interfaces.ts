export type MathOperator = "+" | "-" | "*" | "/" | "^"

export interface CalculatorProps {
    x: number
    y: number
    operator: MathOperator
}

export function isMathOperator(value: string): value is MathOperator {
    return ["+", "-", "*", "/", "^"].includes(value)
}