function tellFortune(numOfChildren, partnerName, location, jobTitle) {
    e.preventDefeault();

    numOfChildren = document.getElementBy("children").value;
    partnerName = document.getElementBy("partner").value;
    location = document.getElementBy("location").value;
    jobTitle = document.getElementBy("job").value;


    console.log(`You will be an ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`);
}

function calculateDogAge(puppyAge) {
    dogAge = puppyAge * 7;
    console.log(`Your Silly dog is ${dogAge}years old in dog years!`);
}

function calculateSupply(age, amountPerDay) {
    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

function calcCircumfrence(radius) {
    circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
}

function celsiusToFahrenheit(celsius) {
    fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius}°C is ${celsius * 9 / 5 + 32}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F is ${celsius}°C`)
}