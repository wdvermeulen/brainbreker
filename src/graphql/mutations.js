/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createPublicGame = /* GraphQL */ `
  mutation CreatePublicGame(
    $input: CreatePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    createPublicGame(input: $input, condition: $condition) {
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
export const updatePublicGame = /* GraphQL */ `
  mutation UpdatePublicGame(
    $input: UpdatePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    updatePublicGame(input: $input, condition: $condition) {
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
export const deletePublicGame = /* GraphQL */ `
  mutation DeletePublicGame(
    $input: DeletePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    deletePublicGame(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
