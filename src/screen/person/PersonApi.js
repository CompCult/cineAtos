import ApiBaseURL from '../../ApiBaseURL.js'

const PersonApi = {
	getPersonApi: () => ApiBaseURL.get("users")
}

export default PersonApi