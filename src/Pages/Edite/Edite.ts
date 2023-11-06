import { button, textField } from "../../Components"
import { Box } from "../../lib"

export const edite=(props:{userInfoArrry:any})=>{

    const userInfo={
        name:"",
        gender:"",
        phoneNumber:"",
        address:""
    }

    const handleSaveContact=()=>{
        props.userInfoArrry.push(userInfo)
        document.getElementsByClassName
        // const userInfoToJson=JSON.stringify(userInfo)
        // localStorage.setItem("userinfo",userInfoToJson)
        // location.assign("/Account")
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
                    class:"flex flex-col items-center"
                },
                children:Box({
                    element:"div",
                    attr:{
                        class:"flex fixed top-0 w-full py-2 px-3 bg-slate-300 rounded-lg z-10 items-center"
                    },
                    children:[Box({
                        element:"a",
                        attr:{
                            href:"/Account"
                        },
                        children:Box({
                            element:"img",
                            attr:{
                                src:"/image2/arrow-left-circle.png"
                            }
                        })
                    }),
                    Box({
                        element:"h1",
                        attr:{
                            class:"ml-11 font-bold text-yellow-500 text-xl"
                        },
                        children:"User Profile"
                    })
                    ]
                }),
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex flex-col gap-3 mt-10"
                },
                children:[
                    textField({
                        placeholder:"name",
                        onkeyup:(e)=>{
                            userInfo.name=e.target.value
                        }
                    }),
                    textField({
                        placeholder:"gender",
                        onkeyup:(e)=>{
                            userInfo.gender=e.target.value
                        }
                    }),
                    textField({
                        placeholder:"Phone Number",
                        onkeyup:(e)=>{
                            userInfo.phoneNumber=e.target.value
                        }
                    }),
                    textField({
                        placeholder:"Address",
                        onkeyup:(e)=>{
                            userInfo.address=e.target.value
                        }
                    }),
                ]
            }),
            button({
                children:"Save",
                onClick:handleSaveContact
            })
        ]
    })
}