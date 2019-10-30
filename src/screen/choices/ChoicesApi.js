import ApiBaseURL from '../../services/ApiBaseURL.js'

const ChoicesApi = {
	getChoicesApi: () => ApiBaseURL.get("quizzes"),
	postChoicesApi: (newChoices) => ApiBaseURL.post("quizzes", newChoices),
	getChoicesInformationApi: (id) => ApiBaseURL.get(`quizzes/${id}`),
	getChoicesInformationAnswersApi: (id) => ApiBaseURL.get(`quizzes/${id}/answers`),
	deleteChoicesApi: (id) => ApiBaseURL.delete(`quizzes/${id}`),
	putChoicesApi: (updateChoices, id) => ApiBaseURL.put(`quizzes/${id}`, updateChoices),

}

export default ChoicesApi