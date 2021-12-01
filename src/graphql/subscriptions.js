/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePublicGame = /* GraphQL */ `
  subscription OnCreatePublicGame($owner: String) {
    onCreatePublicGame(owner: $owner) {
      id
      pin
      currentPage {
        title
        description
        hasTimeLimit
        timeLimit
        file
        pageType
        privateOptions
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Teams {
        items {
          id
          publicgameID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Users {
            items {
              id
              name
              points
              publicgameID
              teamID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      ConnectedUsers {
        items {
          id
          name
          points
          publicgameID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdatePublicGame = /* GraphQL */ `
  subscription OnUpdatePublicGame($owner: String) {
    onUpdatePublicGame(owner: $owner) {
      id
      pin
      currentPage {
        title
        description
        hasTimeLimit
        timeLimit
        file
        pageType
        privateOptions
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Teams {
        items {
          id
          publicgameID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Users {
            items {
              id
              name
              points
              publicgameID
              teamID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      ConnectedUsers {
        items {
          id
          name
          points
          publicgameID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeletePublicGame = /* GraphQL */ `
  subscription OnDeletePublicGame($owner: String) {
    onDeletePublicGame(owner: $owner) {
      id
      pin
      currentPage {
        title
        description
        hasTimeLimit
        timeLimit
        file
        pageType
        privateOptions
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      Teams {
        items {
          id
          publicgameID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Users {
            items {
              id
              name
              points
              publicgameID
              teamID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      ConnectedUsers {
        items {
          id
          name
          points
          publicgameID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      publicgameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Users {
        items {
          id
          name
          points
          publicgameID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      publicgameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Users {
        items {
          id
          name
          points
          publicgameID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      publicgameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Users {
        items {
          id
          name
          points
          publicgameID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      points
      publicgameID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      points
      publicgameID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      points
      publicgameID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
