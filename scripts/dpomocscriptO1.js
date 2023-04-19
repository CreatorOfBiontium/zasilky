//'ext' function
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }





//'int' functions


function change_b(){
    document.getElementById("ndEll").innerHTML = 'Zda-li se u vás vyskytla nevýdaná chyba, pokračujte podle následujících pokynů. <br><br> <br>1) 404<br><br>Ujistěte se, že jste na správné adrese, pokud si jste jistí že máte zadanou správnou adresu, přejděte do hubu a přejděte, <br>tam kam jste plánovali jít. Jestli je stránka pořák k nenalezení kontaktujte mě. <br>...<br><br><br> <button id="div4_butt_Err_Onclick-moreContent" class="div4_butt_all_Onclick-moreContent" onclick="show_content_nd()">Více informací</button>'
}


function show_content_nd(){
    document.getElementById("ndEll").innerHTML = 'Funkce není dostupná';
    sleep(3500).then(() => {

    setTimeout(change_b(), 1);
});
}










function hide_content_st(){
    document.getElementById("stEll").innerHTML =  'Zda-li jste se dostali sem, tak jste již seznámeni s rozhraním webu. Vše zde ale probereme podrobněji. <br>Jestli chcete data <a href="https://creatorofbiontium.github.io/zasilky/dat1/poslizpravu.html">nahrát</a>, <a href="https://creatorofbiontium.github.io/zasilky/dat1/aktualizovani.html">upravit</a>, <a href="https://creatorofbiontium.github.io/zasilky/dat1/readfromdatabase.html">přečíst</a> nebo <a href="https://creatorofbiontium.github.io/zasilky/dat1/aktualizovani.html">smazat</a>, můžete vše udělat velmi jednoduše. <br><br><br><br>WEB <br><br>Na vrchní části obrazovky se nachází navigační panel, na kterém jsou odkazy na stránky zásilek.<br>Na stránkách pro správu dat jsou textová pole do kterých se vypisují potřebné informace. <br>...<br><br><br> <script src="scripts/dpomocscript.js"></script><button id="div4_butt_SprDat_Onclick-moreContent" class="div4_butt_all_Onclick-moreContent" onclick="show_content_st()">Více informací</button>'
    window.scrollTo({ top: 0, behavior: 'smooth' });
}