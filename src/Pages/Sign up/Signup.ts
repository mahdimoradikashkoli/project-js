import { button ,navbar,textField} from "../../Components"
import { validateEmail } from "../../Helpers"
import { Box } from "../../lib"

export const signUP = () => {
    const signUPForm={
        name:'',
        gender:"",
        phoneNumber:"",
        email:"",
        password:"",
        konfirmpassword:""
    }

    const handelSignUP = (e:Event)=>{
        e.preventDefault()
        if(!signUPForm.name) return alert("please inter Name")
        if(!signUPForm.gender) return alert("please inter Gender")
        if(!signUPForm.phoneNumber) return alert("please inter PhoneNumber")
        if(!signUPForm.email) return alert("Inter Email")
        if(!validateEmail(signUPForm.email))return alert("email is invalid")
        if(!signUPForm.password || !signUPForm.konfirmpassword) return alert("Inter The Password")
        if(signUPForm.password !== signUPForm.konfirmpassword) return alert("password and konfirmpassword is not egual")

        const existUser = localStorage.getItem("user")
        const parsedExistUser =existUser? JSON.parse(existUser):null
        if(parsedExistUser){
            const existUser = parsedExistUser.find((user:typeof signUPForm) => user.email === signUPForm.email && user.name === signUPForm.name && user.phoneNumber == signUPForm.phoneNumber);
            if(existUser) return alert("user already exist")
            parsedExistUser.push(signUPForm);
            const jsonExistUser = JSON.stringify(parsedExistUser)
            localStorage.setItem("user" , jsonExistUser)
            location.assign("/Signin")
        }else{
            const userToJson = JSON.stringify([signUPForm])
            localStorage.setItem("user" , userToJson)
            location.assign("/Signin")
        }
    }
    return [
        Box({
            element:"div",
            attr:{
                class:"p-8 flex flex-col items-center",
            },
            children:navbar({attr:{class:"w-full z-10 fixed top-0 flex items-center justify-between bg-slate-300 p-2 rounded-xl font-medium"}})
        }),
        Box({
        element:"div",
        attr:{
            class:"flex flex-col mt-24 items-center"
        },
        children:[
            Box({
                element:"h3",
                attr:{
                    class:"text-2xl font-bold"
                },
                children:"Creat Account"
            }),
            Box({
                element:"form",
                attr:{
                    class:"flex mt-24 flex-col gap-9",
                    onsubmit:handelSignUP
                },
                children:[
                    textField({placeholder:"Name" ,
                    onkeyup:(e)=>{
                        signUPForm.name=e.target.value
                    } 
                    }),textField({placeholder:"Gender" ,
                    onkeyup:(e)=>{
                        signUPForm.gender=e.target.value
                    } 
                    }),textField({placeholder:"PhoneNumber" ,
                    onkeyup:(e)=>{
                        signUPForm.phoneNumber=e.target.value
                    } 
                    }),
                    textField({placeholder:"Email" ,
                    onkeyup:(e)=>{
                        signUPForm.email=e.target.value
                    } 
                    }),
                    textField({placeholder:"Password",
                    type:"password",
                    onkeyup:(e)=>{
                        signUPForm.password = e.target.value
                    }
                    }),
                    textField({placeholder:"Konfirmation Password",
                    type:"password",
                    onkeyup:(e)=>{
                        signUPForm.konfirmpassword = e.target.value
                    }
                    }),
                    button({children:"SignUp",})
                ]
            }),
            
        ]
    })]
        
        
    
}

// <div class="bg-yellow-400 py-4 px-32 text-2xl mb-24 mt-24 font-bold"