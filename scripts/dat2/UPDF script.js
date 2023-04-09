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

    const databaseRef = firebase.database().ref("addPackages/");
    


    function update(event){
      event.preventDefault();

      const name = document.getElementById('namee').value;
      const has = document.getElementById('has').value;
      const numb = document.getElementById('numb').value;
      const stav = document.getElementById('stav').value;
      const inf = document.getElementById('inf').value;
      
      var a = document.getElementById('namee').value;
      var b = document.getElementById('numb').value;
      var c = document.getElementById('stav').value;
      var d = document.getElementById('inf').value;

      if (confirm("Opravdu chcete upravit tato data?")) {
        
      


          firebase.database().ref("addPackages/" + has).get()
    .then((snapshot) => {

      if(has != ""){

      if (snapshot.exists()) {

        
          if (name != ""){
            firebase.database().ref("addPackages/" + has).update({
              namee: name
          })
          if (a != "") {
            a = name + ", "
          } else {
            a = ""
          }

        };

          if (numb != ""){
            firebase.database().ref("addPackages/" + has).update({
              numb: numb
          })
          if (b != "") {
            b = numb + ", "
          } else {
            b = ""
          }

        };


          if (stav != ""){
            firebase.database().ref("addPackages/" + has).update({
              stav: stav
          })
          if (c != "") {
            c = stav + ", "
          } else {
            c = ""
          }

        };


          if (inf != ""){
            firebase.database().ref("addPackages/" + has).update({
              inf: inf
          })
          if (d != "") {
            d = inf
          } else {
            d = ""
          }

        };

        alert("Aktualizováno! ("+ a  + b +  c +  d + ")")

        } else{
          if (has != "") {
                alert(has + " nenalezeno!")
              } else {
                alert("# nebyl nalezen")
        }}}
             else{
              alert("Pro úpravu musíte zadat #")
             }})
            
            
            } else {

        
      }}



    function remove(event){
      event.preventDefault();

      const has = document.getElementById('has').value;


      if (confirm("Opravdu chcete odstrabit tato data?")) {
        
      


      firebase.database().ref("addPackages/" + has).get()
          .then((snapshot) => {

        if (has != "") {
            if (snapshot.exists()) {
                const has = document.getElementById('has').value;
                firebase.database().ref("addPackages/" + has).remove();
                alert("Odstraněno! (" + has + ")")

                }else{
      if (has != "") { 
        alert(has + " nenalezeno!")
      } else {
        alert("# nebyl nalezen")

        }}} else {
      alert("Musíte vyplnit #!")

        }})}
        else{}}
