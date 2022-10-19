import React from "react";
import * as CH from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux";
import cardLogo from "./assets/img/card.png";
import {startGameAction} from "../../../../../store/actions/actions";
import {ReducerStore} from "../../../../../store/duck/types";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state: ReducerStore) => state.userStore.gameData)
  const [isGameStarted, setGameStarted] = React.useState<boolean>(false);
  const [textResult, setTextResult] = React.useState<string>("")

  const startGame = (variant: number) => {
    dispatch(startGameAction(variant))
  }

  React.useEffect(() => {
    if (Object.keys(gameData).length) {
      if (gameData.isWin) {
        setTextResult("ТЫ ВЫИГРАЛ")
      } else {
        setTextResult("ТЫ ПРОИГРАЛ")
      }
    }
  }, [gameData])

  const renderText = () => {
    return <CH.Box h={40}>{
      textResult ? <CH.Text mt={20} fontSize={35} fontWeight="bold">{textResult}</CH.Text> :
          <>
            <CH.Text mt={10} fontSize={40} fontWeight="bold">Кто выиграет?</CH.Text>
            <CH.Text mt={10} fontSize={20} fontWeight="bold" color="gray.500">Сыграй в игру и испытай
              удачу</CH.Text>
          </>
    }</CH.Box>
  }

  const renderCard = (direction: "left" | "right") => {
    return (textResult ?
            <CH.Image src={direction === "left" ? gameData.srcImg1 : gameData.srcImg2} h={300} w={210}/> :
            <CH.Image src={cardLogo} h={300} w={210}/>
    )
  }

  return (
      <CH.VStack justifyContent="center">
        {renderText()}
        <CH.Flex alignItems="center" justifyContent="space-between" w="100%" px={80} py={10}>
          {renderCard("left")}
          {(!isGameStarted && !textResult) &&
              <CH.Button colorScheme="blue" onClick={() => setGameStarted(true)}>Играть</CH.Button>
          }
          {(isGameStarted && !textResult) &&
              <>
                <CH.Button colorScheme="blue" onClick={() => startGame(0)}>Слева</CH.Button>
                <CH.Button colorScheme="blue" onClick={() => startGame(1)}>Справа</CH.Button>
              </>
          }
          {(isGameStarted && textResult) &&
              <CH.Button colorScheme="blue" onClick={() => setTextResult("")}>Сыграть еще</CH.Button>
          }
          {renderCard("right")}
        </CH.Flex>
      </CH.VStack>
  )
};

export default Board