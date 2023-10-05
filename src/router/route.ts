import { home } from "../Pages/Home";
import { signIn } from "../Pages/Sign in/Signin";
import { signUP } from "../Pages/Sign up";

export function route(){
    switch (location.pathname) {
        case "/Signup":
            return signUP();
        case "/Signin" :
            return signIn()
    
        default:
            return home()
    }
}