import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import App from "./Components/App/App";
// import { ServerCacheProvider } from "./server-cache/provider";
// import { GlobalLoading } from "./containers/GlobalLoading/GlobalLoading";

ReactDOM.render(
  // <Provider store={store}>
  //   <ServerCacheProvider>
  //     <Router basename="/backoffice">
  //       <App />
  //       {/* <GlobalLoading /> */}
  //     </Router>
  //   </ServerCacheProvider>
  // </Provider>,
  <Router basename="/Scrooge-Rental">
    <App />
         {/* <GlobalLoading /> */}
  </Router>,
  document.getElementById("root")
);
