/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrivateGame = /* GraphQL */ `
  subscription OnCreatePrivateGame {
    onCreatePrivateGame {
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
export const onUpdatePrivateGame = /* GraphQL */ `
  subscription OnUpdatePrivateGame {
    onUpdatePrivateGame {
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
export const onDeletePrivateGame = /* GraphQL */ `
  subscription OnDeletePrivateGame {
    onDeletePrivateGame {
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
export const onCreatePrivatePage = /* GraphQL */ `
  subscription OnCreatePrivatePage {
    onCreatePrivatePage {
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
export const onUpdatePrivatePage = /* GraphQL */ `
  subscription OnUpdatePrivatePage {
    onUpdatePrivatePage {
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
export const onDeletePrivatePage = /* GraphQL */ `
  subscription OnDeletePrivatePage {
    onDeletePrivatePage {
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
export const onCreatePrivateAnswer = /* GraphQL */ `
  subscription OnCreatePrivateAnswer {
    onCreatePrivateAnswer {
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
export const onUpdatePrivateAnswer = /* GraphQL */ `
  subscription OnUpdatePrivateAnswer {
    onUpdatePrivateAnswer {
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
export const onDeletePrivateAnswer = /* GraphQL */ `
  subscription OnDeletePrivateAnswer {
    onDeletePrivateAnswer {
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
export const onCreatePublicGame = /* GraphQL */ `
  subscription OnCreatePublicGame {
    onCreatePublicGame {
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
export const onUpdatePublicGame = /* GraphQL */ `
  subscription OnUpdatePublicGame {
    onUpdatePublicGame {
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
export const onDeletePublicGame = /* GraphQL */ `
  subscription OnDeletePublicGame {
    onDeletePublicGame {
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
export const onCreatePublicPage = /* GraphQL */ `
  subscription OnCreatePublicPage {
    onCreatePublicPage {
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
export const onUpdatePublicPage = /* GraphQL */ `
  subscription OnUpdatePublicPage {
    onUpdatePublicPage {
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
export const onDeletePublicPage = /* GraphQL */ `
  subscription OnDeletePublicPage {
    onDeletePublicPage {
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
export const onCreatePublicAnswer = /* GraphQL */ `
  subscription OnCreatePublicAnswer {
    onCreatePublicAnswer {
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
export const onUpdatePublicAnswer = /* GraphQL */ `
  subscription OnUpdatePublicAnswer {
    onUpdatePublicAnswer {
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
export const onDeletePublicAnswer = /* GraphQL */ `
  subscription OnDeletePublicAnswer {
    onDeletePublicAnswer {
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
export const onCreatePublicUser = /* GraphQL */ `
  subscription OnCreatePublicUser {
    onCreatePublicUser {
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
export const onUpdatePublicUser = /* GraphQL */ `
  subscription OnUpdatePublicUser {
    onUpdatePublicUser {
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
export const onDeletePublicUser = /* GraphQL */ `
  subscription OnDeletePublicUser {
    onDeletePublicUser {
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
export const onCreatePublicTeam = /* GraphQL */ `
  subscription OnCreatePublicTeam {
    onCreatePublicTeam {
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
export const onUpdatePublicTeam = /* GraphQL */ `
  subscription OnUpdatePublicTeam {
    onUpdatePublicTeam {
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
export const onDeletePublicTeam = /* GraphQL */ `
  subscription OnDeletePublicTeam {
    onDeletePublicTeam {
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
export const onCreatePublicGamemaster = /* GraphQL */ `
  subscription OnCreatePublicGamemaster {
    onCreatePublicGamemaster {
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
export const onUpdatePublicGamemaster = /* GraphQL */ `
  subscription OnUpdatePublicGamemaster {
    onUpdatePublicGamemaster {
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
export const onDeletePublicGamemaster = /* GraphQL */ `
  subscription OnDeletePublicGamemaster {
    onDeletePublicGamemaster {
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
