/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
          userlistID
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
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
          userlistID
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
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
          userlistID
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
      publicgameID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserList = /* GraphQL */ `
  subscription OnCreateUserList($owner: String) {
    onCreateUserList(owner: $owner) {
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
          userlistID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserList = /* GraphQL */ `
  subscription OnUpdateUserList($owner: String) {
    onUpdateUserList(owner: $owner) {
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
          userlistID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserList = /* GraphQL */ `
  subscription OnDeleteUserList($owner: String) {
    onDeleteUserList(owner: $owner) {
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
          userlistID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
              userlistID
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
      score {
        id
        score
      }
      userList {
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
            userlistID
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      publicGameUserListId
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
              userlistID
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
      score {
        id
        score
      }
      userList {
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
            userlistID
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      publicGameUserListId
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
              userlistID
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
      score {
        id
        score
      }
      userList {
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
            userlistID
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      publicGameUserListId
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      givenAnswers {
        PageID
        Answer
      }
      teamID
      userlistID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      givenAnswers {
        PageID
        Answer
      }
      teamID
      userlistID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      givenAnswers {
        PageID
        Answer
      }
      teamID
      userlistID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
