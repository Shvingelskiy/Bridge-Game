export const shuffleCards = () => {
  return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((response) => response.json())
}

export const getCards = (deckId: string) => {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`).then((response) => response.json())
}