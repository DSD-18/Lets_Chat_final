//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC1Idbp3E8IaUTNhuqnSAvVjhilr46z1gw",
      authDomain: "kwitter-5025e.firebaseapp.com",
      databaseURL: "https://kwitter-5025e-default-rtdb.firebaseio.com",
      projectId: "kwitter-5025e",
      storageBucket: "kwitter-5025e.appspot.com",
      messagingSenderId: "743054211499",
      appId: "1:743054211499:web:e00e7d430455743f7bbaee"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name1=message_data["name"];
message=message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id +" value = "+like+" onclick='update_like(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:" + like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
localStorage.removeItem("User_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

function send(){
msg=document.getElementById("msg").value;
if(msg!=""){
firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";

}
}
function update_like(message_id){
      console.log("inside update_like"+message_id);
      likes=document.getElementById(message_id).value;
      updatelike= Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelike
      });
}