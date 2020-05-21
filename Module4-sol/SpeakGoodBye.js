(function(window) {
    var byeSpeaker = new Object();
    var sentence = "Goodbye";
    byeSpeaker.speak = function speak(name) {
        console.log(sentence + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
