import ApiBaseURL from "../../services/ApiBaseURL";

const MiniGamesApi = {
    getMiniGamesApi: () => ApiBaseURL.get("minigames/memories"),
    postMiniGamesApi: newMiniGame => ApiBaseURL.post("minigames/memories", newMiniGame),
    //getPersonInformationApi: id => ApiBaseURL.get(`users/${id}`),
    //putPersonApi: (updatePerson, id) =>
    //ApiBaseURL.put(`users/${id}`, updatePerson),
    //deletePersonApi: id => ApiBaseURL.delete(`users/${id}`)
};

export default MiniGamesApi;
