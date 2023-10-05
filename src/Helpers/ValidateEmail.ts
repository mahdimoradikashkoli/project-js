export const validateEmail = (text:string) => {
    if(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)){
        return (true)
    }else{
        return (false)
    }
}