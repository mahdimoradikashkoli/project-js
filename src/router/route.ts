import { authLayout, layout, productLayout } from "../Components";
import {
  account,
  allProduct,
  cartPage,
  deliveryAddress,
  deliveryAdress2,
  home,
  order,
  orderReport,
  settingOrders,
  signIn,
  signUP,
  singleProduct,
} from "../Pages";
import { setting } from "../Pages/Setting";

export function route() {
  switch (location.pathname) {
    case "/authlayout/signup":
      return authLayout({
        children: signUP(),
      });
    case "/authlayout/signin":
      return authLayout({
        children: signIn(),
      });
    case "/":
      return layout({
        children: home(),
      });
    
    case "/productlayout/singleproduct":
      return productLayout({
        children: singleProduct(),
        pageName: "Shop",
        href: "/",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/allproduct":
      return productLayout({
        children: allProduct(),
        pageName: "All Product",
        href: "/",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/cartpage":
      return productLayout({
        children: cartPage(),
        pageName: "Cart",
        href: "/productlayout/singleproduct",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/deliveryaddress":
      return productLayout({
        children: deliveryAddress(),
        pageName: "Delivery Address",
        href: "/productlayout/cartpage",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/deliveryaddress2":
      return productLayout({
        children: deliveryAdress2(),
        pageName: "Delivery Address",
        href: "/productlayout/deliveryaddress",
        img1:"/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/order":
      return productLayout({
        children: order(),
        pageName: "Oder",
        href: "/productlayout/deliveryaddress2",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/orderreport":
      return productLayout({
        children: orderReport(),
        pageName: "Order Report",
        href: "/productlayout/order",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image2/shopping-cart (1).png",
        img4: "/image/settings.png",
      });
    case "/productlayout/setting":
      return productLayout({
        children: setting(),
        pageName: "Setting",
        href: "/",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image/shopping-cart.png",
        img4: "/image2/settings (1).png",
      });
    case "/productlayout/account":
      return productLayout({
        children: account(),
        pageName: "Account Setting",
        href: "/productlayout/setting",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image/shopping-cart.png",
        img4: "/image2/settings (1).png",
      });
    case "/productlayout/settingorders":
      return productLayout({
        children: settingOrders(),
        pageName: "Setting Orders",
        href: "/productlayout/setting",
        img1: "/image2/home (1).png",
        img2: "/image/bell.png",
        img3: "/image/shopping-cart.png",
        img4: "/image2/settings (1).png",
      });
    
    default:
      return home();
  }
}
