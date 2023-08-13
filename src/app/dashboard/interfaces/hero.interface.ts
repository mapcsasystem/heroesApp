export interface IHero {
  id: string;
  superhero: string;
  publisher: IPublisherEnum;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum IPublisherEnum {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}
