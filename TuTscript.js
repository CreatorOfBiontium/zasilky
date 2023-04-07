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
    var dbbname = document.getElementById('dbname').value;
    //onclick="submitform(event)"

    var lvll = 0


    const saveMessagess = () => {
        var newAddFormm = firebase.database().ref('TUTORIALS/' + dbbname);
    
        newAddFormm.set({
            level : lvll
        })
    
    };




function fnahrat(e){
    e.preventDefault()

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
        alert(a)

        }}else {
            alert("Musíte vyplnit pole!")

        }})}




    function submitform(e){
        e.preventDefault();
    

    
    
        parentRef.once("value").then(function(snapshot) {
        var namee = getElementVal('namee');
          var packages = [];
        
    
          snapshot.forEach(function(childSnapshot) {
    
            var packageName = childSnapshot.key;
            packages.push(packageName);
          });
    
          var hastg = getElementVal("has");
    
          if (packages.includes(hastg)) {
            alert("Tento # (" + hastg +") je již použit")
          }
            else{
            saveMessages(name, hastg, numb, stav, inf)
            alert("Úspěšně přidáno!")}
    
        })} 
    

    
    
    const saveMessages = (namee, hastg, numb, stav, inf) => {
        var namee = getElementVal('namee');
        var hastg = getElementVal('has');
        var newAddForm = firebase.database().ref('addPackages/' + hastg);
    
        newAddForm.set({
            name : namee,
            has : hastg,
            numb : numb,
            stav : stav,
            inf : inf
        })
    
    };
    
    
    
    

    function more(e){
        e.preventDefault();



    }
