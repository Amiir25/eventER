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

    // Image
    document.querySelector('#event-image').setAttribute('src', `${clickedEvent.image}`);
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
    // Spots
    document.querySelector('#event-spots').textContent = clickedEvent.spots;
    // Reamining Days
    checkRemainingDays(clickedEvent);
    // Age Color
    checkAge(clickedEvent);

    // Event detail
    document.querySelector('#event-detail').classList.remove('hidden');
}

// Check remaining days to customise text and color
function checkRemainingDays(clickedEvent) {

    let remainingDays = '';
    let colorValue = '';

    // Remaining days
    if (clickedEvent.remainingdays === 0) {
        remainingDays = 'Today'
    } else if (clickedEvent.remainingdays === 1) {
        remainingDays = 'Tomorrow';
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
        colorValue = 'text-red-500';
    } else if (clickedEvent.remainingdays >= 2 && clickedEvent.remainingdays <= 6) {
        colorValue = 'text-yellow-500';
    } else if (clickedEvent.remainingdays >= 7) {
        colorValue = 'text-green-500';
    }

    document.querySelector('#event-remaining-days').textContent = remainingDays;
    document.querySelector('#event-remaining-days').classList.add(`${colorValue}`);
}

// Check Age to customise color
function checkAge(clickedEvent) {
    let ageColor = '';

    if (clickedEvent.age >= 0 && clickedEvent.age <= 10) {
        ageColor = 'text-green-500';
    } else if (clickedEvent.age >= 11 && clickedEvent.age <= 17) {
        ageColor = 'text-yellow-500';
    } else if (clickedEvent.age >= 18) {
        ageColor = 'text-red-500';
    }

    document.querySelector('#event-age').textContent = `${clickedEvent.age}+`;
    document.querySelector('#event-age').classList.add(`${ageColor}`);
}