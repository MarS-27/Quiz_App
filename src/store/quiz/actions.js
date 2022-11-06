import {
    getQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
} from '../../services/quizServices';

// action type

export const QUIZ_SET_QUESTIONS = 'QUIZ_SET_QUESTIONS';
export const FETCH_START = 'QUIZ_START';
export const QUIZ_ERROR = 'QUIZ_ERROR';
export const FINISH_QUIZ = 'FINISH_QUIZ';
export const QUIZ_ACTIVE_QUESTION = 'QUIZ_ACTIVE_QUESTION';
export const QUIZ_WRONG_ANSWER = 'QUIZ_WRONG_ANSWER';
export const QUIZ_WRONG_ANSWER_BUTTON_ID = ' QUIZ_WRONG_ANSWER_BUTTON_ID';
export const QUIZ_SET_SCORE = 'QUIZ_SET_SCORE';
export const QUIZ_RETRY = 'QUIZ_RETRY';
export const QUIZ_ADD_QUESTION = 'QUIZ_ADD_QUESTION';


// actions

export function setQuestions(questions) {
    return {
        type: QUIZ_SET_QUESTIONS,
        payload: questions,
    }
}

export function fetchStart() {
    return {
        type: FETCH_START,
    }
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ,
    }
}

export function quizActiveQuestion(number) {
    return {
        type: QUIZ_ACTIVE_QUESTION,
        payload: number,
    }
}

export function wrongAnswer(wrong) {
    return {
        type: QUIZ_WRONG_ANSWER,
        payload: wrong,
    }
}

export function answerButtonId(buttonId) {
    return {
        type: QUIZ_WRONG_ANSWER_BUTTON_ID,
        payload: buttonId,
    }
}

export function errorQuiz(error) {
    return {
        type: QUIZ_ERROR,
        payload: error,
    }
}

export function quizSetScore(results) {
    return {
        type: QUIZ_SET_SCORE,
        payload: results,
    }
}

export function retryQuiz() {
    return {
        type: QUIZ_RETRY,
    }
}

export const addQuestion = (question) => ({
    type: QUIZ_ADD_QUESTION,
    payload: question,
});

//thunk

export const fetchQuestions = () => {
    return function (dispatch) {
        dispatch(fetchStart());
        getQuestions().then((questions) => dispatch(setQuestions(questions)))
            .catch((error) => dispatch(errorQuiz(error.response.status)));
    };
};

export const createNewQuestion = (question) => {
    return function (dispatch) {
        dispatch(fetchStart());
        createQuestion(question).then(() => dispatch(addQuestion(question)))
            .catch((error) => dispatch(errorQuiz(error.response.status))); 
    };
};

export const removeQuestion = (id) => {
    return function (dispatch, getState) {
        dispatch(fetchStart());
        deleteQuestion(id).then(() => {
            const { quiz } = getState();
            const updatedQuestions = quiz.questions.filter((question) => question.id !== id);
            dispatch(setQuestions(updatedQuestions));
        })
            .catch((error) => dispatch(errorQuiz(error.response.status)));
    };
};

export const editQuestion = (data) => {
    return function (dispatch, getState) {
        const { quiz  } = getState();
        updateQuestion(data).then(() => {
            const updatedQuestions = quiz.questions.map((question) =>
                question.id === data.id ? data : question
            );
            dispatch(setQuestions(updatedQuestions));
        })
            .catch((error) => dispatch(errorQuiz(error.response.status)));
    };
};

export const activeQuestionClick = (number) => {
    return function (dispatch) {
        dispatch(quizActiveQuestion(number));
    }
};

export const answerClick = (id, answer) => {
    return function (dispatch, getState) {
        const { quiz  } = getState();
        const [ checkedQuestion ] = quiz.questions.filter((question) => question.id === id);

        if ( quiz.activeQuestion + 1 === quiz.questions.length ) {
            dispatch(finishQuiz());
        }

        if (checkedQuestion[answer] === true) {
            dispatch(quizSetScore(id));
        } else {
            dispatch(wrongAnswer(id));
            dispatch(answerButtonId(`${id}${answer}`));   
        }
    };
};

export function newQuiz() {
    return function (dispatch) {
        dispatch(retryQuiz());
    }
};