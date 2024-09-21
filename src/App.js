import { Provider } from "react-redux";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils/redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>,

      children : [
        {
          path : "/",
          element : <MainContainer/>
        },
        {
          path: "/watch",
          element : <WatchPage/>
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
};

export default App;
