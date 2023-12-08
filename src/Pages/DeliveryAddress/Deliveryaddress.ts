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
                location.assign("/productlayout/deliveryaddress2")
            }else{
                const addressTojson=JSON.stringify([address])
                localStorage.setItem("Customer",addressTojson)
                
            } 
            location.assign("/productlayout/deliveryaddress2")
            
    }
    
    return Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
           
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
                                location.assign("/productlayout/deliveryaddress")
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
                                location.assign("/productlayout/deliveryaddress2")
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

    })
}

// <div class="text-xl gap-9  max-w-sm mt-12 h-20 mt-8 justify-evenly shadow-md"