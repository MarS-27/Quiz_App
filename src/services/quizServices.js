import { QUIZ_URI } from "../constants/constants";
import api from "../api/api";

export function getQuestions() {
    return api.get(QUIZ_URI).then((resp) => resp.data);  
}

export function createQuestion(question) {
    return api.post(QUIZ_URI, question).then((resp) => resp.data);
}

export function updateQuestion(question) {
    return api.put(QUIZ_URI + "/" + question.id, question).then((resp) => resp.data);
}

export function deleteQuestion(id) {
    return api.delete(QUIZ_URI + "/" + id).then((resp) => resp.data);
}