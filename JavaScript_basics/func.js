// * 1) function declaration
// ! доступны в любом месте кода

function sayHello(firstName, lastName) {
	return `Hello, ${firstName + " " + lastName}!`;
}

let res = sayHello("Artur", "Apanasov");
console.log(res);

const currentUser = {
	firstName: "Artur",
	lastName: "Apanasov",
	age: 34,
};

function getUser(userObj) {
	console.table(userObj);
}

getUser(currentUser);

// * 2) function expression
// ! нельзя вызвать до объявления функции

const square = function (x) {
	return x * x;
};
