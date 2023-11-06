import { account, allProduct, cartPage, deliveryAddress, deliveryAdress2, edite, home,order,orderReport,searchPage ,searchResult,settingOrders,signIn,signUP,singleProduct} from "../Pages";
import { setting } from "../Pages/Setting";

export function route(){

    const userInfoArrry:any=[]
    console.log(userInfoArrry)
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
        case "/Order":
            return order()
        case "/OrderReport" :
            return orderReport()
        case "/Setting":
            return setting()
        case "/Account" :
            return account({userInfoArrry})
        case "/SettingOrders" :
            return settingOrders()
        case "/AllProduct":
            return allProduct()
        case "/Edite":
            return edite({userInfoArrry})
        default:
            return home()
    }
}