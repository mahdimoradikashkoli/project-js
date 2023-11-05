import { signUP } from ".."
import { button,navbar,textField} from "../../Components"
import { validateEmail } from "../../Helpers"
import { Box } from "../../lib"

export const signIn = () => {
    const signInForm={
        email:"",
        password:"",
    }

    const handelSignIn = (e:Event)=>{
        e.preventDefault()
        if(!signInForm.email) return alert("Inter The Email")
        if(!validateEmail(signInForm.email)) return alert("email is invalid")

        const existUser = localStorage.getItem("user")
        const parsedExistUser =existUser? JSON.parse(existUser):null
        const existSignInUser = parsedExistUser.find((user:typeof signInForm) => user.email === signInForm.email && user.password === signInForm.password);
        if(existSignInUser){
            localStorage.setItem("login" , "1")
            return location.assign("/")
        }else{
            return alert("email or password is not corect")
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
                children:"Sign In"
            }),
            Box({
                element:"form",
                attr:{
                    class:"flex mt-24 flex-col items-center gap-9",
                    onsubmit:handelSignIn
                },
                children:[
                    textField({placeholder:"Email" ,
                    onkeyup:(e)=>{
                        signInForm.email=e.target.value
                    } 
                    }),
                    textField({placeholder:"Password",
                    type:"password",
                    onkeyup:(e)=>{
                        signInForm.password = e.target.value
                    }
                    }),
                    Box({
                        element:"h1",
                        children:"Forgot password?"
                    }),
                    button({children:"Sign In",})
                ]
            }),
            
        ]
    })]
        
        
    
}

