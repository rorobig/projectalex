// hello command
	var command = {
    indexes: ["Hey alex"],
    action: function(){
         var greetings= [];
        greetings.push("hey");
        greetings.push("ring a ding ding you are talking to the king");
        greetings.push("This call may be recorded for training purposes");
        greetings.push("What's cracking good looking?");
        greetings.push("Whats cooking good looking?");
        greetings.push("hello good sir");
        artyom.say((greetings[ Math.floor((Math.random() * 6))]));
    }
};

artyom.addCommands(command);

// weahter command
	var weather = {
    description: "says the weather",
    indexes: ["weather"],
    action: function(){
        artyom.say(weer);
    }
};

artyom.addCommands(weather);

// open single song in spotify
var music = {
    indexes: ["play music alex"],
    action: function(){
        window.open("https://open.spotify.com/track/1cG0umU5TKStygKsPFZ9pY");
    }

    
};
artyom.addCommands(music);

// play music
var play = {
    indexes: ["play"],
    action: function(){
        player.playVideo();
    }
};
artyom.addCommands(play);

// stop music
var stop = {
    indexes: ["alex stop"],
    action: function(){
        player.pauseVideo();
    }
};
artyom.addCommands(stop);

// previous song
var previousVideo = {
    indexes: ["previous song"],
    action: function(){
        player.previousVideo();
    }
};
artyom.addCommands(previousVideo);

// next song
var nextVideo = {
    indexes: ["next song"],
    action: function(){
        player.nextVideo();
    }
};
artyom.addCommands(nextVideo);

// mute song
var mute = {
    indexes: ["alex mute"],
    action: function(){
        player.mute();
    }
};
artyom.addCommands(mute);



// open old playlist


var playlist = {
    indexes: ["open playlist"],
    action: function(){
        window.open("https://www.youtube.com/watch?v=papuvlVeZg8&list=PLgzTt0k8mXzEk586ze4BjvDXR7c-TUSnx&index=9&shuffle=144&spfreload=5");
    }
};

artyom.addCommands(playlist);

// tell time
var time = {
    indexes: ["time"],
    action:function(){
        artyom.say("It's "+ today);
    }
};
artyom.addCommands(time);

var news = {
    indexes: ["news"],
    action:function(){
     $.get( "https://www.reddit.com/r/webdev.json?limit=5", function( data ) {
      data = data.data.children;
      $(data).each(function(post){
      if(data[post].data.stickied === false){
      }
      });
    });
        artyom.say("whats up doc");

    }
};

artyom.addCommads(news);



