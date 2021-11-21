/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
      id
      name
      pin
      currentSlide
      slides {
        items {
          id
          slideID
          title
          description
          hasTimeLimit
          timeLimit
          autoCheck
          pointsForSpeed
          file
          type
          numberOfOptions
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedUsers {
        items {
          id
          userID
          name
          points
          currentSlide
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
          id
          gamemasterID
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedTeams {
        items {
          id
          teamID
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
      id
      name
      pin
      currentSlide
      slides {
        items {
          id
          slideID
          title
          description
          hasTimeLimit
          timeLimit
          autoCheck
          pointsForSpeed
          file
          type
          numberOfOptions
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedUsers {
        items {
          id
          userID
          name
          points
          currentSlide
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
          id
          gamemasterID
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedTeams {
        items {
          id
          teamID
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
      id
      name
      pin
      currentSlide
      slides {
        items {
          id
          slideID
          title
          description
          hasTimeLimit
          timeLimit
          autoCheck
          pointsForSpeed
          file
          type
          numberOfOptions
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedUsers {
        items {
          id
          userID
          name
          points
          currentSlide
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
          id
          gamemasterID
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedTeams {
        items {
          id
          teamID
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
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
      id
      slideID
      title
      description
      hasTimeLimit
      timeLimit
      autoCheck
      pointsForSpeed
      file
      type
      numberOfOptions
      blogID
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
          answerID
          content
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
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
      id
      slideID
      title
      description
      hasTimeLimit
      timeLimit
      autoCheck
      pointsForSpeed
      file
      type
      numberOfOptions
      blogID
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
          answerID
          content
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
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
      id
      slideID
      title
      description
      hasTimeLimit
      timeLimit
      autoCheck
      pointsForSpeed
      file
      type
      numberOfOptions
      blogID
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
          answerID
          content
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
      answerID
      Slide {
        id
        slideID
        title
        description
        hasTimeLimit
        timeLimit
        autoCheck
        pointsForSpeed
        file
        type
        numberOfOptions
        blogID
        quiz {
          id
          name
          pin
          currentSlide
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
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
      answerID
      Slide {
        id
        slideID
        title
        description
        hasTimeLimit
        timeLimit
        autoCheck
        pointsForSpeed
        file
        type
        numberOfOptions
        blogID
        quiz {
          id
          name
          pin
          currentSlide
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
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
      answerID
      Slide {
        id
        slideID
        title
        description
        hasTimeLimit
        timeLimit
        autoCheck
        pointsForSpeed
        file
        type
        numberOfOptions
        blogID
        quiz {
          id
          name
          pin
          currentSlide
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
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
      userID
      name
      points
      currentSlide
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userID
      name
      points
      currentSlide
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userID
      name
      points
      currentSlide
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      teamID
      name
      points
      users {
        items {
          id
          userID
          name
          points
          currentSlide
          createdAt
          updatedAt
        }
        nextToken
      }
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
      teamID
      name
      points
      users {
        items {
          id
          userID
          name
          points
          currentSlide
          createdAt
          updatedAt
        }
        nextToken
      }
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
      teamID
      name
      points
      users {
        items {
          id
          userID
          name
          points
          currentSlide
          createdAt
          updatedAt
        }
        nextToken
      }
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
      gamemasterID
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
      gamemasterID
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
      gamemasterID
      quiz {
        id
        name
        pin
        currentSlide
        slides {
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
