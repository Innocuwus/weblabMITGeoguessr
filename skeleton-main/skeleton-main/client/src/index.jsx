/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Skeleton from "./components/pages/Skeleton";
import NotFound from "./components/pages/NotFound";
import Homepage from './components/pages/Homepage.jsx';
import LoggedIn from './components/pages/LoggedIn.jsx';
import EasyMode from './components/pages/EasyMode.jsx';
import NormalMode from './components/pages/NormalMode.jsx';
import LeaderPage from './components/pages/LeaderPage.jsx';
import AccountSetts from './components/pages/AccountSetts.jsx';
import ProMode from './components/pages/ProMode.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = '155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<Skeleton />}/>
    </Route>
  )
)

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);


const PsVita = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/easymode" element={<EasyMode />} />
          <Route path="/leaderpage" element={<LeaderPage />} />
          <Route path="/accountsetts" element={<AccountSetts />} />
          <Route path="/normalmode" element={<NormalMode />} />
          <Route path="/promode" element={<ProMode />} />
          <Route path="/playstage" element={<PlayStage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<PsVita />);
*/


  
  
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Use this for router setup
import App from "./components/App";
import Skeleton from "./components/pages/Skeleton.jsx";
import NotFound from "./components/pages/NotFound";
import Homepage from './components/pages/Homepage.jsx';
import LoggedIn from './components/pages/LoggedIn.jsx';
import EasyMode from './components/pages/EasyMode.jsx';
import NormalMode from './components/pages/NormalMode.jsx';
import LeaderPage from './components/pages/LeaderPage.jsx';
import AccountSetts from './components/pages/AccountSetts.jsx';
import ProMode from './components/pages/ProMode.jsx';

// Google Client ID
const GOOGLE_CLIENT_ID = '155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com';

// Define your router setup using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/loggedin", element: <LoggedIn /> },
      { path: "/easymode", element: <EasyMode /> },
      { path: "/normalmode", element: <NormalMode /> },
      { path: "/leaderpage", element: <LeaderPage /> },
      { path: "/accountsetts", element: <AccountSetts /> },
      { path: "/promode", element: <ProMode /> },
      { path: "/skeleton", element: <Skeleton /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Main render with GoogleOAuthProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
