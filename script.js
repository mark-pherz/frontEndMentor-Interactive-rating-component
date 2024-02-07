const ratingButtons = document.querySelectorAll(".buttons-section button");
let rating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const isSelected = this.classList.contains("button-selected");
    ratingButtons.forEach((btn) => btn.classList.remove("button-selected"));
    if (isSelected) {
      rating = null;
    } else {
      this.classList.add("button-selected");
      rating = this.textContent;
    }
    console.log("Selected rating:", rating);
  });
});

document.getElementById("submit").addEventListener("click", function () {
  if (!rating) return;

  const card = document.getElementById("card");
  clearCardAndSetAlignment(card);

  const newImage = createImage(
    "./images/illustration-thank-you.svg",
    "thanks",
    "160px"
  );
  const newRating = createRatingElement(rating);
  const newHeader = createElementWithText("h1", "Thank you!");
  const newParagraph = createParagraph();

  card.appendChild(newImage);
  card.appendChild(newRating);
  card.appendChild(newHeader);
  card.appendChild(newParagraph);
});

function clearCardAndSetAlignment(card) {
  card.innerHTML = "";
  card.style.alignItems = "center";
}

function createImage(src, alt, width) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.style.width = width;
  return image;
}

function createRatingElement(rating) {
  const ratingElement = document.createElement("p");
  ratingElement.innerText = `You selected ${rating} out of 5`;
  ratingElement.className = "new-rating"; // Apply CSS class
  ratingElement.style.color = "hsl(25, 97%, 53%)";
  return ratingElement;
}

function createElementWithText(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

function createParagraph() {
  const paragraph = createElementWithText(
    "p",
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
  );
  paragraph.className = "new-paragraph"; // Apply CSS class
  return paragraph;
}
