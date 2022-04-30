const loginButton = document.getElementById("loginForm")
// Add event listener for coins form
loginButton.addEventListener("submit", loginHandler)
// Create the submit handler
async function loginHandler(event) {
    event.preventDefault();
    const endpoint = "app/login";
    const url = document.baseURI + endpoint;
    const formEvent = event.currentTarget
    console.log(formEvent)
   // try{
        const formData = new FormData(formEvent);
        console.log(formData)
        const loginResult = await sendLogin({formData, url})
        console.log(loginResult)
        document.getElementById("loginStatusCheck").innerHTML=loginResult
  //  }catch(e){
  //      console.error("oof")
  //  }
}





async function sendLogin({ formData, url}) {
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