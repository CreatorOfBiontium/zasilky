

    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }




        // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        mybutton.style.display = "block";
        console.log("Zaznamenán scroll", n, "/DEV/")

    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    console.log("Kliknutí na tlačítko", n, "/DEV/")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("Posunutí nahoru", n, "/DEV/")
    }



    var d = new Date();
    var n = d.toLocaleTimeString();

    function myunction() {
        if (confirm("Tato stránka je ve vývoji a nejsou nastavena žádná omezení. Nejsou nastavena žádná hesla. Kliknutím na zrušit nesouhlasíte.")) {
            console.log("Potvrzeno", n, "/DEV/");
          } else {
            console.log("Zrušeno", n, "/DEV/");
            console.log("Closig in few seconds", n, "/DEV/")
            close()
          }
    }


    function klik(){
        console.log()

    }