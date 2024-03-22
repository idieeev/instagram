import { useState,useEffect } from "react";

function useDarkside(){
    const [theme,Settheme]=useState(localStorage.theme)
    const colorTheme=theme==="dark"?"light":"dark"

    useEffect(()=>{
        const root=window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem("theme",theme)
    },[theme,colorTheme])
    return[colorTheme,Settheme]
}
export default useDarkside
