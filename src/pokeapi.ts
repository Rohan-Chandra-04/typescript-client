
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
    const response = await fetch(`${PokeAPI.baseURL}/location-area/?limit=20&offset=${pageURL ?? '0'}`);
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

export interface Pokemon {
  name: string
  url: string
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