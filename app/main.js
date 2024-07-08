
var api_Key="";
var url="";
var userName="";
var tagline="";
function SearchRiotID(){
    userName=document.getElementById("inGameName").value;
    console.log(userName);
    tagline=document.getElementById("tagline").value;
    console.log(tagline);
    url="https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/"+userName+"/"+tagline+"?api_key="+api_Key;
    console.log(url);
}
