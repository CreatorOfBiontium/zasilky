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
    
    
    const database = firebase.database();
    var parentRef = database.ref("addPackages/");
    //onclick="submitform(event)"

    var lvll = 0


    const saveMessagess = () => {
        var dbbname = document.getElementById('dbname').value;    
        firebase.database().ref('TUTORIALS/' + dbbname).set({
            level : lvll
        })
    
    };




function fnahrat(e){
    e.preventDefault()
    
    var dbbname = document.getElementById('dbname').value;
    firebase.database().ref("addPackages/TUTORIALS" + dbbname).get()
    .then((snapshot) => {

        if (dbbname != "") {
            
        
    
      if (snapshot.exists()){
            alert("Toto id (" + dbbname + ") je již zabráno")


      } else{
        lvll = 1
        alert("Toto id může být použito, kliknutím OK vytvoříte tutoriál")
        saveMessagess()
        localStorage.setItem('datname', dbbname);
        var a = localStorage.getItem('datname')
        alert("Tutoriál " + a +" byl úspěšně vytvořen!")
        window.open("https://CreatorOfBiontium.github.io/tutorial1")

        }}else {
            alert("Musíte vyplnit pole!")

        }})}
