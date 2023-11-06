export const renderer= (el:string , update:string | HTMLElement ) => {
    document.getElementById(el)!.innerHTML=""
    document.getElementById(el)!.append(update)
}