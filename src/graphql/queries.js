/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateGames = /* GraphQL */ `
  query SyncPrivateGames(
    $filter: ModelPrivateGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPublicGame = /* GraphQL */ `
  query GetPublicGame($id: ID!) {
    getPublicGame(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPublicGames = /* GraphQL */ `
  query SyncPublicGames(
    $filter: ModelPublicGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
