import ApiBaseURL from '../../services/ApiBaseURL'

const MissionsApi = {
	getMissionsApi: () => ApiBaseURL.get("missions"),
	getMissionsAnswersApi: () => ApiBaseURL.get("missions_answers"),
	postMissionsApi: (newMissions) => ApiBaseURL.post("/missions", newMissions),

	getMissionsInformationApi: (id) => ApiBaseURL.get(`missions/${id}`),
}

export default MissionsApi