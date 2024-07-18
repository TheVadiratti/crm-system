interface LangResources {
  translation: {
    pageHeaders: {
      main: string;
      tasks: string;
      designers: string;
    };

    header: {
      weekNumber: string;
      heading: string;
    };
  };
}

export default interface Resources {
  ru: LangResources;
  en: LangResources;
}
