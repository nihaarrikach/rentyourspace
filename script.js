let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbarone");

shownotes();

let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.getElementById("name");

  let phone = document.getElementById("phone");
  let image = document.getElementById("image");
  let rooms = document.getElementById("rooms");
  let washroom = document.getElementById("washroom");
  let floor = document.getElementById("floor");
  let rent = document.getElementById("rent");
  let address = document.getElementById("address");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    myname: name.value,
    myphone: phone.value,
    myimage: image.value,
    myroom: rooms.value,
    mywashroom: washroom.value,
    myfloor: floor.value,
    myrent: rent.value,
    myaddress: address.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  name.value = "";
  phone.value = "";
  image.value = "";
  rooms.value = "";
  washroom.value = "";
  floor.value = "";
  rent.value = "";
  address.value = "";
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element,index) {
    html += `<div class="col">
               <div class="card h-100">
                 <img src="${element.myimage}" class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">${element.myaddress}</h5>
                    <p class="card-text">
                     Name of Renter: <span>${element.myname}</span> <br>
                     Contact Number: <span>${element.myphone}</span> <br>
                     Rooms: <span>${element.myroom}</span> <br>
                     washrooms: <span>${element.mywashroom}</span><br>
                     floor: <span>${element.myfloor}</span><br>
                     Rent: <span>${element.myrent}</span>
                   </p>
                   <button class="btn btn-primary" id="${index}" onclick="deletenote(this.id)" id="addbtn">Delete Property</button>
                 </div>
               </div>
             </div>`;
  });

  let notesElm = document.getElementById("cards");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } 
  else{
 notesElm.innerHTML="";

  }
}

menu.onclick = () => {
  console.log("hey");
  navbar.classList.toggle("active");
  menu.classList.toggle("fa-regular");
  menu.classList.toggle("fa-x");
};
window.onscroll = () => {
  menu.classList.remove("fa-regular");
  menu.classList.remove("fa-x");
  navbar.classList.remove("active");
};

function deletenote(index) {
  
  let notes = localStorage.getItem("notes");
  if (notes == null) {
      notesObj = [];

  }
  else {
      notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}