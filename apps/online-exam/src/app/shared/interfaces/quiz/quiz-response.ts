export interface QuizResponse {
    answers: Answer[]
    type: string
    _id: string
    question: string
    correct: string
    exam: Exam
  }
  
  export interface Answer {
    answer: string
    key: string
  }
  
  export interface Exam {
    title: string
    duration: number
    numberOfQuestions: number
  }