const multiFlipButton = document.getElementById("loginForm")
// Add event listener for coins form
multiFlipButton.addEventListener("submit", loginHandler)
// Create the submit handler
async function loginHandler(event) {
    event.preventDefault();
    userName = document.getElementById("usernameLogin").value
    passWord = document.getElementById("passwordLogin").value
    console.log(userName)
    console.log(passWord)
    const endpoint = "app/flip/coins/";
    const url = document.baseURI + endpoint;
    const formEvent = event.currentTarget
    console.log(formEvent)
    try{
        const formData = new FormData(formEvent);
        console.log(formData)
     //   const loginResult = await sendLogin
    }catch(e){
        console.error("oof")
    }
}


async function flipMulti(event) {
    event.preventDefault();
    a = document.getElementById("username").value
    document.getElementById("numberInputtedCheck").innerHTML = a;
    const endpoint = "app/login";
    const url = document.baseURI + endpoint;
    const formEvent = event.currentTarget
    try {
        const formData = new FormData(formEvent);
        const flips = await sendFlips({ url, formData });
        console.log(flips);
        document.getElementById("headCount").innerHTML = "Heads: " + flips.summary.heads;
        document.getElementById("tailCount").innerHTML = "Tails: " + flips.summary.tails;
        document.getElementById("coinImages").innerHTML = coinList(flips.raw);
    } catch (error) {
        console.log(error);
    }
}

async function sendLogin({ url, formData}) {
    const plainFormData = Object.fromEntries(formData.entries());

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