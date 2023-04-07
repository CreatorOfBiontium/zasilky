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


    var a = localStorage.getItem('datname');

    const database = firebase.database();
    var parentRef = database.ref("addPackages/");
    //onclick="submitform(event)"

    var lvll = 1







function fnahrat(e){
    e.preventDefault()

    firebase.database().ref("addPackages/TUTORIALS/" + a).get()
    .then((snapshot) => {


      if (snapshot.exists()){
        lvll = 3
        document.getElementById("idkk").innerHTML =
        "Hodnota: " + snapshot.val().key;
        
        alert("Úspěšně přeečteno! Kliknutím OK pokračujte")
        window.open("https://CreatorOfBiontium.github.io/zasilky/tutorial3")

      } else{
        alert("klíč nebyl v databázi nalezen. Zkuste to znova, nebo se podívejte na textový tutoriál.")

    }})}
