function calc(){
    let income = document.getElementById("income").value;
    let price = document.getElementById("price").value;
    let food = document.getElementById("food").value;
    let cage = document.getElementById("cage").value;
    let baby = document.getElementById("baby").value;
    let health = document.getElementById("health").value;
    let other = document.getElementById("other").value;

    let total = Number(income) + Number(price) + Number(food) + Number(cage) + Number(baby) + Number(health) + Number(other);

    document.getElementById("total").innerHTML = `total: ${total}`;

    if (total <= 0) {
        document.getElementById("first-tip").style.visibility = "visible";
    }

    if (total > 0) {
        document.getElementById("second-tip").style.visibility = "visible"
    }

}