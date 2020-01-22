import ApiBaseURL from "../../services/ApiBaseURL";

const MiniGamesApi = {
    getMiniGamesMemoriesApi: () => ApiBaseURL.get("minigames/memories"),
    postMiniGamesMemoriesApi: newMiniGame => ApiBaseURL.post("minigames/memories", newMiniGame),
    getMiniGamesMemoriesInformationApi: id => ApiBaseURL.get(`minigames/memories/${id}`),
    deleteMiniGamesMemoriesApi: id => ApiBaseURL.delete(`minigames/memories/${id}`)

};

export default MiniGamesApi;
