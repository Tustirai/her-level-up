function getAffirmation(response) {
    let affirmations = {
        1: "I am in control of my life.",
        2: "I have all the power in me to create a life I love.",
        3: "I face the day with energy and courage.",
        4: "My mind is clear, strong, and focused.",
        5: "I have enough, I do enough, and I am enough.",
        6: "I appreciate every moment of the day.",
        7: "I embrace the potential and possibilities of today.",
        8: "I am learning and growing every day.",
        9: "Everything that is happening now is happening in my ultimate favor.",
        10: "I deserve the good things that happen in my life.",
        11: "I am beautiful and strong.",
        12: "Whatever I do, I choose to do it with love and joy.",
        13: "I am grateful for all the love and abundance in my life.",
        14: "I am confident in my abilities and can achieve anything I set my mind to.",
        15: "I am surrounded by love and support.",
        16: "I am worthy of success and happiness.",
        17: "I am capable of overcoming any challenges that come my way.",
        18: "I am a magnet for positive opportunities and experiences.",
        19: "I am proud of myself and all that I have accomplished.",
        20: "I am creating a life filled with love, joy, and abundance.",
        21: "I am grateful for the lessons I have learned and the growth I have experienced.",
        22: "I am confident in my ability to handle whatever comes my way.",
        23: "I am worthy of love and respect.",
        24: "I am open to receiving all the good that the universe has to offer.",
        25: "I am a source of inspiration and positivity for others.",
        26: "I am grateful for the opportunities that come my way.",
        27: "I am deserving of love, happiness, and success.",
        28: "I am capable of achieving my goals and dreams.",
        29: "I am grateful for the abundance in my life.",
        30: "I am excited about the future and all the possibilities it holds.",
        31: "I am worthy of love and respect, and I treat myself with kindness and compassion.",
    };

    let challengeDay = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];

    let currentDay = new Date().getDate(); // Get the current day of the month

    document.querySelector("h1").innerHTML =
        affirmations[challengeDay[currentDay]];
    return affirmations[challengeDay[currentDay]]; // Return the affirmation for the current day
}
getAffirmation();

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
