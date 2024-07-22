interface LangResources {
  translation: {
    pageHeaders: {
      main: string;
      tasks: string;
      designers: string;
    };

    sectionHeadings: {
      lastComments: string;
      topDesigners: string;
    };

    header: {
      weekNumber: string;
      heading: string;
    };

    CommentCard: {
      user: string;
      issue: string;
      timePassedSinceCreated: string;
    };

    DesignerCard: {
      completedIssuesCount: string;
      issueMedianTime: string;
    };
  };
}

export default interface Resources {
  ru: LangResources;
  en: LangResources;
}
