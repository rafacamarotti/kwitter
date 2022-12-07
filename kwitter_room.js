const firebaseConfig = {
    apiKey: "AIzaSyCiPiQ_cBPIPSXNXC7kSkLY9D0lHXn_EPs",
    authDomain: "kwitter-85262.firebaseapp.com",
    databaseURL: "https://kwitter-85262-default-rtdb.firebaseio.com",
    projectId: "kwitter-85262",
    storageBucket: "kwitter-85262.appspot.com",
    messagingSenderId: "598815257696",
    appId: "1:598815257696:web:821f8752478e118469ff05"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
  room_name=document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='room_name' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
