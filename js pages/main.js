// const getResponse = response => response.json();
// const processJSON = data => {const data = JSON}


var searchInput = document.getElementsByName("search");
var fName = document.querySelector(".fName");
var body = document.getElementById("body");
var infoBox = document.querySelector(".info-box");
var Email = document.querySelector(".Email");
var Phone = document.querySelector(".Phone");
var ID = document.querySelector(".ID");
var Requests = document.getElementById("Requests");
var Complaint = document.querySelector("#Complaint");
var searchButton = document.querySelector(".search-button");
var pic = document.getElementById("profile-pic");
var headName = document.querySelector(".headName");
var loadingDiv = document.querySelector(".loading-div");
const moduleCountElement = document.getElementById('moduleCount');
const numDeadline = document.querySelector('.num-deadline');
const footer3 = document.querySelector('.footer3');
const seeMore3 = document.querySelector('.seeMore3');
const seeMore4 = document.querySelector('.seeMore4');
const IdNumber = document.querySelector('.IdNumber');
const DOB = document.querySelector('.DOB');
const Grade = document.querySelector('.Grade');
const Scholarship = document.querySelector('.Scholarship');
const Receptionist = document.querySelector('.Receptionist');
const Reserver = document.querySelector('.Reserver');
const CCAgent = document.querySelector('.CCAgent');
const ReservationDate = document.querySelector('.ReservationDate');
const more = document.querySelector('.more');
const emailcrd = document.querySelector('.email-crd');
const moreBtn = document.querySelector('.more-btn');
const invoiceBtn = document.querySelector(".invoiceBtn")
const Schadule = document.querySelector('.Schadule')
const Payments = document.querySelector('.Payments')
const Papers = document.querySelector('.Papers')
const Requestss = document.querySelector('.Requestss')
const Complaintss = document.querySelector('.Complaintss')
const Employee = document.querySelector('#Employee')
const StudentNum = document.querySelector('#StudentNum')
const shareSubmit = document.querySelector('.shareSubmit')
// const back = history.back();

const userRole = localStorage.getItem('myUserRole');





// loading card

// const spinner3 = document.getElementById('spinner3');

// function loadOn3() {
//   spinner3.style.display = 'block';
// }

// function loadOff3() {
//   spinner3.style.display = 'none';
// }


const spinner4 = document.getElementById('spinner4');

function loadOn4() {
  spinner4.style.display = 'block';
}

function loadOff4() {
  spinner4.style.display = 'none';
}
//end


var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.display = "none";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
overlay.style.backdropFilter = "blur(5px)";
overlay.style.zIndex = "1";
document.body.appendChild(overlay);

function change() {
  loadingDiv.style.display = "block";
  overlay.style.display = "block";
}

function hide() {
  overlay.style.display = "none";
  loadingDiv.style.display = "none";
}

// async function getData(id) {
//   const response = await fetch('https://script.google.com/macros/s/AKfycbymvGsPp4SI9ISw_44dT20HpWZ1RXOlqdHyoRzKiNrxKOBWOscAFYnDBeWU3c5n6i_hmA/exec', {
//     method: 'POST',
//     body: JSON.stringify({ "id": id })
//   })
//   var data = await response.json();
//   console.log("data" + data);
//   return data;
// }

async function getData(id) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbymvGsPp4SI9ISw_44dT20HpWZ1RXOlqdHyoRzKiNrxKOBWOscAFYnDBeWU3c5n6i_hmA/exec', {
    method: 'POST',
    body: JSON.stringify({ "id": id })
  });

  // Check if the response is successful (status code 200)
  if (response.ok) {
    try {
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null; // Return null in case of JSON parsing error
    }
  } else {
    console.error("Error fetching data. Status:", response.status);
    return null; // Return null in case of non-successful response
  }
}

// fetch data for online share
async function getOnlineShare() {
  const url = `https://script.google.com/macros/s/AKfycbzqynDvb0be4pYbRhejKj3OZMzBp_ks37fxgRqZ9CmWCIr0g2r-JyqFqpqF8rBUIgzv/exec`;
  response = await fetch(url);
  moduledata = await response.json();
  console.log(moduledata);
  return moduledata;
}




// Get data from session storage if it exists
const savedData = sessionStorage.getItem("myAllData");
if (savedData) {
  const data = JSON.parse(savedData);
  // Use the data to render the page

  fName.innerHTML = data.Name;
  ID.innerHTML = data.ID;
  let result = data.Email.indexOf(",");
  Email.innerHTML = data.Email.slice(0, result);
  emailcrd.innerHTML = data.Email;
  Phone.innerHTML = data.Phone;
  headName.innerHTML = data.Name.slice(0, 50);
  pic.src = data.img;
  IdNumber.innerHTML = data.IdNumber;
  DOB.innerHTML = data.DOB.slice(0, 10);
  Grade.innerHTML = data.Grade;
  Scholarship.innerHTML = data.Scholarship;
  Receptionist.innerHTML = data.Receptionist;
  Reserver.innerHTML = data.Reserver;
  CCAgent.innerHTML = data.CCAgent;
  ReservationDate.innerHTML = data.ReservationDate.slice(0, 10);
  Schadule.innerHTML = data.Schadule;
  Payments.innerHTML = data.Payments;
  Papers.innerHTML = data.Papers;
  Requestss.innerHTML = data.Requestss;
  Complaintss.innerHTML = data.Complaintss;
  // change();
  // display(data.ID);
  // hide()
}
// const savedDataPlan = sessionStorage.getItem("myDataPlan");
// if (savedDataPlan) {
//   const data = JSON.parse(savedDataPlan);
//   // Use the data to render the page
//   change();
//   // displayPlanCard(data.value)
//   hide()
// }

// const savedDataDead = sessionStorage.getItem("myDataDead");
// if (savedDataDead) {
//   const data = JSON.parse(savedDataDead);
//   // Use the data to render the page
//   change();
//   // displayDeadCard(data.value)
//   hide()
// }
// var GlobalObject = {
//   userID: 0
// };
// console.log(GlobalObject);
// sessionStorage.setItem("GlobalObject", JSON.stringify(GlobalObject));


// Add a new variable to store the ID of the user to be passed to the other page
var idToPass = 0;
var ScholarshipToPass;
var ReceptionistToPass;
var groupToPass;
var emailToPass;


async function display(value) {
  change();
  var users = await getData(value);

  if (users == "") {
    console.log("ID not found or there was an error.");
    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alert", "alert-danger");
    alertMessage.textContent = "Please enter a valid Student Id";
    alertMessage.style.width = "50%";
    alertMessage.style.margin = "0 auto";
    alertMessage.style.display = "flex";
    alertMessage.style.alignItems = "center";
    alertMessage.style.justifyContent = "center";
    const section2 = document.querySelector(".section2");
    section2.appendChild(alertMessage);

    // Hide the alert message after half a second
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000);
    fName.innerHTML = "";
    ID.innerHTML = "";
    Email.innerHTML = "";
    emailcrd.innerHTML = "";
    Phone.innerHTML = "";
    headName.innerHTML = "";
    IdNumber.innerHTML = "";
    DOB.innerHTML = "";
    Grade.innerHTML = "";
    Scholarship.innerHTML = "";
    Receptionist.innerHTML = "";
    Reserver.innerHTML = "";
    CCAgent.innerHTML = "";
    ReservationDate.innerHTML = "";
    Schadule.innerHTML = 0;
    Payments.innerHTML = 0;
    Papers.innerHTML = 0;
    Requestss.innerHTML = 0;
    Complaintss.innerHTML = 0;
  } else {
    // Process the data when it is not null
    console.log("Data:", users);
  }


  users.forEach((element) => {
    // Initialize the variable `user`
    var user = {
      Name: element.Name,
      ID: element.ID,
      Email: element.Email,
      Phone: element.Phone,
      img: element.image,
      IdNumber: element.IdNational,
      DOB: element.DateOfBirth,
      StudyType: element.StudyType,
      Grade: element.Grade,
      Scholarship: element.Scholarship,
      Receptionist: element.Receptionist,
      Reserver: element.Reserver,
      CCAgent: element.CCAgent,
      ReservationDate: element.ReservationDate,
      Schadule: element.Schadule,
      Payments: element.Payments,
      Papers: element.Papers,
      Requestss: element.Requestss,
      Complaintss: element.Complaintss,
    };

    if (value) {
      element.ID == user.ID;
    }

    // Save the data to session storage
    sessionStorage.setItem("myAllData", JSON.stringify(user));

    // Use the data to render the page
    fName.innerHTML = user.Name;
    ID.innerHTML = user.ID;
    let result = user.Email.indexOf(",");
    Email.innerHTML = user.Email.slice(0, result);
    emailcrd.innerHTML = user.Email;
    Phone.innerHTML = user.Phone;
    headName.innerHTML = user.Name.slice(0, 50);
    pic.src = user.img;
    IdNumber.innerHTML = user.IdNumber;
    DOB.innerHTML = user.DOB.slice(0, 10);
    Grade.innerHTML = user.Grade;
    Scholarship.innerHTML = user.Scholarship;
    Receptionist.innerHTML = user.Receptionist;
    Reserver.innerHTML = user.Reserver;
    CCAgent.innerHTML = user.CCAgent;
    ReservationDate.innerHTML = user.ReservationDate.slice(0, 10);
    Schadule.innerHTML = user.Schadule;
    Payments.innerHTML = user.Payments;
    Papers.innerHTML = user.Papers;
    Requestss.innerHTML = user.Requestss;
    Complaintss.innerHTML = user.Complaintss;
    idToPass = user.ID;
    ScholarshipToPass = user.Scholarship;
    ReceptionistToPass = user.Receptionist;
    sessionStorage.setItem("idToPass", idToPass);
    sessionStorage.setItem("ScholarshipToPass", ScholarshipToPass);
    sessionStorage.setItem("ReceptionistToPass", ReceptionistToPass);
    emailToPass = user.Email
    sessionStorage.setItem("emailToPass", emailToPass);
    groupToPass = user.StudyType;
    sessionStorage.setItem("groupToPass", groupToPass);

  });

  console.log("email : " + emailToPass);

  await selectEmail()
  await selectModule()
  const ShareEnd = document.querySelector('.ShareEnd');

  // Get the current date
  const currentDate = new Date();
  
  // Add 30 days to the current date
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 30);
  
  // Convert the future date to dd/mm/yyyy format
  const formattedFutureDate = futureDate.toLocaleDateString('en-GB');
  
  // Display the result
  ShareEnd.innerHTML = "share End : " + formattedFutureDate;

  // Push the user ID to the anotherGlobalObject object
  hide();
}





function moreEmail() {
  more.style.display = "inline";
}

let setMore = sessionStorage.setItem('moreEmail', JSON.stringify(moreEmail()));
window.open(sessionStorage.getItem("moreEmail"))

moreBtn.addEventListener('click', () => {
  emailcrd.style.display = "block";
  // emailcrd.style.display = emailcrd.style.display === 'none' ? 'block' : 'none';
});

// select email function for online share
async function selectEmail() {
  const emailSelect = document.querySelector('#emailSelect');
  let getEmail = sessionStorage.getItem('emailToPass');
  console.log("getEmail : " + getEmail);
  // Clear existing options
  emailSelect.innerHTML = "";
  // Split multiple email addresses and push them into an array
  const emailArray = getEmail.split(',').map(email => email.trim());

  console.log("Email Array:", emailArray);

  emailArray.forEach(email => {
    const option = document.createElement('option');
    option.text = email;
    option.value = email;
    emailSelect.appendChild(option);
  });
}



async function selectModule() {
  const ModuleSelect = document.querySelector('#ModuleSelect');
  const ModuleCodeSelect = document.querySelector('#ModuleCodeSelect');
  let getModule = await getOnlineShare();
  console.log("getModule : " + getModule);

  getModule.forEach((element) => {
    var modules = {
      Module: element.Module,
      ModuleCode: element["Module Code"],
    }
    const option = document.createElement('option');
    option.text = modules.Module.toLowerCase(); // Assuming you want module names in lowercase
    option.value = modules.Module;
    ModuleSelect.appendChild(option);
    ModuleSelect.addEventListener('change', () => {
      if (ModuleSelect.value === modules.Module) {

        ModuleCodeSelect.value = modules.ModuleCode;
      }

    });

  });
}












// console.log("userID1 : "+element.ID);
// console.log("userID1 : " + GlobalObject.userID);

const savedDataReq2 = sessionStorage.getItem("GlobalObject");
const dataSto88 = JSON.parse(savedDataReq2);
// console.log("dataSto88.gID:" + dataSto88.gID);


async function openInvoice() {
  const id = sessionStorage.getItem("idToPass");
  // Get the ID from the `idToPass` variable
  // const id = idToPass;
  let invoiceUrl = `invoice.html?id=${id}`;
  invoiceBtn.href = invoiceUrl;
  let invoice = await fetch(invoiceUrl);
  let invoiceData = await invoice.json();
  localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
  window.open(invoiceUrl); // Open moduleUrl in a new window
}



invoiceBtn.addEventListener('click', () => {
  // Get the ID from the search input field
  const id = idToPass;

  // If the ID is not empty, open the other page with the ID passed in the URL
  if (id != null || id != "") {
    openInvoice(id);
  }

  // Otherwise, get the ID from the GlobalObject object and open the other page with that ID passed in the URL
  else {
    const savedDataReq2 = sessionStorage.getItem("GlobalObject");
    const dataSto2 = JSON.parse(savedDataReq2);
    openInvoice(dataSto2.userID);
  }
}
)



// plan function 

// async function displayPlanCard(value) {
//   loadOn4()
//   moduleCountElement.textContent = " ";
//   const cards = await getAllCards(value);

//   cards.forEach(card => {
//     if (value == card.ID) {
//       let planInfo = { value: card.ID, paln: card.Schadule, payment: card.Payments, paper: card.Papers, request: card.Requests, complaint: card.Complaints };
//       // Save the data to session storage
//       sessionStorage.setItem("myDataPlan", JSON.stringify(planInfo));
//       // Use the data to render the page
//       // traning plan 
//       moduleCountElement.textContent = planInfo.paln;
//     }
//   });
//   loadOff4()

//   // module location 
//   let moduleUrl = `Group.html?id=${value}`;
//   seeMore4.href = moduleUrl;
//   let module = await fetch(moduleUrl);
//   let moduleData = await module.json();
//   sessionStorage.setItem('moduleData', JSON.stringify(moduleData));
//   window.open(moduleUrl); // Open moduleUrl in a new window

// }


// dead function 
// async function displayDeadCard(value) {
//   loadOn3()
//   numDeadline.textContent = " ";
//   const cards = await getAllCards(value);

//   cards.forEach(card => {
//     if (value == card.ID) {
//       let DeadInfo = { value: card.ID, paln: card.Schadule, payment: card.Payments, paper: card.Papers, request: card.Requests, complaint: card.Complaints };

//       // Save the data to session storage
//       sessionStorage.setItem("myDataDead", JSON.stringify(DeadInfo));
//       // Use the data to render the page

//       // deadLine
//       numDeadline.textContent = DeadInfo.payment;
//     }
//   });
//   loadOff3()
//   // deadline location 
//   let deadlineUrl = `Deadlines.html?id=${value}`;
//   seeMore3.href = deadlineUrl;
//   let deadline = await fetch(deadlineUrl);
//   let deadlineData = await deadline.json();
//   sessionStorage.setItem('deadlineData', JSON.stringify(deadlineData));
//   window.open(deadlineUrl); // Open deadlineUrl in a new window

// }




searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  // sessionStorage.clear();
  const value = searchInput[0].value;
  console.log("value :" + value);
  if (value.trim() === "" || isNaN(value) || value == null) {
    // Create a Bootstrap alert message
    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alert", "alert-danger");
    alertMessage.textContent = "Please enter a valid Student Id";
    alertMessage.style.width = "50%";
    alertMessage.style.margin = "0 auto";
    alertMessage.style.display = "flex";
    alertMessage.style.alignItems = "center";
    alertMessage.style.justifyContent = "center";
    const section2 = document.querySelector(".section2");
    section2.appendChild(alertMessage);

    // Hide the alert message after half a second
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000);
    //display all boxes in this case
    fName.innerHTML = "";
    ID.innerHTML = "";
    Email.innerHTML = "";
    emailcrd.innerHTML = "";
    Phone.innerHTML = "";
    headName.innerHTML = "";
    IdNumber.innerHTML = "";
    DOB.innerHTML = "";
    Grade.innerHTML = "";
    Scholarship.innerHTML = "";
    Receptionist.innerHTML = "";
    Reserver.innerHTML = "";
    CCAgent.innerHTML = "";
    ReservationDate.innerHTML = "";
    Schadule.innerHTML = 0;
    Payments.innerHTML = 0;
    Papers.innerHTML = 0;
    Requestss.innerHTML = 0;
    Complaintss.innerHTML = 0;
    // footer3.textContent = "No deadlines found";



    // Stop all functions from another JavaScript file
    return;
  } else {
    sessionStorage.clear();
    display(value);
    moreEmail()

    // displayDeadCard(value);
    // displayPlanCard(value)
  }
});






window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  // searchBtn.addEventListener("click", function () {
  //   sidebar.classList.toggle("open");
  //   menuBtnChange();
  // });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
};


const logOut = document.querySelector('.log_out');
logOut.addEventListener('click', () => {
  sessionStorage.clear();
  localStorage.clear();
})


//for pervent back btn of browser
function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };

// for Qr code btn 
jQuery('#digitalId').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycby44o-bMq1bUH1Gw8gBlb39RrOkHJXtHqQVkADmeP1uIh_udRVs1YP6Re4YuoVqJgkyvA/exec',
    type: 'post',
    data: jQuery('#digitalId').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container').html(spinner);
    },

    success: function (result) {
      jQuery('#digitalId')[0].reset();
      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const id = sessionStorage.getItem("idToPass");
      if (id === null || id === '') {
        alertMsg.classList.add('alert', 'alert-danger');
        alertMsg.innerHTML = '<strong>Error!</strong> Please Enter Invalid Id .';
        alertMsg.style.display = 'block';
      } else {
        alertMsg.classList.remove('alert', 'alert-danger');
        alertMsg.classList.add('alert', 'alert-success');
        alertMsg.innerHTML = '<strong>Success!</strong> Send successfully.';
        alertMsg.style.display = 'block';
      }
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      // alertMsg.innerHTML = '<strong>Success!</strong> QR Code Send successfully.';
      // alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";

      }, 2000);
    },
    error: function () {
      // Display error message here
      alertMsg.classList.add('alert', 'alert-danger');
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      alertMsg.innerHTML = '<strong>Error!</strong> An error occurred. Please try again.';
      alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";
      }, 2000);
    },
    complete: function () {
      jQuery('#spinner-container').empty();
    }
  });
});
const alertMsg = document.querySelector('.alertMsg');

shareSubmit.addEventListener('click', () => {
  // Get the id from session storage.
  const id = sessionStorage.getItem('idToPass');

  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector('#Timestamp');
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  StudentNum.value = id;
  Employee.value = userr;
})



const digitalIdBtn = document.querySelector('.digitalIdBtn');
// if (userRole === "System") {
//   digitalIdBtn.style.display = "none";
// }

digitalIdBtn.addEventListener('click', () => {
  // Get the id from session storage.
  const id = sessionStorage.getItem('idToPass');

  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const qrCodeId = document.querySelector('#qrCodeId');
  const Emp = document.querySelector('#Emp');
  const Timestamp = document.querySelector('#Timestamp');
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  qrCodeId.value = id;
  Emp.value = userr;
})



// for App btn 
jQuery('#App').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzH2q6PplOKtYWlnApCJDX0x_oSqTBLB52EpXrB_8S9TmIA1nFfGk2UgtTHd66OlqwMxw/exec',
    type: 'post',
    data: jQuery('#App').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container1').html(spinner);
    },
    success: function (result) {
      jQuery('#App')[0].reset();
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const id = sessionStorage.getItem("idToPass");
      if (id === null || id === '') {
        alertMsg.classList.add('alert', 'alert-danger');
        alertMsg.innerHTML = '<strong>Error!</strong> Please Enter Invalid Id .';
        alertMsg.style.display = 'block';
      } else {
        alertMsg.classList.remove('alert', 'alert-danger');
        alertMsg.classList.add('alert', 'alert-success');
        alertMsg.innerHTML = '<strong>Success!</strong> Send successfully.';
        alertMsg.style.display = 'block';
      }
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      // alertMsg.innerHTML = '<strong>Success!</strong> QR Code Send successfully.';
      // alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";

      }, 2000);
    },
    error: function () {
      // Display error message here
      alertMsg.classList.add('alert', 'alert-danger');
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      alertMsg.innerHTML = '<strong>Error!</strong> An error occurred. Please try again.';
      alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";
      }, 2000);
    },
    complete: function () {
      jQuery('#spinner-container1').empty();
    }
  });
});

frmOnlineShare

// for App btn 
jQuery('#frmOnlineShare').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbxlb0mRkFopP6ngJDTxOVnaItOvvikJAg6GjrHb_Ajl0WMxYY9SPpHpXjnpBc_Pjvy1tg/exec',
    type: 'post',
    data: jQuery('#frmOnlineShare').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi ml-2" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container2').html(spinner);
    },
    success: function (result) {
      jQuery('#frmOnlineShare')[0].reset();
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const id = sessionStorage.getItem("idToPass");
      if (id === null || id === '') {
        alertMsg.classList.add('alert', 'alert-danger');
        alertMsg.innerHTML = '<strong>Error!</strong> Please Enter Invalid Id .';
        alertMsg.style.display = 'block';
      } else {
        alertMsg.classList.remove('alert', 'alert-danger');
        alertMsg.classList.add('alert', 'alert-success');
        alertMsg.innerHTML = '<strong>Success!</strong> Send successfully.';
        alertMsg.style.display = 'block';
      }
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      // alertMsg.innerHTML = '<strong>Success!</strong> QR Code Send successfully.';
      // alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";

      }, 2000);
    },
    error: function () {
      // Display error message here
      alertMsg.classList.add('alert', 'alert-danger');
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      alertMsg.innerHTML = '<strong>Error!</strong> An error occurred. Please try again.';
      alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";
      }, 2000);
    },
    complete: function () {
      jQuery('#spinner-container2').empty();
    }
  });
});

// access for role
const appBtn = document.querySelector('.appBtn');
// console.log(userRole);
// if (userRole === "System") {
//   appBtn.style.display = "none";
// }

appBtn.addEventListener('click', () => {
  // Get the id from session storage.
  const id = sessionStorage.getItem('idToPass');

  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const appId = document.querySelector('#appId');
  const Emp1 = document.querySelector('#Emp1');
  const Timestamp1 = document.querySelector('#Timestamp1');
  const timestamp = new Date();

  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp1.value = formattedDate;
  appId.value = id;
  Emp1.value = userr;
});



// window.addEventListener("popstate", function(event) {
//   sessionStorage.clear();
//   localStorage.clear();
// });

// let params = {};
// let regex = /([^&=]+)=([^&]*)/g, m;
// while (m = regex.exec(location.href)){
//   params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
// }

// if (Object.keys(params).length > 0) {
//   localStorage.setItem('authInfo', JSON.stringify(params));
// }

// // hide the access token 
// if (window.history && window.history.pushState) {
//   window.history.pushState({}, document.title, "/SRM.html");
// } else {
//   window.location.replace("/SRM.html");
// }

// let info = JSON.parse(localStorage.getItem('authInfo'));
// console.log(JSON.parse(localStorage.getItem('authInfo')));
// console.log(info['access_token']);
// console.log(info['expires_in']);

// console.log(user);

const welcome = document.querySelector('.Welcome');
var userr = localStorage.getItem("myCode");
console.log(userr);

welcome.innerHTML = `Welcome ${userr}!`

