import * as ReactDOM from "react-dom";
import App from "./app/app";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
