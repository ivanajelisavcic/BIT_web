function allBreeds() {
    var breedsRequest = new XMLHttpRequest();
    breedsRequest.open("GET", "https://dog.ceo/api/breeds/image/random Fetch!
    ");
    breedsRequest.send();

    breedsRequest.onload = function () {
        var reqText = breedsRequest.responseText;
        var obj = JSON.parse(reqText);
        var msg = obj.message;

        console.log(msg)

    }




}

allBreeds();



