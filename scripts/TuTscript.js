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
        window.open("https://CreatorOfBiontium.github.io/zasilky/tutorial1")

        }}else {
            alert("Musíte vyplnit pole!")

        }})}

        function na(){
            alert("Tutoriál není dostupný")
        }
