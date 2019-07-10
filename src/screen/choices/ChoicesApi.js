import ApiBaseURL from '../../ApiBaseURL.js'

const ChoicesApi = {
	getChoicesApi: () => ApiBaseURL.get("quizzes"),
	getChoicesOfAnswersApi: () => ApiBaseURL.get("quiz_answers")

}

export default ChoicesApi