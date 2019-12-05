import ApiBaseURL from '../../services/ApiBaseURL'
import { getId } from '../../services/Auth'

const MissionsApi = {
	getAllMissionsApi: () => ApiBaseURL.get("missions"),
	getMyMissionsApi: () => ApiBaseURL.get(`missions?_user=${getId()}`),
	getStatusMissionsApi: (status) => ApiBaseURL.get(`missions/query/fields?status=${status}`),
	getMissionsAnswersApi: () => ApiBaseURL.get("missionsAnswers"),
	postMissionsApi: (newMissions) => ApiBaseURL.post("/missions", newMissions),
	deleteMissionApi: (id) => ApiBaseURL.delete(`missions/${id}`),
	getMissionsInformationApi: (id) => ApiBaseURL.get(`missions/${id}`),
	putMissionApi: (updateMissino, id) => ApiBaseURL.put(`missions/${id}`, updateMissino),
}

export default MissionsApi