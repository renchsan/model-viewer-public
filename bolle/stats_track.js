var xmlhttp;
var post_url = "https://analytics.3dfoodmodel.com/demo/post_stats.php";
var uuid = uuidv4();
var client, collection, itemname;
var playedwith = "0";
var timeOnMv;
var ar = "0";
var count = 1;
var bolle_items = [
    "Blue Nevada",
    "1921-21832",
    "Ryft",
    "2508-21923",
    "1921-21832",
    "2509-21924",
    "2510-21925",
    "2210-12633",
    "2211-12634",
    "NEVADA ALEXIS PINTURAULT SIGNATURE SERIES",
    "Damasso Sanchez",
    "Zak Hale",
    "Phil Casabon",
    "Night Rider"
];

try {
    let modelviewerExists = document.getElementsByName("model-viewer");
    if (modelviewerExists === null) {
        console.log("No MV found");
    } else {
        itemname = modelviewerExists[0].id;
        for (let i = 0; i < bolle_items.length; i++) {
            if (itemname === bolle_items[i]) {
                console.log("QReal stats active");
                TimeMe.initialize();
                post();
            } else {
            }
        }
    }
} catch (err) {
    console.log("Error: " + err);
}

function post() {
    client = document.getElementsByTagName("model-viewer")[0].getAttribute("client");
    collection = document.getElementsByTagName("model-viewer")[0].getAttribute("collection");
    itemname = document.getElementsByTagName("model-viewer")[0].id;
    if (client == null || collection == null || itemname == null) {
    } else {
        sessionStorage.setItem("playedwith", "0");
        sessionStorage.setItem("ar", "0");
        TimeMe.trackTimeOnElement(itemname);
        sessionStorage.setItem("uuid", uuid);
        sessionStorage.setItem("client", client);
        sessionStorage.setItem("collection", collection);
        sessionStorage.setItem("itemname", itemname);
        sessionStorage.setItem("playedwith", playedwith);
        sessionStorage.setItem("ar", ar);
        setInterval(function () {
            var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
            var timeOnMv = TimeMe.getTimeOnElementInSeconds(itemname);
        }, 25);
        TimeMe.callWhenUserLeaves(function () {
            sendStats();
        }, 25);
        TimeMe.callWhenUserReturns(function () {
            sendStats();
        }, 25);
        window.setInterval(function () {
            sendStats();
        }, 15000);
    }
}
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function sendStats() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", post_url, !0);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var uuidPost = sessionStorage.getItem("uuid");
    var client = sessionStorage.getItem("client");
    var collection = sessionStorage.getItem("collection");
    var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
    timeOnMv = TimeMe.getTimeOnElementInSeconds(itemname);
    playedwith = sessionStorage.getItem("playedwith");
    ar = sessionStorage.getItem("ar");
    xmlhttp.onerror = function () {};
    xmlhttp.send("uuid=" + uuidPost + "&client=" + client + "&collection=" + collection + "&itemname=" + itemname + "&pagetime=" + timeSpentOnPage + "&modeltime=" + timeOnMv + "&playedwith=" + playedwith + "&ar=" + ar);
    console.log("timeOnMv - " + timeOnMv);
}
