/**
 * Created by damiths on 9/21/2017.
 */
$(function() {

    var localData = JSON.parse(localStorage.getItem('userData'));

    $("#headerPartial").load("../_header.html", function() {
        // $('.username').prepend(localData.firstName + ' ' + localData.lastName);
    });

    $("#footerPartial").load("../_footer.html", function() {
        // $('.username').prepend(localData.firstName + ' ' + localData.lastName);
    });
});