
function degerDegistir(inputId,outputId){

var inputText = document.getElementById(inputId);

var outputText = document.getElementById(outputId);

inputText.addEventListener("input",function(){

var newText = inputText.value;

outputText.innerHTML = newText;

});
}
// Ad Soyad:
degerDegistir("input-Text1","text-output1");
// Unvan:
//----------------------------------------------
degerDegistir("input-Text2","text-output2");
// Tell No:
degerDegistir("input-Text3","text-output3");
// Mail:
degerDegistir("input-Text4","text-output4");
// web:
degerDegistir("input-Text5","text-output5");
// Adres:
degerDegistir("input-Text6","text-output6");
//---------------------------------------------
//eğitim
degerDegistir("input-Text7","text-output7");
//skills
degerDegistir("input-Text8","text-output8");
//açıklama
degerDegistir("input-Text9","text-output9");
//iş deneyimi
degerDegistir("input-Text10","text-output10");



function createInputFields(containerId) {

    var container = document.getElementById(containerId);
    container.innerHTML = "";


    var quantity = parseInt(document.getElementById(containerId.replace('inputFieldsContainer', 'quantity')).value, 10);

    if (quantity > 0) {
        for (var i = 0; i < quantity; i++) {
            for (var j = 0; j < 2; j++) {
                var input = document.createElement("input");
                input.type = "text";
                
                input.addEventListener("input", function () {
                    updateValuesList(containerId);
                });
                container.appendChild(input);
            }
        }
    }
}

function updateValuesList(containerId) {
    var valuesList = document.getElementById("valuesList" + containerId.charAt(containerId.length - 1));
    valuesList.innerHTML = "";

    var inputs = document.querySelectorAll("#" + containerId + " input");
    inputs.forEach(function (input, index) {
        var inputValue = input.value;
        var listItem = document.createElement("li");
        listItem.textContent =  inputValue;

        valuesList.appendChild(listItem);
    });
}

//-------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var colorPickers = [
        { picker: document.getElementById("lineColorPicker"), property: "borderColor", target: "resultContainer1" },
        { picker: document.getElementById("textColorPicker"), property: "color", target: "resultContainer1" },
        { picker: document.getElementById("backgroundColorPicker1"), property: "backgroundColor", target: "resultContainer1" },
        { picker: document.getElementById("backgroundColorPicker2"), property: "backgroundColor", target: "resultContainer2" },
        { picker: document.getElementById("backgroundColorPicker3"), property: "backgroundColor", target: "resultContainer3" }
    ];

    colorPickers.forEach(function (item) {
        var resultContainer = document.getElementById(item.target);
        item.picker.addEventListener("input", function () {
            var selectedColor = item.picker.value;
            resultContainer.style[item.property] = selectedColor;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var colorPickers = [
        { picker: document.getElementById("arkaplan-rengi"), property: "backgroundColor", target: ".cv" },
        { picker: document.getElementById("solKolon-rengi"), property: "backgroundColor", target: ".solKolon" },
        { picker: document.getElementById("isimKutusu-rengi"), property: "backgroundColor", target: ".isimKutusu" },
        { picker: document.getElementById("isimKutusuYaziRengi"), property: "color", target: ".isimKutusu label" },
        { picker: document.getElementById("cizgi-rengi"), property: "borderBottomColor", target: ".isimKutusu .cizgi" },
        { picker: document.getElementById("cizgi-rengi"), property: "borderBottomColor", target: ".icerik5 hr" }
    ];

    colorPickers.forEach(function (item) {
        var elements = document.querySelectorAll(item.target);

        item.picker.addEventListener("input", function () {
            var selectedColor = item.picker.value;
            elements.forEach(function (element) {
                element.style[item.property] = selectedColor;
            });
        });
    });
});

function changeAllFonts() {
  
    var selectedFont = document.getElementById("fontSelector").value;

 
    var allTextElements = document.querySelectorAll("p, div, span");

  
    allTextElements.forEach(function(element) {
        element.style.fontFamily = selectedFont;
    });
}

function changeFrameShape() {
    
    var selectedShape = document.getElementById("shapeSelector").value;
    
    var frameContainer = document.getElementById("frameContainer");

    frameContainer.style.borderRadius = getBorderRadiusByShape(selectedShape);
}

function getBorderRadiusByShape(shape) {
   
    switch (shape) {
        case "square":
            return "0";
        case "circle":
            return "50%";
        case "rounded":
            return "30px"; 
        default:
            return "0";
    }
}

function applyBorderStyle() {

    //  beceremedim :(
 
    var selectedStyle = document.getElementById("borderStyleSelector").value;


    var optionElements = document.getElementById("exampleOptions").getElementsByTagName("option");

  
    for (var i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.remove("cizgi", "cizgi2", "cizgi3");
    }

    for (var i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.add(selectedStyle);
    }
}