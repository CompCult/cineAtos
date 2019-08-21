import ApiBaseURL from '../../ApiBaseURL.js'

const ChoicesApi = {
	getChoicesApi: () => ApiBaseURL.get("quizzes"),
	getChoicesOfAnswersApi: () => ApiBaseURL.get("quiz_answers"),
	postChoicesApi: (newChoices) => ApiBaseURL.post("/quizzes",newChoices),

}

export default ChoicesApi