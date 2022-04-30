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
        document.getElementById("loginStatusCheck").innerHTML=loginResult.status
        document.getElementById("loggedinuser").innerHTML=loginResult.user
  //  }catch(e){
  //      console.error("oof")
  //  }
}
//this does not work -- need to find better wait to hyde
if (document.getElementById("loginStatusCheck").innerHTML==="LOGIN"){
    document.getElementById("feelingform").setAttribute("class", "featureitem")
}

const feelingbutton = document.getElementById("feelingform");
//feelingbutton.addEventListener("submit",feelinginput)
//need to add function 





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