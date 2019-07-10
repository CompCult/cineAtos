import ApiBaseURL from '../../ApiBaseURL.js'

const MissionsApi = {
	getMissionsApi: () => ApiBaseURL.get("missions"),
	getMissionsAnswersApi: () => ApiBaseURL.get("missions_answers")

}

export default MissionsApi