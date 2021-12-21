/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicGame = /* GraphQL */ `
  query GetPublicGame($id: ID!) {
    getPublicGame(id: $id) {
      id
      pin
      name
      privategameID
      hostPeerID
      ttl
      createdAt
      updatedAt
    }
  }
`;
export const listPublicGames = /* GraphQL */ `
  query ListPublicGames(
    $filter: ModelPublicGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pin
        name
        privategameID
        hostPeerID
        ttl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const publicGameByPin = /* GraphQL */ `
  query PublicGameByPin(
    $pin: Int
    $sortDirection: ModelSortDirection
    $filter: ModelPublicGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    publicGameByPin(
      pin: $pin
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pin
        name
        privategameID
        hostPeerID
        ttl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const publicGameByPrivateGameID = /* GraphQL */ `
  query PublicGameByPrivateGameID(
    $privategameID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPublicGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    publicGameByPrivateGameID(
      privategameID: $privategameID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pin
        name
        privategameID
        hostPeerID
        ttl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateGame = /* GraphQL */ `
  query GetPrivateGame($id: ID!) {
    getPrivateGame(id: $id) {
      id
      name
      pages {
        title
        description
        hasTimeLimit
        timeLimit
        checkType
        pointsForSpeed
        file
        pageType
        numberOfOptions
        answers {
          description
          value
        }
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateGames = /* GraphQL */ `
  query ListPrivateGames(
    $filter: ModelPrivateGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pages {
          title
          description
          hasTimeLimit
          timeLimit
          checkType
          pointsForSpeed
          file
          pageType
          numberOfOptions
          answers {
            description
            value
          }
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
