$(document).ready(function() {
    var timeToDisplay = 5000;

    var slideshow = $('.hero');
    var urls = ['./img/sol-tacos-2_hi-res.jpg',
                 './img/sol_mushroom-taco-21.jpg',
                  './img/SOL-Chipotle-Chicken-Desmadres1.jpg'];

    var index = 0;
    var transition = function() {
        var url = urls[index];

        slideshow.css({'background-image': 'url(' + url + ')',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center center'});

        index = index + 1;
        if (index > urls.length - 1) {
            index = 0;
        }
    };

    var run = function() {
        transition();
        slideshow.fadeIn(1500, function() {
            setTimeout(function() {
                slideshow.fadeOut(1500, run);
            }, timeToDisplay);
        });
    };

    run();
});
