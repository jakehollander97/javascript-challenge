// from data.js
let tableData = data;

// YOUR CODE HERE!
console.log("Hello!");

let i = Math.floor(Math.random()*16777215).toString(16);
console.log(i);
d3.select("#filter-btn").style("background-color", `#${i}`);
document.getElementById("tru").onmousemove = function(event) {myFunction(event)};

function myFunction(e) {
    let i = Math.floor(Math.random()*16777215).toString(16);
    d3.select("#filter-btn").style("background-color", `#${i}`);
}

let tableItem = -1;

let dropdown_click = d3.select(".first");
let dropdown_click2 = d3.select(".second");
let dropdown_click3 = d3.select(".third");
let dropdown_click4 = d3.select(".fourth");
let dropdown_click5 = d3.select(".fifth");


dropdown_click.on("click", function() {
    d3.select("input").attr("placeholder", "Enter a Date");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "#DF691A");
    dropdown_click2.style("background-color", "transparent");
    dropdown_click3.style("background-color", "transparent");
    dropdown_click4.style("background-color", "transparent");
    dropdown_click5.style("background-color", "transparent");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 0;
});

dropdown_click2.on("click", function() {
    d3.select("input").attr("placeholder", "Enter a City");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "transparent");
    dropdown_click2.style("background-color", "#DF691A");
    dropdown_click3.style("background-color", "transparent");
    dropdown_click4.style("background-color", "transparent");
    dropdown_click5.style("background-color", "transparent");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 0;
});

dropdown_click3.on("click", function() {
    d3.select("input").attr("placeholder", "Enter a State");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "transparent");
    dropdown_click2.style("background-color", "transparent");
    dropdown_click3.style("background-color", "#DF691A");
    dropdown_click4.style("background-color", "transparent");
    dropdown_click5.style("background-color", "transparent");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 0;
});

dropdown_click4.on("click", function() {
    d3.select("input").attr("placeholder", "Enter a Country");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "transparent");
    dropdown_click2.style("background-color", "transparent");
    dropdown_click3.style("background-color", "transparent");
    dropdown_click4.style("background-color", "#DF691A");
    dropdown_click5.style("background-color", "transparent");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 0;
});

dropdown_click5.on("click", function() {
    d3.select("input").attr("placeholder", "Enter a Shape");
    d3.select(".form-control").property("value", "");
    dropdown_click.style("background-color", "transparent");
    dropdown_click2.style("background-color", "transparent");
    dropdown_click3.style("background-color", "transparent");
    dropdown_click4.style("background-color", "transparent");
    dropdown_click5.style("background-color", "#DF691A");
    d3.select("#dropdownMenuButton").style("background-color", "cornflowerblue");
    d3.select(".check-input").text("");
    tableItem = 0;
});

let oldTableBody = document.getElementsByTagName("table")[0];

// Append data array of objects to html table only first time
let tableBody = document.getElementsByTagName("table")[0];
for (let i=0; i<tableData.length; i++) {
    let newRow = tableBody.insertRow(1);

    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);

    cell0.innerHTML = tableData[i].datetime;
    cell1.innerHTML = tableData[i].city;
    cell2.innerHTML = tableData[i].state;
    cell3.innerHTML = tableData[i].country;
    cell4.innerHTML = tableData[i].shape;
    cell5.innerHTML = tableData[i].durationMinutes;
    cell6.innerHTML = tableData[i].comments;
}

setSearch = false;

let submit = d3.select("#filter-btn");
submit.on("click", function() {
    d3.event.preventDefault();
    console.log(tableItem);

    inputSearch = document.getElementById("datetime").value;
    if (inputSearch === "") {
        if (d3.select(".check-input").text() === "") {
            d3.select(".check-input").text("*please enter a valid input");
        }
        return;
    }
    else if (tableItem === -1) {
        if (d3.select(".check-input").text() === "" || d3.select(".check-input").text() === "*please enter a valid input") {
            d3.select(".check-input").text("*please select a category");
        }
        return;
    }
    else {
        d3.select(".check-input").text("");
    }
    // clear table
    if (setSearch === false) {
        for (let i=0; i<tableData.length; i++) {
            tableRow = document.getElementsByTagName("tr")[1];
            tableRow.parentNode.removeChild(tableRow);
        }
    }

    setSearch = true;

    if (tableItem === 0) {
        // see if already in table
        let tableBody = document.getElementsByTagName("table")[0];
        for (let i=1; i<tableBody.rows.length; i++) {
            if (tableBody.rows.item(i).cells.item(0).innerHTML === inputSearch) {
                console.log("UFO sighting(s) already in table")
                d3.select(".check-input").text("UFO sighting(s) already in table");
                return;
            }
        }
        // appends new rows if data matches input
        for (let i=0; i<tableData.length; i++) {
            if (tableData[i].datetime === inputSearch) {
                set = true;
                let newRow = tableBody.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
        d3.select(".check-input").text("Found all dates");
    }
    if (tableItem === 1) {
        // see if input already in table
        let tableBody = document.getElementsByTagName("table")[1];
        for (let i=1; i<tableBody.rows.length; i++) {
            if (tableBody.rows.item(i).cells.item(1).innerHTML === inputSearch) {
                console.log("UFO sighting(s) already in table")
                return;
            }
        }
        // appends new rows if data matches input
        for (let i=0; i<tableData.length; i++) {
            if (tableData[i].city === inputSearch) {
                set = true;
                let newRow = tableBody.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
        d3.select(".check-input").text("Found city");
    }
    if (tableItem === 2) {
        // see if input already in table
        let tableBody = document.getElementsByTagName("table")[2];
        for (let i=1; i<tableBody.rows.length; i++) {
            if (tableBody.rows.item(i).cells.item(1).innerHTML === inputSearch) {
                console.log("UFO sighting(s) already in table")
                return;
            }
        }
        // appends new rows if data matches input
        for (let i=0; i<tableData.length; i++) {
            if (tableData[i].state === inputSearch) {
                set = true;
                let newRow = tableBody.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
        d3.select(".check-input").text("Found state");
    }
    if (tableItem === 3) {
        // see if input already in table
        let tableBody = document.getElementsByTagName("table")[3];
        for (let i=1; i<tableBody.rows.length; i++) {
            if (tableBody.rows.item(i).cells.item(1).innerHTML === inputSearch) {
                console.log("UFO sighting(s) already in table")
                return;
            }
        }
        // appends new rows if data matches input
        for (let i=0; i<tableData.length; i++) {
            if (tableData[i].country === inputSearch) {
                set = true;
                let newRow = tableBody.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
        d3.select(".check-input").text("Found country");
    }
    if (tableItem === 4) {
        // see if input already in table
        let tableBody = document.getElementsByTagName("table")[4];
        for (let i=1; i<tableBody.rows.length; i++) {
            if (tableBody.rows.item(i).cells.item(1).innerHTML === inputSearch) {
                console.log("UFO sighting(s) already in table")
                return;
            }
        }
        // appends new rows if data matches input
        for (let i=0; i<tableData.length; i++) {
            if (tableData[i].shape === inputSearch) {
                set = true;
                let newRow = tableBody.insertRow(1);

                let cell0 = newRow.insertCell(0);
                let cell1 = newRow.insertCell(1);
                let cell2 = newRow.insertCell(2);
                let cell3 = newRow.insertCell(3);
                let cell4 = newRow.insertCell(4);
                let cell5 = newRow.insertCell(5);
                let cell6 = newRow.insertCell(6);
                
                cell0.innerHTML = tableData[i].datetime;
                cell1.innerHTML = tableData[i].city;
                cell2.innerHTML = tableData[i].state;
                cell3.innerHTML = tableData[i].country;
                cell4.innerHTML = tableData[i].shape;
                cell5.innerHTML = tableData[i].durationMinutes;
                cell6.innerHTML = tableData[i].comments;
            }
        }
        d3.select(".check-input").text("Found shape");
    }
});

