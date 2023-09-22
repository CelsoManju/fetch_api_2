
var currentPage = 1;
function loadPage(pageNumber) {

    if (pageNumber < 1 || pageNumber > 50) {
        return; 
      }

    var contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';
    console.log(pageNumber);    
    construct(contentDiv,pageNumber);    
    currentPage = pageNumber;
  }
  


async function getdata(){
    try{
    let res= await fetch('https://random.dog/woof.json');
    let data = res.json();   
    return data;
    }
    catch(e){console.log(e)}
   
}
async function construct(contentDiv,pageNumber){
    let data = await getdata();
    let div =  document.createElement('div');
    console.log(data)
    console.log(data.url)
     div.innerHTML = `<div class="card cardwrapper" style="width: 30rem;" >
    <img src=${data.url} class="card-img-top" >     
    </div>
    </div>`
   contentDiv.appendChild(div);


}


