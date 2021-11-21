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
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide {
    onCreateSlide {
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
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide {
    onUpdateSlide {
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
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide {
    onDeleteSlide {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateGamemaster = /* GraphQL */ `
  subscription OnCreateGamemaster {
    onCreateGamemaster {
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
export const onUpdateGamemaster = /* GraphQL */ `
  subscription OnUpdateGamemaster {
    onUpdateGamemaster {
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
export const onDeleteGamemaster = /* GraphQL */ `
  subscription OnDeleteGamemaster {
    onDeleteGamemaster {
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
