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

