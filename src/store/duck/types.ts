export interface ShuffleData {
  deck_id: string;
}

export interface CardData {
  value: string;
  image: string;
}

export interface CardsData {
  cards: Array<CardData>;
}

export interface GameData {
  srcImg1?: string;
  srcImg2?: string;
  isWin?: boolean;
}

export interface UserStore {
  balance: number;
  isLoggedIn: boolean;
  isLoading: boolean;
  gameData: GameData;
}

export interface ReducerStore {
  userStore: UserStore
}