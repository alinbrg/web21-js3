// 1. მოცემულია მასივი const numberArrays = [2, 4, 6, 8, 10, 12].   ლექციაზე გავლილი მეთოდების (pop, push, shift, unshift) დახმარებით  მასივის ბოლო ელემენტი გადმოიტანეთ მასივის დასაწყისში და  კონსოლში გამოიტანეთ მასივი. (ყველა მეთოდის გამოყენება არ დაგჭირდებათ და საბოლოოდ მასივი უნდა მიიღოთ ასეთი ფორმით [12, 2, 4, 6, 8, 10])
const numberArrays = [2, 4, 6, 8, 10];
const last = numberArrays.pop();
numberArrays.unshift(last);
console.log(numberArrays);

// 2. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია   productTitle   და   productPrice  property.
const products = [
	{
		productTitle: "some titme",
		productPrice: 2400,
	},
	{
		productTitle: "some title",
		productPrice: 123,
	},
	{
		productTitle: "some title 3",
		productPrice: 12,
	},
];

console.log(products);

// 3. შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
const numbers = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50];
const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
const avg = sum / numbers.length;

let sum1 = 0;

for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	console.log("num,", element);

	sum1 = sum1 + numbers[index];
	console.log(sum1);
}

console.log("sum1", sum1);

// 4. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// phoneName - სტრინგ ტიპის მნიშვნელობა
// phoneDescription - სტრინგ ტიპის მნიშვნელობა
// phonePrice - რიცხვითი მნიშვნელობა
// shopAddresses - სტრინგ ტიპის  მნიშვნელობების მასივი
// phoneMemoryInGB - რიცხვითი მნიშვნელობა

const product = {
	phoneName: "samsung ",
	phoneDescription: "some text",
	phonePrice: 1200,
	shopAddresses: [
		"address 1",
		"add 2",
		{
			name: "address 1",
			address: "google map link",
		},
	],
	phoneMemoryInGB: 128,
};

// 5. console.log ში გამოიტანეთ სტრინგი "Phone name is (#3 დავალების phoneName  -ის  მნიშვნელობა),  phone price is (#3 დავალების  phonePrice  -ის მნიშვნელობა)  and you can buy it at (#3 დავალების shopAddresses-ის პირველი მნიშვნელობა)"

const text = `Phone name is ${product.phoneName},  phone price is ${product.phonePrice}  and you can buy it at ${product.shopAddresses[0]}`;

console.log(text);

let x = 10;
let y = x--;

// operators
// ==, ===, !=, !==
// >, <, >=, <=
// &&, ||, !

// if, else, else if, ternary operator ? :

const passwrodLength = 15;
const passwordMust = 8;
const userNameLength = 5;

if (passwrodLength < passwordMust) {
	console.log("error, password must be at least 8 charachter");
}

if (userNameLength < 5) {
	console.log("error, userName must be at least 5 charachter");
}

if (passwrodLength < passwordMust) {
	console.log("error, password must be at least 8 charachter");
} else {
	console.log("success");
}

passwrodLength < passwordMust
	? console.log("error, password must be at least 8 charachter")
	: console.log("success");

if (passwrodLength < 5) {
	console.log("error, password must be at least 8 charachter");
} else if (passwrodLength >= 5 && passwrodLength < 10) {
	console.log("weak password");
} else if (passwrodLength >= 10 && passwrodLength < 15) {
	console.log("normal password");
} else {
	console.log("strong password");
}

console.log("after if");

// switch
const role = "visitor";

switch (role) {
	case "admin":
		console.log("admin");
		break;
	case "visitor":
		console.log("visitor");
		break;
	case "moderator":
	case "moderator123":
		console.log("moderator");
		break;
	default:
		console.log("user");
		break;
}

// for

for (let i = 0; i < 10; i++) {
	console.log("hello", i);
}

// while

let a = 10;
while (a < 5) {
	console.log("while", a);
	a++;
}

// do while
let b = 1;
do {
	console.log(b);
	b++;
} while (b < 4);

// break, continue

console.log("after loops");

const countries = [
	{
		name: "Georgia",
		currencies: {
			GEL: {
				name: "lari",
				symbol: "₾",
			},
		},
		capital: ["Tbilisi"],
		flag: "https://flagcdn.com/w320/ge.png",
		map: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
	},
	{
		name: "Federal Republic of Germany",
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€",
			},
		},
		capital: ["Berlin"],
		flag: "https://flagcdn.com/w320/de.png",
		map: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
	},
	{
		name: "Ukraine",
		currencies: {
			UAH: {
				name: "Ukrainian hryvnia",
				symbol: "₴",
			},
		},
		capital: ["Kyiv"],
		flag: "https://flagcdn.com/w320/ua.png",
		map: "https://goo.gl/maps/DvgJMiPJ7aozKFZv7",
	},
	{
		name: "United Kingdom of Great Britain and Northern Ireland",
		currencies: {
			GBP: {
				name: "British pound",
				symbol: "£",
			},
		},
		capital: ["London"],
		flag: "https://flagcdn.com/w320/gb.png",
		map: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
	},
];

for (let index = 0; index < countries.length; index++) {
	const element = countries[index];
	console.log(element.name);
	if (element.name === "Georgia") {
		console.log(element.capital);
	}
}
