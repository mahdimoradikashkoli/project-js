import { search } from "../../Components";
import { product } from "../../Components";
import { Box } from "../../lib";

export const home = () => {
  return Box({
    element: "div",
    attr: {
      class: "p-8",
    },
    children: [
      Box({
        element: "div",
        attr: {
          class: "flex justify-between mt-4",
        },
        children: [
          Box({
            element: "div",
            attr: {
              class: "flex items-center gap-1",
            },
            children: [
              Box({
                element: "img",
                attr: {
                  src: "/image/Ellipse 1.png",
                },
              }),
              Box({
                element: "p",
                attr: {
                  class: "text-xl",
                },
                children: "BestFruitShop",
              }),
            ],
          }),
          Box({
            element: "button",
            attr: {
              onClick: () => {
                const existUser = localStorage.getItem("login");
                const parseExistuser = existUser ? JSON.parse(existUser) : null;
                if (!parseExistuser) {
                  location.assign("/authlayout/signup");
                  return alert("Please register first");
                } else {
                  location.assign("/productlayout/account");
                }
              },
            },
            children: Box({
              element: "img",
              attr: {
                src: "/image/Ellipse 2.png",
              },
            }),
          }),
        ],
      }),
      search(),
      Box({
        element: "div",
        attr: {
          class: "flex items-center justify-between text-lg mt-5 mb-5",
        },
        children: [
          Box({
            element: "h1",
            attr: {
              class: "",
            },
            children: "Popular",
          }),
          Box({
            element: "a",
            attr: {
              href: "/productlayout/allproduct",
              class: "bg-blue-300 p-2 rounded-lg",
            },
            children: Box({
              element: "h1",
              children: "All Product",
            }),
          }),
        ],
      }),
      Box({
        element: "div",
        attr: {
          class: " flex flex-wrap gap-12",
        },
        children: [
          product({
            image: "/image/Rectangle 10.png",
            name: "Pineapple",
            price: "100",
          }),
          product({
            image: "/image/Rectangle 11.png",
            name: "Banana",
            price: "200",
          }),
        ],
      }),
      Box({
        element: "h1",
        attr: {
          class: "text-lg mt-5 mb-5",
        },
        children: "Best Seller",
      }),
      Box({
        element: "div",
        attr: {
          class: "flex flex-wrap gap-12 mb-8",
        },
        children: [
          product({
            image: "/image/Rectangle 12.png",
            name: "Green Grapes",
            price: "255",
          }),
          product({
            image: "/image/Rectangle 13 (1).png",
            name: "Grapes",
            price: "300",
          }),
          product({
            image: "/image/Rectangle 14.png",
            name: "Melon",
            price: "280",
          }),
          product({
            image: "/image/Rectangle 15.png",
            name: "Mango",
            price: "290",
          }),
          product({
            image: "/image/Rectangle 15.png",
            name: "Mango",
            price: "290",
          }),
          product({
            image: "/image/Rectangle 15.png",
            name: "Mango",
            price: "290",
          }),
          product({
            image: "/image/Rectangle 15.png",
            name: "Mango",
            price: "350",
          }),
        ],
      }),
    ],
  });
};

// <div class="m-5 flex-wrap w-96 mb-8 mx-auto z-10 bottom-0 gap-9 -top-4 w-40 gap-9 pb-6 border-t-slate-800"
