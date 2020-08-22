//yo this is the main javascript fileok question: how do i make a reminder in python? I do not know how to code that. Ok, thats fine,
//also, do you know of a translator from pyhton to javascript/ ok ill look for it 
//idk.  there is probably a website somewhere that can translate it.
//dont worry about that i can handle it.  I found a API that can notify in cordova.  So it can work as the reminder
$(document).ready(function() {
    //all code runs here where page is loaded
    $(".add").click(function() {
        var contact = "<div><textarea>Insert their number here</textarea><a href='#'>CALL</a></div>"
        $(".contact-list").append(contact);
        $(".contact-list textarea:last-child").on("change keyup paste", function(this) {
            this.next().attr("href", "tel:" + this.val())
        })

    })




})