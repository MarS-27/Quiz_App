export const API_URL = 'https://63593d13c27556d2894f77ef.mockapi.io/';

export const QUIZ_URI = 'quiz';

export const EMPTY_QUESTION = () => {
    return {
      question: "",
      explanation: "",
      image: "",
      answer1: "", 
      answer1Check: false,
      answer2: "",
      answer2Check: false,
      answer3: "",
      answer3Check: false,
      answer4: "", 
      answer4Check: false,
    };
};

export const NUM_OF_ANSWERS = ['1', '2', '3', '4'];