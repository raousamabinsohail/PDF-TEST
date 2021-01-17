var currentTab = 0; // Current tab is set to be the first tab (0)
// var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
var page1;
var page2;
var HTML_Width = $("#form-part-first").width();
var HTML_Height = $("#form-part-first").height();
var top_left_margin = 20;
var PDF_Width = HTML_Width + top_left_margin * 2;
var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
var canvas_image_width = HTML_Width;
var canvas_image_height = HTML_Height - 280;
var page1;
var page2;
var page3;
window.flag = false;
// var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
var stepIDList = [
  "#form-part-first",
  "#form-part-second",
  "#form-part-third",
  "#form-part-forth",
];
var NUM = 0;
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPageHelper(x, n) {
  // Hide the current tab:

  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    CreatePDFfromHTML();
    location.reload();
    // document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  if (n == 1) {
    takeScreenShotOfHTML();
    NUM += 1;
  }
  if (n == -1) {
    NUM -= 1;
  }
  if (currentTab + n >= x.length) {
    generate();
  } else {
    nextPageHelper(x, n);
  }
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    console.log(y[i].name, "++++++", y[i].value);
    // If a field is empty...
    // if (y[i].value == "") {
    //   // add an "invalid" class to the field:
    //   y[i].className += " invalid";
    //   // and set the current valid status to false
    //   valid = false;
    // }
    if (
      y[i].name == "name" ||
      y[i].name == "email" ||
      y[i].name == "contact-num"
    ) {
      if (y[i].value == "") {
        //   // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
      if (y[i].name == "email") {
        if (!y[i].value.includes("@")) {
          y[i].className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      }
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// download pdf

// function isCanvasBlank(canvas) {
//   const context = canvas.getContext('2d');

//   const pixelBuffer = new Uint32Array(
//     context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
//   );

//   return !pixelBuffer.some(color => color !== 0);
// }

$("#btnPrint").live("click", function () {
  // var doc = new jsPDF('p', 'pt', 'a4');
  CreatePDFfromHTML();
  // var tab =  document.getElementsByClassName("tab")[0]
  // var doc = new jsPDF();
});

function takeScreenShotOfHTML() {
  var opt = {
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    mode: "avoid-all",
    scrollY: -window.scrollY,
    useCORS: true,
    allowTaint: true,
    // foreignObjectRendering: true,
  };
  if (NUM == 1) {
    html2canvas($("#bodyImg")[0], opt).then(function (canvas) {
      console.log("checking=>", canvas);
      window.bodyImg = canvas.toDataURL("image/jpeg", 1.0);
    });
  }
}

function CreatePDFfromHTML() {
  pdf.save("Your_PDF_Name.pdf");
}
