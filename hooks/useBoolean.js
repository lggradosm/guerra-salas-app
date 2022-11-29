import { useEffect, useRef, useState } from "react"

export const useBoolean = ()=>{
    const [value,setValue] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        let handler = (e)=>{
            if(ref.current?.contains(e.target))
                off();
        }
        document.addEventListener("mousedown",handler);
        return ()=>{
            document.removeEventListener("mousedown",handler);
        }
    })

    const on = ()=>{
        setValue(true);
    }

    const off = ()=>{
        setValue(false);
    }

    const toggle = ()=>{
        setValue((prev)=>!prev);
    }


    return {value,on,off,toggle,ref}
}

export default useBoolean;