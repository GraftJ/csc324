const things = [
    "Failure will never overtake me if my determination to succeed is strong enough.\n~ Og Mandino",
    "It always seems impossible until it is done.\n~Nelson Mandela",
    "It does not matter how slow you go as long as you do not stop.\n~Confucius",
    "If you can dream it, you can do it.\n~Walt Disney",
    "The secret to getting ahead is getting started.\n~Mark Twain",
    "Quality is not an act, it is a habit.\n~Aristotle"
];

window.addEventListener("load", deliverThings);

function deliverThings() {
    const randomeNumber = Math.floor(things.length * Math.random());
    const thingsDiv = document.querySelector("#random-content");
    thingsDiv.innerHTML = things[randomeNumber];
}