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
getData();
  username = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome " + username;

  function addRoom(){
    console.log("Inside addRoom function");
    room_name=document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="Letschat_page.html";
  }
  function getData(){
  firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row; }); }); }

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location="Letschat_page.html";
}
function logout(){
 localStorage.removeItem("User_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}