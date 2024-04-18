import type { ReactNode } from "react";
import type { JsxElement } from "typescript";

interface Props {
    linkTo?: string;
    textSize: "default" | "xl";
    type: "submit" | "link";
    children: ReactNode 
}


export default function Button({linkTo, textSize, type, children}: Props){
    const textSizes = {
        default: "",
        xl: "text-2xl",
    };
    
    const style = `btn btn-wide btn-primary ${textSizes[textSize]} w-full px-4`;

    if(type === "link"){
        return (
            <a className={style} href={linkTo}>
                {children}
            </a>
        )
    }

    return (
    <button type={type} className={style}>
       {children}
    </button>
    )
}
