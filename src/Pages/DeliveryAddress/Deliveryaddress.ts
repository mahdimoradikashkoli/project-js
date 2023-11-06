import { button, footer, navigation, textField } from "../../Components"
import { Box } from "../../lib"

export const deliveryAddress= () => {

    const address={
        fullName:"",
        phoneNumber:"",
        streetAddress:""
    }

    const handleCreateAddress=()=>{
        if(!address.fullName) return alert("Please enter the name")
        if(!address.phoneNumber) return alert("Please enter the phoneNumber")
        if(!address.streetAddress) return alert("Please enter the streetAddress")

            const existCustomer=localStorage.getItem("Customer")
            const parsExistCustomer=existCustomer?JSON.parse(existCustomer):null
            if(parsExistCustomer){
                
                parsExistCustomer.push(address)
                const existCustmerToJson=JSON.stringify(parsExistCustomer)
                localStorage.setItem("Customer",existCustmerToJson)
                location.assign("/DeliveryAddress2")
            }else{
                const addressTojson=JSON.stringify([address])
                localStorage.setItem("Customer",addressTojson)
                
            } 
            location.assign("/DeliveryAddress2")
            
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
                    class:"flex flex-col items-center"
                },
                children:navigation({children:"Delivery Address",href:"/CartPage", attr:{class:"flex fixed top-0 z-10 py-2 px-3 bg-slate-300 rounded-lg w-full   items-center justify-between"}}),
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex mt-8 shadow-lg rounded-md bg-white px-12 items-center justify-between max-w-sm h-20"
                },
                children:[
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                location.assign("/Deliveryaddress")
                            }
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/Pin_fill.png"
                            }
                        })
                    }),
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                if(!address.fullName) return alert("Please enter the name")
                                if(!address.phoneNumber) return alert("Please enter the phoneNumber")
                                if(!address.streetAddress) return alert("Please enter the streetAddress")
                                location.assign("/DeliveryAddress2")
                            }
                        },
                        children: Box({
                            element:"img",
                            attr:{
                                src:"/image2/Credit card_fill.png"
                            }
                        })
                    })
                ]
            }),
            Box({
                element:"div",
                attr:{
                    class:"mt-12 gap-9 flex flex-col"
                },
                children:[
                    textField({placeholder:"Full Name",
                    onkeyup:(e)=>{
                        address.fullName=e.target.value
                    }}),
                    textField({placeholder:"Phone Number",
                    onkeyup:(e)=>{
                        address.phoneNumber=e.target.value
                    }}),
                    textField({placeholder:"Street Address",
                    onkeyup:(e)=>{
                        address.streetAddress=e.target.value
                    }})
                ]
            }),
            button({children:"Continue",
            onClick:handleCreateAddress})]

    }),
    Box({
        element:"div",
        attr:{
            class:"flex flex-col items-center"
        },
        children:footer({
            attr:{
                class:"flex fixed bottom-0 w-full bg-white justify-between border-t border-slate-300 px-2 rounded-lg shodow-lg"
            },
            image1:"/image2/home (1).png",
            image2:"/image/bell.png",
            image3:"/image2/shopping-cart (1).png",
            image4:"/image/settings.png"

        })
    })]
}

// <div class="text-xl gap-9  max-w-sm mt-12 h-20 mt-8 justify-evenly shadow-md"