const firebaseConfig = {
    apiKey: "AIzaSyBDeJTis0tPhQKfyG6ZEisl_k0y1hUwafo",
    authDomain: "c93-pt2.firebaseapp.com",
    databaseURL: "https://c93-pt2-default-rtdb.firebaseio.com",
    projectId: "c93-pt2",
    storageBucket: "c93-pt2.appspot.com",
    messagingSenderId: "237397958981",
    appId: "1:237397958981:web:1abbeecd2a980e05749e2c"
};
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");
  
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function addRoom(){
  room_name = document.getElementById("roomName").value;
 
  document.getElementById("output").innerHTML = room_name;

  console.log(row);
  localStorage.setItem("room_name", room_name);
}
function move(){
  window.location = "index.html";
}