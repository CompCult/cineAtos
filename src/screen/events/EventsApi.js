import ApiBaseURL from '../../ApiBaseURL.js'

const EventsApi = {
	getEventsApi: () => ApiBaseURL.get("appointments"),
	getEventsRequestsApi: () => ApiBaseURL.get("appointment_requests")

}

export default EventsApi