import React from 'react';
import {Navigate, Route, Routes, BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {Login, MainPage} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {userLoginAction} from "../store/actions/actions";
import {ReducerStore} from "../store/duck/types";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: ReducerStore) => state.userStore.isLoggedIn)

  React.useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      dispatch(userLoginAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <BrowserRouter>
        <ChakraProvider>
          {isLoggedIn ? (
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="login" element={<Navigate to="/"/>}/>
              <Route
                  path="*"
                  element={
                    <h1>404 Not found</h1>
                  }
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="*" element={<Navigate to="login"/>}/>
            </Routes>
          )}
        </ChakraProvider>
      </BrowserRouter>
  );
}

export default App;

