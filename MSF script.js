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

//ref
document.getElementById("addform").addEventListener("submit", submitform)


function submitform(e){
    e.preventDefault();

    var name = getElementVal('namee');
    var hastg = getElementVal('has');
    var numb = getElementVal('numb');
    var stav = getElementVal('stav');

    saveMessages(name, hastg, numb, stav)
    alert("Úspěšně přidáno!")

    .catch((error)=>{
        alert("Něco se pokazilo, zkus to znova za chvíli.")
    })
}  


const saveMessages = (namee, has, numb, stav) => {
    var name = getElementVal('namee');
    var hastg = getElementVal('has');
    var newAddForm = firebase.database().ref('addPackages/' + hastg);

    newAddForm.set({
        namee : namee,
        has : has,
        numb : numb,
        stav : stav,
    })

};





const getElementVal = (id) => {
    return document.getElementById(id).value;
};  

