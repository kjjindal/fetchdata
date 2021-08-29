// javscript for fetch data from any api easily

var button=document.getElementById('find');
var output=document.getElementById('information');


button.addEventListener('click',()=>{
var inputField=document.getElementById('inputFind');

   var base_url=`https://api.dictionaryapi.dev/api/v2/entries/en/${inputField.value}`;

   fetch(base_url)
   .then((response)=>{
       return response.text()
   })
   .then((data)=>{
   
       // data in the format of json so we have to change in array
       var parse_data=JSON.parse(data);

        parse_data.map((finaldata)=>{
             output.innerHTML=output.innerHTML+`
       <p> <strong> Word :   </strong>    ${finaldata.word}   </p>
       <p> <strong> origin :   </strong>   ${finaldata.origin}   </p>
       <p> <strong> phonetic :   </strong>  ${finaldata.phonetic}  </p>
       <hr />
       `;
        })
       
   })
   


})





