type CardType = 'Enchantment';

declare interface Card {
  readonly name: string;
  readonly manaCost: string;
  readonly cmc: number;
  readonly colors: string[];
  readonly colorIdentity: string[];
  readonly type: CardType;
  readonly supertypes: string[];
  readonly types: CardType[];
  readonly subtypes: CardType[];
  readonly rarity: string;
  readonly set: string;
  readonly setName: string;
  readonly text: string;
  readonly artist: string;
  readonly number: string;
  readonly layout: string;
  readonly multiverseid: number;
  readonly imageUrl: string;
  readonly rulings: Array<{
    readonly date: string;
    readonly text: string;
  }>;
  readonly foreignNames: Array<{
    readonly name: string;
    readonly text: string;
    readonly flavor: null;
    readonly imageUrl: string;
    readonly language: string;
    readonly multiverseid: number;
  }>;
  readonly printings: string[];
  readonly originalText: string;
  readonly legalities: Array<{
    readonly format: string;
    readonly legality: string;
  }>;
  readonly id: string;
}
