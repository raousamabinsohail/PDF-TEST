function generate() {
  var done = false;
  var doc = new jsPDF();

  var h = 20;
  var w = 20;

  var text1 = "";

  doc.setFontSize(22);
  doc.setFont("times");
  doc.setFontType("bold");
  doc.text(w + 70, h, "Clinic");
  h = h + 10;
  doc.text(w + 30, h, "Client History & Consent Form");

  h = h + 20;

  doc.setFontSize(14);
  doc.setFontType("bold");
  var text1 = "Name: ";
  doc.text(w, h, "Name: ");
  doc.text(w + text1.length + 10, h, document.getElementById("name").value);

  h = h + 10;
  var text1 = "Date of birth:";
  doc.text(w, h, "Date of birth: ");
  doc.text(w + text1.length * 2.2, h, document.getElementById("DOB").value);

  h = h + 10;
  var text1 = "Contact number: ";
  doc.text(w, h, "Contact number: ");
  doc.text(w + text1.length * 2.5, h, document.getElementById("cnum").value);

  var t = document.getElementById("gendert");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Gender:";
  doc.text(w, h, "Gender:");
  doc.text(w + text1.length * 3, h, selectedText);

  h = h + 10;
  var text1 = "Email:";
  doc.text(w, h, "Email : ");
  doc.text(w + text1.length * 3, h, document.getElementById("email").value);

  h = h + 10;
  var text1 = "Occupation:";
  doc.text(w, h, "Contact number: ");
  doc.text(
    w + text1.length * 3.5,
    h,
    document.getElementById("occupation").value
  );

  h = h + 10;
  var text1 = "Referred by: ";
  doc.text(w, h, "Referred by: ");
  doc.text(
    w + text1.length * 2.2,
    h,
    document.getElementById("referred-by").value
  );

  h = h + 10;
  var text1 = "Physician:";
  doc.text(w, h, "Physician: ");
  doc.text(
    w + text1.length * 2.5,
    h,
    document.getElementById("physician").value
  );

  // How did you hear about us?

  h = h + 10;
  doc.text(w, h, "How did you hear about us?");
  h = h + 10;
  doc.setFontType("helvetica");
  doc.text(w, h, document.getElementById("aboutus").value);

  //***********Form Page 2********** */

  h = h + 20;
  doc.setFontSize(16);
  doc.setFontType("bold");
  doc.text(
    w,
    h,
    "Please indicate the areas that you would like the therapist to focus on:"
  );
  h = h + 10;

  console.log("--------------------->", window.bodyImg);
  doc.addImage(window.bodyImg, "JPEG", w + 10, h, 180, 130);
  // doc.addImage("./img/body1.jpg", "JPEG", 15, 40, 180, 160);

  doc.addPage();

  h = 20;

  doc.setFontSize(16);
  doc.setFontType("bold");
  doc.text(w + 47, h, "Special conditions or symptoms: ");
  doc.setFontSize(14);
  h = h + 10;
  var text1 = "Exact location of symptom :";
  doc.setFontType("bold");
  doc.text(w, h, "Exact location of symptom: ");
  doc.setFontType("helvetica");
  doc.text(
    w + text1.length * 2.2,
    h,
    document.getElementById("locOfSym").value
  );

  h = h + 10;
  var text1 = "Cause of symptom: ";
  doc.setFontType("bold");
  doc.text(w, h, "Cause of symptom: ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.4, h, document.getElementById("COS").value);

  h = h + 10;
  var text1 = "Duration of symptom:  ";
  doc.setFontType("bold");
  doc.text(w, h, "Duration of symptom: ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.2, h, document.getElementById("DOS").value);

  h = h + 10;
  var text1 = "Type of pain feeling: ";
  doc.setFontType("bold");
  doc.text(w, h, "Type of pain feeling: ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.1, h, document.getElementById("TOPF").value);

  h = h + 10;
  var text1 = "Intensity of pain(1 to 10, 10 the strongest):  ";
  doc.setFontType("bold");
  doc.text(w, h, "Intensity of pain(1 to 10, 10 the strongest):  ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2, h, document.getElementById("PI").value);

  h = h + 10;
  var text1 = "Other treatments & outcomes : ";
  doc.setFontType("bold");
  doc.text(w, h, "Other treatments & outcomes : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, document.getElementById("OTO").value);

  //*********form Page 3 */

  h = h + 10;
  doc.setFontSize(16);
  doc.setFontType("bold");
  h = h + 10;
  doc.text(w + 60, h, "Medical history ");
  doc.setFontType("helvetica");

  if (document.getElementById("InYes").checked) {
    h = h + 10;
    doc.setFontSize(14);
    var text1 = "Injuries :";
    doc.setFontType("bold");
    doc.text(w, h, "Injuries : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.3, h, "Yes");
    doc.text(
      w + text1.length * 3.5,
      h,
      document.getElementById("injuries-sp").value
    );
  } else if (document.getElementById("InNo").checked) {
    h = h + 10;
    doc.setFontSize(14);
    var text1 = "Injuries :";
    doc.setFontType("bold");
    doc.text(w, h, "Injuries : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.3, h, "NO");
    doc.text(
      w + text1.length * 3.5,
      h,
      document.getElementById("injuries-sp").value
    );
  }

  if (document.getElementById("meYes").checked) {
    h = h + 10;
    var text1 = "Medications: ";
    doc.setFontType("bold");
    doc.text(w, h, "Medications : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.7, h, "Yes");
    doc.text(
      w + text1.length * 3.7,
      h,
      document.getElementById("Medications-sp").value
    );
  } else if (document.getElementById("meNo").checked) {
    h = h + 10;
    var text1 = "Medications: ";
    doc.setFontType("bold");
    doc.text(w, h, "Medications : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.7, h, "No");
    doc.text(
      w + text1.length * 3.7,
      h,
      document.getElementById("Medications-sp").value
    );
  }

  if (document.getElementById("alYes").checked) {
    h = h + 10;
    var text1 = "Allergies to oil : ";
    doc.setFontType("bold");
    doc.text(w, h, "Allergies to oil: ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2, h, "Yes");
    doc.text(
      w + text1.length * 3,
      h,
      document.getElementById("Allergies-to-oil-sp").value
    );
  } else if (document.getElementById("alNo").checked) {
    h = h + 10;
    var text1 = "Allergies to oil : ";
    doc.setFontType("bold");
    doc.text(w, h, "Allergies to oil: ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2, h, "No");
    doc.text(
      w + text1.length * 3,
      h,
      document.getElementById("Allergies-to-oil-sp").value
    );
  }

  if (document.getElementById("reYes").checked) {
    h = h + 10;
    var text1 = "Regular exercise :  ";
    doc.setFontType("bold");
    doc.text(w, h, "Regular exercise : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.3, h, "Yes");
    doc.text(
      w + text1.length * 3,
      h,
      document.getElementById("Regular-exercise-sp").value
    );
  } else if (document.getElementById("reNo").checked) {
    h = h + 10;
    var text1 = "Regular exercise :  ";
    doc.setFontType("bold");
    doc.text(w, h, "Regular exercise : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.3, h, "No");
    doc.text(
      w + text1.length * 3,
      h,
      document.getElementById("Regular-exercise-sp").value
    );
  }

  if (document.getElementById("pYes").checked) {
    h = h + 10;
    var text1 = "Pregnancy :  ";
    doc.setFontType("bold");
    doc.text(w, h, "Pregnancy : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.3, h, "Yes");
    doc.text(
      w + text1.length * 3.5,
      h,
      document.getElementById("Pregnancy-sp").value
    );
  } else if (document.getElementById("pNo").checked) {
    h = h + 10;
    var text1 = "Pregnancy :  ";
    doc.setFontType("bold");
    doc.text(w, h, "Pregnancy : ");
    doc.setFontType("helvetica");
    doc.text(w + text1.length * 2.3, h, "No");
    doc.text(
      w + text1.length * 3.5,
      h,
      document.getElementById("Pregnancy-sp").value
    );
  }

  //********Table */
  h = h + 20;
  doc.setFontSize(13);
  doc.setFontType("italic");
  doc.text(
    w - 10,
    h,
    " Medical Conditions (please mark “X” for current one(s) , “P” for past history and “F” for family history ) "
  );
  doc.setFontSize(14);

  var t = document.getElementById("Headaches/migraines");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Headaches, migraines : ";
  doc.setFontType("bold");
  doc.text(w, h, "Headaches, migraines : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Arthritis");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Arthritis : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Arthritis : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  // 2nd

  var t = document.getElementById("Cancerf");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Cancer : ";
  doc.setFontType("bold");
  doc.text(w, h, "Cancer : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("TMJ-problems");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "TMJ problems : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "TMJ problems : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //3d

  var t = document.getElementById("Abnormal-skin-conditions");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Abnormal skin conditions : ";
  doc.setFontType("bold");
  doc.text(w, h, "Abnormal skin conditions : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.2, h, selectedText);

  var t = document.getElementById("Chronic-pain");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Chronic pain : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Chronic pain : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //4d

  var t = document.getElementById("Joint-replacement");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Joint replacement : ";
  doc.setFontType("bold");
  doc.text(w, h, "Joint replacement : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Heart/circulation-problem");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Heart/circulation problem : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Heart/circulation problem : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //5d

  var t = document.getElementById("Lack-of-sensation");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Lack of sensation : ";
  doc.setFontType("bold");
  doc.text(w, h, "Lack of sensation : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Varicose-veins");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Varicose veins : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Varicose veins : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //6th

  var t = document.getElementById("Blood-clots");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Blood clots : ";
  doc.setFontType("bold");
  doc.text(w, h, "Blood clots : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Neck/back-injuries");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Neck/back injuries : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Neck/back injuries : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //7th

  var t = document.getElementById("Major-accident");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Major accident : ";
  doc.setFontType("bold");
  doc.text(w, h, "Major accident : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Diabetes");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Diabetes : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Diabetes : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //8th

  var t = document.getElementById("High/low-blood-pressure");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "High/low blood pressure : ";
  doc.setFontType("bold");
  doc.text(w, h, "High/low blood pressure : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Sprains,Strains");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Sprains, Strains : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Sprains, Strains : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //9th

  var t = document.getElementById("Muscles/joint-pain");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Muscles/joint pain : ";
  doc.setFontType("bold");
  doc.text(w, h, "Muscles/joint pain : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Hearing-problem");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Hearing problem : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Hearing problem : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  //10th

  var t = document.getElementById("Vision-problems");
  var selectedText = t.options[t.selectedIndex].text;

  h = h + 10;
  var text1 = "Vision problems : ";
  doc.setFontType("bold");
  doc.text(w, h, "Vision problems : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, selectedText);

  var t = document.getElementById("Sleep-difficulties");
  var selectedText = t.options[t.selectedIndex].text;

  var text1 = "Sleep difficulties : ";
  doc.setFontType("bold");
  doc.text(w + 80, h, "Sleep difficulties : ");
  doc.setFontType("helvetica");
  doc.text(w + 80 + text1.length * 2.3, h, selectedText);

  h = h + 10;
  var text1 = "Please explain any areas noted above : ";
  doc.setFontType("bold");
  doc.text(w, h, "Please explain any areas noted above : ");
  doc.setFontType("helvetica");
  doc.text(w + text1.length * 2.3, h, document.getElementById("PIT").value);

  //*********form Page 4 */
  h = 20;
  doc.addPage();
  doc.setFontSize(18);
  doc.setFontType("bold");
  doc.text(w, h, " Client Acknowledgement and Consent");
  doc.setFontSize(10);

  doc.setFontType("helvetica");
  h = h + 10;
  doc.text(
    w,
    h,
    "•	My therapist does not diagnose illnesses, prescribe medications nor physically manipulate the spine or its immediate"
  );
  h = h + 5;
  doc.text(
    w,
    h,
    " articulations, and I agree not to interpret their comments as medical advice."
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	Massage can produce negative effects for individuals with certain conditions, and I confirm that I have stated all my known "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "medical conditions and answered all questions honestly. I also agree to keep my therapist updated of any changes in my conditions. "
  );

  h = h + 5;
  doc.text(
    w,
    h,
    "•	Massage can produce short term side-effects such as muscle soreness, mild bruising, increased awareness of areas of pain "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "and light-headedness amongst other possible temporary outcomes. "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	The actual massage treatment may be shorter in duration than the total consultation time to allow time for assessments, "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "dressing / undressing, demonstration of stretches, payment, etc."
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	My therapist will not be liable for, nor will they accept any responsibility for any injury, loss or damage howsoever "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "sustained by any person or persons arising out of any of the treatments or procedures delivered in this Practice  "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "Practice or in any way whatsoever which does not arise from any negligent act or omission of the Practice Director and employees.  "
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	I will tell the therapist about any discomfort I may experience during the therapy session and understand that the therapy "
  );
  h = h + 5;
  doc.text(w, h, "•	will be adjusted accordingly.");
  h = h + 10;
  doc.text(w, h, "I consent to : ");
  h = h + 10;
  doc.text(
    w,
    h,
    "•	My therapist massaging me by applying direct skin contact, using massage oils, blends or lotions."
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	My medical information and treatment notes being accessed by other BBC Massage’s therapists."
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	My medical information and treatment notes being released to other, third-party, health practitioners whom I agree "
  );
  h = h + 5;
  doc.text(w, h, "for my therapist to refer me to.");
  h = h + 5;
  doc.text(
    w,
    h,
    "•	My therapist disclosing my personal information, if required to by law."
  );
  h = h + 5;
  doc.text(
    w,
    h,
    "•	Receiving occasional informative and/or promotional emails from BBC Massage."
  );
  h = h + 10;
  doc.text(
    w,
    h,
    "I confirm that to the best of my knowledge, the above information given is correct."
  );
  // h = h + 10;
  signature(function () {
    var name = document.getElementById("name").value;
    //   name = name + ".pdf";
    var opt = {
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      mode: "avoid-all",
      scrollY: -window.scrollY,
      useCORS: true,
    };
    html2canvas($("#signature-box")[0], opt).then(function (canvas) {
      console.log("ending");
      if (!window.flag) {
        alert("Signature Please ...");
        return;
      }
      doc.addImage(canvas, "JPEG", w, h + 10, 130, 50);
      doc.save(name);
      location.reload();
    });
  });
}

function signature(callback) {
  callback();
}
