var firebaseConfig = {

      apiKey: "AIzaSyDY7Dk5w7q96KNBIoVrIIdM_pIVAz5YIXI",
    
      authDomain: "kwiter-33d12.firebaseapp.com",
    
      databaseURL: "https://kwiter-33d12-default-rtdb.firebaseio.com",
    
      projectId: "kwiter-33d12",
    
      storageBucket: "kwiter-33d12.appspot.com",
    
      messagingSenderId: "1032433204151",
    
      appId: "1:1032433204151:web:86e658909ad9f6f698c632"
    
    };
    
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementsById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
