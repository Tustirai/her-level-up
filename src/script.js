function getAffirmation() {
	const affirmations = [
		"I am in control of my life.",
		"I have all the power in me to create a life I love.",
		"I face the day with energy and courage.",
		"My mind is clear, strong, and focused.",
		"I have enough, I do enough, and I am enough.",
		"I appreciate every moment of the day.",
		"I embrace the potential and possibilities of today.",
		"I am learning and growing every day.",
		"Everything that is happening now is happening in my ultimate favor.",
		"I deserve the good things that happen in my life.",
		"I am beautiful and strong.",
		"Whatever I do, I choose to do it with love and joy.",
		"I am grateful for all the love and abundance in my life.",
		"I am confident in my abilities and can achieve anything I set my mind to.",
		"I am surrounded by love and support.",
		"I am worthy of success and happiness.",
		"I am capable of overcoming any challenges that come my way.",
		"I am a magnet for positive opportunities and experiences.",
		"I am proud of myself and all that I have accomplished.",
		"I am creating a life filled with love, joy, and abundance.",
		"I am grateful for the lessons I have learned and the growth I have experienced.",
		"I am confident in my ability to handle whatever comes my way.",
		"I am worthy of love and respect.",
		"I am open to receiving all the good that the universe has to offer.",
		"I am a source of inspiration and positivity for others.",
		"I am grateful for the opportunities that come my way.",
		"I am deserving of love, happiness, and success.",
		"I am capable of achieving my goals and dreams.",
		"I am excited about the future and all the possibilities it holds.",
		"I am worthy of self-care and self-love.",
		"I am strong and resilient.",
		"I am beautiful inside and out.",
		"I am intelligent and capable of learning new things.",
		"I am worthy of forgiveness and compassion.",
		"I am deserving of respect and kindness.",
		"I am capable of overcoming any obstacle.",
		"I am worthy of taking up space and being heard.",
		"I am confident in my unique talents and abilities.",
		"I am deserving of rest and relaxation.",
		"I am worthy of living a fulfilling and happy life.",
	];

	let randomIndices = [];
	while (randomIndices.length < 5) {
		let randomIndex = Math.floor(Math.random() * affirmations.length);
		if (!randomIndices.includes(randomIndex)) {
			randomIndices.push(randomIndex);
		}
	}

	let affirmationsList = "";
	randomIndices.forEach((index) => {
		affirmationsList += `<li class="listOfAffirm">${affirmations[index]}</li>`;
	});

	document.querySelector("#newAffirmation").innerHTML = affirmationsList;
}

function showChallenge(day) {
	let challengeDay = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	if (day < 1 || day > 21) {
		day = 1; // set to day 1 if outside the range of 1 to 21
	}
	window.location.href = "day" + day + ".html"; // redirect to the appropriate HTML file
	document.querySelector("#challengeDay").innerHTML = `Day: ${
		challengeDay[day - 1]
	}`;
}

function getCheckList() {
	var dailyTask = document.getElementById("dailyToDo");

	// Insert the HTML content
	dailyTask.innerHTML = `
  <fieldset>
    <div class="checklist">
      <input type="checkbox" id="devotion" name="devotion" />
      <label for="devotion">Read a devotion</label>
    </div>
    <div class="checklist">
      <input type="checkbox" id="affirmations" name="affirmations" />
      <label for="affirmations">Speak affirmations</label>
    </div>
	 <div class="checklist">
      <input type="checkbox" id="journal" name="journal" />
      <label for="journal">Journal</label>
    </div>
	<div class="checklist">
      <input type="checkbox" id="water" name="water" />
      <label for="water">Drink 1.5 Litres of water</label>
    </div>
	  <div class="checklist">
      <input type="checkbox" id="workout" name="workout" />
      <label for="workout">Workout</label>
    </div>
    <div class="checklist">
      <input type="checkbox" id="selfcare" name="selfcare" />
      <label for="selfcare">Apply make up (or skincare)</label>
    </div>
    
   
  </fieldset>
  <div class="hero-overlay"></div>
`;
}

const tweetButton = document.getElementById("tweetThisAffirm");

tweetButton.addEventListener("click", () => {
	const affirmation = document.getElementById("newAffirmation").textContent;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
		affirmation + " #HerLevelUp"
	)}`;
	window.open(twitterUrl, "_blank");
});

const shareButton = document.getElementById("whatsappThisAffirm");

shareButton.addEventListener("click", () => {
	const affirmation = document.getElementById("newAffirmation").textContent;
	const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
		affirmation + " #HerLevelUp"
	)}`;
	window.open(whatsappUrl, "_blank");
});

const heartIcon = document.getElementById("heartIcon");

heartIcon.addEventListener("click", () => {
	heartIcon.classList.add("jump", "color-change");
	setTimeout(() => {
		heartIcon.classList.remove("jump", "color-change");
	}, 500);
});

getCheckList();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const allChecked = () => {
	for (let i = 0; i < checkboxes.length; i++) {
		if (!checkboxes[i].checked) {
			return false;
		}
	}
	return true;
};
checkboxes.forEach((checkbox) => {
	checkbox.addEventListener("click", () => {
		if (allChecked()) {
			alert("Well done! You did that!");
		}
	});
});
const images = [
	"src/images/woman-8396545.jpg",
	"src/images/woman-8394959.jpg",
	"src/images/woman-8394963.jpg",
	"src/images/woman-8394964.jpg",
	"src/images/woman-8394965.jpg",
	"src/images/woman-8396543.jpg",
	"src/images/woman-8396544.jpg",
	"src/images/woman-8396545.jpg",
	"src/images/woman-8396547.jpg",
	"src/images/woman-8396552.jpg",
];
const randomIndex = Math.floor(Math.random() * images.length);
const img = document.querySelector("#butterflyImg");
img.src = images[randomIndex];

getAffirmation();
