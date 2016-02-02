$(document).ready(function () {

    //for loop go from 1-100 and - while modulo returns no remainder for 3 or 5, print into html doc, if remainder for 3 only, fizz
    //if remainder for 5 only, buzz, both fizzbuzz
    var userNumber = prompt("Enter a value");
    var userInt = parseInt(userNumber);

    function fizzbuzz(maximum) {
        for (var i = 1; i <= maximum; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                $('ol').append("<li> fizzbuzz </li>");
            } else if (i % 3 == 0) {
                $('ol').append("<li> fizz </li>");
            } else
            if (i % 5 == 0) {
                $('ol').append("<li> buzz </li>");
            } else {
                $('ol').append("<li>" + i + "</li>");
            }
        }
    }

    fizzbuzz(userInt);

});
