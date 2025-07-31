import { useEffect } from "react";
const usetitle = (title)=>{
    useEffect(()=>{
        document.title=title
    },[title])
}
export default usetitle