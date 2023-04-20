export const setMaxPage = (nextPage: string) => {
  const pageId = nextPage.split('/')[2];

  if (nextPage.includes('question')) {
    localStorage.setItem('maxQuestionPage', pageId);
  } else if (nextPage.includes('scene')) {
    localStorage.setItem('maxScenePage', pageId);
  }
};
