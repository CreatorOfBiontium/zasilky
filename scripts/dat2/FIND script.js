const firebaseConfig = {
  apiKey: "AIzaSyAWqCuJDeK91uQQ1UC5zVL_Ig9_OdQGQGU",
  authDomain: "addpackages2.firebaseapp.com",
  databaseURL: "https://addpackages2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "addpackages2",
  storageBucket: "addpackages2.appspot.com",
  messagingSenderId: "554477795181",
  appId: "1:554477795181:web:b30724f8abb88313abcc64",
  measurementId: "G-N03W93P91R"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  
  
  function FindData(event) {

    event.preventDefault()

    var mybut = document.getElementById("idd").value;
  

    firebase.database().ref("addPackages/" + mybut).get()
      .then((snapshot) => {

        if (mybut != "") {
          
        
        if (snapshot.exists()) {

          document.getElementById("findName").innerHTML =
            "Jméno: " + snapshot.val().namee;
          document.getElementById("findNumb").innerHTML =
            "Číslo: " + snapshot.val().numb;
          document.getElementById("findStav").innerHTML =
            "Aktuální stav: " + snapshot.val().stav;
          document.getElementById("findInf").innerHTML =
            "Informace o zásilce: " + snapshot.val().inf;
          console.log(snapshot.val());
        } else {
          console.log("Nejsou nalezena žádná data");
          alert("Nebyla nalezena žádná data!");
        }
      }
    else{
      alert("Musíte vyplnit #!")
    }
    })

      


      .catch((error) => {
        console.log("ERROR");
        console.error(error);
      });
  }
  