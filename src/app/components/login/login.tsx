import React from "react";
import * as CH from "@chakra-ui/react"
import {useDispatch} from "react-redux";
import {userLoginAsyncAction} from "../../../store/actions/actions";
import {ERROR_TEXT, LOGIN_USERS_DATA} from "./duck/constants";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = React.useState<boolean>(false)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (LOGIN_USERS_DATA.email === emailRef?.current?.value &&
        LOGIN_USERS_DATA.password === passwordRef?.current?.value) {
      dispatch(userLoginAsyncAction())
    } else {
      setIsError(true)
    }
  }

  const handleChange = () => {
    if (isError) setIsError(false)
  }

  return (
      <CH.Flex justifyContent="center" alignItems="center" h="100vh">
        <CH.VStack>
          <CH.Text fontSize={45} fontWeight="bold">Sign in to your account</CH.Text>
          <CH.Input ref={emailRef} name="email" placeholder="Email address" onChange={handleChange}/>
          <CH.Input ref={passwordRef} name="password" placeholder="Password" onChange={handleChange}/>
          {isError && <CH.Text color="red">{ERROR_TEXT}</CH.Text>}
          <CH.Button onClick={handleClick} colorScheme="blue" w="100%">Sign In</CH.Button>
        </CH.VStack>
      </CH.Flex>
  )
}

export default Login