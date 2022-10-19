import React from "react";
import * as CH from "@chakra-ui/react"
import {Balance, Board, Header} from "./components";

const Main: React.FC = () => {
  return (
    <CH.Box h="100vh" bg="gray.100">
      <Header/>
      <Balance/>
      <Board/>
    </CH.Box>
  )
}

export default Main