
const firebaseConfig = firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
function submitForm(e) {
    e.preventDefault();
  
    let name = getElementVal("name");
    let emailid = getElementVal("emailid");
    let msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
let newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElement
    return document.getElementById(id).value;
  ;