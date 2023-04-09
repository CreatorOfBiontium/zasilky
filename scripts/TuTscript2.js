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


    const saveMessagess = () => {
        var vall = document.getElementById('val').value;
        var key = document.getElementById('key').value;
        firebase.database().ref('TUTORIALS/' + a).set({
            key : vall
        })
    };




function fnahrat(e){
    e.preventDefault()

    var keyy = document.getElementById('key').value;
    var vall = document.getElementById('val').value;
    firebase.database().ref("addPackages/TUTORIALS/" + a).get()
    .then((snapshot) => {


      if (snapshot.exists()){
        lvll = 2
        firebase.database().ref("addPackages/TUTORIALS/" + a).update({
            level : lvl
        })
        saveMessagess()
        alert("Úspěšně uloženo! Kliknutím OK pokračujte")
        window.open("https://CreatorOfBiontium.github.io/zasilky/tutorial2")


      } else{
        alert("Tutoriál " + a + " nebyl v databázi nalezen. Načtěte stránku znova a zacčněte znova Zda-li problém přetrvává kontaktujte mě.")

    }})}
