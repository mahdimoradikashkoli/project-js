import { Box } from "../../lib"

export const setting = () => {

    const existUser=localStorage.getItem("login")
    const parseExistuser=existUser?JSON.parse(existUser):null

    return Box({
        element:"div",
        attr:{
            class:"p-8"
        },
        children:[
            
            Box({
                element:"div",
                attr:{
                    class:"mt-11 flex flex-col gap-3"
                },
                children:[
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                // const getUserInfo=localStorage.getItem("user")
                                // const parsGetUserInfo=getUserInfo?JSON.parse(getUserInfo):null
                                if(!parseExistuser){
                                    location.assign("/authlayout/signup") 
                                    return alert("Please register first") 
                                    
                                }else{
                                    location.assign("/productlayout/account")
                                }
                            },
                            class:"rounded-3xl bg-gray-200 w-80 pl-3 py-3 text-gray-400"
                        },
                        children:"Your Account"
                    }),
                    Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                location.assign("/productlayout/settingorders")
                            },
                            class:"rounded-3xl bg-gray-200 w-80 pl-3 py-3 text-gray-400"
                        },
                        children:"Your Order"
                    }),
                    parseExistuser && Box({
                        element:"button",
                        attr:{
                            class:"rounded-3xl bg-red-300 w-80 pl-3 py-3 text-white",
                            onClick:()=>{
                                localStorage.removeItem("login")
                                location.assign("/")
                            }
                        },
                        children:"Sign Out"
                    })
                ]
            })]
    })
    
}

// <div class="mt-11 mt-96"