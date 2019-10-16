import ApiBaseURL from '../../services/ApiBaseURL'

const PanelsApi = {
	getChoicesApi: () => ApiBaseURL.get("quizzes"),
	getChoicesOfAnswersApi: () => ApiBaseURL.get("quiz_answers")

}

export default PanelsApi