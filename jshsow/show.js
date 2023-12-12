document.getElementById("info1").addEventListener("click", function(){
    document.getElementById("info1").innerHTML = "This is a picture of a goose standing in a swampy area.";
});
document.getElementById("info2").addEventListener("click", function(){
    document.getElementById("info2").innerHTML = "This is a picture of a goose with blue eyes looking at the cameraman.";
});
function calc(){
    let income = document.getElementById("income").value;
    let price = document.getElementById("price").value;
    let food = document.getElementById("food").value;
    let cage = document.getElementById("cage").value;
    let baby = document.getElementById("baby").value;
    let health = document.getElementById("health").value;
    let other = document.getElementById("other").value;

    let total = Number(income) + Number(price) + Number(food) + Number(cage) + Number(baby) + Number(health) + Number(other);

    document.getElementById("total").innerHTML = `Your Goose will cost ${total}$`;
}
