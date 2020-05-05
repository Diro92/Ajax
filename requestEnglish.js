
var a;
var url = 'http://localhost:3000/Database'
var method = 'GET'
var results;
var html;
var y;
//--------  
function RequestEnglish(url, meth, a){

    if(a =='Verbs'){
         y = 0;
        $.ajax({
        url:url,
        method:meth,
    }).done((data)=>{
        results = data[0].Verbs;
        html = '<h1>Verbs</h1>'
        for(var x=0;x<results.length;x++){

        html+= data[0].Verbs[x].id+ '.' + data[0].Verbs[x].Verb + '<br>'
        }
        $(".right").html(html);
    }).fail(error=>{console.log(error)})

    }else if(a =='Nouns'){
         y = 1;
        $.ajax({
        url:url,
        method:meth,
    }).done((data)=>{
        results = data[1].Nouns;
        html = '<h1>Nouns</h1>'
        for(var x=0;x<results.length;x++){
            
        html+= data[y].Nouns[x].id+ '.' + data[y].Nouns[x].Verb + '<br>'
        }
        $(".right").html(html);
    }).fail(error=>{console.log(error)})

    }else if(a =='Adjectives'){
       
        y=2;
        $.ajax({
        url:url,
        method:meth,
     }).done((data)=>{
        
        results = data[2].Adjetives;
        html = '<h1>Adjectives</h1>'
        for(var x=0;x<results.length;x++){
            
        html+= data[y].Adjetives[x].id+ '.' + data[y].Adjetives[x].Verb + '<br>'
        }
        $(".right").html(html);
     }).fail(error=>{console.log(error)})

    }else if(a=='Phrases'){
        y=3;
        $.ajax({
        url:url,
        method:meth,
     }).done((data)=>{
        
        results = data[3].Phrases;
        html = '<h1>Phrases</h1>'
        for(var x=0;x<results.length;x++){
            
        html+= data[y].Phrases[x].id+ '.' + data[y].Phrases[x].Verb + '<br>'
        }
        $(".right").html(html);
     }).fail(error=>{console.log(error)})
    }




}
