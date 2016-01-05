app.factory('RandomGreetings', function () {

    var getRandomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var greetings = [
        'And you thought you knew hats',
        'In the middle of 19th century baseball umpires wore top hats during the game.',
        'Fedora was first a women’s hat than men’s. Now it is both.',
        'Panama hat has never made in Panama. It is made in Equador.',
        'Hats are your most important article of clothing',
        'Even in the emperor\'s new clothes, the king still had a hat when he was naked.'
    ];

    return {
        greetings: greetings,
        getRandomGreeting: function () {
            return getRandomFromArray(greetings);
        }
    };

});
