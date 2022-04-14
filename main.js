let btn = document.querySelector('button')

const btnClicked = e => {
    console.log('The button has been clicked')
}

btn.addEventListener('click', btnClicked)

axios.get("https://swapi.dev/api/planets/?search=Alderaan")
.then(function (res){
    const data = res.data.results[0].residents
    for(let i = 0; i < data.length; i++){
        axios.get(data[i])
        .then(function(res1){
            const heading = document.createElement("h2")
            heading.textContent = res1.data.name
            document.body.appendChild(heading)
        })
    }
})


// axios.get("https://swapi.dev/api/planets/?search=Alderaan") // console.log res.data then res.data.results[0] then res.data.results[0].residents 
// .then (res => {
//     let residents = res.data.results[0].residents
//     residents.foreach(url => {
//         axios.get(url)
//         .then(resTwo => {
//             console.log(resTwo.data)
//             let body = document.querySelector('body')
//             let name = document.querySelector('h2')
//             name.textContent = resTwo.data.name
//             body.appendChild(name)
//         })
//     })
// })
