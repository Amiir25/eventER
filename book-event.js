function showSelectedEvent(eventId) {
    let selectedEvent = events.find(event => event.id === eventId);
    if (!selectedEvent) return;

    alert(selectedEvent.title);
    let selectedEventTitle = document.querySelector('#selected-event-title').getAttribute('id');
    alert(selectedEventTitle);
}
// document.querySelector('#selected-event-title').textContent = 'Event Title';

