import { cartPage, deliveryAddress, deliveryAdress2, home,searchPage ,searchResult,signIn,signUP,singleProduct} from "../Pages";

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
        case "/Deliveryaddress":
            return deliveryAddress()
        case "/DeliveryAddress2":
            return deliveryAdress2()
        default:
            return home()
    }
}