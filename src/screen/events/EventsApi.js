import ApiBaseURL from '../../ApiBaseURL.js'

const EventsApi = {
	getEventsApi: () => ApiBaseURL.get("appointment"),
	getEventsRequestsApi: () => ApiBaseURL.get("appointment_requests")

}

export default EventsApi