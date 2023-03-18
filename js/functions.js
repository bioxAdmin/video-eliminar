//Genera las previsualizaciones
function createPreview(file) {
    var video =  document.createElement("video");
    var imgCodified = URL.createObjectURL(file);
    var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12"><div class="image-container"> <figure> <file src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
    video.controls = true;
    document.body.appendChild(video);
    $(img).insertBefore("#add-photo-container");
}

function agregarVideo() {
    var videoInput = document.getElementById("video-input");
    var video = document.createElement("video");
    video.src = URL.createObjectURL(videoInput.files[0]);
    video.controls = true;
    document.body.appendChild(video);
  }