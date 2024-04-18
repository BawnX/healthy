import { useState } from "react";

export type InputError = {
    tooShort: string
    patternMismatch: string
    valueMissing: string
    typeMismatch: string
    rangeOverflow: string
    rangeUnderflow: string
}

interface Props {
    placeHolder: string;
    id: string;
    isRequired?: boolean
    minLength?: number
    name?: string
    pattern?: string
    errorsMessage?: InputError
    type: "text" | "email" | "number" | "date",
    min?: number 
    max?: number 
    step?: number 
}

export default function Input({ placeHolder, id, isRequired, minLength, pattern, errorsMessage, type, min, max, step } : Props){
    const [invalidMessage, setIsInvalidMessage] = useState("")

    const onInvalid = (e: any) => {
        const element= e.target as HTMLInputElement

        if(errorsMessage == undefined){
            return
        }

        for (const key in errorsMessage) {
            const validState = element.validity as any
            console.log(validState)
            if(validState[key]){
                const messages= errorsMessage as any
                setIsInvalidMessage(messages[key])
                return  
            }

            setIsInvalidMessage("")
        }
    }

    let maxDate = undefined
    let minDate = undefined

    if(type === "date"){
        const date = new Date()
        maxDate = (date.getFullYear() - 10) + "-12-31"
        minDate = (date.getFullYear() - 100) + "-01-01"
    }

    return (
        <section className="w-full h-[80px] md:px-4 px-8">
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    aria-describedby="outlined_success_help"
                    className="input input-bordered w-full border-1 focus:outline-none focus:ring-0 focus:border-primary peer invalid:focus:border-warning invalid:focus:text-warning"
                    placeholder=""
                    required={isRequired}
                    minLength={minLength}
                    onChange={onInvalid}
                    pattern={pattern}
                    max={maxDate ?? max}
                    min={minDate ?? min}
                    step={step}
                />
                <label
                    htmlFor={id}
                    className="absolute text-sm text-primary bg-base-100 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        {placeHolder}
                </label>
            </div>
        
            {<p className="mt-2 text-xs text-warning font-medium">
            {invalidMessage}
            </p>}
        </section>
    )
}
