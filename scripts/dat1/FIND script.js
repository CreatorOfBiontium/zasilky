const firebaseConfig = {
  apiKey: "AIzaSyCCF2II1HvpRSBImzQ30zwLropYpd40UeQ",
  authDomain: "addpackages.firebaseapp.com",
  databaseURL: "https://addpackages-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "addpackages",
  storageBucket: "addpackages.appspot.com",
  messagingSenderId: "1062110554348",
  appId: "1:1062110554348:web:e3b7f089e3238a1a65ddc9"
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
          document.getElementById("ntf").innerHTML = "Nebyla nalezena žádná data!";
          ntf()
        }
      }
    else{
      document.getElementById("jinyalert").innerHTML = "Musíte vyplnit #!";
      jinyalert()
    }
    })

      


      .catch((error) => {
        console.log("ERROR");
        console.error(error);
      });
  }
  

  function ntf() {
    var x = document.getElementById("ntf");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  function jinyalert() {
    var x = document.getElementById("jinyalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }