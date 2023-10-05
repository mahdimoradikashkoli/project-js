import { layout } from "./Components/Layoit"
import { route } from "./router"

export const App = () => {
    return layout({children:route()})
}