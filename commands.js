
	var command = {

    indexes: ["Hello"],
    action: function(){
        artyom.say("hello back");
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
