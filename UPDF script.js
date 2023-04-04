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

    const databaseRef = firebase.database().ref("addPackages/");
    
    function update(event){
      event.preventDefault();
    
      const name = document.getElementById('namee').value;
      const has = document.getElementById('has').value;
      const numb = document.getElementById('numb').value;
      const stav = document.getElementById('stav').value;
      const inf = document.getElementById('inf').value;
    
      var a = ""
      var b = ""
      var c = ""
      var d = ""



        if (name != ""){
          firebase.database().ref("addPackages/" + has).update({
            namee: name
        })
      a = name
      };
      
        if (numb != ""){
          firebase.database().ref("addPackages/" + has).update({
            numb: numb,
        })
      b = numb
      };


        if (stav != ""){
          firebase.database().ref("addPackages/" + has).update({
            stav: stav
        })
      c = stav
      };


        if (inf != ""){
          firebase.database().ref("addPackages/" + has).update({
            inf: inf
        })
      d = inf
      };

      alert("Aktualizováno! ("+ a + ", " + b + ", " + c + ", " + d + ", "+ ")")

      }

      


    function remove(event){
      event.preventDefault();

      const has = document.getElementById('has').value;
      firebase.database().ref("addPackages/" + has).remove();
      alert("Odstraněno! (" + has + ")")

    }