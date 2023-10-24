import { button ,navbar,textField} from "../../Components"
import { validateEmail } from "../../Helpers"
import { Box } from "../../lib"

export const signUP = () => {
    const signUPForm={
        email:"",
        password:"",
        konfirmpassword:""
    }

    const handelSignUP = (e:Event)=>{
        e.preventDefault()
        console.log(signUPForm)
        if(!signUPForm.email ||
            !validateEmail(signUPForm.email)){
                return alert("email is invalid")
            };

            if(!signUPForm.password || !signUPForm.konfirmpassword ||
                signUPForm.password !== signUPForm.konfirmpassword){
                    return alert("password and konfirmpassword is not egual")
                };

        const existUser = localStorage.getItem("user")
        const parsedExistUser =existUser? JSON.parse(existUser):null
        if(parsedExistUser){
            const existUser = parsedExistUser.find((user:typeof signUPForm) => user.email === signUPForm.email);
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
            element:"Div",
            attr:{
                class:"p-8",
            },
            children:navbar({attr:{class:"flex items-center justify-between w-full bg-slate-300 p-2 rounded-xl font-medium"}})
        }),
        Box({
        element:"Div",
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

// <Div class="bg-yellow-400 py-4 px-32 text-2xl mb-24 mt-24 font-bold"