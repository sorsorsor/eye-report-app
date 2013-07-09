document.addEventListener("deviceready",
onDeviceReady, false);

function onDeviceReady() {
    APP.start();
}

APP.start = function () {

    navigator.globalization.getPreferredLanguage(

    function (language) {
        alert('language: ' + language.value + '\n');
        document.getElementById("witness").innerHTML = "目击者";
    },

    function () {
        alert('Error getting language\n');
    });
}

$(function {

    var num = 1;
    $('div').bind('click', function () {
        $(this).find('.ui-btn-text').text('Updated Text (' + num+++')');
    });
});


/*
document.getElementById("witness").innerHTML="目击者";



if language == zh {

document.getElementById("witness").innerHTML="目击者";
}

else {
document.getElementById("witness").innerHTML="Witness";

}
*/