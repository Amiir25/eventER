document.addEventListener('DOMContentLoaded', function () {
    // alert('On the door')
    function showSelectedEvent(eventId) {
        let selectedEvent = events.find(event => event.id === eventId);
        if (!selectedEvent) return;

        document.querySelector('#selected-event-wrapper').setAttribute('style', `background-image: url('${selectedEvent.image}');`);
        document.querySelector('#selected-event-wrapper').classList.add('bg-cover', 'bg-center', 'bg-no-repeat');
        document.querySelector('#selected-event-title').textContent = selectedEvent.title;
        document.querySelector('#selected-event-date').textContent = selectedEvent.date;
        document.querySelector('#selected-event-price').textContent = selectedEvent.price;

        // Age
        document.querySelector('#selected-event-age').textContent = `${selectedEvent.age}+`;
        const ageColor = sessionStorage.getItem('ageColor');
        document.querySelector('#selected-event-age').classList.add(`${ageColor}`);

    }
    const eventId = parseInt(sessionStorage.getItem('selectedEventId'), 10);
    showSelectedEvent(eventId);
})