import ApiBaseURL from "../../services/ApiBaseURL";

const MiniGamesApi = {
    getMiniGamesMemoriesApi: () => ApiBaseURL.get("minigames/memories"),
    getMiniGamesHangmansApi: () => ApiBaseURL.get("minigames/hangmans"),
    postMiniGamesMemoriesApi: newMiniGame => ApiBaseURL.post("minigames/memories", newMiniGame),
    postMiniGamesHangmansApi: newMiniGame => ApiBaseURL.post("minigames/hangmans", newMiniGame),
    getMiniGamesMemoriesInformationApi: id => ApiBaseURL.get(`minigames/memories/${id}`),
    getMiniGamesHangmansInformationApi: id => ApiBaseURL.get(`minigames/hangmans/${id}`),
    deleteMiniGamesMemoriesApi: id => ApiBaseURL.delete(`minigames/memories/${id}`),
    deleteMiniGamesHangmansApi: id => ApiBaseURL.delete(`minigames/hangmans/${id}`)

};

export default MiniGamesApi;
