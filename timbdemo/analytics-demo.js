function startWiggle() {
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "auto");
}

function stopWiggle() {
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "none");
}

function reveal() {
    var mvdiv = document.getElementById("mvdiv");
    var showbtn = document.getElementById("btn1");
    if (mvdiv.style.display === "none") {
        mvdiv.style.display = "block";
        showbtn.style.display = "none";
    } else {
        // mvdiv.style.display = "none";
    }

    var script1 = document.createElement("script");
    var script2 = document.createElement("script");
    var script3 = document.createElement("script");
    var script4 = document.createElement("script");
    var script5 = document.createElement("script");
    var script6 = document.createElement("script");
    var script7 = document.createElement("script");
    var script8 = document.createElement("script");
    script1.type = "text/javascript";
    script2.type = "text/javascript";
    script3.type = "text/javascript";
    script4.type = "text/javascript";
    script5.type = "text/javascript";
    script6.type = "module";
    script7.type = "text/javascript";
    script8.type = "text/javascript";
    script1.src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"
    script2.src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"
    script3.src="https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"
    script4.src="https://unpkg.com/fullscreen-polyfill@1.0.2/dist/fullscreen.polyfill.js"
    script5.src="https://unpkg.com/focus-visible@5.1.0/dist/focus-visible.js"
    script6.src="https://dky5neca2x8co.cloudfront.net/model-viewer-public/model-viewer.min.js"
    script7.src="https://dky5neca2x8co.cloudfront.net/model-viewer-public/timeme.min.js"
    script8.src="https://dky5neca2x8co.cloudfront.net/model-viewer-public/timbdemo/timb_stats_track.js"
    document.getElementsByTagName("head")[0].appendChild(script1);
    document.getElementsByTagName("head")[0].appendChild(script2);
    document.getElementsByTagName("head")[0].appendChild(script3);
    document.getElementsByTagName("head")[0].appendChild(script4);
    document.getElementsByTagName("head")[0].appendChild(script5);
    document.getElementsByTagName("head")[0].appendChild(script6);
    document.getElementsByTagName("head")[0].appendChild(script7);
    document.getElementsByTagName("head")[0].appendChild(script8);
}