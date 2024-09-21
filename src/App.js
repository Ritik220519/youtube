import { Provider } from "react-redux";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
