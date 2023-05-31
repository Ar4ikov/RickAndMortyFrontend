import { createContext } from "react";

export const LocationsContext = createContext({
    locations: [],
    info: {},
    setPage: null
});

export const CharactersContext = createContext({
    characters: [],
    info: {},
    setPage: null
});

export const EpisodesContext = createContext({
    episodes: [],
    info: {},
    setPage: null
});