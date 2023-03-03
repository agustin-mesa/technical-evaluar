import { Character } from "../types";

export interface DataCharacter {
  status: number;
  data: {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
    results: Character[];
  };
}

export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const dataResponse = await response.json();

	return { data: dataResponse, status: response.status } as DataCharacter;
};