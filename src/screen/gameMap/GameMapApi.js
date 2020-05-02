import ApiBaseURL from "../../services/ApiBaseURL";

const GameMapApi = {
    getGameMapApi: () => ApiBaseURL.get("missions/georeferencedanswers"),
};

export default GameMapApi;
