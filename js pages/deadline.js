const searchInput = document.getElementsByName("search");
const searchButton = document.querySelector('.search-button');


async function getInfoDeadlines(id) {
  const baseUrl = `https://script.google.com/macros/s/AKfycbxTI9S1emlI6Vls1ZVLIDRCpPlxKEXf7mRTjc8XaG7zXsXAVAGfhLeTUfoTnCfYQ2LlAQ/exec`;
  let url = baseUrl;
  if (id) {
    url += `?id=${id}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


var loadingDiv = document.querySelector('.loading-div')

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

const pushObj = [];

async function showDeadlines(id) {
  change();
  const students = await getInfoDeadlines(id);
  const tableBody = document.querySelector('.tbody1');
  tableBody.innerHTML = '';

  for (let i = 0; i < students.length; i++) {
    if (id == students[i].ID) {
      const student = {
        DueDate: students[i]['Due Date'],
        Amount: students[i].Amount,
        paidAmount : students[i]['Paid amount'],
        Status: students[i].Status,
      };

      pushObj.push(students[i]['Due Date'])
      console.log(pushObj);
      const newRow = document.createElement('tr');
      console.log(student.DueDate);
      newRow.innerHTML = `
        <td>${student.DueDate}</td>
        <td>${student.Amount}</td>
        <td>${students[i]['Paid amount']}</td>
        
        <td>
          <button id="payBtn" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Pay Now
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="alertMsg"></div>
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Please Fillfull All Inputs</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form method="POST" id="frmSubmit" >
                      <div class="form-group form-floating">
                        <input name="Amount" type="number" placeholder="Amount" id="floatingInput" class="form-control"  required>
                        <label for="floatingInput">Amount</label>
                      </div>
                      <div class="form-floating mt-3">
                        <select class="form-select" id="floatingSelect" name="Cash type">
                          <option selected></option>
                          <option value="cash">cash</option>
                          <option value="Vodafone cash">Vodafone cash</option>
                          <option value="Bank Account">Bank Account</option>
                          <option value="Online Payment">Online Payment</option>
                        </select>
                        <label for="floatingSelect">select cash type</label>
                      </div>
                      <div class="form-floating mt-3">
                        <select class="form-select" id="floatingSelect" name="type">
                          <option selected>Payment</option>
                        </select>
                        <label for="floatingSelect">select invoice type</label>
                      </div>
                      <div class="form-floating mt-3">
                        <select class="form-select" id="floatingSelect" name="payment sub cat">
                          <option selected>Deadline</option>
                        </select>
                        <label for="floatingSelect">select Payment Sub-categories</label>
                      </div>

                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Deadline Date" type="text" placeholder="Amount" id="SelectDueDate" class="form-control"  value =${students[i]['Due Date']} >
                        <label for="SelectDueDate">Amount</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Student NUM" type="text" placeholder="Amount" id="StudentNUM" class="form-control" >
                        <label for="StudentNUM">Amount</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Scholarship" type="text" placeholder="Scholarship" id="Scholarship" class="form-control" >
                        <label for="Scholarship">Scholarship</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Reception" type="text" placeholder="Scholarship" id="Reception" class="form-control" >
                        <label for="Reception">Scholarship</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Fesh/St" type="text" placeholder="Scholarship" id="fresh" class="form-control" >
                        <label for="fresh">Scholarship</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Study type" type="text" placeholder="Scholarship" id="StudyType" class="form-control" >
                        <label for="StudyType">Scholarship</label>
                      </div>


                      <div class="form-group mt-3 form-floating">
                        <textarea name="Note" class="form-control" placeholder="Nots" id="Textarea" rows="5"></textarea>
                        <label for="Textarea" class="form-label">Nots</label>
                      </div>
                      <div class="my-3">
                        <div class="error-message"></div>
                        <div dir="ltr" class="sent-message text-center alert alert-success d-none" id="success-msg">We will
                          connect to you , Thank's</div>
                        <div id="spinner-container"></div>
                      </div>
                      <div class="d-flex justify-content-center ">
                        <button class="btn btn-primary scrollto btn-info text-light" id="btnSubmit"
                          type="submit">Send</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </td>
      `;

      const payBtn = newRow.querySelector('#payBtn');
      const first = tableBody.children[0]
      console.log(first);
      const remainingAmount = students[i].Amount - students[i]['Paid amount']

      // const btndanger = newRow.querySelector('.btn-danger');
      // const btnoutlinesuccess = newRow.querySelector('.btn-outline-success');
      if (student.Status === "paid") {
        payBtn.innerText = "Paid";
        // const renderedText = htmlElement.innerText;
        payBtn.disabled = true;
        payBtn.classList.add("btn-success");
      } else if (student.Status === "Portion Paid") {
        payBtn.innerText = "Portion Paid";
        payBtn.classList.add("btn-warning");
        floatingInput.value = remainingAmount;
      } else {
        payBtn.classList.add("btn-danger");
        // floatingInput.value = students[i].Amount
        // SelectDueDate.value=students[i]['Due Date']
      }
      
      // Add a click event listener to the button.
      payBtn.addEventListener('click', () => {
        //import any data 
        const id = sessionStorage.getItem("idToPass");
        const ScholarshipToPass = sessionStorage.getItem("ScholarshipToPass");
        const ReceptionistToPass = sessionStorage.getItem("ReceptionistToPass");
        const groupToPass = sessionStorage.getItem("groupToPass");

        // Get the "SelectDueDate" element. 
        const selectDueDate = document.querySelector('#SelectDueDate');
        const floatingInput = document.querySelector('#floatingInput');
        const StudentNUM = document.querySelector('#StudentNUM');
        const Scholarship = document.querySelector('#Scholarship');
        const Reception = document.querySelector('#Reception');
        const fresh = document.querySelector('#fresh');
        const StudyType = document.querySelector('#StudyType');

        // Set the value of the "SelectDueDate" element to the due date of the student in the current row.
        selectDueDate.value = students[i]['Due Date'];
        floatingInput.value = students[i].Amount;
        StudentNUM.value = id;
        Scholarship.value = ScholarshipToPass;
        Reception.value = ReceptionistToPass;
        StudyType.value = groupToPass;
        if (student.Status === "Portion Paid") {
          floatingInput.value = remainingAmount;
        }


        
        if (first) {
          fresh.value = 'Student';
        } else {
          fresh.value = 'Fresh';
        }
      });

      tableBody.appendChild(newRow);
    }
  };


  const alertMsg = document.querySelector('.alertMsg');
  jQuery('#frmSubmit').on('submit', function (e) {
    e.preventDefault();
    jQuery.ajax({
      url: 'https://script.google.com/macros/s/AKfycbytlYxtnL1itZablK2TT4B6Mm2e6EWFSn-PYrVtIb5hT43gsJR1cqa3zR-C80UpNe6sVQ/exec',
      type: 'post',
      data: jQuery('#frmSubmit').serialize(),
      beforeSend: function () {
        var spinner = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
        jQuery('#spinner-container').html(spinner);
      },
      success: function (result) {
        jQuery('#frmSubmit')[0].reset();
        // Display success message here
        alertMsg.classList.add('alert', 'alert-success');
        alertMsg.style.width = '25%';
        alertMsg.style.position = 'fixed';
        alertMsg.style.top = '0';
        alertMsg.style.left = '0';
        alertMsg.style.margin = '20px';
        alertMsg.style.transition = "all 0.5s ease-in-out";
        alertMsg.innerHTML = '<strong>Success!</strong> Payment added successfully.';
        alertMsg.style.display = "block";
        alertMsg.style.opacity = "0";
        setTimeout(function () {
          alertMsg.style.opacity = "1";
        }, 10);
        setTimeout(function () {
          alertMsg.style.display = "none";
          location.reload();

        }, 5000);
      },
      error: function () {
        // Display error message here
        alertMsg.classList.add('alert', 'alert-danger');
        alertMsg.style.width = '25%';
        alertMsg.style.position = 'fixed';
        alertMsg.style.top = '0';
        alertMsg.style.left = '0';
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

  hide(); // hide the loading overlay once the requests are shown
}



var paramsDead = new URLSearchParams(window.location.search);
var id = paramsDead.get('id');
showDeadlines(id);



// add an event listener to the window object to run the `change()` function when a new window is opened
window.addEventListener('open', change);

window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search")

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open")
    menuBtnChange()
  })

  // searchBtn.addEventListener("click", function () {
  //   sidebar.classList.toggle("open")
  //   menuBtnChange()
  // })

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
    }
  }
}






// <td>
//           <img src="${student.Status === "paid" ? "../imgs/correct.png" : "./imgs/png-transparent-computer-icons-ok-miscellaneous-trademark-cross.png"}" alt="${student.Status}" style="width: 7%">
//         </td>