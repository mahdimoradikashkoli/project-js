import { home } from "../Pages/Home";
import { searchPage } from "../Pages/Search";
import { searchResult } from "../Pages/SearchResult";
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
        case "/Searchresult" :
            return searchResult()
    
        default:
            return home()
    }
}