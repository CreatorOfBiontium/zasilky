const firebaseConfig = {
    apiKey: "AIzaSyAY3YK0vz236EVPcx2WQEXmH5H_txvckBM",
    authDomain: "packages-82878.firebaseapp.com",
    databaseURL: "https://packages-82878-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "packages-82878",
    storageBucket: "packages-82878.appspot.com",
    messagingSenderId: "796231716458",
    appId: "1:796231716458:web:30e3ffeeea831af5514413"
    };
    
    //int



    firebase.initializeApp(firebaseConfig);


    var tlacitko = document.getElementById("submit");
    var element = document.getElementById("container");





function FindData(event) {
    event.preventDefault()

    var mybut = document.getElementById("unamee").value;
    var mybutt = document.getElementById("pass").value;  

    firebase.database().ref("Logins/" + mybut).get()
      .then((snapshot) => {

            if (snapshot.exists()) {
                if (snapshot.val().mybut == mybut) {


                firebase.database().ref("Logins/" + mybut + "pass").get()
                .then((snapshot) => {

                    if (snapshot.exists()) {
                        if (snapshot.val().pass == mybutt) {
                          
                          element.parentNode.removeChild(element);
                          tlacitko.addEventListener("click", function() {
                            kontejner.innerHTML = "<div id='novy-obsah'>Toto je nový obsah.</div>";
                          });


                }
                    else{
                      alert("Něco se pokazilo")
                    }
              
              }})}
            else{
              alert("Uživatelské jméno je špatně")
            }


            
        } else {
          console.log(mybut + "nebylo nalezeno");
          alert(mybut + "nebylo nalezeno");
        }
      })

      


      .catch((error) => {
        console.log("ERROR");
        console.error(error);
      });
  }
  