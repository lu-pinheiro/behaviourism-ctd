export interface Question {
  question: string;
  correctAnswers: string[];
}

export interface QuestionResponse {
  previous: string;
  title: string;
  questions: Question[];
  nextPage: string;
}
