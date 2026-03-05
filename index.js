
function displayName(data)
{
    for(let i=0;i<data.length;i++)
    {
        console.log(data[i].name.common)
    }
}

const req = new XMLHttpRequest()

req.addEventListener("load",(e)=>{
    let data = JSON.parse(e.target.responseText)
    displayName(data)
})

// req.addEventListener("error",(e)=>{
//     console.log(error)
// })

req.open("GET","https://restcountries.com/v3.1/all?fields=name")
req.send()
