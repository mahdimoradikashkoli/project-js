import { Box } from "../../lib";

export const search = () => {
    return Box({
        element:"input",
        attr:{
            id:"search",
            class:"w-full px-5 py-3 text-lg rounded-2xl mt-5 bg-white  shadow-md  ",
            placeholder:"search",
        },
        children:""
    })
}
// <Div class="mt shadow-transparent shadow"