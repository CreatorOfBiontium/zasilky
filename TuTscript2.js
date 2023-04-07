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
        window.open("https://CreatorOfBiontium.github.io/tutorial2")


      } else{
        alert("Tutoriál " + a + " nebyl v databázi nalezen. Načtěte stránku znova a zacčněte znova Zda-li problém přetrvává kontaktujte mě.")

    }})}
