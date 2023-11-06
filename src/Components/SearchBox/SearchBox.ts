import { Box } from "../../lib";

export const search = () => {
    return Box({
        element:"input",
        attr:{
            type:"search",
            class:"w-full px-5 py-3 text-lg rounded-2xl mt-5 bg-white  shadow-md  ",
            placeholder:"search"
        },
    })
}
// <Div class="mt shadow-transparent shadow"