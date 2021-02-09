function adduser() {
    var username= document.getElementById("user_name").value;
    localStorage.setItem("user_name" , username);
    window.location = "class93hw2.html";
}