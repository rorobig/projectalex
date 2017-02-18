var posts= [];
		$.get( "http://www.reddit.com/r/leagueoflegends.json?limit=5", function( data ) {
		 	data = data.data.children;
		 	$(data).each(function(post){
		 	//	console.log(data[post].data.title);
		 		posts.push(data[post].data.title);
		 	//	console.log(posts.length)
		 	});
		});