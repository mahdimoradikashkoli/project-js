import { Box } from "../../lib"

export const home = () => {
    return Box({
        element:"h1",
        attr:{
            class:"text-red-500 text-lg"
        },
        children:"home"
    })
}