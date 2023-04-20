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

function show_content_st(){
    document.getElementById("stEll").innerHTML =  '<script src="scripts/dpomocscriptO1.js"></script> Zda-li jste se dostali sem, tak jste již seznámeni s rozhraním webu. Vše zde ale probereme podrobněji. <br>Jestli chcete data <a href="https://creatorofbiontium.github.io/zasilky/dat1/poslizpravu.html">nahrát</a>, <a href="https://creatorofbiontium.github.io/zasilky/dat1/aktualizovani.html">upravit</a>, <a href="https://creatorofbiontium.github.io/zasilky/dat1/readfromdatabase.html">přečíst</a> nebo <a href="https://creatorofbiontium.github.io/zasilky/dat1/aktualizovani.html">smazat</a>, můžete vše udělat velmi jednoduše. <br><br><br><br>WEB <br><br>Na vrchní části obrazovky se nachází navigační panel, na kterém jsou odkazy na stránky zásilek.<br>Na stránkách pro správu dat jsou textová pole do kterých se vypisují potřebné informace.<br> <br><br><br><br>NAHRÁVÁNÍ DAT O ZÁSILCE<br><br>Po otevření <a href="https://creatorofbiontium.github.io/zasilky/dat1/poslizpravu.html">tohoto odkazu</a>, musíte si vyplnit potřebné info o zásilce, nejdůležitější je hastag - bez něho to ani nejde.<br>Hastag slouží jako "sledovaní číslo" nebo id pro zásilku. Hastag si musíte vymyslet. To na nahrání zásilky stačí. Můžete ale také vyplnit info o příjemci,<br>jméno a jeho telefoní číslo, nebo/také informace o zásilce, krátký popis zásilky a aktuální stav.<br>Po vyplnění stiskněte tlačítko Přidat. <br><br><br><br>PŘEČTENÍ DAT O ZÁSILCE<br><br>Otevřete <a href="">tento odkaz</a> a v něm musíte vyplnit hastag. Jak jsem již minule zmiňoval, slouží jako id pro balíček informací o zásilce.<br>Po stiskbutí tlačítka vyhledat se Vám objeví informace o zásilce s id které jste zadal. <br><br><br><br>UPRAVENÍ DAT O ZÁSILCE<br><br>Na <a href="">stránce pro upravení dat</a> musíte jako vždy zadat hastag, který (jen připomínám) slouží jako id. Nadále vyplňte pole informací, které chcete upravit.<br>Zda-li chcete vymazat jenom např. jméno, musíte do pole zadat " " (mezeru). Znovu jako u předchozích radách, stiskněte odesílací tlačítko, v tomto případě tlačítko Upravit. <br><br><br><br>ODSTRANĚNÍ DAT O/ZÁSILKU<br><br>Na <a href="">tomto stejném odkaze</a> vyplňte hastag. To je vše. Tedy zmáčkňete tlačítko odstranit.<br>Zásilka se odstraní. <br><br><br><br><br>RADA:<br>Existují 2 místa kam můžete uložit data o zásilce. Hlavní je cloud 1.<br>Na něj se ukládá vše a odkazy směřují na stránky na připojení k němu.<br>Můžete to ale změnit tak, že odkaz upravíte z .../dat1/... na .../dat2/... . Z dat1 nelzou vyhledávat zásilky na dat2, ani naopak. <script src="scripts/dpomocscriptO1.js"></script><br><br><button id="div4_butt_SprDat_Onclick-lessContent" class="div4_butt_all_Onclick-moreContent" onclick="hide_content_st()">Méně informací</button>'
}