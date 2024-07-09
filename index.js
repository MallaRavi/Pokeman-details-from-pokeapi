document.getElementById('pokeman-details').addEventListener('submit',(e)=>{
    e.preventDefault();
    let searchName=document.getElementById('pokeman-id').value;
    console.log(searchName);
    if(searchName==''){
        searchName=Math.ceil(Math.random()*1025);
    }
    var apiDetails;
    if(Boolean(Number(searchName))){
        apiDetails=getDetails(Number(searchName));
    }
    else{
        apiDetails=getDetails(searchName);
    }
    

})

function getDetails(searchName){
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}/`)
        .then(response=>response.json())
        .then(data=>{
            let outputAbilities='';
            for(let i=0;i<data.abilities.length;i++){
                outputAbilities+=data.abilities[i].ability.name;
                if(i!=data.abilities.length-1){
                    outputAbilities+=', ';
                }
            }
            document.getElementById('output-id').innerText=data.id;
            document.getElementById('output-name').innerText=data.name;
            document.getElementById('output-baseExperience').innerText=data.base_experience;
            document.getElementById('output-abilities').innerText=outputAbilities;
            
        })
}