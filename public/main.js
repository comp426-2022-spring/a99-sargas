const loginButton = document.getElementById("loginForm")
// Add event listener for coins form
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
    document.getElementById("loginStatusCheck").innerHTML=loginResult
    if(loginResult == "LOGIN"){
        endpoint = "app/login"; // replace with name for endpoint grabbing the entries of the person
        url = document.baseURI + endpoint;
        sendingStuff({formData, url})
    }

  //  }catch(e){
  //      console.error("oof")
  //  }
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