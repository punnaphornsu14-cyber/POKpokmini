//
// Variables
//
const list          = document.getElementById("list");
const showGPAResult = document.getElementById("show-gpa-result");
const showHistory   = document.getElementById("show-history");
const buttonAdd     = document.getElementById("buttonAdd");
const buttonReset   = document.getElementById("buttonReset");
const buttonCal     = document.getElementById("buttonCal");

console.log(list)
//
// Methods
//
// function handleAdd(){
//     console.log("handle Add")
// }

// function handleReset(){
//     console.log("handle Reset")
// }

function handleCal(){
    console.log("handle Cal")
}
//
// Inits & Event Listeners
//

buttonAdd.addEventListener("click",handleAdd)
buttonReset.addEventListener("click",handleReset)
buttonCal.addEventListener("click",handleCal)

function handleAdd() {
  list.classList.remove("hidden");
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="row grid grid-cols-3 gap-3 pt-3">
      <input
        type="text"
        placeholder="Subject"
        class="subject bg-base border border-stone-200 px-3 py-2 rounded-sm w-full outline-none focus:border-lime focus:ring-1 focus:ring-lime/20 transition-all duration-150 text-sm"
      />
      <select
        class="grade bg-base border border-stone-200 px-3 py-2 rounded-sm w-full outline-none focus:border-lime focus:ring-1 focus:ring-lime/20 transition-all duration-150 text-sm"
      >
        <option value="" disabled selected>GPA</option>
        <option value="4">4</option>
        <option value="3.5">3.5</option>
        <option value="3">3</option>
        <option value="2.5">2.5</option>
        <option value="2">2</option>
        <option value="1.5">1.5</option>
        <option value="1">1</option>
      </select>
      <input
        type="text"
        placeholder="Credit"
        class="credit bg-base border border-stone-200 px-3 py-2 rounded-sm w-full outline-none focus:border-lime focus:ring-1 focus:ring-lime/20 transition-all duration-150 text-sm"
      />
    </div>`
  );
}

function handleReset() {
  list.innerHTML = "";
  list.classList.add("hidden");
}