import ApiBaseURL from '../../ApiBaseURL.js'

const PanelsApi = {
	getChoicesApi: () => ApiBaseURL.get("quizzes"),
	getChoicesOfAnswersApi: () => ApiBaseURL.get("quiz_answers")

}

export default PanelsApi