import ApiBaseURL from '../../services/ApiBaseURL.js'
import { getId } from '../../services/Auth'

const ChoicesApi = {
	getAllChoicesApi: () => ApiBaseURL.get("quizzes"),
	getMyChoicesApi: () => ApiBaseURL.get(`quizzes?_user=${getId()}`),
	postChoicesApi: (newChoices) => ApiBaseURL.post("quizzes", newChoices),
	getChoicesInformationApi: (id) => ApiBaseURL.get(`quizzes/${id}`),
	getChoicesInformationAnswersApi: (id) => ApiBaseURL.get(`quizzes/${id}/answers`),
	deleteChoicesApi: (id) => ApiBaseURL.delete(`quizzes/${id}`),
	putChoicesApi: (updateChoices, id) => ApiBaseURL.put(`quizzes/${id}`, updateChoices),

}

export default ChoicesApi