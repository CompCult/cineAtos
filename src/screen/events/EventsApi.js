import ApiBaseURL from '../../services/ApiBaseURL'

const EventsApi = {
	getEventsApi: () => ApiBaseURL.get("appointment"),
	getEventsRequestsApi: () => ApiBaseURL.get("appointment_requests"),
	postEventsApi: (newEvents) => ApiBaseURL.post("/appointment", newEvents),

}

export default EventsApi