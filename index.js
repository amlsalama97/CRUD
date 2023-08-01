

var productNameInput = document.getElementById('ProductName') ;
var ProductPriceInput = document.getElementById('ProductPrice') ;
var ProductCategoryInput = document.getElementById('ProductCategory');
var ProductDescInput = document.getElementById('ProductDesc');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var indexUpdate = 0;
// console.log(ProductDescInput , productNameInput , ProductCategoryInput , ProductPriceInput); 
// var inputSearch = document.getElementById('inputSearch');
var productArray = [] ;


if(localStorage.getItem('products') != null)
{
    productArray = JSON.parse(localStorage.getItem('products')) ;
    displayProduct(productArray);
} 


function addProduct()
{

    var product = {
        name:productNameInput.value,
        price:ProductPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescInput.value,
    }
    productArray.push(product); 
    displayProduct(productArray);
    localStorage.setItem("products", JSON.stringify(productArray) );
    console.log(productArray);
    clearFrom();
    deleltProduct(i);
 
   
}
function clearFrom()
{
    productNameInput.value = ""; 
    ProductPriceInput.value = "";
    ProductCategoryInput.value = "";
    ProductDescInput.value = "";
}
 


function displayProduct(productArray)
{
    var cartoona = ``;
    for(var i=0;i<productArray.length;i++)
   
    { 
        cartoona+=` <tr>
        <td>${productArray[i].name}</td> 
        <td>${productArray[i].price}</td>
        <td>${productArray[i].category}</td>
        <td>${productArray[i].desc}</td>
        <td><button  onclick="formUpdate(${i})" class="btn btn-outline-danger btn-sm">Update</button></td>
        <td> <button onclick="deleltProduct(${i})" class="btn btn-outline-secondary btn-sm">delete</button></td>
    </tr>`;
    }
    document.getElementById('tableBody').innerHTML=cartoona;

} 

function deleltProduct(productIndex)  
{
    productArray.splice(productIndex,1);
    localStorage.setItem("products", JSON.stringify(productArray) );
    displayProduct(productArray); 
     
}


function searchProduct (term)
{ 
    var matchProducts =[];
    for(var i=0;i<productArray.length;i++)
    {
        if(productArray[i].name.toLowerCase().includes( term.toLowerCase() )==true)
        {
            matchProducts.push( productArray[i] );
            
        }
    }
    console.log(matchProducts);
    displayProduct(matchProducts);
}

function formUpdate(index){

    
    indexUpdate = index
    // console.log(indexUpdate)
    

    addBtn.classList.replace('d-block' , 'd-none')
    updateBtn.classList.replace('d-none' , 'd-block')

  
    productNameInput.value = productArray[index].name;
    ProductPriceInput.value = productArray[index].price;
    ProductCategoryInput.value = productArray[index].category;
    ProductDescInput.value = productArray[index].desc;

}

 function updateInput(){
    var product = {
        name:productNameInput.value,
        price:ProductPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescInput.value,
    }
     productArray.splice( indexUpdate , 1, product )
     localStorage.setItem("products", JSON.stringify(productArray) );

     displayProduct(productArray);

     addBtn.classList.remove( 'd-none')
     updateBtn.classList.add('d-none' )
    
 }










