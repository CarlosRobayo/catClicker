function printCats() {

    var numberCats = document.getElementById('number-cats').value;

    for (var index = 0; index < numberCats; index++) {
        document.getElementById('containerCats').innerHTML += 
        '<div class="container text-center item-cat">' +
            '<img src="img/project/cat.jpg" alt="Image Cat" id="cat" class="cat_image">' +
            '<br>' +
            '<span id="contador'+index+'" class="badge badge-primary contador"></span>' +
        '</div>'
    }

    var cats = Array.from( document.querySelectorAll('img') ); 
    var counters = Array.from( document.querySelectorAll('#containerCats span') ); 

    cats.forEach(function(cat, index) {

        cat.index = 0;

        cat.addEventListener('click', function() {
            this.index ++;
            counters[index].innerHTML = this.index;
        });

    });

}