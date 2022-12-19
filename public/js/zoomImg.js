// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var specImage = document.getElementsByClassName("specImage");
var myModalImg = document.getElementById("myModalImg");
var myModalImgCaptionText = document.getElementById("caption");
var myModalImgDescriptionText = document.getElementById("description");

document.body.onclick = function(e) {
    var clickedEl = window.event ? event.srcElement : e.target;
    while (clickedEl != null) {
        if (clickedEl.className && (" " + clickedEl.className + " ").indexOf("specImage ") != -1) {
            modal.style.display = "block";
            myModalImg.src = clickedEl.src;
            myModalImg.alt = clickedEl.alt;
            if (clickedEl.parentNode.getElementsByClassName("specTitle")[0] == undefined)
              myModalImgCaptionText.innerHTML = clickedEl.alt;
            else
              myModalImgCaptionText.innerHTML = clickedEl.parentNode.getElementsByClassName("specTitle")[0].innerHTML;
            myModalImgDescriptionText.innerHTML = "";
            myModalImgDescriptionText.innerHTML = clickedEl.parentNode.getElementsByClassName("specExplanation")[0].innerHTML;
            return;
        }
        clickedEl = clickedEl.parentNode;
    }
}

modal.onclick = function() {
  setTimeout(function() {
    modal.style.display = "none";
  }, 400);
}