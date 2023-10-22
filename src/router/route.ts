import { home,searchPage ,searchResult,signIn,signUP,singleProduct} from "../Pages";
import { cartPage } from "../Pages/CartPage";

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
        case "/Singleproduct" :
            return singleProduct()
        case "/CartPage" :
            return cartPage()   
        default:
            return home()
    }
}