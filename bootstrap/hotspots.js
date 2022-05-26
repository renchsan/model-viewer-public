var hotspotsVisible = true;
let htsptbtns = document.getElementsByClassName('Hotspot hs-element');

function toggleHotspots(){
    if(hotspotsVisible) mvHoverOff();
    else mvHoverOn();
}

function mvHoverOff() {
    hotspotsVisible = false;
    document.getElementById('btn-toggle').style.backgroundImage = "url('https://dky5neca2x8co.cloudfront.net/Bolle/model-viewers/common/images/info-icon2.png')";
    let list= document.getElementsByClassName('hs-element');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility= "hidden";
    }
    // document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "auto");
}

function mvHoverOn() {
    hotspotsVisible = true;
    document.getElementById('btn-toggle').style.backgroundImage = "url('https://dky5neca2x8co.cloudfront.net/Bolle/model-viewers/common/images/info-icon.png')";
    let list= document.getElementsByClassName('hs-element');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility= "visible";
    }
    // document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "none");
}

function startWiggle() {
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "auto");
}

function stopWiggle() {
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "none");
}

function hs_show(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.animationName = "slide-in";
    document.getElementById(id).style.bottom = "0";
    // hide btns
    // let htsptbtns = document.getElementsByClassName('Hotspot hs-element');
    for(var i=0; i<htsptbtns.length; i++){
        htsptbtns[i].style.backgroundColor = "transparent";
        htsptbtns[i].style.animationName = "none";
    }
}

function hs_hide(id) {
    // hide hotspot panel
//    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.animationName = "slide-out";
    document.getElementById(id).style.bottom = "-500";
    // show btns
    // let htsptbtns = document.getElementsByClassName('Hotspot hs-element');
    for(var i=0; i<htsptbtns.length; i++){
        htsptbtns[i].style.backgroundColor = "";
        htsptbtns[i].style.animationName = "breathe";
    }

}
