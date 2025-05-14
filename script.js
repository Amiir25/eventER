// Script for eventER website

// Display events
function renderEvents() {
    const eventsList = document.querySelector('.events-list');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.setAttribute('class', 'max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5 bg-cyan-100')
        eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="w-full"/>
        <div class="px-6 py-4">
            <p class="event-title font-bold text-xl mb-2">${event.title}</p>
            <button
                class="book-now mb-2 text-sm border border-gray-500 px-5 py-2 rounded-md hover:bg-cyan-200 hover:text-gray-800"
                onclick="showEventDetails(${event.id})">
                Learn More
            </button>
        </div>
    `
        eventsList.appendChild(eventCard);
    });
}

renderEvents();

// Show event details
function showEventDetails(id) {
    const clickedEvent = events.find(event => event.id === id);
    if (!clickedEvent) return;

    // Title
    document.querySelector('#event-title').textContent = clickedEvent.title;
    // Description
    document.querySelector('#event-description').textContent = clickedEvent.description;
    // Date
    document.querySelector('#event-date').textContent = clickedEvent.date;
    // datetime attribute
    document.querySelector('#event-date').setAttribute('datetime', `${clickedEvent.datetime}`);
    // Address
    document.querySelector('#event-address').textContent = clickedEvent.address;
    // Price
    document.querySelector('#event-price').textContent = clickedEvent.price;
    // Available Spots
    checkAvailableSpots(clickedEvent);
    // Reamining Days
    checkRemainingDays(clickedEvent);
    // Age
    checkAge(clickedEvent);

    // Event detail
    let bgImage = `background-image: url('${clickedEvent.image}');`;
    document.querySelector('#event-detail').setAttribute('style', `${bgImage}`);
    document.querySelector('#event-detail').classList.add('bg-cover', 'bg-center');
    document.querySelector('#event-detail').classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    document.querySelector('#event-detail').classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    document.querySelector('#overlay').classList.remove('hidden');
}

// Color customisation
let remainingDaysColor = ''; // Color for remaining days
let ageColor = ''; // Color for age
let availableSpots = ''; // Color for available spots

// Check remaining days to customise text and color
function checkRemainingDays(clickedEvent) {
    let remainingDays = '';

    // Remaining days
    if (clickedEvent.remainingdays === 0) {
        remainingDays = 'Today'
    } else if (clickedEvent.remainingdays === 1) {
        remainingDays = 'Tomorrow';
    } else if (clickedEvent.remainingdays === 2) {
        remainingDays = 'In 2 days';
    } else if (clickedEvent.remainingdays === 3) {
        remainingDays = 'In 3 days';
    } else if (clickedEvent.remainingdays >= 2 && clickedEvent.remainingdays <= 6) {
        remainingDays = 'This week';
    } else if (clickedEvent.remainingdays >= 7 && clickedEvent.remainingdays <= 13) {
        remainingDays = 'Next week';
    } else if (clickedEvent.remainingdays >= 14 && clickedEvent.remainingdays <= 20) {
        remainingDays = 'In 3 weeks';
    } else if (clickedEvent.remainingdays >= 21 && clickedEvent.remainingdays <= 29) {
        remainingDays = 'In 4 weeks';
    } else if (clickedEvent.remainingdays >= 30) {
        remainingDays = 'In 1 month';
    }


    // Color
    if (clickedEvent.remainingdays === 0 || clickedEvent.remainingdays === 1) {
        remainingDaysColor = 'text-red-500';
    } else if (clickedEvent.remainingdays >= 2 && clickedEvent.remainingdays <= 6) {
        remainingDaysColor = 'text-yellow-400';
    } else if (clickedEvent.remainingdays >= 7) {
        remainingDaysColor = 'text-green-400';
    }

    document.querySelector('#event-remaining-days').textContent = remainingDays;
    document.querySelector('#event-remaining-days').classList.add(`${remainingDaysColor}`);
}

// Check Age to customise color
function checkAge(clickedEvent) {
    if (clickedEvent.age >= 0 && clickedEvent.age <= 10) {
        ageColor = 'text-green-400';
    } else if (clickedEvent.age >= 11 && clickedEvent.age <= 17) {
        ageColor = 'text-yellow-400';
    } else if (clickedEvent.age >= 18) {
        ageColor = 'text-red-500';
    }

    if (clickedEvent.age === 0) {
        document.querySelector('#event-age').textContent = 'All';
    } else {
        document.querySelector('#event-age').textContent = `${clickedEvent.age}+`;
    }

    document.querySelector('#event-age').classList.add(`${ageColor}`);
}

// Check available spots and customise color
function checkAvailableSpots(clickedEvent) {
    if (clickedEvent.spots >= 50) {
        availableSpots = 'text-green-400';
    } else if (clickedEvent.spots >= 11 && clickedEvent.spots <= 49) {
        availableSpots = 'text-yellow-400';
    } else if (clickedEvent.spots >= 0 && clickedEvent.spots <= 10) {
        availableSpots = 'text-red-500';
    }

    document.querySelector('#event-spots').textContent = clickedEvent.spots;
    document.querySelector('#event-spots').classList.add(`${availableSpots}`);
    if (clickedEvent.spotplus) {
        document.querySelector('#event-spots-plus').textContent = clickedEvent.spotplus;
    }
}

// Close event detail
function closeEventDetail() {
    // Close event detail by icon
    document.querySelector('#close-event-detail').addEventListener('click', function () {
        document.querySelector('#event-detail').classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        document.querySelector('#event-detail').classList.add('opacity-0', 'scale-95', 'pointer-events-none');
        document.querySelector('#overlay').classList.add('hidden');

        // Remove custome colors from remaining days
        document.querySelector('#event-remaining-days').classList.remove(`${remainingDaysColor}`);
        // Remove custome colors from ages
        document.querySelector('#event-age').classList.remove(`${ageColor}`);
        // Remove custome colors from available spots
        document.querySelector('#event-spots').classList.remove(`${availableSpots}`);
        // Free up the event-spots-plus section
        document.querySelector('#event-spots-plus').textContent = '';



    })

    // Close event detail by overlay
    document.querySelector('#overlay').addEventListener('click', function () {
        document.querySelector('#event-detail').classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        document.querySelector('#event-detail').classList.add('opacity-0', 'scale-95', 'pointer-events-none');
        document.querySelector('#overlay').classList.add('hidden');

        // Remove custome colors from remaining days
        document.querySelector('#event-remaining-days').classList.remove(`${remainingDaysColor}`);
        // Remove custome colors from ages
        document.querySelector('#event-age').classList.remove(`${ageColor}`);
        // Remove custome colors from available spots
        document.querySelector('#event-spots').classList.remove(`${availableSpots}`);
        // Free up the event-spots-plus section
        document.querySelector('#event-spots-plus').textContent = '';
    })
}

closeEventDetail();