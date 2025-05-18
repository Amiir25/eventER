function showSelectedEvent(eventId) {
    let selectedEvent = events.find(event => event.id === eventId);
    if (!selectedEvent) return;

    alert(selectedEvent.title);
    document.querySelector('#selected-event-title').textContent = 'Event Title';
}
// document.querySelector('#selected-event-title').textContent = 'Event Title';

