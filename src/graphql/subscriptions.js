/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
      id
      name
      pin
      currentSlide
      slides {
        items {
          id
          title
          description
          hasTimeLimit
          timeLimit
          autoCheck
          pointsForSpeed
          file
          type
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
          currentSlide
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
      id
      name
      pin
      currentSlide
      slides {
        items {
          id
          title
          description
          hasTimeLimit
          timeLimit
          autoCheck
          pointsForSpeed
          file
          type
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
          currentSlide
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
      id
      name
      pin
      currentSlide
      slides {
        items {
          id
          title
          description
          hasTimeLimit
          timeLimit
          autoCheck
          pointsForSpeed
          file
          type
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
          currentSlide
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
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide {
    onCreateSlide {
      id
      title
      description
      hasTimeLimit
      timeLimit
      autoCheck
      pointsForSpeed
      file
      type
      numberOfOptions
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
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide {
    onUpdateSlide {
      id
      title
      description
      hasTimeLimit
      timeLimit
      autoCheck
      pointsForSpeed
      file
      type
      numberOfOptions
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
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide {
    onDeleteSlide {
      id
      title
      description
      hasTimeLimit
      timeLimit
      autoCheck
      pointsForSpeed
      file
      type
      numberOfOptions
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      Slide {
        id
        title
        description
        hasTimeLimit
        timeLimit
        autoCheck
        pointsForSpeed
        file
        type
        numberOfOptions
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
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      Slide {
        id
        title
        description
        hasTimeLimit
        timeLimit
        autoCheck
        pointsForSpeed
        file
        type
        numberOfOptions
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
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      Slide {
        id
        title
        description
        hasTimeLimit
        timeLimit
        autoCheck
        pointsForSpeed
        file
        type
        numberOfOptions
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
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
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
      team {
        id
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
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
      team {
        id
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
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
      team {
        id
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      points
      users {
        items {
          id
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      points
      users {
        items {
          id
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      points
      users {
        items {
          id
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
export const onCreateGamemaster = /* GraphQL */ `
  subscription OnCreateGamemaster {
    onCreateGamemaster {
      id
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
export const onUpdateGamemaster = /* GraphQL */ `
  subscription OnUpdateGamemaster {
    onUpdateGamemaster {
      id
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
export const onDeleteGamemaster = /* GraphQL */ `
  subscription OnDeleteGamemaster {
    onDeleteGamemaster {
      id
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
