let counter = 0;
$(".fire").hide();
$(".water").hide();
$(".wind").hide();
$(".frost").hide();
$(".vote-result,.restart").hide();


$(".findout").click(function() {
    counter +=1;
    let collectvote = Number($(".collectvote").val());
	let collectvote2 = $(".collectvote2").val();  
    $(".counter").text("This quiz has been taken " + counter + " number of times.");
    $(".counter").css("color","white");
    
    if(collectvote === 1 && collectvote2 === "dialogue" || collectvote2 === "Dialogue") {
    $(".top").text("You Are...A Fire-Starter!");
    $(".top").css("color","white");
    $(".vote-result").css("background-color","yellow");
    $(".color").css("color","pink");
    $(".fire,.vote-result,.restart").show();
    $(".norm,.collectvote,.collectvote2,p,.findout").hide();
    $("body").css("background-color","red");
    $(".vote-result").text("You are a writer in the throes of passion. You emit a burning feeling your readers feel throughout your stories." );

   
} else if (collectvote === 2 && collectvote2 === "dialogue" || collectvote2 === "Dialogue") {
    $(".top").text("You Are...A Misty Wave!");
    $(".top").css("color","white");
    $(".vote-result").css("background-color","purple");
    $(".color").css("color","skyblue");
    $(".water,.vote-result,.restart").show();
    $(".norm,.collectvote,.collectvote2,p,.findout").hide();
    $("body").css("background-color","blue");
    $(".vote-result").text("It seems to get lost by the water your readers are submerged under. If looked closely enough we can find the source is but a vast ocean." );
} 
    
    
    
 else if (collectvote === 1 && collectvote2 === "characters" ||  collectvote2 === "Characters") {
    $(".top").text("You Are...A Frost-bite Writer!");
    $(".top").css("color","white");
    $(".vote-result").css("background-color","darkturquoise");
    $(".color").css("color","white");
    $(".frost,.vote-result,.restart").show();
    $(".norm,.collectvote,.collectvote2,p,.findout").hide();
    $("body").css("background-color","cornflowerblue");
    $(".vote-result").text("A writer who seeks to find the beauty in pain. Should your characters be thankful for the coming warmth that burns, or scared for why the warmth was even given in the first place?" );
} 
  else if (collectvote === 2 && collectvote2 === "characters" || collectvote2 === "Characters") {
    $(".top").text("You Are...Blowing Winds!");
    $(".top").css("color","white");
    $(".vote-result").css("background-color","cornsilk");
    $(".counter").css("color","skyblue");
    $(".color").css("color","cyan");
    $(".wind,.vote-result,.restart").show();
    $(".norm,.collectvote,.collectvote2,p,.findout").hide();
    $("body").css("background-color","honeydew");
    $(".vote-result").text("Your writing echoes a message constantly blowing in the winds. Your readers seem to understand it by the end with your use of the theme." );
} 
  else if (collectvote === 1 && collectvote2 === "theme" || collectvote2 === "Theme") {
  $(".top").text("You Are...Blowing Winds!");
    $(".top").css("color","white");
    $(".vote-result").css("background-color","cornsilk");
    $(".counter").css("color","skyblue");
    $(".color").css("color","cyan");
    $(".wind,.vote-result,.restart").show();
    $(".norm,.collectvote,.collectvote2,p,.findout").hide();
    $("body").css("background-color","honeydew");
    $(".vote-result").text("Your writing echoes a message constantly blowing in the winds. Your readers seem to understand it by the end with your use of the theme." );
} 
  else if (collectvote === 2 && collectvote2 === "theme" || collectvote2 === "Theme") {
  $(".top").text("You Are...A Misty Wave!");
    $(".top").css("color","white");
    $(".vote-result").css("background-color","purple");
    $(".color").css("color","skyblue");
    $(".water,.vote-result,.restart").show();
    $(".norm,.collectvote,.collectvote2,p,.findout").hide();
    $("body").css("background-color","blue");
    $(".vote-result").text("It seems to get lost by the water your readers are submerged under. If looked closely enough we can find the source is but a vast ocean." );
} 
  
});


$(".restart").click(function() {
    $(".top").text("What Kind of Elemental Writer Are You? ");
    $(".fire").hide();
    $(".water").hide();
    $(".wind").hide();
    $(".frost").hide();
    $(".vote-result,.restart").hide();
    let collectvote = $(".collectvote").val();
	let collectvote2 = $(".collectvote2").val();  
    $(".counter").text("This quiz has been taken " + counter + " number of times.");
    $(".counter").css("color","white");
    $(".norm,.collectvote,.collectvote2,p,.findout").show();
    $("body").css("background-color","skyblue");
    $(".votecollect,.votecollect2").css("background-color","skyblue","color","black");

});



