/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrivateGame = /* GraphQL */ `
  query GetPrivateGame($id: ID!) {
    getPrivateGame(id: $id) {
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
          privateGame {
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
          privateAnswers {
            items {
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
                createdAt
                updatedAt
              }
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
        nextToken
      }
      createdAt
      updatedAt
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivatePage = /* GraphQL */ `
  query GetPrivatePage($id: ID!) {
    getPrivatePage(id: $id) {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      privateAnswers {
        items {
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
export const listPrivatePages = /* GraphQL */ `
  query ListPrivatePages(
    $filter: ModelPrivatePageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivatePages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        privateGame {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        privateAnswers {
          items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateAnswer = /* GraphQL */ `
  query GetPrivateAnswer($id: ID!) {
    getPrivateAnswer(id: $id) {
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
            nextToken
          }
          createdAt
          updatedAt
        }
        privateAnswers {
          items {
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
export const listPrivateAnswers = /* GraphQL */ `
  query ListPrivateAnswers(
    $filter: ModelPrivateAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          privateAnswers {
            items {
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
                createdAt
                updatedAt
              }
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
        description
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPublicGame = /* GraphQL */ `
  query GetPublicGame($pin: Int!) {
    getPublicGame(pin: $pin) {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            nextToken
          }
          createdAt
          updatedAt
        }
        answers {
          items {
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
          team {
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
          users {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
          createdAt
          updatedAt
        }
        nextToken
      }
      connectedGamemasters {
        items {
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
export const listPublicGames = /* GraphQL */ `
  query ListPublicGames(
    $pin: Int
    $filter: ModelPublicGameFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPublicGames(
      pin: $pin
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          answers {
            items {
              id
              Page {
                id
                title
                description
                timeLimit
                file
                questionType
                createdAt
                updatedAt
              }
              description
              createdAt
              updatedAt
            }
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
          nextToken
        }
        connectedTeams {
          items {
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
          nextToken
        }
        connectedGamemasters {
          items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPublicPage = /* GraphQL */ `
  query GetPublicPage($id: ID!) {
    getPublicPage(id: $id) {
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
          answers {
            items {
              id
              Page {
                id
                title
                description
                timeLimit
                file
                questionType
                createdAt
                updatedAt
              }
              description
              createdAt
              updatedAt
            }
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
          nextToken
        }
        connectedTeams {
          items {
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
          nextToken
        }
        connectedGamemasters {
          items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
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
export const listPublicPages = /* GraphQL */ `
  query ListPublicPages(
    $filter: ModelPublicPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            nextToken
          }
          createdAt
          updatedAt
        }
        answers {
          items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPublicAnswer = /* GraphQL */ `
  query GetPublicAnswer($id: ID!) {
    getPublicAnswer(id: $id) {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            nextToken
          }
          createdAt
          updatedAt
        }
        answers {
          items {
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
export const listPublicAnswers = /* GraphQL */ `
  query ListPublicAnswers(
    $filter: ModelPublicAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          answers {
            items {
              id
              Page {
                id
                title
                description
                timeLimit
                file
                questionType
                createdAt
                updatedAt
              }
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPublicUser = /* GraphQL */ `
  query GetPublicUser($id: ID!) {
    getPublicUser(id: $id) {
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
          answers {
            items {
              id
              Page {
                id
                title
                description
                timeLimit
                file
                questionType
                createdAt
                updatedAt
              }
              description
              createdAt
              updatedAt
            }
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
          nextToken
        }
        connectedTeams {
          items {
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
          nextToken
        }
        connectedGamemasters {
          items {
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
          items {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            nextToken
          }
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
export const listPublicUsers = /* GraphQL */ `
  query ListPublicUsers(
    $filter: ModelPublicUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
export const getPublicTeam = /* GraphQL */ `
  query GetPublicTeam($id: ID!) {
    getPublicTeam(id: $id) {
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
          team {
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
          answers {
            items {
              id
              Page {
                id
                title
                description
                timeLimit
                file
                questionType
                createdAt
                updatedAt
              }
              description
              createdAt
              updatedAt
            }
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
          nextToken
        }
        connectedTeams {
          items {
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
          nextToken
        }
        connectedGamemasters {
          items {
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
export const listPublicTeams = /* GraphQL */ `
  query ListPublicTeams(
    $filter: ModelPublicTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            nextToken
          }
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
export const getPublicGamemaster = /* GraphQL */ `
  query GetPublicGamemaster($id: ID!) {
    getPublicGamemaster(id: $id) {
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
          answers {
            items {
              id
              Page {
                id
                title
                description
                timeLimit
                file
                questionType
                createdAt
                updatedAt
              }
              description
              createdAt
              updatedAt
            }
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
          nextToken
        }
        connectedTeams {
          items {
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
          nextToken
        }
        connectedGamemasters {
          items {
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
export const listPublicGamemasters = /* GraphQL */ `
  query ListPublicGamemasters(
    $filter: ModelPublicGamemasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicGamemasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          connectedUsers {
            items {
              id
              name
              points
              currentPage
              currentAnswer
              publicGame {
                pin
                id
                name
                createdAt
                updatedAt
              }
              team {
                id
                name
                points
                createdAt
                updatedAt
              }
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
            nextToken
          }
          connectedGamemasters {
            items {
              id
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
            nextToken
          }
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
