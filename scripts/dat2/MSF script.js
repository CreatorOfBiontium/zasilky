const firebaseConfig = {
  apiKey: "AIzaSyAWqCuJDeK91uQQ1UC5zVL_Ig9_OdQGQGU",
  authDomain: "addpackages2.firebaseapp.com",
  databaseURL: "https://addpackages2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "addpackages2",
  storageBucket: "addpackages2.appspot.com",
  messagingSenderId: "554477795181",
  appId: "1:554477795181:web:b30724f8abb88313abcc64",
  measurementId: "G-N03W93P91R"
};

//int
firebase.initializeApp(firebaseConfig);

//ref
document.getElementById("addform").addEventListener("submit", submitform)

const database = firebase.database();

var parentRef = database.ref("addPackages/");

function submitform(e){
    e.preventDefault();

    var name = getElementVal('namee');
    var hastg = getElementVal('has');
    var numb = getElementVal('numb');
    var stav = getElementVal('stav');
    var inf = getElementVal('inf');

        
    if(hastg != ""){

    parentRef.once("value").then(function(snapshot) {
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

        if(confirm("Úspěšně přidáno!")){
} else{
firebase.database().ref("addPackages/" + hastg).remove()
alert("Odstraněno!")
}

}

    })} else{
        alert("Musíte vyplnit #!")

    }

}  


const saveMessages = (namee, has, numb, stav, inf) => {
    var name = getElementVal('namee');
    var hastg = getElementVal('has');
    var newAddForm = firebase.database().ref('addPackages/' + hastg);

    newAddForm.set({
        namee : namee,
        has : has,
        numb : numb,
        stav : stav,
        inf : inf
    })

};




const getElementVal = (id) => {
    return document.getElementById(id).value;
};  

