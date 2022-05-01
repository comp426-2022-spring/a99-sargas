

const loginButton = document.getElementById("loginForm")
// Add event listener for coins form
const registerButton = document.getElementById("registerForm")
registerButton.addEventListener("submit", registerHandler)
loginButton.addEventListener("submit", loginHandler)
// Create the submit handler
async function loginHandler(event) {
    event.preventDefault();
    var endpoint = "app/login";
    var url = document.baseURI + endpoint;
    const formEvent = event.currentTarget
    console.log(formEvent)
   // try{
    const formData = new FormData(formEvent);
    console.log(formData)
    const loginResult = await sendingStuff({formData, url})
    console.log(loginResult)
    if(loginResult.status == "LOGIN"){
        document.getElementById("OUTUSER").innerHTML = loginResult.user
        document.getElementById("feelingforlogin").setAttribute("class", "featureitem")
        document.getElementById("dataDiv").setAttribute("class", "featureitem")
        document.getElementById("loginStatusCheck").innerHTML="Logged in!!! Look below for your entries!"
        endpoint = "app/login"; // replace with name for endpoint grabbing the entries of the person
        url = document.baseURI + endpoint;
        sendingStuff({formData, url})
    }else if(loginResult.status == "incorrectPassword"){
        document.getElementById("loginStatusCheck").innerHTML="Wrong password..."
    }else if(loginResult.status == "badUsername"){
        document.getElementById("loginStatusCheck").innerHTML="We don't recognize that username... Consider making an account below!"
    }

  //  }catch(e){
  //      console.error("oof")
  //  }
}
//this does not work -- need to find better wait to hyde


const feelingbutton = document.getElementById("feelingForm");
feelingbutton.addEventListener("submit", feelingInput)

async function feelingInput(event) {
    event.preventDefault();
    var endpoint = "app/feeling/user";
    var url = document.baseURI + endpoint;
    const formEvent = event.currentTarget
    console.log(formEvent)
    const formData = new FormData(formEvent);
    formData.append("username", document.getElementById("OUTUSER").innerHTML)
    console.log(formData)
    const loginResult = await sendingStuff({formData, url})
    console.log(loginResult)
}
//need to add function 

async function registerHandler(event){
    event.preventDefault();
    var endpoint = "app/register";
    var url = document.baseURI + endpoint;
    const formEvent = event.currentTarget
  //  console.log(formEvent)
   // try{
    const formData = new FormData(formEvent);
  //  console.log(formData)
    const registerResult = await sendingStuff({formData, url})
    document.getElementById("registerStatusCheck").innerHTML="You're registered! Go ahead and log in!"
    console.log(registerResult)
}

async function sendingStuff({ formData, url}) {
    const plainFormData = Object.fromEntries(formData.entries());
    console.log("plainData")
    console.log(plainFormData)

    const formDataJson = JSON.stringify(plainFormData);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };
    const response = await fetch(url, options);
    return response.json()

    
    
}
const feeldata = document.getElementById("databutton")
// Add event listener for coin button
			feeldata.addEventListener("click", getData)
			function getData() {
                const user = document.getElementById("OUTUSER").innerHTML
                console.log(user)
                fetch('http://localhost:5555/app/graph/' + user, {mode: 'cors'})
  				.then(function(response) {
    			  return response.json();
  				})
				.then(function(result) {
                    

            
					console.log(result);

                })

               
                
            }