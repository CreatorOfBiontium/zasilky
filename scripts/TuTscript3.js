const firebaseConfig = {
  apiKey: "AIzaSyCCF2II1HvpRSBImzQ30zwLropYpd40UeQ",
  authDomain: "addpackages.firebaseapp.com",
  databaseURL: "https://addpackages-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "addpackages",
  storageBucket: "addpackages.appspot.com",
  messagingSenderId: "1062110554348",
  appId: "1:1062110554348:web:e3b7f089e3238a1a65ddc9"
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
