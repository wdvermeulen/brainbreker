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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreatePublicGame = /* GraphQL */ `
  subscription OnCreatePublicGame($owner: String) {
    onCreatePublicGame(owner: $owner) {
      id
      pin
      name
      currentPage {
        title
        description
        hasTimeLimit
        timeLimit
        file
        pageType
        answers
      }
      privategameID
      teams {
        items {
          id
          Users {
            items {
              id
              name
              givenAnswers {
                PageID
                Answer
              }
              teamID
              publicgameID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      score {
        id
        score
      }
      userList {
        items {
          id
          name
          givenAnswers {
            PageID
            Answer
          }
          teamID
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePublicGame = /* GraphQL */ `
  subscription OnUpdatePublicGame($owner: String) {
    onUpdatePublicGame(owner: $owner) {
      id
      pin
      name
      currentPage {
        title
        description
        hasTimeLimit
        timeLimit
        file
        pageType
        answers
      }
      privategameID
      teams {
        items {
          id
          Users {
            items {
              id
              name
              givenAnswers {
                PageID
                Answer
              }
              teamID
              publicgameID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      score {
        id
        score
      }
      userList {
        items {
          id
          name
          givenAnswers {
            PageID
            Answer
          }
          teamID
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePublicGame = /* GraphQL */ `
  subscription OnDeletePublicGame($owner: String) {
    onDeletePublicGame(owner: $owner) {
      id
      pin
      name
      currentPage {
        title
        description
        hasTimeLimit
        timeLimit
        file
        pageType
        answers
      }
      privategameID
      teams {
        items {
          id
          Users {
            items {
              id
              name
              givenAnswers {
                PageID
                Answer
              }
              teamID
              publicgameID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      score {
        id
        score
      }
      userList {
        items {
          id
          name
          givenAnswers {
            PageID
            Answer
          }
          teamID
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($owner: String) {
    onCreateTeam(owner: $owner) {
      id
      Users {
        items {
          id
          name
          givenAnswers {
            PageID
            Answer
          }
          teamID
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($owner: String) {
    onUpdateTeam(owner: $owner) {
      id
      Users {
        items {
          id
          name
          givenAnswers {
            PageID
            Answer
          }
          teamID
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($owner: String) {
    onDeleteTeam(owner: $owner) {
      id
      Users {
        items {
          id
          name
          givenAnswers {
            PageID
            Answer
          }
          teamID
          publicgameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      givenAnswers {
        PageID
        Answer
      }
      teamID
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      givenAnswers {
        PageID
        Answer
      }
      teamID
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      givenAnswers {
        PageID
        Answer
      }
      teamID
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
