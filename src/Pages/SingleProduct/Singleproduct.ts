import { button,footer } from "../../Components"
import { Box,renderer } from "../../lib"


export const singleProduct = () => {

    const getProduct=localStorage.getItem("product")
    const parsGetProduct=getProduct?JSON.parse(getProduct):null
    
    const getProductName=localStorage.getItem("productname")
    const parsProductName=getProductName?JSON.parse(getProductName):null

    const getProductPrice=localStorage.getItem("productprice")
    const parsProductPrice=getProductPrice?JSON.parse(getProductPrice):null
    console.log(parsProductPrice)
    
    let number=1;
    function decrease(){
        if(number > 0){
            number--
        }
        renderer("number",number.toString() + "kg")
        const weight=number.toString()
        const weightToJson=JSON.stringify(weight)
        localStorage.setItem("adad",weightToJson)

        
        function setPrice(){
            return "$"+(number * parsProductPrice)+" US"
        }

        const price=number * parsProductPrice
        const priceToJson=price?JSON.stringify(price):null
        localStorage.setItem('price',priceToJson!)

        renderer("price",setPrice())
    }
    function increase(){
        number++
        renderer("number",number.toString() + "kg")
        const weight=number.toString()
        const weightToJson=JSON.stringify(weight)
        localStorage.setItem("adad",weightToJson)

        
        function setPrice(){
            return "$"+(number * parsProductPrice)+" US"
        }

        const price=number * parsProductPrice
        const priceToJson=price?JSON.stringify(price):null
        localStorage.setItem('price',priceToJson!)
        renderer("price",setPrice())
        return true
    }

    const handelSingleProductPage=()=>{
        decrease()
        increase()
        location.assign("/productlayout/cartpage")
    }
    
    return [Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            Box({
            element:"div",
            attr:{
                class:"flex flex-col items-center mt-28 gap-4"
            },
            children:[Box({
                element:"img",
                attr:{
                    class:"bg-white shadow-xl rounded-xl",
                    src:parsGetProduct
                }
            }),
            Box({
                element:"p",
                attr:{
                    class:"font-medium text-base"
                },
                children:parsProductName
            }),Box({
                element:"div",
                attr:{
                    class:"text-lg text-orange-300 flex items-center bg-slate-200 rounded-xl px-2",
                },
                children:[Box({
                    element:"button",
                    attr:{
                        onClick:() => {
                            decrease()
                        }
                    },
                    children:Box({
                        element:"img",
                        attr:{
                            id:"image111",
                            src:"/image2/chevron-down (1).png",
                        },
                    })
                }),Box({
                    element:"p",
                    attr:{
                        id:"number",
                        class:"text-lg text-yellow-500",
                    },
                    children:1 + "kg"
                }),
                Box({
                    element:"button",
                    attr:{
                        onClick:() =>{
                            increase()
                        }
                    },
                    children:Box({
                        element:"img",
                        attr:{
                            class:"",
                            src:"/image2/chevron-up (1).png",
                        },
                    })
                }),]
            }),
            Box({
                element:"h1",
                attr:{
                    id:"price",
                    class:"text-3xl font-bold text-yellow-500 mt-4"
                },
                children:"$"+parsProductPrice+" US"
            })]
        }),
        button({children:"Add to Cart",
        onClick:handelSingleProductPage}),
        ]
    }),
    ]
    
    
}

//<div class="mt-28 text-2xl mb- font-medium text-base"