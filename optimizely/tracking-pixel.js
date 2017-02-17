// Push optimizely variation data to internal tracking
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return 0;
}

var dvPageName = "signup_host_listing_summary";
var testName = "host_description_5_sections";
var variantName = "test_host_description_5_sections";
var pxlTrack = "/pxl/v1/3pd/opt?visitor_id=" + readCookie('visitorid') + "&user_id=" + readCookie('uid') + "&test_name=" + testName + "&variant_name=" + variantName + "&page_name=" + dvPageName;

var img = new Image();  
img.setAttribute("visibility", "hidden");
img.setAttribute("position", "absolute");
img.src = pxlTrack;