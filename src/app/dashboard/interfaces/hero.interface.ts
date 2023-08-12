export interface IData {
  users: IUser[];
  heroes: IHero[];
}

export interface IHero {
  id: string;
  superhero: string;
  publisher: IPublisherEnum;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export enum IPublisherEnum {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

export interface IUser {
  id: number;
  usuario: string;
  email: string;
}
