
export class PokeAPI {
  static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
    const response = await fetch(pageURL ?? "");
    return response.json();
  }

  async fetchPokemons(url: string): Promise<PokemonEncounters> {
    // implement this
    const response = await fetch(url);
    //console.log(response);
    return response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
    const response = await fetch(`${PokeAPI.baseURL}/location/${locationName}`)
    return response.json();
  }
}

export type ShallowLocations = {
  // add properties here
  count: number;
  next?: string;
  previous?: string;
  results: Location[];
};

export type Location = {
  // add properties here
  name: string;
  url: string;
};

export interface Pokemon {
  name: string
  url: string
}

export interface Pokemon_Details{
  pokemon: Pokemon
  version_details: VersionDetail2[]
}
export type PokemonEncounters = {
  pokemon_encounters: Pokemon_Details[]
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

export interface EncounterMethod {
  name: string
  url: string
}

export interface VersionDetail {
  rate: number
  version: Version
}

export interface Version {
  name: string
  url: string
}


export interface Name {
  name: string
  language: Language
}

export interface Language {
  name: string
  url: string
}

export interface PokemonEncounter {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

export interface VersionDetail2 {
  version: Version2
  max_chance: number
  encounter_details: EncounterDetail[]
}

export interface Version2 {
  name: string
  url: string
}

export interface EncounterDetail {
  min_level: number
  max_level: number
  condition_values: any[]
  chance: number
  method: Method
}

export interface Method {
  name: string
  url: string
}