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
        privateAnswers {
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
          privateAnswers {
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
          privateAnswers {
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
        }
        nextToken
        startedAt
      }
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
        }
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
        }
        nextToken
        startedAt
      }
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
        }
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
      points
      publicgameID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        points
        publicgameID
        teamID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
        points
        publicgameID
        teamID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
