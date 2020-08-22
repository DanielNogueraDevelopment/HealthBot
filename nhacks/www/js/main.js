//yo this is the main javascript fileok question: how do i make a reminder in python? I do not know how to code that. Ok, thats fine,
//also, do you know of a translator from pyhton to javascript/ ok ill look for it 
//idk.  there is probably a website somewhere that can translate it.
//dont worry about that i can handle it.  I found a API that can notify in cordova.  So it can work as the reminder
$(document).ready(function() {
    //all code runs here where page is loaded
    $(".add").click(function() {
        var contact = "<div><input type='tel'>Insert their number here</input><a href='#'>CALL</a></div>"
        $(".contact-list").append(contact);
        $(".contact-list div:last-child input").on("change keyup paste", function chg() {
            console.log("yo, num changed!")
            me = $(".contact-list div:last-child input")
            me.next().attr("href", "tel:" + me.val())
        });

    });




});