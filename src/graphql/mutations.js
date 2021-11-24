/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      pin
      currentPage
      pages {
        items {
          id
          title
          description
          hasTimeLimit
          timeLimit
          checkType
          pointsForSpeed
          file
          questionType
          numberOfOptions
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedUsers {
        items {
          id
          name
          points
          currentPage
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedTeams {
        items {
          id
          name
          points
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      pin
      currentPage
      pages {
        items {
          id
          title
          description
          hasTimeLimit
          timeLimit
          checkType
          pointsForSpeed
          file
          questionType
          numberOfOptions
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedUsers {
        items {
          id
          name
          points
          currentPage
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedTeams {
        items {
          id
          name
          points
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      pin
      currentPage
      pages {
        items {
          id
          title
          description
          hasTimeLimit
          timeLimit
          checkType
          pointsForSpeed
          file
          questionType
          numberOfOptions
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedUsers {
        items {
          id
          name
          points
          currentPage
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedTeams {
        items {
          id
          name
          points
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
      id
      title
      description
      hasTimeLimit
      timeLimit
      checkType
      pointsForSpeed
      file
      questionType
      numberOfOptions
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          description
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
      id
      title
      description
      hasTimeLimit
      timeLimit
      checkType
      pointsForSpeed
      file
      questionType
      numberOfOptions
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          description
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
      id
      title
      description
      hasTimeLimit
      timeLimit
      checkType
      pointsForSpeed
      file
      questionType
      numberOfOptions
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          description
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      Page {
        id
        title
        description
        hasTimeLimit
        timeLimit
        checkType
        pointsForSpeed
        file
        questionType
        numberOfOptions
        game {
          id
          name
          pin
          currentPage
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      Page {
        id
        title
        description
        hasTimeLimit
        timeLimit
        checkType
        pointsForSpeed
        file
        questionType
        numberOfOptions
        game {
          id
          name
          pin
          currentPage
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      Page {
        id
        title
        description
        hasTimeLimit
        timeLimit
        checkType
        pointsForSpeed
        file
        questionType
        numberOfOptions
        game {
          id
          name
          pin
          currentPage
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      value
      createdAt
      updatedAt
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
      currentPage
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        points
        users {
          nextToken
        }
        game {
          id
          name
          pin
          currentPage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
      currentPage
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        points
        users {
          nextToken
        }
        game {
          id
          name
          pin
          currentPage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
      currentPage
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        points
        users {
          nextToken
        }
        game {
          id
          name
          pin
          currentPage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      name
      points
      users {
        items {
          id
          name
          points
          currentPage
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      name
      points
      users {
        items {
          id
          name
          points
          currentPage
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      name
      points
      users {
        items {
          id
          name
          points
          currentPage
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGamemaster = /* GraphQL */ `
  mutation CreateGamemaster(
    $input: CreateGamemasterInput!
    $condition: ModelGamemasterConditionInput
  ) {
    createGamemaster(input: $input, condition: $condition) {
      id
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGamemaster = /* GraphQL */ `
  mutation UpdateGamemaster(
    $input: UpdateGamemasterInput!
    $condition: ModelGamemasterConditionInput
  ) {
    updateGamemaster(input: $input, condition: $condition) {
      id
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGamemaster = /* GraphQL */ `
  mutation DeleteGamemaster(
    $input: DeleteGamemasterInput!
    $condition: ModelGamemasterConditionInput
  ) {
    deleteGamemaster(input: $input, condition: $condition) {
      id
      game {
        id
        name
        pin
        currentPage
        pages {
          nextToken
        }
        connectedUsers {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
