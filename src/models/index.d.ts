import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CheckType {
  PREDEFINED_ANSWER = "PREDEFINED_ANSWER",
  GAMEMASTERS_AFTERWARDS = "GAMEMASTERS_AFTERWARDS",
  USERS_VOTE = "USERS_VOTE",
  GAMEMASTERS_VOTE = "GAMEMASTERS_VOTE"
}

export enum PageType {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  OPEN = "OPEN",
  OPEN_LIST = "OPEN_LIST",
  APPROXIMATION = "APPROXIMATION",
  ORDER = "ORDER",
  TITLE_CARD = "TITLE_CARD",
  PUZZLE = "PUZZLE",
  VOTE = "VOTE"
}

export declare class PrivatePage {
  readonly title: string;
  readonly description?: string;
  readonly hasTimeLimit: boolean;
  readonly timeLimit?: number;
  readonly checkType: CheckType | keyof typeof CheckType;
  readonly pointsForSpeed: boolean;
  readonly file?: string;
  readonly pageType: PageType | keyof typeof PageType;
  readonly numberOfOptions?: number;
  readonly answers?: (PrivateAnswer | null)[];
  constructor(init: ModelInit<PrivatePage>);
}

export declare class PrivateAnswer {
  readonly description?: string;
  readonly value?: number;
  constructor(init: ModelInit<PrivateAnswer>);
}

export declare class PublicPage {
  readonly title: string;
  readonly description?: string;
  readonly hasTimeLimit: boolean;
  readonly timeLimit?: number;
  readonly file?: string;
  readonly pageType?: PageType | keyof typeof PageType;
  readonly privateOptions?: (string | null)[];
  constructor(init: ModelInit<PublicPage>);
}

type PrivateGameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PublicGameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PrivateGame {
  readonly id: string;
  readonly name: string;
  readonly pages: PrivatePage[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PrivateGame, PrivateGameMetaData>);
  static copyOf(source: PrivateGame, mutator: (draft: MutableModel<PrivateGame, PrivateGameMetaData>) => MutableModel<PrivateGame, PrivateGameMetaData> | void): PrivateGame;
}

export declare class PublicGame {
  readonly id: string;
  readonly pin: string;
  readonly currentPage?: PublicPage;
  readonly ConnectedUsers?: (User | null)[];
  readonly Teams?: (Team | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PublicGame, PublicGameMetaData>);
  static copyOf(source: PublicGame, mutator: (draft: MutableModel<PublicGame, PublicGameMetaData>) => MutableModel<PublicGame, PublicGameMetaData> | void): PublicGame;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly points?: number;
  readonly publicgameID?: string;
  readonly teamID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Team {
  readonly id: string;
  readonly Users?: (User | null)[];
  readonly publicgameID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}