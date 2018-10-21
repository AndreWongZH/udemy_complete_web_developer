const array = [1, 2, 10, 16];
const double = []

const newArray = array.forEach((num) => {
	double.push(num + 2);
})

//map
const mapArray = array.map((num) => {
	return num + 2;
})

//filter
console.log(mapArray);

const filterArray = array.filter(num => {
	return num > 5;
})

//reduce
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)