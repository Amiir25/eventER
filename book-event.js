document.addEventListener('DOMContentLoaded', function () {
    // alert('On the door')
    function showSelectedEvent(eventId) {
        let selectedEvent = events.find(event => event.id === eventId);
        if (!selectedEvent) return;

        // let backGroundImage = `background-image: url('${clickedEvent.image}');`;
        // document.querySelector('#selected-event').setAttribute('style', `${backGroundImage}`);
        document.querySelector('#selected-event-title').textContent = selectedEvent.title;
        document.querySelector('#selected-event-date').textContent = selectedEvent.date;
        document.querySelector('#selected-event-price').textContent = selectedEvent.price;
        document.querySelector('#selected-event-age').textContent = selectedEvent.age;
    }
    const eventId = parseInt(sessionStorage.getItem('selectedEventId'), 10);
    showSelectedEvent(eventId);
})