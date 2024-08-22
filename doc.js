document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form");
    form.addEventListener("submit",function(event){
        const username=document.getElementById("username").value.trim();
        const password=document.getElementById("password").value.trim();
        if(username ===""||password===""){
            alert("Please fill the username and password");
        }else{
            console.log("Username:",username);
            console.log("Password:",password);
            document.body.innerHTML +='<p>Username submitted ${username}</p>';
            document.body.innerHTML +='<p>Password submitted ${password}</p>';
            form.reset();
            alert("Form submitted successfully");
        }
    });
});