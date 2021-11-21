/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
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
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
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
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        name
        points
        users {
          nextToken
        }
        quiz {
          id
          name
          pin
          currentSlide
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGamemaster = /* GraphQL */ `
  query GetGamemaster($id: ID!) {
    getGamemaster(id: $id) {
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
export const listGamemasters = /* GraphQL */ `
  query ListGamemasters(
    $filter: ModelGamemasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGamemasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gamemasterID
        quiz {
          id
          name
          pin
          currentSlide
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
