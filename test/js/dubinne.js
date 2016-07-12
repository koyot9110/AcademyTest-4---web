var $frm = $("#frmArt");

$frm.submit(function(event){
    event.preventDefault();
    skontrolujAOdosli();
});

function skontrolujAOdosli(){
    var data = {};
    $frm.serializeArray().map(
        function(item){
            var itemValueTrimmed = item.value.trim();
            if(itemValueTrimmed){
                data[item.name] = itemValueTrimmed;
            }
        });

    console.log("skontrolujAOdosli udaje po ulozeni z formulara do objektu:");
    console.log(JSON.stringify(data));

    if(!data.title){
        alert("Názov článku. Povinná položka. Maximálna dĺžka: 100 znakov. Prvý znak nesmie byť medzera.");
        return;
    }

    if(!data.content){
        alert("Obsah článku. Povinná položka.  Môže byť obyčajný text alebo html.");
        return;
    }

    data.content = "<div>" + data.content + "</div>";
    if (data.vek) {
        data.content += "<div> <p>Vek: " + data.vek + "</p></div>";
    }
    delete data.vek;

    data.content = "<div>" + data.content + "</div>";
    switch (data.pohlavie) {
        case "m": data.content += "<p>Pohlavie: muz </p>"; break;
        case "f": data.content += "<p>Pohlavie: zena </p>"; break;
    }

    data.content = "<div>" + data.content + "</div>";
    switch(data.nalada){
        case "0": data.content += "<p>Radsej ani nehovorim. </p>"; break;
        case "1": data.content += "<p>Mam sa zle. </p>"; break;
        case "2": data.content += "<p>Mam sa dobreeee. </p>"; break;
    }
    delete data.nalada;

    data.content = "<div>" + data.content + "</div>";
    if (data.jedloR) {
        data.content += "<p>Mal som ranajky. </p>";
    } if (data.jedloO) {
        data.content += "<p>Mal som obed. </p>";
    } if (data.jedloV) {
        data.content += "<p>Mal som vecera. </p>";
    }

    console.log(JSON.stringify(data));

    if(window.confirm("SkutoÄŤne si ĹľelĂˇte ÄŤlĂˇnok odoslaĹĄ?")){
        $.ajax({
            type: "POST",
            url: "http://wt.kpi.fei.tuke.sk/api/article",
            contentType:"application/json;charset=UTF-8",
            dataType: "json",
            data:JSON.stringify(data),
            success: function (response) {
                if(response.id){
                    console.log(response.id);
                    window.alert("ÄŚlĂˇnok ĂşspeĹˇne uloĹľenĂ˝ s id=" + response.id + ".");
                    window.open('http://hron.fei.tuke.sk/~korecko/WebTechAkademia/wtKpiBlogBrowser/article.html?id='+response.id, '_blank');
                    $frm.trigger('reset');
                }
            },
            error: function (jxhr) {
                window.alert("Spracovanie neĂşspeĹˇnĂ©. Ăšdaje neboli zapĂ­sanĂ©. KĂłd chyby:" + status + "\n" + jxhr.statusText + "\n" + jxhr.responseText);
            }
        });

    }
}
