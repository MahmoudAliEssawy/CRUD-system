// get id's

let productDisc = document.getElementById('disc')
let productPrice = document.getElementById('price')
let productDicound = document.getElementById('discound')

let mainBtn = document.getElementById('main_btn')
let table = document.getElementById('tableData')


let curruntIndex=0;

let store;
initlizingStore()
// inshilzing variable


function add(){
    if(mainBtn.innerText == 'insert data'){
        addProduct()
    }else{
        updataProduct()
    }
}

function initlizingStore(){
    if(localStorage.getItem('user-data')!=null){
        store = JSON.parse(localStorage.getItem('user-data'));
        displayProduct()
    }else{
        store=[]
    }
    
}

// create data
function addProduct(){
    let products = {
        pName:productDisc.value,
        pPrice:productPrice.value,
        pDiscound:productDicound.value,
    }

   
    
    store.push(products)
    
    localStorage.setItem('user-data' , JSON.stringify(store))
    displayProduct()
    clearProudctInput()
}

// read data
function displayProduct(){

    let styleOf_i = `
    style='
        color:white;
        padding:10px 11px;
        font-size:1em;
        border-radius:50%;
    '
    `
    let styleOf_Btn = `
        style='
            border:none !important;
        '
    `
    // content -> جبيت البيانات كلها وحطتها فى المتغير دا
    let content = ''
    for(let index=0; index<store.length; index++){
        content+=`
            <tr>
                <td>${index+1}</td>
                <td>${store[index].pName}</td>
                <td>${store[index].pPrice}</td>
                <td>${store[index].pDiscound}</td>
                <td>${finalPrice()}</td>
                <td><button class='btn' onclick='deleteProduct(${index})' ${styleOf_Btn}><i class="fa-solid fa-trash-can bg-danger" id='hello' ${styleOf_i}></i></button></td>
                <td><button class='btn' ${styleOf_Btn} onclick='setInputs(${index})'><i class="fa-solid fa-square-pen bg-warning"  ${styleOf_i}></i></button></td>
            <tr>        
        `
    }

    
    table.innerHTML = content
}

// clear data
function clearProudctInput(){
    productDisc.value = ''
    productPrice.value = ''
    productDicound.value = ''
}

// calculate Proudct

// delete data
function deleteProduct(index){
    mainBtn.innerText = 'insert data'
    store.splice(index , 1)
    localStorage.setItem('user-data' , JSON.stringify(store));
    displayProduct()

}

// get data from store and put it in the inputs feield
function setInputs(index){
    curruntIndex = index;
    productDisc.value = store[index].pName
    productPrice.value = store[index].pPrice
    productDicound.value = store[index].pDiscound
    mainBtn.innerText = 'update data'
}

// update data 
function updataProduct(){
  
    store[curruntIndex].pName = productDisc.value;
    store[curruntIndex].pPrice = productPrice.value;
    store[curruntIndex].pDiscound = productDicound.value;
    localStorage.setItem('user-data' , JSON.stringify(store))
    displayProduct()
    mainBtn.innerText = 'insert data'
}   


function finalPrice(){
    try{
        if(productPrice.value - productDicound.value != 0){
            return productPrice.value - productDicound.value
        }else {
            throw new Error('Can not divded by Zero')
        }
    }catch{
        alert('something wrong try agin make sure you entred number')
        return 'no discound'
    }
}



// 



