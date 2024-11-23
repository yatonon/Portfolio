export const paths = {
    home: {
      path: '/',
      getHref: () => '/',
    },
    work: {
      path: 'work/:work_id',
      getHref: (work_id: number) => `/work/${work_id}`,
    },
    selfwork: {
      path: 'selfwork/:selfwork_id',
      getHref: (selfwork_id: number) => `/selfwork/${selfwork_id}`,
    },
    article: {
      path: 'article/:article_id',
      getHref: (id: string) => `/article/${id}`,
    },
  } as const;
