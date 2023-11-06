import { button, footer, navigation} from "../../Components"
import { Box } from "../../lib"

export const account = () => {

    const getUserInfo=localStorage.getItem("userinfo")
    const parsGetUserInfo=getUserInfo?JSON.parse(getUserInfo):null
    console.log(parsGetUserInfo)
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
                children:navigation({children:"Setting",  href:"/Setting", attr:{class:"flex fixed top-0 z-10 w-full py-2 px-3 bg-slate-300 rounded-lg items-center justify-between"}}),
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex flex-col gap-3 mt-11"
                },
                children:[
                    Box({
                        element:"div",
                        attr:{
                            class:"flex relative rounded-3xl bg-slate-300 w-80 p-1 border border-2 focus-within:border-yellow-500"
                        },
                        children:[
                            Box({
                                element:"img",
                                attr:{
                                    class:"absoulute",
                                    src:"/image2/image 3.png"
                                },
                            }),
                            Box({element:"div",
                                attr:{
                                    
                                    class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                                },
                                children:"Name: "+parsGetUserInfo?.name??" "
                            }),
                        ]
                    }),
                    Box({element:"div",
                        attr:{
                            
                            class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                        },
                        children:"Gender: "+parsGetUserInfo?.gender??" "
                    }),
                    Box({element:"div",
                        attr:{
                            
                            class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                        },
                        children:"Phone Number: "+parsGetUserInfo?.phoneNumber?? " "
                    }),
                    Box({element:"div",
                        attr:{
                            
                            class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                        },
                        children:"Address: "+parsGetUserInfo?.address?? " "
                    }),
                    button({
                        children:"Edite",
                        onClick:()=>{
                            location.assign("/Edite")
                        }
                    })
                ]
            })]
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
            image3:"/image2/shopping-cart (2).png",
            image4:"/image2/settings (1).png"
        })
    })]
}
// <div class="gap-3 text-black mt-80"