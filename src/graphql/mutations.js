/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublicGame = /* GraphQL */ `
  mutation CreatePublicGame(
    $input: CreatePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    createPublicGame(input: $input, condition: $condition) {
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
export const updatePublicGame = /* GraphQL */ `
  mutation UpdatePublicGame(
    $input: UpdatePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    updatePublicGame(input: $input, condition: $condition) {
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
export const deletePublicGame = /* GraphQL */ `
  mutation DeletePublicGame(
    $input: DeletePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    deletePublicGame(input: $input, condition: $condition) {
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
export const createPrivateGame = /* GraphQL */ `
  mutation CreatePrivateGame(
    $input: CreatePrivateGameInput!
    $condition: ModelPrivateGameConditionInput
  ) {
    createPrivateGame(input: $input, condition: $condition) {
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
export const updatePrivateGame = /* GraphQL */ `
  mutation UpdatePrivateGame(
    $input: UpdatePrivateGameInput!
    $condition: ModelPrivateGameConditionInput
  ) {
    updatePrivateGame(input: $input, condition: $condition) {
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
export const deletePrivateGame = /* GraphQL */ `
  mutation DeletePrivateGame(
    $input: DeletePrivateGameInput!
    $condition: ModelPrivateGameConditionInput
  ) {
    deletePrivateGame(input: $input, condition: $condition) {
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
