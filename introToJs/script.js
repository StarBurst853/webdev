const myName = "Ryan Horne"

let favColor = "blue"

favColor = "red"

let age = 14

mainPerson = {
    name: "Ryan"
    age: 30,
    favColor: "red"
    favFoods: ["steak", "ice cream", "potatoes"]
}
favThings = [2, "movies"]

const isAlive = true

function describePerson(person) {
    alert("MISSING PERSON ALERT: " + person.name)
    alert(`MISSING PERSON ALERT: ${Person.name} missing since 2022, wearing tattered overalls`)
}
describePerson(mainPerson)

if (age > 30 || myName === "Ryan Horne") {
    alert("your on your way to middle age.");
} else if (age <30) {
    alert("your a baby")
} else {
    alert("how are you alive?")
}

document.getElementById("title").innerHTML = `Hello ${myName}`;

const para = document.createElement("p")
document.getElementsByTagName("p").innerHTML = "im the paragraph you just created."
document.getElementsByid('div').appendChild(para);