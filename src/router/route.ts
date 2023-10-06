import { home } from "../Pages/Home";
import { searchPage } from "../Pages/Search";
import { signIn } from "../Pages/Sign in/Signin";
import { signUP } from "../Pages/Sign up";

export function route(){
    switch (location.pathname) {
        case "/Signup":
            return signUP();
        case "/Signin" :
            return signIn()
        case "/Search" :
            return searchPage()
    
        default:
            return home()
    }
}