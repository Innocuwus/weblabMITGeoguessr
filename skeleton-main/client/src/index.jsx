import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/components/App.jsx";
import Skeleton from "/pages/Skeleton.jsx";
import NotFound from "/pages/NotFound.jsx";

//ADDED
import AccountSetts from "/pages/AccountSetts.jsx";
import Homepage from '/pages/Homepage.jsx';
import LoggedIn from '/pages/LoggedIn.jsx';
import EasyMode from '/pages/EasyMode.jsx';
import NormalMode from '/pages/NormalMode.jsx';
import LeaderPage from '/pages/LeaderPage.jsx';
import ProMode from '/pages/ProMode.jsx';
import PlayStage from '/pages/PlayStage.jsx';
import "/styles.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<Skeleton />}/>
      <Route path="/homepage" element={<Homepage />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/easymode" element={<EasyMode />} />
          <Route path="/leaderpage" element={<LeaderPage />} />
          <Route path="/accountsetts" element={<AccountSetts />} />
          <Route path="/normalmode" element={<NormalMode />} />
          <Route path="/promode" element={<ProMode />} />
          <Route path="/playstage" element={<PlayStage />} />
    </Route>
  )
);

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
   </GoogleOAuthProvider>
);
