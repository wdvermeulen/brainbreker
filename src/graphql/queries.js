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
        privateOptions
      }
      privategameID
      ConnectedUsers {
        items {
          id
          name
          publicgameID
          teamID
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
      Teams {
        items {
          id
          Users {
            items {
              id
              name
              publicgameID
              teamID
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
          owner
        }
        nextToken
        startedAt
      }
      score {
        id
        score
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
          privateOptions
        }
        privategameID
        ConnectedUsers {
          items {
            id
            name
            publicgameID
            teamID
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
        Teams {
          items {
            id
            Users {
              items {
                id
                name
                publicgameID
                teamID
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
            owner
          }
          nextToken
          startedAt
        }
        score {
          id
          score
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
          privateOptions
        }
        privategameID
        ConnectedUsers {
          items {
            id
            name
            publicgameID
            teamID
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
        Teams {
          items {
            id
            Users {
              items {
                id
                name
                publicgameID
                teamID
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
            owner
          }
          nextToken
          startedAt
        }
        score {
          id
          score
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
          publicgameID
          teamID
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
            publicgameID
            teamID
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
            publicgameID
            teamID
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
      publicgameID
      teamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
        publicgameID
        teamID
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
        publicgameID
        teamID
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
