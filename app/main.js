//Imports
import { https } from "https"; //ES6 import syntax
import "dotenv/config.js"; //ES6 import syntax, put this below all imports

//Import Riot API Key
const api_Key = process.env.API_KEY;

//Function for searching RIOT ID (Adds to code bloat)
//This function could be used to hide or encapsulate all requests to the Riot API
//This would make the code more readable and easier to maintain
//Your functions should only have one job/purpose and nothing more, here your function is doing two things (getting html elements and making a request)
//Request should also be made in a way that it is reusable, here you are hardcoding the url
// function SearchRiotID() {
//     userName = document.getElementById("inGameName").value;
//     console.log(userName);
//     tagline = document.getElementById("tagline").value;
//     console.log(tagline);
//     url =
//       "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" +
//       userName +
//       "/" +
//       tagline +
//       "?api_key=" +
//       api_Key;
//     console.log(url);
//   }

//New function below:
//This function is not really reusable, it is hardcoded to update the user data, but that is something you can work out
//You can make a function that takes in the url and the method and the data and then makes the request
function updateUserData() {
  //Get the values from the input fields
  let userName = document.getElementById("inGameName").value;
  let tagline = document.getElementById("tagline").value;

  //Print the values to the console for easy logging
  console.log(`Username: ${userName}#${tagline}`);

  //Call the function that makes the request
  makeRequest(userName, tagline);
}

//Function to make the request
//Not really resuable again, but it encapsulates the request logic (You can figure this out in the future)
function makeRequest(userName, tagline) {
  //Create the options for the request
  let options = {
    hostname: "europe.api.riotgames.com",
    path: `/riot/account/v1/accounts/by-riot-id/${userName}/${tagline}`,
    method: "GET",
    protocol: "https:",
    Headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + api_Key,
    },
  };

  //Print the options to the console for easy logging
  console.log(options);

  //Make the request
  let req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
    res.on("error", (error) => {
      console.error(error);
    });
    res.ong("end", () => {
      console.log("No more data in response.");
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });
  req.end();
}
