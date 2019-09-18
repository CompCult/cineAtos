import ApiBaseURL from '../../ApiBaseURL.js'

const PersonApi = {
	getPersonApi: () => ApiBaseURL.get("users"),
	postPersonApi: (newPerson) => ApiBaseURL.post("users/register", newPerson),
	getPersonInformationApi: (id) => ApiBaseURL.get(`users/${id}`),
}

export default PersonApi
