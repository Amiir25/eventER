function showSelectedEvent(eventId) {
    const selectedEvent = events.find(event => event.id === eventId);
    if (!selectedEvent) return;
    
    document.querySelector('#selected-event-title').textContent = selectedEvent.title;
}