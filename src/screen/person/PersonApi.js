import ApiBaseURL from '../../services/ApiBaseURL'

const PersonApi = {
	getPersonApi: () => ApiBaseURL.get("users"),
	postPersonApi: (newPerson) => ApiBaseURL.post("users/register", newPerson),
	getPersonInformationApi: (id) => ApiBaseURL.get(`users/${id}`),
	putPersonApi: (updatePerson, id) => ApiBaseURL.put(`users/${id}`, updatePerson),
	deletePersonApi: (id) => ApiBaseURL.delete(`users/${id}`),
}

export default PersonApi
