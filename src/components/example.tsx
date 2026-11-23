import React, {memo} from "react";

interface ExampleProps {
    value:number;
}
const Example:React.FC<ExampleProps> = (props) => {
    console.log(props.value);
    return(
        <>
             <h2 className="text-2xl text-rose-600">{props.value}</h2>
        </>
    )
}
export default memo(Example);
