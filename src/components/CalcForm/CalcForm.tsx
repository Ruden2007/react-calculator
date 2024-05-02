import {DOMAttributes, HTMLAttributes} from "react"

interface CalcFormProps extends HTMLAttributes<HTMLFormElement>, DOMAttributes<HTMLFormElement> {}

export default function CalcForm(props: CalcFormProps) {
    return (
        <form {...props}>
            <input type="number" name="x"/>
            <select name="operator">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="^">^</option>
            </select>
            <input type="number" name="y"/>
        </form>
    )
}