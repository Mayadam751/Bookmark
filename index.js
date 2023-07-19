var websites = []
var websiteNameInput = document.getElementById("bookmarkName")
var websiteURLInput = document.getElementById("bookmarkURL")

checkWebsitesInlocalStorage

function addWebsite() {
    var website = {
        Name: websiteNameInput.value,
        URL: websiteURLInput.value
    }

    websites.push(website)
    console.log(websites)
    clearForm()
    displayWebsiteName(websites)
    updateData(websites)
}
function clearForm() {
    websiteNameInput.value = ""
    websiteURLInput.value = ""
}
function displayWebsiteName(websitesArray) {
    var trs = ""
    for (var i = 0; i < websitesArray.length; i++) {
        trs += `
        <tr>
        <td>${i + 1}</td>
        <td>${websitesArray[i].Name}</td>
        <td>
        <button onclick="visitWebsite()" class="visit btn btn-success"><i class="fa-solid fa-eye px-2"></i>Visit</button>
      </td>
      <td>
        <button onclick="deleteWebsites(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can px-2"></i>Delete</button>
      </td>
        </tr>`
    }
    document.getElementById("tBody").innerHTML = trs
}
function checkWebsitesInlocalStorage(){
    if (localStorage.getItem("websites")!=null){
        websites= JSON.parse(localStorage.getItem("websites"));
        displayWebsiteName()
    }
}
function deleteWebsites(index){
    console.log(index)
   websites.splice(index,1)
   updateData()
}
function updateData() {
    displayWebsiteName(websites)
    localStorage.setItem("websites", JSON.stringify(websites))
}
function visitWebsite(){
    console.log("wewewe")
    window.open(websiteURLInput.value)
}