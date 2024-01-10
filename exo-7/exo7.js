// console.log("exo-7");

const inpSearch = document.getElementById('inpSearch')
const btnSearch = document.getElementById('btnSearch')


// const filteredData = jsonDatas.filter(item => item.description.toLowerCase())
// console.log(filteredData)



btnSearch.addEventListener('click', function () {

    const artSearch = inpSearch.value;
    console.log("article rechercher:", artSearch)

    let result = null

    for (var i = 0; i < jsonDatas.length; i++) {
        if (artSearch === jsonDatas[i].name) {
            result = jsonDatas[i];
            console.log(result)
            // 
            break
        }
    }

    if (result) {
        let table = document.createElement("table")
        let cols = Object.keys(result)
        let thead = document.createElement("thead")
        let tr = document.createElement("tr");

        cols.forEach((item) => {
            let th = document.createElement("th");
            th.innerText = item;
            tr.appendChild(th);
        });
        thead.appendChild(tr)
        table.appendChild(thead)

        let tbody = document.createElement('tbody')
        let trBody = document.createElement("tr")

        cols.forEach((item) => {
            let td = document.createElement("td");
            td.innerText = result[item];
            trBody.appendChild(td);
        });
        tbody.appendChild(trBody)
        table.appendChild(tbody)

        listResult.innerHTML = ""
        listResult.appendChild(table)
    }else{
        listResult.innerHTML = "<p>Pas resulta</p>"
    }


    // let listResult = document.getElementById('listResult')
    // let table = document.createElement("table")
    // let cols = Object.keys(result)
    // let thead = document.createElement("thead")
    // let tr = document.createElement("tr");

    // cols.forEach((item) => {
    //     let th = document.createElement("th");
    //     th.innerText = item;
    //     tr.appendChild(th);
    // });

    // thead.appendChild(tr);
    // table.append(tr)

    // listResult.forEach((item) => {
    //     let tr = document.createElement("tr");
    //     let vals = Object.values(item);

    //     vals.forEach((elem) => {
    //         let td = document.createElement("td");
    //         td.innerText = elem;
    //         tr.appendChild(td);
    //     });
    //     table.appendChild(tr);
    // })

    // listResult.appendChild(table)
})


inpSearch.addEventListener('keyup', function (event) {
    // touche "entre" (keycode 13) = button recherche
    if (event.keyCode === 13) {
        btnSearch.click();
    }
});



let list = document.getElementById("list")
let table = document.createElement("table")
let cols = Object.keys(jsonDatas[0])
let thead = document.createElement("thead")
let tr = document.createElement("tr");

cols.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
});

thead.appendChild(tr);
table.append(tr)

jsonDatas.forEach((item) => {
    let tr = document.createElement("tr");
    let vals = Object.values(item);

    vals.forEach((elem) => {
        let td = document.createElement("td");
        td.innerText = elem;
        tr.appendChild(td);
    });
    table.appendChild(tr);
});
list.appendChild(table)
// console.log(jsonDatas);