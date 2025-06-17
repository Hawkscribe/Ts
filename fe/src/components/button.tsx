export interface ButtonProps{
    variant:"primary"|"secondary";
    size?:"sm"|"md"|"lg";
    text:string;
    startIcon?:any;
    endIcon?:any;
    onClick?:()=>void;
}
const variantStyle={
    "primary":"bg-purple-600 text-white",
"secondary":"bg-purple-300 text-purple-600"
}
const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}

const defaultStyles="rounded-md flex "
export const Button=(props:ButtonProps)=>{

    return <button className={`${variantStyle[props.variant]} 
    ${defaultStyles} ${sizeStyles[props.size??"md"]}`}>
      {props.startIcon?<div className="pr-2">{props.startIcon}</div>:null}  {props.text}{props.endIcon}</button>
}
