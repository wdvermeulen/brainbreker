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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
export const createPrivatePage = /* GraphQL */ `
  mutation CreatePrivatePage(
    $input: CreatePrivatePageInput!
    $condition: ModelPrivatePageConditionInput
  ) {
    createPrivatePage(input: $input, condition: $condition) {
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
      privateGame {
        id
        name
        pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateAnswers {
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
export const updatePrivatePage = /* GraphQL */ `
  mutation UpdatePrivatePage(
    $input: UpdatePrivatePageInput!
    $condition: ModelPrivatePageConditionInput
  ) {
    updatePrivatePage(input: $input, condition: $condition) {
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
      privateGame {
        id
        name
        pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateAnswers {
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
export const deletePrivatePage = /* GraphQL */ `
  mutation DeletePrivatePage(
    $input: DeletePrivatePageInput!
    $condition: ModelPrivatePageConditionInput
  ) {
    deletePrivatePage(input: $input, condition: $condition) {
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
      privateGame {
        id
        name
        pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      privateAnswers {
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
export const createPrivateAnswer = /* GraphQL */ `
  mutation CreatePrivateAnswer(
    $input: CreatePrivateAnswerInput!
    $condition: ModelPrivateAnswerConditionInput
  ) {
    createPrivateAnswer(input: $input, condition: $condition) {
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
        privateGame {
          id
          name
          createdAt
          updatedAt
        }
        privateAnswers {
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
export const updatePrivateAnswer = /* GraphQL */ `
  mutation UpdatePrivateAnswer(
    $input: UpdatePrivateAnswerInput!
    $condition: ModelPrivateAnswerConditionInput
  ) {
    updatePrivateAnswer(input: $input, condition: $condition) {
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
        privateGame {
          id
          name
          createdAt
          updatedAt
        }
        privateAnswers {
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
export const deletePrivateAnswer = /* GraphQL */ `
  mutation DeletePrivateAnswer(
    $input: DeletePrivateAnswerInput!
    $condition: ModelPrivateAnswerConditionInput
  ) {
    deletePrivateAnswer(input: $input, condition: $condition) {
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
        privateGame {
          id
          name
          createdAt
          updatedAt
        }
        privateAnswers {
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
export const createPublicGame = /* GraphQL */ `
  mutation CreatePublicGame(
    $input: CreatePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    createPublicGame(input: $input, condition: $condition) {
      pin
      id
      name
      currentPage {
        id
        title
        description
        timeLimit
        file
        questionType
        publicGame {
          pin
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      connectedUsers {
        items {
          id
          name
          points
          currentPage
          currentAnswer
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
      connectedGamemasters {
        items {
          id
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
export const updatePublicGame = /* GraphQL */ `
  mutation UpdatePublicGame(
    $input: UpdatePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    updatePublicGame(input: $input, condition: $condition) {
      pin
      id
      name
      currentPage {
        id
        title
        description
        timeLimit
        file
        questionType
        publicGame {
          pin
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      connectedUsers {
        items {
          id
          name
          points
          currentPage
          currentAnswer
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
      connectedGamemasters {
        items {
          id
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
export const deletePublicGame = /* GraphQL */ `
  mutation DeletePublicGame(
    $input: DeletePublicGameInput!
    $condition: ModelPublicGameConditionInput
  ) {
    deletePublicGame(input: $input, condition: $condition) {
      pin
      id
      name
      currentPage {
        id
        title
        description
        timeLimit
        file
        questionType
        publicGame {
          pin
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      connectedUsers {
        items {
          id
          name
          points
          currentPage
          currentAnswer
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
      connectedGamemasters {
        items {
          id
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
export const createPublicPage = /* GraphQL */ `
  mutation CreatePublicPage(
    $input: CreatePublicPageInput!
    $condition: ModelPublicPageConditionInput
  ) {
    createPublicPage(input: $input, condition: $condition) {
      id
      title
      description
      timeLimit
      file
      questionType
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          description
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
export const updatePublicPage = /* GraphQL */ `
  mutation UpdatePublicPage(
    $input: UpdatePublicPageInput!
    $condition: ModelPublicPageConditionInput
  ) {
    updatePublicPage(input: $input, condition: $condition) {
      id
      title
      description
      timeLimit
      file
      questionType
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          description
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
export const deletePublicPage = /* GraphQL */ `
  mutation DeletePublicPage(
    $input: DeletePublicPageInput!
    $condition: ModelPublicPageConditionInput
  ) {
    deletePublicPage(input: $input, condition: $condition) {
      id
      title
      description
      timeLimit
      file
      questionType
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          description
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
export const createPublicAnswer = /* GraphQL */ `
  mutation CreatePublicAnswer(
    $input: CreatePublicAnswerInput!
    $condition: ModelPublicAnswerConditionInput
  ) {
    createPublicAnswer(input: $input, condition: $condition) {
      id
      Page {
        id
        title
        description
        timeLimit
        file
        questionType
        publicGame {
          pin
          id
          name
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
      createdAt
      updatedAt
    }
  }
`;
export const updatePublicAnswer = /* GraphQL */ `
  mutation UpdatePublicAnswer(
    $input: UpdatePublicAnswerInput!
    $condition: ModelPublicAnswerConditionInput
  ) {
    updatePublicAnswer(input: $input, condition: $condition) {
      id
      Page {
        id
        title
        description
        timeLimit
        file
        questionType
        publicGame {
          pin
          id
          name
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
      createdAt
      updatedAt
    }
  }
`;
export const deletePublicAnswer = /* GraphQL */ `
  mutation DeletePublicAnswer(
    $input: DeletePublicAnswerInput!
    $condition: ModelPublicAnswerConditionInput
  ) {
    deletePublicAnswer(input: $input, condition: $condition) {
      id
      Page {
        id
        title
        description
        timeLimit
        file
        questionType
        publicGame {
          pin
          id
          name
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
      createdAt
      updatedAt
    }
  }
`;
export const createPublicUser = /* GraphQL */ `
  mutation CreatePublicUser(
    $input: CreatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    createPublicUser(input: $input, condition: $condition) {
      id
      name
      points
      currentPage
      currentAnswer
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
        publicGame {
          pin
          id
          name
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
export const updatePublicUser = /* GraphQL */ `
  mutation UpdatePublicUser(
    $input: UpdatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    updatePublicUser(input: $input, condition: $condition) {
      id
      name
      points
      currentPage
      currentAnswer
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
        publicGame {
          pin
          id
          name
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
export const deletePublicUser = /* GraphQL */ `
  mutation DeletePublicUser(
    $input: DeletePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    deletePublicUser(input: $input, condition: $condition) {
      id
      name
      points
      currentPage
      currentAnswer
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
        publicGame {
          pin
          id
          name
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
export const createPublicTeam = /* GraphQL */ `
  mutation CreatePublicTeam(
    $input: CreatePublicTeamInput!
    $condition: ModelPublicTeamConditionInput
  ) {
    createPublicTeam(input: $input, condition: $condition) {
      id
      name
      points
      users {
        items {
          id
          name
          points
          currentPage
          currentAnswer
          createdAt
          updatedAt
        }
        nextToken
      }
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
export const updatePublicTeam = /* GraphQL */ `
  mutation UpdatePublicTeam(
    $input: UpdatePublicTeamInput!
    $condition: ModelPublicTeamConditionInput
  ) {
    updatePublicTeam(input: $input, condition: $condition) {
      id
      name
      points
      users {
        items {
          id
          name
          points
          currentPage
          currentAnswer
          createdAt
          updatedAt
        }
        nextToken
      }
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
export const deletePublicTeam = /* GraphQL */ `
  mutation DeletePublicTeam(
    $input: DeletePublicTeamInput!
    $condition: ModelPublicTeamConditionInput
  ) {
    deletePublicTeam(input: $input, condition: $condition) {
      id
      name
      points
      users {
        items {
          id
          name
          points
          currentPage
          currentAnswer
          createdAt
          updatedAt
        }
        nextToken
      }
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
export const createPublicGamemaster = /* GraphQL */ `
  mutation CreatePublicGamemaster(
    $input: CreatePublicGamemasterInput!
    $condition: ModelPublicGamemasterConditionInput
  ) {
    createPublicGamemaster(input: $input, condition: $condition) {
      id
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
export const updatePublicGamemaster = /* GraphQL */ `
  mutation UpdatePublicGamemaster(
    $input: UpdatePublicGamemasterInput!
    $condition: ModelPublicGamemasterConditionInput
  ) {
    updatePublicGamemaster(input: $input, condition: $condition) {
      id
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
export const deletePublicGamemaster = /* GraphQL */ `
  mutation DeletePublicGamemaster(
    $input: DeletePublicGamemasterInput!
    $condition: ModelPublicGamemasterConditionInput
  ) {
    deletePublicGamemaster(input: $input, condition: $condition) {
      id
      publicGame {
        pin
        id
        name
        currentPage {
          id
          title
          description
          timeLimit
          file
          questionType
          createdAt
          updatedAt
        }
        connectedUsers {
          nextToken
        }
        connectedTeams {
          nextToken
        }
        connectedGamemasters {
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
