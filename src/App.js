import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/store/configureStore";
import { setupAxios } from "./util/axios-config";
import Routes from "./routes/Routes";

import "./App.scss";
setupAxios();
const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
