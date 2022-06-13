// Write code to return the the number of vowels in `str`

const vowelCount = function (str) {
	const vowelsArr = [];
	const allcaps = str.toUpperCase();
	console.log(allcaps);

	for (let i = 0; i < allcaps.length; i++) {
		if (
			allcaps[i] == "A" ||
			allcaps[i] == "E" ||
			allcaps[i] == "I" ||
			allcaps[i] == "O" ||
			allcaps[i] == "U"
		) {
			console.log("vowel found  ", allcaps[i]);
			vowelsArr.push(allcaps[i]);
			console.log("vowel added", vowelsArr);
		} else {
			console.log(allcaps[i]);
		}
	}

	console.log(vowelsArr);
	console.log(vowelsArr.length);
	return vowelsArr.length;
};

vowelCount();
