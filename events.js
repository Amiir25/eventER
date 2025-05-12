const events = [
    {
        "id": 1,
        "title": "Addis Tech Expo 2025",
        "description": "Explore the latest in Ethiopian startups, smart technologies, and digital innovation.",
        "date": "June 12, 2025",
        "datetime": "2025-06-12",
        "remainingdays": 30,
        "address": "Millennium Hall, Bole, Addis Ababa",
        "price": "250 ETB",
        "spots": 300,
        "age": 16,
        "image": "./img/tech-expo.webp"
    },
    {
        "id": 2,
        "title": "National Civil Service Reform Summit",
        "description": "A public forum to discuss Ethiopia’s ongoing civil service modernization and transparency goals.",
        "date": "May 19, 2025",
        "datetime": "2025-05-19",
        "remainingdays": 7,
        "address": "UNECA Conference Center, Menelik II Ave, Addis Ababa",
        "price": "Free",
        "spots": 300,
        "age": 18,
        "image": "./img/civil-service-reform.jpeg"
    },
    // {
    //     "id": 3,
    //     "title": "Children’s Storytelling & Puppet Show",
    //     "description": "Fun and interactive storytelling session with Ethiopian folk tales, puppets, and crafts.",
    //     "date": "May 14, 2025",
    //     "address": "Entoto Park Family Zone, Addis Ababa",
    //     "price": "60 ETB",
    //     "spots": 80,
    //     "age": "4+",
    //     "image": "./img/children-puppet-show.png"
    // },
    // More events...
];

/* Event - 1
<!-- Event 1 -->
            <div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
                <img class="w-full" src="images/tech-expo.webp" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <!-- Title -->
                    <div class="event-title font-bold text-xl mb-2">Addis Tech Expo 2025</div>
                    <!-- Description -->
                    <p class="event-disc text-gray-700 text-base">
                        Explore the latest in Ethiopian startups, smart technologies, and digital innovation.
                    </p>
                    <div class="py-4">
                        <!-- Date -->
                        <p class="mb-2">
                            <i class="fa-solid fa-clock pr-2"></i>
                            <time datetime="2025-07-12">July 12, 2025</time>
                            <span class="event-remian-day text-green-500 font-semibold ml-5"> In 1 months</span>
                        </p>
                        <!-- Address -->
                        <p class="mb-2">
                            <i class="fa-solid fa-location-dot mr-2"></i>
                            <span>Millennium Hall, Bole, Addis Ababa</span>
                        </p>
                        <!-- Price -->
                        <p class="mb-2">
                            <i class="fa-solid fa-money-check-dollar mr-2"></i>
                            <span class="event-price">250 ETB</span>
                        </p>
                        <!-- Available Spots -->
                        <p class="mb-2">
                            <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                            <span class="mr-2">👥</span>
                            <span>300</span>
                        </p>
                        <!-- Age -->
                        <p class="mb-2">
                            <span class="mr-2">🔞</span>
                            <span class="event-age text-yellow-500 font-semibold">14+</span>
                        </p>
                    </div>
                </div>
                <!-- Book Now -->
                <p class="text-center">
                    <button
                        class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100 hover:text-gray-800">
                        Book Now
                    </button>
                </p>
            </div> <!-- Event 1 -->
            */

/* Event - 2
< !--Event 2 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/civil-service-reform.jpeg" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">National Civil Service Reform Summit</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
            A public forum to discuss Ethiopia’s ongoing civil service modernization and transparency goals.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-19">May 19, 2025</time>
                <span class="event-remian-day text-green-500 font-semibold ml-5"> In 1 week</span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>UNECA Conference Center, Menelik II Ave, Addis Ababa</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">Free</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>300</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">18+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100 hover:text-gray-800">
            Book Now
        </button>
    </p>
</div> <!--Event 2 -- >
*/

/* Event - 3 
< !--Event 3 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/children-puppet-show.png" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Children’s Storytelling & Puppet Show</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
            Fun and interactive storytelling session with Ethiopian folk tales, puppets, and crafts.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-14">May 14, 2025</time>
                <span class="event-remian-day text-red-600 font-semibold ml-5"> Tomorrow </span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Entoto Park Family Zone, Addis Ababa</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">60 ETB</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>80</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-green-500 font-semibold">4+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 3 -- >
*/

/* Event - 4
 < !--Event 4 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/green-cities-dialog.jpg" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Arba Minch Green Cities Dialogue</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
            Government, NGO, and community leaders discuss urban sustainability and water conservation.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-26">May 26, 2025</time>
                <span class="event-remian-day text-green-500 font-semibold ml-5"> In 2 weeks</span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Haile Resort Conference Hall, Arba Minch</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">Free</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>120</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">18+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 4 -- >
*/

/* Event - 5
 < !--Event 5 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/coding-for-kids.webp" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Coding for Kids Bootcamp</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
             Introductory workshop in Scratch and robotics for kids aged 7–14.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-13">June 28, 2025</time>
                <span class="event-remian-day text-green-500 font-semibold ml-5"> In 1 month </span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>IceAddis Innovation Hub, Lideta</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">150 ETB</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>40</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">7 - 14</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 5 -- >
*/

/* Event - 6
 < !--Event 6 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/cultural-heritage-forum.webp" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Cultural Heritage Policy Forum</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
             Academics and policymakers gather to debate cultural preservation and access.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-16">May 16, 2025</time>
                <span class="event-remian-day text-yellow-600 font-semibold ml-5"> In 4 days </span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Institute of Ethiopian Studies, Sidist Kilo</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">120 ETB</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>100</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">18+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 6 -- >
*/

/* Event - 7
< !--Event 7 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/parenting-workshop.webp" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Parenting Skills Workshop</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
            A hands-on workshop for parents on positive discipline, communication, and emotional
            development.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-14">May 14, 2025</time>
                <span class="event-remian-day text-red-600 font-semibold ml-5"> In 2 days</span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Addis Ababa City Library, Arat Kilo</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">100 ETB</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>50</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">21+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100 hover:text-gray-800">
            Book Now
        </button>
    </p>
</div> <!--Event 7 -- >
*/

/* Event - 8
 < !--Event 8 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/agricultural-innovation.webp" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Agricultural Innovation Field Day</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
             On-site demo of new irrigation, crop health, and climate-smart techniques.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-18">May 18 , 2025</time>
                <span class="event-remian-day text-yellow-600 font-semibold ml-5"> In 6 days </span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Melkassa Agricultural Research Center, Adama</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">80 ETB</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>60</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-yellow-600 font-semibold">16+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 8 -- >
*/

/* Event - 9
 < !--Event 9 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/mental-health-seminar.webp" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Mental Health Awareness Seminar</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
             Doctors and advocates raise awareness on anxiety, depression, and mental resilience.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-05-12">May 12 , 2025</time>
                <span class="event-remian-day text-red-600 font-semibold ml-5"> Today </span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Tikur Anbessa Specialized Hospital Auditorium, Addis Ababa</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">Free</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>100</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">18+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 9 -- >
*/

/* Event - 10
 < !--Event 10 -- >
<div class="max-w-xs md:max-w-sm rounded overflow-hidden shadow-2xl m-auto mt-5">
    <img class="w-full" src="images/women-business-forum.png" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <!-- Title -->
        <div class="event-title font-bold text-xl mb-2">Women in Business Leadership Forum</div>
        <!-- Description -->
        <p class="event-disc text-gray-700 text-base">
             Connect with Ethiopia’s top women leaders in entrepreneurship and corporate innovation.
        </p>
        <div class="py-4">
            <!-- Date -->
            <p class="mb-2">
                <i class="fa-solid fa-clock pr-2"></i>
                <time datetime="2025-06-13">June 13 , 2025</time>
                <span class="event-remian-day text-green-600 font-semibold ml-5"> In 1 month </span>
            </p>
            <!-- Address -->
            <p class="mb-2">
                <i class="fa-solid fa-location-dot mr-2"></i>
                <span>Sheraton Addis Hotel, Addis Ababa</span>
            </p>
            <!-- Price -->
            <p class="mb-2">
                <i class="fa-solid fa-money-check-dollar mr-2"></i>
                <span class="event-price">300</span>
            </p>
            <!-- Available Spots -->
            <p class="mb-2">
                <!-- <i class="fa-solid fa-chair mr-2"></i> -->
                <span class="mr-2">👥</span>
                <span>200</span>
            </p>
            <!-- Age -->
            <p class="mb-2">
                <span class="mr-2">🔞</span>
                <span class="event-age text-red-600 font-semibold">18+</span>
            </p>
        </div>
    </div>
    <!-- Book Now -->
    <p class="text-center">
        <button
            class="book-now mb-2 text-lg border border-gray-500 px-10 py-3 rounded-md hover:bg-cyan-100">
            Book Now
        </button>
    </p>
</div> <!--Event 10 -- >
*/ 

