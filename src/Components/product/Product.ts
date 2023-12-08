import { productType } from "."
import { Box } from "../../lib"

export const product = (props:productType) => {

    const handelProduct=()=>{
        const image=props.image
        const imageToJson=JSON.stringify(image)
        localStorage.setItem("product",imageToJson)

        const productName=props.name
        const productNameToJson=JSON.stringify(productName)
        localStorage.setItem("productname",productNameToJson)

        const productPrice=props.price
        const productPriceToJson=JSON.stringify(productPrice)
        localStorage.setItem("productprice",productPriceToJson)

        location.assign("/productlayout/singleproduct")
    };
    return Box({
        element:"Div",
        attr:{
            class:"flex flex-col items-center w-36 h-40  shadow-2xl rounded-xl"
        },
        children:[Box({
            element:"button",
            attr:{
                onClick:handelProduct
                // href:"/Singleproduct"
            },
            children:Box({
                element:"img",
                attr:{
                    id:'imageProduct',
                    class:"relative",
                    src:props.image
                }
            }),
        }),
        Box({
            element:"Div",
            attr:{
                class:"relative -top-11"
            },
            children:[Box({
                element:"h1",
                children:props.name
            }),
            Box({
                element:"p",
                children:"$"+props.price+"US"
            })]
        })]
    })
}

// <Div class="relative -top-11 w-36 shadow-lg border-separate"