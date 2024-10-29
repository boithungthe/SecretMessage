document.getElementById("tellFortuneButton").addEventListener("click", tellFortune);

function tellFortune() {
const nameText = document.getElementById('nameText').value;
 if (nameText) {
        // Redirect to results page
        window.location.href = `result.html?name=${encodeURIComponent(nameText)}`;
    } else {
        alert("Please enter your name!");

    const messages = [
        "Your soulmate is from Paris, France.",
        "Look for love in Tokyo, Japan.",
        "Your true love hails from Rome, Italy.",
        "Find your soulmate in Sydney, Australia.",
        "Your partner is waiting for you in New York, USA."
    ];
    const randomMessage = nameText + ", " + messages[Math.floor(Math.random() * messages.length)];

    // Redirect to the results page with the fortune as a query parameter
    window.location.href = "result.html?fortune=" + encodeURIComponent(randomMessage);
    }
}
