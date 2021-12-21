/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicGame = /* GraphQL */ `
  subscription OnCreatePublicGame {
    onCreatePublicGame {
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
export const onUpdatePublicGame = /* GraphQL */ `
  subscription OnUpdatePublicGame {
    onUpdatePublicGame {
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
export const onDeletePublicGame = /* GraphQL */ `
  subscription OnDeletePublicGame {
    onDeletePublicGame {
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
export const onCreatePrivateGame = /* GraphQL */ `
  subscription OnCreatePrivateGame($owner: String) {
    onCreatePrivateGame(owner: $owner) {
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
export const onUpdatePrivateGame = /* GraphQL */ `
  subscription OnUpdatePrivateGame($owner: String) {
    onUpdatePrivateGame(owner: $owner) {
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
export const onDeletePrivateGame = /* GraphQL */ `
  subscription OnDeletePrivateGame($owner: String) {
    onDeletePrivateGame(owner: $owner) {
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
