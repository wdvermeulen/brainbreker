// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CheckType = {
  "PREDEFINED_ANSWER": "PREDEFINED_ANSWER",
  "GAMEMASTERS_AFTERWARDS": "GAMEMASTERS_AFTERWARDS",
  "USERS_VOTE": "USERS_VOTE",
  "GAMEMASTERS_VOTE": "GAMEMASTERS_VOTE"
};

const PageType = {
  "MULTIPLE_CHOICE": "MULTIPLE_CHOICE",
  "OPEN": "OPEN",
  "OPEN_LIST": "OPEN_LIST",
  "APPROXIMATION": "APPROXIMATION",
  "ORDER": "ORDER",
  "TITLE_CARD": "TITLE_CARD",
  "PUZZLE": "PUZZLE",
  "VOTE": "VOTE"
};

const { PrivateGame, PublicGame, Team, User, GivenAnswer, PrivatePage, PrivateAnswer, PublicPage, UserScore } = initSchema(schema);

export {
  PrivateGame,
  PublicGame,
  Team,
  User,
  CheckType,
  PageType,
  GivenAnswer,
  PrivatePage,
  PrivateAnswer,
  PublicPage,
  UserScore
};