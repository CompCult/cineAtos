import ApiBaseURL from '../../ApiBaseURL.js'

const ChoicesApi = {
	getChoicesApi: () => ApiBaseURL.get("quizzes"),
	getChoicesOfAnswersApi: () => ApiBaseURL.get("quiz_answers"),
	postChoicesApi: (newChoices) => ApiBaseURL.post("quizzes", newChoices),
	getChoicesInformationApi: (id) => ApiBaseURL.get(`quizzes/${id}`),
	getChoicesOfAnswersInformationApi: (id) => ApiBaseURL.get(`quiz_answers/${id}`),

}

export default ChoicesApi