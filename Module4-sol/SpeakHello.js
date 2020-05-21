(function(window) {
    var helloSpeaker = new Object();
    var sentence = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(sentence + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
