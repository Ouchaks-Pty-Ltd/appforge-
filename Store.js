let apps=[]

fetch("apps.json")
.then(r=>r.json())
.then(data=>{

apps=data.apps
render(apps)

})

function render(list){

let container=document.getElementById("apps")

container.innerHTML=""

list.forEach(a=>{

container.innerHTML+=`

<div class="card">

<h2>${a.name}</h2>
<p>${a.price}</p>

<a href="${a.url}">
<button>Open</button>
</a>

</div>

`

})

}

function search(){

let term=document
.getElementById("search")
.value
.toLowerCase()

let filtered=apps.filter(a=>

a.name.toLowerCase().includes(term)

)

render(filtered)

}
