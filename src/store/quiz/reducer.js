import { 
  FETCH_START,
  QUIZ_ERROR,
  FINISH_QUIZ,
  QUIZ_SET_SCORE,
  QUIZ_WRONG_ANSWER,
  QUIZ_WRONG_ANSWER_BUTTON_ID,
  QUIZ_SET_QUESTIONS, 
  QUIZ_ADD_QUESTION,
  QUIZ_ACTIVE_QUESTION,
  QUIZ_RETRY,
} from "./actions";

const INITIAL_STATE = {
  questions: [], 
  activeQuestion: 0,
  loading: false,
  error: null,
  results: [],
  isFinished: false,
  wrong: [],  
  buttonIds: [],
}; 

function quizReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_START:
      return {...state, loading: true};
    case QUIZ_ERROR:
      return {...state, loading: false, error: payload};
    case QUIZ_SET_QUESTIONS:
      return { ...state, loading: false, questions: [...payload] };
    case QUIZ_ADD_QUESTION:
      const idArr = state.questions.map((question) => +question.id);
      const maxId = Math.max.apply(null, idArr);
      const newQuestion = (maxId === -Infinity) ? { id: 1, ...payload } : { id: maxId + 1, ...payload };
      return { ...state, loading: false, questions: [...state.questions, newQuestion] };
    case QUIZ_SET_SCORE:
      return { ...state, results: [...state.results, payload] };
    case QUIZ_WRONG_ANSWER_BUTTON_ID:
      return { ...state, buttonIds: [...state.buttonIds, payload] };
    case QUIZ_WRONG_ANSWER:
      return { ...state, wrong: [...state.wrong, payload] };
    case QUIZ_ACTIVE_QUESTION:
      return { ...state, activeQuestion: payload };
    case FINISH_QUIZ:
      return { ...state, isFinished: true };
    case QUIZ_RETRY:
      return {
        ...state,
        results: [],
        isFinished: false,
        activeQuestion: 0,
        wrong: [],  
        buttonIds: []
      }
    default:
      return state;
  }
}

export default quizReducer;