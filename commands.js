
	var command = {

    indexes: ["Hey alex"],
    action: function(){
        artyom.say("yo homie");
    }
};

artyom.addCommands(command);


	var weather = {

    indexes: ["weather"],
    action: function(){
        artyom.say(weer);
    }
};

artyom.addCommands(weather);

var music = {
    indexes: ["play music"],
    action: function(){
        window.open("https://open.spotify.com/track/1cG0umU5TKStygKsPFZ9pY");

    }
};

artyom.addCommands(music);

var playlist = {
    indexes: ["open playlist"],
    action: function(){
        window.open("https://www.youtube.com/watch?v=papuvlVeZg8&list=PLgzTt0k8mXzEk586ze4BjvDXR7c-TUSnx&index=9&shuffle=144&spfreload=5");
    }
};

artyom.addCommands(playlist);


var time ={
    indexes: ["time"],
    action:function(){
        artyom.say("It's "+ today);
    }
};
artyom.addCommands(time);

