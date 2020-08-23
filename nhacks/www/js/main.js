//yo this is the main javascript fileok question: how do i make a reminder in python? I do not know how to code that. Ok, thats fine,
//also, do you know of a translator from pyhton to javascript/ ok ill look for it. Hey could you help me? Could u make a page 
// for me here so i could input my code i couldnt find a converter so i had to manually do it 
// does it look fine in terms of javascript
//console.log is a developer tool.  the user probably wont be able to see it what do you mean?
//You can imput it here if you want.  so should i remove the if else statements or should i move it somewhere else? because if else statements
// are here to redirect the user based on their input. so what should i do to make it work for web based things. so should i leaveit?
//also, there is no input function in javascript.  That information would have to be grabbed from some 
//html element somewhere on the page.  
//The code you have here is designed for a console application.  It would work fine under those conditions,
//but web based things are a little bit more complicated.  
//I don't really know.  That would be like transforming a airplane into a potato.  they both work great
//but for different things.  I don't think there is any way to transform this into web code without
//a ton of modifications
// //well, maybe you could use the concepts here for the web version.  
//go to www/Medication.html


// var name = "What is your name?";
// var age = "What is your age?";
// var city = "What city do you reside in";
// console.log("Your name is", var name, "you are", var age, "old and you are from, var city + "." )
// if (input(question2) == "yes") {
// medication2="What other medication(s) do you take?";
// }
//     else {
//     input(question2) == "no"
//      var time1= "what time must you take your medication(please include A.M. or P.M.)?"
//     timetotake=(input(var time1))";
// }

//idk.  there is probably a website somewhere that can translate it.
//dont worry about that i can handle it.  I found a API that can notify in cordova.  So it can work as the reminder
$(document).ready(function() {
    //all code runs here where page is loaded
    $(".add").click(function() {
        // here
        var contact = "<div><input type='tel'> <span class='yeehaw'>Insert their number here</span></input><a href='#'>CALL</a></div>"
            //You can't use double quotations.  only single quotations  gotnicchea
        $(".contact-list").append(contact);
        $(".contact-list div:last-child input").on("change keyup paste", function chg() {
            console.log("yo, num changed!") //haha love this <- lol yeah i used that for bug testing noice
            me = $(".contact-list div:last-child input")
            me.next().attr("href", "tel:" + me.val())
        });
        // there's no way for me to use css styling on the insert number here thing right? oh cool, do i just do style = "" like in html or something else?
        //that works.  I think giving it a class from the css file would work too.  
        //ok.  The inserted html is still just normal html
    });
    // ok i might do the class thing then
    //aah sorry lol, ok i think that's all the questions i've got for now. tysm! haha ok 
    //yup.  if you have any more feel free to ask me 
    //hold on one sec brb
    //The font-family is tohoma.  I think it works
});