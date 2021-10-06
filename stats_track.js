// Bolle Analytics current installed js
var xmlhttp;
var post_url = "https://analytics.3dfoodmodel.com/demo/post_stats.php";
var uuid = uuidv4();
var client, collection, itemname;
var playedwith = "0";
var timeOnMv;
var ar = "0";
var uuidPost;
var timeSpentOnPage;

var valid_items = [
    "Blue Nevada",
    "Ryft",
    "1921-21832",
    "2508-21923",
    "1921-21832",
    "2509-21924",
    "2510-21925",
    "2210-12633",
    "2211-12634",
    "Damasso Sanchez",
    "Zak Hale",
    "Phil Casabon",
    "Night Rider",
    "NEVADA ALEXIS PINTURAULT SIGNATURE SERIES",
    "NEVADA ANNA VEITH SIGNATURE SERIES",
    "NEVADA MATTE CAMO DAVID WISE SIGNATURE SERIES",
    "NEVADA Black Cross Matte"
];

function findCommonElements(viewers, arr2) {
    let obj = {};
    for (let i = 0; i < viewers.length; i++) {
        if(!obj[viewers[i].id]) {
            const element = viewers[i].id;
            obj[element] = true;
        }
    }
    for (let j = 0; j < arr2.length ; j++) {
        if(obj[arr2[j]]) {
            return true;
        }
    }
    return false;
}

function mv_init(){
    console.log("modelviewer tracking init");
    try {
        let modelviewerExists = document.getElementsByName("model-viewer");
        // console.log("found" + modelviewerExists);
        if (modelviewerExists === null) {
            console.log("No MV found");
        } else if(findCommonElements(modelviewerExists, valid_items)){
            console.log("Valid MV found");
            for (let i = 0; i < modelviewerExists.length; i++) {
                if (!(modelviewerExists[i].id === "")) {
                    itemname = modelviewerExists[i].id;
                    console.log("QReal stats active");
                    TimeMe.initialize();
                    post();
                    // break;
                }
            }
        }
    } catch (err) {
        console.log("Error: " + err);
    }
}

function post() {
    client = document.getElementById(itemname).getAttribute("client");
    collection = document.getElementById(itemname).getAttribute("collection");
    itemname = document.getElementById(itemname).id;
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
        TimeMe.callAfterTimeElapsedInSeconds(10, function(){
            sendStats();
        });
        window.setInterval(function () {
            sendStats();
            console.log("window.setInterval: 15000");
        }, 60000);
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
    uuidPost = sessionStorage.getItem("uuid");
    client = sessionStorage.getItem("client");
    collection = sessionStorage.getItem("collection");
    timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
    timeOnMv = TimeMe.getTimeOnElementInSeconds(itemname);
    playedwith = sessionStorage.getItem("playedwith");
    ar = sessionStorage.getItem("ar");
    xmlhttp.onerror = function () {};
    xmlhttp.send(
        "uuid=" + uuidPost +
        "&client=" + client +
        "&collection=" + collection +
        "&itemname=" + itemname +
        "&pagetime=" + timeSpentOnPage +
        "&modeltime=" + timeOnMv +
        "&playedwith=" + playedwith +
        "&ar=" + ar);
    console.log("timeOnMv - " + timeOnMv);
}
