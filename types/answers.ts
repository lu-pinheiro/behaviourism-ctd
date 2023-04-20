export interface Answer {
  text: string;
  isCorrect: boolean;
  nextPage: string;
}

export interface AnswerResponse {
  previous: string;
  title: string;
  answers: Answer[];
}
