import ApiBaseURL from '../../ApiBaseURL.js'

const PersonApi = {
	getPersonApi: (user) => ApiBaseURL.get("users",user)
}

export default PersonApi