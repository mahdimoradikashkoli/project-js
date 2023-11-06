import { layout } from "./Components"
import { route } from "./router"

export const App = () => {
    return layout({children:route()})
}