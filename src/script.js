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

	let challengeDay = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	let currentDay = new Date().getDate();

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

	document.querySelector("h1").innerHTML = affirmationsList;
	document.querySelector(
		"#challengeDay"
	).innerHTML = `Day: ${challengeDay[currentDay]}`;
}

getAffirmation();

function getDevotion() {
	let DevotionArray = [
		"As daughters of the Almighty, we have access to His grace and blessings every day, even in the midst of difficult circumstances. His love is so full, and His grace so boundless, that even the smallest blessings can feel like a gift from Him. As John 1:16 (NASB) says, 'For of His fullness we have all received, and grace upon grace.' When we recognize the abundance of God's grace in our lives, we can experience joy, peace, and hope. We can trust in His promises and know that He is with us always. As we give thanks for His grace and blessings, we can cultivate a spirit of gratitude and contentment, So, if you are feeling overwhelmed or discouraged, take a moment to reflect on the abundance of God's grace in your life. Give thanks for the blessings, both big and small, that He has given you. Trust in His promises and know that He is with you always. Cultivate a spirit of gratitude and contentment, and allow His grace to fill your heart and soul.",
		"As humans, we all make mistakes and have sinned at some point in our lives. It can be challenging to admit our mistakes and take ownership of our sins, but it is necessary for our spiritual growth and well-being. As 1 John 1:8-10 (NIV) says, 'If we claim to be without sin, we deceive ourselves and the truth is not in us. If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. If we claim we have not sinned, we make him out to be a liar and his word is not in us.' When we confess our sins and take ownership of our mistakes, we can experience the freedom and forgiveness that comes from God. We can also grow in our relationship with Him and become more like Christ. As we seek to follow Jesus, we should ask Him to show us any sin we are denying or are unaware of, so we can confess it and be set free. So, if you are struggling with sin or have made a mistake, remember that God is faithful and just to forgive us when we confess our sins. Don't be afraid to take ownership of your mistakes and ask for forgiveness. As you do so, you can experience the freedom and forgiveness that comes from God, and grow in your relationship with Him.",
		"As we go through life, we are faced with many decisions, both big and small. It can be overwhelming to make the right choice, but we must remember that God promises to guide us in the right direction. Isaiah 30:21 says, 'Your ears shall hear a word behind you, saying, 'This is the way, walk in it,' Whenever you turn to the right hand or whenever you turn to the left'. We must learn to seek God's guidance in our decision-making process. Here are some ways to seek God's guidance: Pray: Take time to pray and ask God for guidance in your decision-making process. He will guide you and give you the wisdom to make the right choice. Read Scripture: Reading and meditating on Scripture can help us understand God's will for our lives and guide us in our decision-making process. Listen to God's Voice: God speaks to us in many ways, including through His Word, through prayer, and through the counsel of others. We must learn to listen to His voice and follow His guidance. Trust in God: Trust in God's plan for your life and have faith that He will guide you in the right direction.",
		"As we go through life, we may feel like we have stopped growing, whether it be physically or emotionally. However, as Christians, we are called to continue growing in our faith and in our relationship with God. Philippians 1:6 says, 'And I am certain that God, who began the good work within you, will continue his work until it is finally finished on the day when Christ Jesus returns.' We must remember that God has begun a good work in us and will continue to work in us until the day of Christ's return. Here are some ways to continue growing in our faith: Pray: Take time to pray and ask God to help you grow in your faith and relationship with Him. He will guide you and give you the strength to overcome any obstacles that come your way. Read Scripture: Reading and meditating on Scripture can help us grow in our faith and understanding of God's plan for our lives. II Timothy 3:16-17 teaches us that all Scripture is inspired by God and is useful for teaching, rebuking, correcting, and training in righteousness. Attend Church: Attending church and being part of a community of believers can help us grow in our faith and encourage us to continue our journey with God. Serve Others: Serving others can help us grow in our faith and understanding of God's love for us. Galatians 5:13 says, 'For you have been called to live in freedom, my brothers and sisters. But don't use your freedom to satisfy your sinful nature. Instead, use your freedom to serve one another in love.' ",
		"As we go through life, we may feel the need to prove ourselves to others, to make ourselves more lovable. However, we must remember that our heavenly Father's love for us is boundless and unconditional. Romans 8:35-39 says, 'Can anything ever separate us from Christ's love? Does it mean he no longer loves us if we have trouble or calamity, or are persecuted, or hungry, or destitute, or in danger, or threatened with death? No, despite all these things, overwhelming victory is ours through Christ, who loved us. And I am convinced that nothing can ever separate us from God's love. Neither death nor life, neither angels nor demons, neither our fears for today nor our worries about tomorrow—not even the powers of hell can separate us from God's love. No power in the sky above or in the earth below—indeed, nothing in all creation will ever be able to separate us from the love of God that is revealed in Christ Jesus our Lord.' We don't need to prove ourselves to anyone, for we are already perfectly loved by our Father in heaven. Spend some time thanking Him for His great love and rest in the assurance that nothing can ever separate us from His love.",
		"As we go through life, we often look for things that we can trust and have longevity. We may place our faith in material possessions or relationships, but these things are temporary and will not last forever. However, when we consider what God has made, we can see His faithfulness and trustworthiness. As Psalm 119:90 (TPT) says, 'Your faithfulness flows from one generation to the next; all that you have created sits firmly in place to testify of you.' Through every storm, disaster, war, and attack of the enemy, our earth stands as a testament to God's faithfulness. As we ponder all that God has made and done, we can share our hearts with Him regarding His faithfulness. We can trust in His promises and know that He will never leave us nor forsake us. So, if you are feeling troubled or uncertain, remember that God is faithful and trustworthy. He has been faithful throughout history, and He will continue to be faithful in the future. Share your heart with Him, and allow Him to comfort and guide you through every season of life. Remember that His love endures forever, and His faithfulness continues through all generations.",
		"As women, we have the power to speak life or death with our words. The words we choose to say, or not say, can have a significant impact on those around us. As James 3:3-5 (NIV) says, 'Likewise, the tongue is a small part of the body, but it makes great boasts. Consider what a great forest is set on fire by a small spark.' We must be mindful of the words we speak and the impact they have on others. Our words can either build others up or tear them down. As Proverbs 16:24 (NIV) says, 'Gracious words are a honeycomb, sweet to the soul and healing to the bones.' Let us ask God to help us speak words of life and encouragement to those around us. Let us also be quick to ask for forgiveness when we speak words that hurt others. May our words be a reflection of the love and grace of Jesus Christ, who spoke words of life and healing to all who came to Him.",
		"As you look in the mirror or reflect on your day, it can be easy to forget or disbelieve that you are perfect. However, the Father sees you as perfect, and that is how He wants you to see yourself. Despite any perceived imperfections, the Bible tells us that we are complete and perfect in Christ, who died for our sins. Hebrews 10:14 (ESV) says, 'For by a single offering he has perfected for all time those who are being sanctified.' This means that when Jesus chose to die on the cross for our sins, He took away every flaw from those of us who love Him and made us perfect. So, if you are struggling to see yourself as perfect, take a moment to ask God to show you what He sees when He looks at you. Look past any perceived imperfections and see yourself complete, just as you were meant to be. Remember that you are a beautiful creation of God, fearfully and wonderfully made.",
		"Being loved deeply by someone is a wonderful feeling that we all desire. However, the love that we have given or received is just a mere sampling of the way Jesus feels about us. We are cherished and loved beyond reason or measure by the one who can move heaven and earth. As Romans 8:38-39 (NIV) says, 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.' God's love for us is unconditional and unchanging, and it is not based on our performance or worthiness. We are loved simply because we are His children. As we walk through life, we should seek to internalize and live from our identity as God's beloved. We should also share this truth with those around us, inviting them to experience the same love and acceptance that we have found in Christ. So, remember that you are cherished and loved beyond measure by the one who can move heaven and earth. Allow the incredible words of Romans 8:38-39 to wash over you and know that there is nothing that can separate you from the love of God. Live from your approval in Christ and walk confidently in the knowledge that you are deeply loved and cherished by the Creator of the universe.",
		"Forgiveness is a powerful tool that can help us let go of grudges and bitterness. It's natural to feel angry and hurt when someone has wronged us, but holding onto those feelings can harm our mental health and well-being. Forgiveness is about choosing to let go of those negative emotions and moving forward. Psalm 56:3-4 reminds us that we can give our fears and worries to God and trust in Him with all our heart. When we choose to forgive others, we are also choosing to trust in God's promises and His ability to heal our wounds. Forgiveness is not always easy, but it is essential for our own well-being and spiritual growth. It can be a long and ongoing process, but it starts with a decision to let go of bitterness and resentment. As we choose to forgive, we can experience freedom, peace, and joy. So, if you are struggling to forgive someone who has hurt you, remember that forgiveness is a gift to yourself. It is a way to let go of the past and move forward with hope and healing. Talk to God about your struggles and ask Him to help you let go of bitterness and embrace forgiveness.",
		"Hope is more than just a desire for something good to happen; it is a strong belief that it will happen. When we put our hope in Christ, we have a reason to believe that good things will happen. As Romans 15:13 (NIV) says, 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' When we have hope in Christ, we can experience joy, peace, and expectancy. We can trust in His promises and know that He is faithful to fulfil them. As we walk through life, we should seek to cultivate a spirit of hope and trust in God's goodness and faithfulness. We should also share this hope with those around us, inviting them to experience the same joy and peace that we have found in Christ. So, if you are feeling discouraged or uncertain, remember that God is the God of hope, and He desires to fill you with joy and peace as you trust in Him. Allow the Holy Spirit to fill you with hope, and believe that good things will happen. As you walk through life, trust in God's promises and know that He is faithful to fulfil them. Cultivate a spirit of hope, and share this hope with those around you, inviting them to experience the same joy and peace that you have found in Christ.",
		"In life, we often find ourselves waiting for the perfect conditions to start something new or to take action. However, Ecclesiastes 11:4 reminds us that those who wait for perfect weather will never plant seeds; those who look at every cloud will never harvest crops. We must learn to take action and not wait for ideal circumstances. Here are some ways to take action and move forward: - Start Now: Don't wait for the perfect moment to start something new. Start now and take small steps towards your goal. Waiting for the perfect moment may cause you to miss out on opportunities. - Embrace Imperfection: Don't wait for everything to be perfect before taking action. Embrace imperfection and learn from your mistakes. It's better to take action and learn from your mistakes than to wait for everything to be perfect. - Trust in God: Trust in God's plan for your life and take action towards your goals. He will guide you and give you the strength to overcome any obstacles that come your way. - Take Risks: Life has a certain amount of risk, and we must be willing to take risks to achieve our goals. Waiting for ideal circumstances may cause us to miss out on opportunities.",
		"Life is full of ups and downs, and it can be easy to lose sight of the beauty and joy around us. However, as Psalm 118:24 says, 'This is the day the Lord has made; let us rejoice and be glad in it.' no matter what season of life we are in, we can choose to rejoice and be glad in the day that the Lord has made. We can look for the treasures, celebrate the moments, and find the beauty in each day. As we do so, we can experience the joy and peace that comes from knowing that God is with us and that each day is a gift from Him.",
		"Our decisions matter, not just here on earth, but also in heaven. God is interested in the choices we make and has plans for our lives, but ultimately, we have the final say. As Joshua 24:14-15 (NLT) says, 'So fear the Lord and serve him wholeheartedly. Put away forever the idols your ancestors worshiped when they lived beyond the Euphrates River and in Egypt. Serve the Lord alone. But if you refuse to serve the Lord, then choose today whom you will serve…But as for me and my family, we will serve the Lord.' When we choose to serve the Lord, we are choosing well. Our choices have the potential to affect our trajectory and the lives of those around us. As we make decisions, we should seek to honour God and put Him at the centre of our hearts. We should also strive to do our work to the glory of God, allowing Him to shape us and our environments for His purposes. So, what choices will you make today? Will you choose to serve the Lord and honour Him in all that you do? Remember that our qualification comes from God, and He is more than capable of carrying out His plans through us. As Psalm 46:1 (NLT) says, 'God is our refuge and strength, always ready to help in times of trouble.' Choose well, and trust in God's guidance and strength.",
		"As we go through life, we may find ourselves feeling stuck in certain areas, whether it be professionally, personally, or in our prayer life. However, we can turn to God for strength and guidance to move forward. Psalm 28:7 says, 'The Lord is my strength and my shield; my heart trusts in Him, and He helps me.'",
		'The book of Job is a powerful reminder of the reality of suffering in our lives. Job\'s story teaches us that even in the midst of our pain, we can hold on to hope. Job\'s hope was not in his circumstances, but in the resurrection and the Redeemer. He knew that his Redeemer lived and that he would see him one day.\n\nAs believers, we have the same hope. We know that death has been conquered and that we will be resurrected and restored. This hope gives us the strength to endure the trials of life. It reminds us that our suffering is not in vain and that God is working all things together for our good. "For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God, whom I shall see for myself, and my eyes shall behold, and not another. My heart faints within me!" (Job 19:25-27, ESV).\n\nLet us hold on to this hope, even in the darkest moments of our lives. Let us trust in the Redeemer who has conquered death and given us the promise of eternal life. "At least there is hope for a tree:\nIf it is cut down, it will sprout again,\nand its new shoots will not fail.\nIts roots may grow old in the ground\nand its stump die in the soil,\nyet at the scent of water it will bud\nand put forth shoots like a plant.\nBut a man dies and is laid low;\nhe breathes his last and is no more” (Job 14: 7-10, Niv)."',
		"Psalm 56:3-4 expresses David's confidence and trust in God, particularly in times of fear and distress. The passage emphasizes the psalmist's decision to place his faith in God rather than allowing fear to overwhelm him. As Psalm 56:3-4 (TPT) says, \"In the day that I’m afraid, I lay all my fears before you and trust in you with all my heart. What harm could a man bring to me? With God on my side I will not be afraid of what comes.\" When we are afraid, we can give our situation to God and let Him take the fear away. We can trust in His promises and know that He is with us, even in the midst of our fears. As we lay our fears before Him, we can experience peace, hope, and joy. So, if you are feeling afraid or overwhelmed, remember that you can give your situation to God and trust in Him with all your heart. Lay your fears before Him, and allow Him to take the fear away. Remember that God is greater than any person or thing, and He is intimately with you in your emotional state. Trust in His promises, and know that He is with you always.",
		'There are times in our lives when we struggle to find peace and feel troubled. It can be challenging to find peace in this world because we are looking in the wrong place. However, Jesus left us with a gift of peace that is not of this world. As John 14:27 (NIV) says, "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid. "When we feel troubled, we have a choice. We can share our concerns with Jesus and remember that they have no hold on us. We can also choose to focus our hearts and minds on God, trusting that He has everything under contras we shift our attention to God, we can experience His peace, joy, and hope even in the midst of chaos. So, if you are struggling to find peace, remember that God has given us the gift of faith so that we may use it to recognize His works and not be in constant worry when we are surrounded by uncertainties. We can approach the throne of grace with confidence and receive mercy and grace to help us in our time of need. We can also choose to focus our hearts and minds on God, trusting that He has everything under control. As we do so, we can experience the peace that surpasses all understanding.',
		"There may be moments in our lives where we feel incompetent and unqualified, whether it's bringing a new baby home, giving a presentation, or trying something new. However, as we grow older, we realize that it's okay to admit our shortcomings and allow God to be our strength. We may not be capable, but God is more than qualified to carry out His plans through us. As 2 Corinthians 3:5 (NLT) says, \"It is not that we think we are qualified to do anything on our own. Our qualification comes from God.\" So, what dream or calling could you fulfil if you were to embrace God's competence as your own? Don't let feelings of inadequacy hold you back from pursuing what God has called you to do. Instead, trust in His strength and allow Him to work through you. Remember that God doesn't call the qualified, He qualifies the called. As you step out in faith, know that you are not alone and that God is with you every step of the way.",
		"Waiting is a necessary part of life, and it can be challenging to wait patiently for something we desire. However, waiting can also be an opportunity for growth and spiritual development. As Psalm 40:1 (TPT) says, 'I waited and waited and waited some more; patiently, knowing God would come through for me. Then, at last, he bent down and listened to my cry.' When we are waiting for something, we can turn to God for strength and guidance. We can trust in His promises and know that He is with us always. As we wait, we can also look for opportunities to serve, love, and lead others. So, if you are in a season of waiting, remember that God is with you and that He has a plan for your life. Take time to reflect on what you can learn and how you can grow during this time. Trust in His promises, and know that He will come through for you in His perfect timing.",
		"Walking with Jesus can sometimes feel like learning to walk in high heels. We may feel shaky and uncertain, prone to stumble at any moment, while others make it look easy. However, we can lean on the strong arm of the Savior and allow Him to steady us and direct our steps. As Psalm 119:133 (NIV) says, 'Direct my footsteps according to your word; let no sin rule over me.' God is interested in every detail of our lives, and He delights in the steps of the righteous. Though we may stumble, we will never fall, for the Lord holds us by the hand. As we walk with Jesus, we should seek to commit our ways to Him and trust in His guidance and strength. We should also share our confidence and concerns with Him, inviting Him to lead us in both. So, in which aspect of your walk do you feel the most steady and certain? The least? Take a moment to share your confidence and concerns with the Savior, and invite Him to lead you in both. Remember that God is in control of the life of the righteous, and He delights in our course of life. Trust in His guidance and strength, and allow Him to direct your steps.",
	];

	let challengeDay = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	let currentDay = new Date().getDate();

	let devotion = DevotionArray[challengeDay[currentDay]];
	document.querySelector("h3").innerHTML = devotion;
	document.querySelector(
		"#challengeDay"
	).innerHTML = `Day: ${challengeDay[currentDay]}`;

	return DevotionArray;
}

getDevotion();

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
