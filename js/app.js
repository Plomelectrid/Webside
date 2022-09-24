var hvDivServices = document.getElementById("div-services");
var affectedTitleServices = document.getElementById("affected-div-services");

var hvGridMaintenance = document.getElementById("div-maintenance");
var affectedMaintenance = document.getElementById("affected-div-maintenance");

var hvGridInstallation = document.getElementById("div-installation");
var affectedInstallation = document.getElementById("affected-div-installation");

var hvGridSecurity = document.getElementById("div-security");
var affectedSecurity = document.getElementById("affected-div-security");

var hvDivAbout = document.getElementById("div-about");
var affectedTitleAbout = document.getElementById("affected-div-about");

var hvDivContact = document.getElementById("div-contact");
var affectedTitleContact = document.getElementById("affected-div-contact");

/* >>> Afectar titulo servicios <<< */
hvDivServices.addEventListener("mouseover", () => {
  affectedTitleServices.className = "border-b-blue border-b-rds-4";
}, false)
hvDivServices.addEventListener("mouseout", () => {
  affectedTitleServices.className = "border-b-white border-b-rds-4";
}, false)

/* >>> Afectar titulo mantenimineto <<< */
hvGridMaintenance.addEventListener("mouseover", () => {
  affectedMaintenance.className = "text-title-2 mt-20 text-title-blue";
}, false)
hvGridMaintenance.addEventListener("mouseout", () => {
  affectedMaintenance.className = "text-title-2 mt-20 text-title-black";
}, false)

/* >>> Afectar titulo instalacion <<< */
hvGridInstallation.addEventListener("mouseover", () => {
  affectedInstallation.className = "text-title-2 mt-20 text-title-blue";
}, false)
hvGridInstallation.addEventListener("mouseout", () => {
  affectedInstallation.className = "text-title-2 mt-20 text-title-black";
}, false)

/* >>> Afectar titulo seguridad <<< */
hvGridSecurity.addEventListener("mouseover", () => {
  affectedSecurity.className = "text-title-2 mt-20 text-title-blue";
}, false)
hvGridSecurity.addEventListener("mouseout", () => {
  affectedSecurity.className = "text-title-2 mt-20 text-title-black";
}, false)


/* >>> Afectar titulo sobre nosotros <<< */
hvDivAbout.addEventListener("mouseover", () => {
  affectedTitleAbout.className = "border-b-white border-b-rds-4";
}, false)
hvDivAbout.addEventListener("mouseout", () => {
  affectedTitleAbout.className = "border-b-blue border-b-rds-4";
}, false)


/* >>> Afectar titulo contactanos <<< */
hvDivContact.addEventListener("mouseover", () => {
  affectedTitleContact.className = "border-b-blue border-b-rds-4";
}, false)
hvDivContact.addEventListener("mouseout", () => {
  affectedTitleContact.className = "border-b-white border-b-rds-4";
}, false)



/* >>> redireccion <<< */
//var bodyLoaded = document.getElementById("content-body");

//bodyLoaded.addEventListener("mouseover", () => {
//  affectedSecurity.className = "text-title-2 mt-20 text-blue";
//}, false)


//var service = new URL(location.href).searchParams.get('service');
