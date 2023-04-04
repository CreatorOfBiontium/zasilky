const firebaseConfig = {
    apiKey: "AIzaSyAY3YK0vz236EVPcx2WQEXmH5H_txvckBM",
    authDomain: "packages-82878.firebaseapp.com",
    databaseURL: "https://packages-82878-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "packages-82878",
    storageBucket: "packages-82878.appspot.com",
    messagingSenderId: "796231716458",
    appId: "1:796231716458:web:30e3ffeeea831af5514413"
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
  