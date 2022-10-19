import React from "react";
import * as CH from "@chakra-ui/react"
import {useSelector} from "react-redux";
import {ReducerStore} from "../../../../../store/duck/types";

const Balance: React.FC = () => {
  const balance = useSelector((state: ReducerStore) => state.userStore.balance)

  return (
      <CH.Flex h="80px" w="100%" bg="white" justifyContent="center" alignItems="center">
        <CH.Text fontSize={25} fontFamily="monospace" fontWeight="bold">{`Balance: ${balance}`}</CH.Text>
      </CH.Flex>
  )
}

export default Balance