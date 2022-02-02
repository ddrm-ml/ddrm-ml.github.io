var tableData = {
    "noiseless_deb": ["22.70", "27.60", "1500", "26.16", "21.21", "500", "34.32", "<b>0.49</b>", "1000", "<b>35.64</b>", "7.14", "<b>20</b>"],
    "noiseless_sr": ["23.06", "21.22", "1500", "26.08", "53.55", "100", "17.58", "35.17", "1000", "<b>26.55</b>", "<b>7.22</b>", "<b>20</b>"],
    "noisy_deb": ["21.20", "34.02", "1500", "14.69", "121.82", "500", "16.37", "77.96", "1000", "<b>25.45</b>", "<b>15.24</b>", "<b>20</b>"],
    "noisy_sr": ["20.69", "42.17", "1500", "22.90", "43.45", "100", "16.30", "67.77", "1000", "<b>25.21</b>", "<b>12.43</b>", "<b>20</b>"],
};
function loadImages(dataset, deg, noise) {
    var imagesPerRow = 6;
    var images = document.querySelectorAll(".table-image");
    for(var i=0; i<images.length; i++) images[i].src="images/loading.gif";
    for(var i=0; i<imagesPerRow; i++) {
        images[i].src="images/demo/" + dataset + "/noisy/sr4/orig_" + i.toString() + ".png";
        images[i+imagesPerRow].src="images/demo/" + dataset + "/" + noise + "/" + deg + "/y0_" + i.toString() + ".png";
        images[i+2*imagesPerRow].src="images/demo/" + dataset + "/" + noise + "/" + deg + "/" + i.toString() + "_-1.png";
    }
    document.getElementById("dataset").value = dataset;
    document.getElementById("degradation").value = deg;
    document.getElementById("noise").value = noise;
}
function loadImagesSelected() {
    loadImages(document.getElementById("dataset").value, document.getElementById("degradation").value, document.getElementById("noise").value);
}
function loadTableData(problem) {
    var images = document.querySelectorAll(".quant-td");
    for(var i=0; i<images.length; i++) {
        images[i].innerHTML = tableData[problem][i];
    document.getElementById("problem").value = problem;
    }
}
function loadTableDataSelected() {
    loadTableData(document.getElementById("problem").value);
        }