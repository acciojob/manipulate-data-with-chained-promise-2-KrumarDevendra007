//your JS code here. If required.
const output = document.getElementById("output");
const arr = [1, 2, 3, 4];
const odd = []
const mult = []

function getData(){
	return new Promise((resolve, reject) => {
		setTime(() => {
			resolve([1,2,3,4]);
		}, 3000);
	});	
}

getData()
	.then((numbers) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const evenNumbers = numbers.filter((num) => num % 2 === 0);
				output.textContent = evenNumbers.join(", ");
				resolve(evenNumbers);
			}, 1000);
		});
	})
	.then((evenNumbers) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const multipliedNumbers = evenNumbers.filter((num) => num * 2)
				output.textContent = multipliedNumbers.join(", ");
				resolve(multipliedNumbers);
			}, 2000);
		});
	})
	.catch((error) => consloe.eror(error));




