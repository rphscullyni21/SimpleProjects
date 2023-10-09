const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  const copyToNotepadBtn = document.getElementById("copyToNotepadBtn");

  function displayRandomQuote() {
    const { text, author } = getRandomQuote();
    quoteDisplay.innerHTML = `
        <blockquote>
          <p>${text}</p>
          <footer>${author}</footer>
        </blockquote>
      `;
  }

  function copyToNotepad() {
    const quoteText = quoteDisplay.querySelector("p").textContent;
    const quoteAuthor = quoteDisplay.querySelector("footer").textContent;
    const notepadContent = `"${quoteText}" - ${quoteAuthor}\n`;

    const dummyElement = document.createElement("textarea");
    dummyElement.value = notepadContent;
    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    alert("Quote copied to notepad!");
  }

  newQuoteBtn.addEventListener("click", displayRandomQuote);
  copyToNotepadBtn.addEventListener("click", copyToNotepad);

  displayRandomQuote(); // Display a random quote when the page loads
});
