import React from "react";
import * as CH from "@chakra-ui/react"
import {useDispatch} from "react-redux";
import {userLogoutAsyncAction} from "../../../../../store/actions/actions";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
      <CH.Flex bg="gray.700" h="80px" w="100%" justifyContent="space-between" alignItems="center" px={10}>
        <CH.Button colorScheme="blackAlpha">Bridge</CH.Button>
        <CH.Button colorScheme="blackAlpha" onClick={() => dispatch(userLogoutAsyncAction())}>SignOut</CH.Button>
      </CH.Flex>
  )
}

export default Header