import ApiBaseURL from '../../services/ApiBaseURL'
import { getId } from '../../services/Auth'

const MissionsApi = {
	getAllMissionsApi: () => ApiBaseURL.get("missions"),
	getMyMissionsApi: () => ApiBaseURL.get(`missions?_user=${getId()}`),
	getStatusMissionsApi: (status, id) => ApiBaseURL.get(`missions/${id}/answers?status=${status}`),
	getMissionsAnswersApi: () => ApiBaseURL.get("missionsAnswers"),
	postMissionsApi: (newMissions) => ApiBaseURL.post("/missions", newMissions),
	deleteMissionApi: (id) => ApiBaseURL.delete(`missions/${id}`),
	getMissionsInformationApi: (id) => ApiBaseURL.get(`missions/${id}`),
	getSeeAnswerMissionsInformationApi: (idMissions, idSeeAnswer) => ApiBaseURL.get(`missions/${idMissions}/answers/${idSeeAnswer}`),
	putMissionApi: (updateMissino, id) => ApiBaseURL.put(`missions/${id}`, updateMissino),
	putSeeMyAnswer: (idMissions, idSeeAnswer, status) => ApiBaseURL.put(`missions/${idMissions}/answers/${idSeeAnswer}`, status),
}

export default MissionsApi