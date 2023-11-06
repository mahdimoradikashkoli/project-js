import { Box } from "../../lib"

export const orderReport = () => {
    return Box({
        element:"Div",
        attr:{
            class:" flex flex-col items-center justify-center"
        },
        children:[Box({
            element:"img",
            attr:{
                class:"relative",
                src:"/image2/Group 1.png"
            }
        }),Box({
            element:"h1",
            attr:{
                class:"text-center relative w-60 -top-40"
            },
            children:"Order Place, Your Order Number is #399123"
        })]
    })
}
// <Div class="absolute w-60 relative text-center"