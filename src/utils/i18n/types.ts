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
      doneIssuesChart: string;
      issuesStatusesChart: string;
      designersTable: string;
    };

    header: {
      weekNumber: string;
      heading: string;
    };

    CommentCard: {
      user: string;
      issue: string;
    };

    DesignerCard: {
      completedIssuesCount: string;
      issueMedianTime: string;
    };

    DoneIssuesChartSection: {
      shownWeekNumber: string;
    };

    DoneIssuesChart: {
      revenue: string;
      expenses: string;
      profit: string;
    };

    IssuesStatusesChart: {
      New: string;
      InProgress: string;
      Done: string;
    };

    DesignersTable: {
      columnHeadings: {
        avatar: string;
        username: string;
        email: string;
        inProgressIssuesCount: string;
        doneIssuesCount: string;
      };
    };
  };
}

export default interface Resources {
  ru: LangResources;
  en: LangResources;
}
