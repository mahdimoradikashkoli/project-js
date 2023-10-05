import { layout } from "./Components/Layoit"
import { signUP } from "./Pages/Sign up"

export const App = () => {
    return layout({children:signUP()})
}