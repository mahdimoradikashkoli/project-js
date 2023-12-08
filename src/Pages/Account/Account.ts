import { Box } from "../../lib"


export const account = () => {

    const getUserInfo=localStorage.getItem("user")
    const parsGetUserInfo=getUserInfo?JSON.parse(getUserInfo):" "
    const lastObgect=parsGetUserInfo[parsGetUserInfo.length - 1]

        return Box({element:"div",
        attr:{
        },
        children:Box({
            element:"div",
            attr:{
                class:"p-8"
            },
            children:[
               
                Box({
                    element:"div",
                    attr:{
                        id:"account",
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
                                    children:"Name: " +lastObgect?.name?? " "
                                }),
                            ]
                        }),
                        Box({element:"div",
                            attr:{
                                
                                class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                            },
                            children:"Gender: " +lastObgect?.gender?? " "
                        }),
                        Box({element:"div",
                            attr:{
                                
                                class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                            },
                            children:"PhoneNumber: " +lastObgect?.phoneNumber?? " "
                        }),
                        Box({element:"div",
                            attr:{
                                
                                class:'relative rounded-3xl bg-slate-300 w-80 p-5  text-lg'
                            },
                            children:"Email: " +lastObgect?.email?? " "
                        })
                    ]
                })]
        })
    })
}
// <div class="gap-3 text-black mt-80"