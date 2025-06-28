let searchInpE=document.getElementById("searchId");
let resultsSectionE=document.getElementById("resultsSection");


function searchResults(search_results){
//   let res1=search_results[0];
  for (let res1 of search_results){
//   console.log(res1);
  let {title,link,description}=res1;
//   console.log(title);
//   console.log(link);
//   console.log(description);

  let resultDivE=document.createElement("div");
  resultDivE.classList.add("resultContainer");
  resultsSectionE.appendChild(resultDivE);

  let titleAnchorE=document.createElement("a");
  titleAnchorE.classList.add("title");
  titleAnchorE.href=link;  
  titleAnchorE.target="_blank";
  titleAnchorE.textContent=title;
  resultDivE.appendChild(titleAnchorE);

  let brE=document.createElement("br");
  resultDivE.appendChild(brE);

  let linkAnchorE=document.createElement("a");
  linkAnchorE.classList.add("link");
  linkAnchorE.href=link;  
  linkAnchorE.target="_blank";
  linkAnchorE.textContent=link;
  resultDivE.appendChild(linkAnchorE);

  let brE2=document.createElement("br");
  resultDivE.appendChild(brE2);

  let paraE=document.createElement("p");
  paraE.textContent=description;
  paraE.classList.add("discription");
  resultDivE.appendChild(paraE);
  }
}




function fetchResults(value)
{
 let url=`https://apis.ccbp.in/wiki-search?search=${value}`;  
 let options={
    method:"GET"
 };

 fetch(url,options)
 .then(function(response){
    return response.json();
 })
 .then(function(jsondata){
    let {search_results}=jsondata
    searchResults(search_results);
 });


}



function searchFunc(event){
   
   if(event.key === "Enter")
   { 
    resultsSectionE.innerHTML="";
    let value=searchInpE.value;
    
     if(value==="")
     {
       alert("Please Enter something to see INFO");
     } 
     else
     {
       fetchResults(value);
     }  
     
   }
   
}

searchInpE.addEventListener("keydown",searchFunc);
