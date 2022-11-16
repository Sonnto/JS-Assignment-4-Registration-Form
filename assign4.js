window.onload = function () {
  let theHeader = document.getElementById("welcome");
  let theForm = document.getElementById("form");
  let theResult = document.getElementById("result");
  let formHandle = document.forms.ixdForm;
  let resultFName = document.getElementById("result__Fname");
  let resultLName = document.getElementById("result__Lname");
  let resultId = document.getElementById("result__id");
  let resultProgram = document.getElementById("result__program");
  let programF = formHandle.f__program;
  let resultDelivery = document.getElementById("result__delivery");
  let resultProject = document.getElementById("result__project");

  formHandle.onsubmit = processForm;

  function processForm() {
    //assigns the variables to received values inputted from user
    let fNameValue = formHandle.f__fName;
    console.log(`First Name: ${fNameValue.value}`);

    let lNameValue = formHandle.f__lName;
    console.log(`Last Name: ${lNameValue.value}`);

    let idValue = formHandle.f__id;
    console.log(`Humber ID: ${idValue.value}`);

    let programValue = programF.options[programF.selectedIndex].text;
    console.log(`Programme Chosen: ${programValue}`);

    let deliveryValue = formHandle.f__deliver;
    console.log(`Method of Delivery: ${deliveryValue.value}`);

    let projectValue = formHandle.f__project;
    console.log(`Project: ${projectValue.value}`);

    // VALIDATION BELOW
    if (fNameValue.value === "") {
      fNameValue.style.background = "red";
      fNameValue.focus();
      return false;
    } else {
      fNameValue.style.background = "none";
    }

    if (lNameValue.value === "") {
      lNameValue.style.background = "red";
      lNameValue.focus();
      return false;
    } else {
      lNameValue.style.background = "none";
    }
    //REGEX Validation
    const rgx = /^n\d{8}$/i;

    if (idValue.value === "" || !idValue.value.match(rgx)) {
      idValue.style.background = "red";
      idValue.focus();
      return false;
    } else {
      idValue.style.background = "none";
    }

    if (programValue === "CHOOSE ONE") {
      programF.style.background = "red";
      programF.focus();
      return false;
    } else {
      programF.style.background = "none";
    }

    if (deliveryValue.value === "") {
      return false;
    }

    if (projectValue.value === "") {
      return false;
    }

    //takes values to insert into the result message
    resultFName.innerHTML = fNameValue.value;
    resultLName.innerHTML = lNameValue.value;
    resultId.innerHTML = idValue.value;
    resultProgram.innerHTML = programValue;
    resultDelivery.innerHTML = deliveryValue.value;
    resultProject.innerHTML = projectValue.value;

    //Stop form from submitting, header+form disappears, & show the thank you message
    theHeader.style.display = "none";
    theForm.style.display = "none";
    theResult.style.display = "block";

    return false;
  }
};
