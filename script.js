const quotes = [
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function startTest() {
    const quoteElement = document.getElementById("quote");
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");

    // Reset result and input field
    resultElement.innerHTML = "";
    inputElement.value = "";

    // Get a random quote
    const quote = getRandomQuote();
    quoteElement.innerHTML = quote;

    // Focus on input field
    inputElement.focus();

    // Start time
    const startTime = new Date().getTime();

    // Listen for input changes
    inputElement.addEventListener("input", checkInput);

    function checkInput() {
        const inputText = inputElement.value;
        if (inputText === quote) {
            // End time
            const endTime = new Date().getTime();
            // Calculate time in seconds
            const totalTime = (endTime - startTime) / 1000;

            // Calculate words per minute (WPM)
            const words = inputText.trim().split(" ").length;
            const wpm = Math.round(words / (totalTime / 60));

            // Display result
            resultElement.innerHTML = `Your WPM: ${wpm}`;

            // Remove input listener
            inputElement.removeEventListener("input", checkInput);
        }
    }
}
