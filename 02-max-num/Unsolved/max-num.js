// Write code to return the largest number in the given array

const maxNum = function (arr) {
	let largest = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= largest) {
			largest = arr[i];
			console.log(largest);
		} else {
			console.log(largest);
		}
	}
	console.log(largest);
	return largest;
};

maxNum();
