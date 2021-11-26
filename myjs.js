function toggle() {

    const sidebar = document.getElementById("leftside")
    if (sidebar.style.display == "block") {
        sidebar.style.display = "none"
    } else {
        sidebar.style.display = "block"
        document.getElementById("toggle-btn").style.left = "10px"
    }


}

function sidebarnone() {
    const sidebar = document.getElementById("leftside")
    sidebar.style.display = "none"
}



function contactdata() {
    event.preventDefault();
    const form = document.getElementById("myform")
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const subject = form.elements["subject"].value;
    const message = form.elements["message"].value;

    alert(`
     Name: ${name} 
     Email: ${email} 
     Subject: ${subject} 
     Message: ${message}`)
}