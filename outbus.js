const busInfo = {
    '6.10am': {
busNo: '46',
busRoute: 'kurmallipalayam-pollachi',
busTiming: '6:00 AM'
},
'7.10am': {
busNo: '33d',
busRoute: 'jakkarpalayam-gandi',
busTiming: '7:10 AM'
},
'7:50 am': {
busNo: ' S2',
busRoute: 'Tirupur to Kinathukadavu',
busTiming: '7:50 AM'
},
'8:40am': {
busNo: '4B',
busRoute: 'Mettuvavi to Pollachi',
busTiming: '8:40 AM'
},
'9:20am': {
busNo: '19/28',
busRoute: 'Vadasithur to Kinathukadavu',
busTiming: '9:20 AM'
},
'9:50am': {
busNo: 'Mofesil Bus',
busRoute: 'Tirupur to Kinathukadavu',
busTiming: '9:50 AM'
},
'11:50am': {
busNo: '46',
busRoute: 'Vadasithur to Pollachi',
busTiming: '11:50 AM'
},
'12:00pm': {
busNo: '33D',
busRoute: 'Kattampatti to Kinathukadavu',
busTiming: '12:00 PM'
},
'1:10pm': {
busNo: 'S2',
busRoute: 'Senjerimala to Kinathukadavu',
busTiming: '1:10 PM'
},
'1:40pm': {
busNo: '4B',
busRoute: 'Mettuvavi to Pollachi',
busTiming: '1:40 PM'
},
'2:45pm': {
busNo: '33D',
busRoute: 'Kattampatti to Gandhipuram',
busTiming: '2:45 PM'
},
'3:00pm': {
busNo: 'S2',
busRoute: 'Sulthanpet to Kinathukadavu',
busTiming: '3:00 PM'
},
'4:35pm': {
busNo: '19/28',
busRoute: 'Vadasithur to Pollachi',
busTiming: '4:35 PM'
},
'5:00pm': {
busNo: '46',
busRoute: 'Mettuvavi to Pollachi',
busTiming: '5:00 PM'
},
'5:20pm': {
busNo: 'S2',
busRoute: 'Sulthanpet to Kinathukadavu',
busTiming: '5:20 PM'
},
'5:45pm': {
busNo: '4B',
busRoute: 'Mettuvavi to Pollachi',
busTiming: '5:45 PM'
},
'6:10pm': {
busNo: 'S2',
busRoute: 'Tirupur to Kinathukadavu',
busTiming: '6:10 PM'
},
'6:20pm': {
busNo: '33D',
busRoute: 'Kattampatti to Gandhipuram',
busTiming: '6:20 PM'
},
'7:40pm': {
busNo: 'S2',
busRoute: 'Sulthanpet to Kinathukadavu',
busTiming: '7:40 PM'
},
'10:00pm': {
busNo: 'Mofesil Bus',
busRoute: 'Tirupur to Kinathukadavu',
busTiming: '10:00 PM'
}
    // Your bus information here...
};

let busRoutes = Object.keys(busInfo);

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const infoBox = document.querySelector(".info");

inputBox.addEventListener("input", () => {
    let inputValue = inputBox.value.toLowerCase();
    let results = busRoutes.filter((route) => route.toLowerCase().includes(inputValue));
    displayResults(results);
});

function displayResults(results) {
    if (results.length === 0) {
        resultBox.style.display = "none";
        infoBox.classList.remove("visible");
    } else {
        resultBox.style.display = "block";
        resultBox.innerHTML = "<ul>" + results.map((result) => `<li onclick="selectRoute('${result}')">${result}</li>`).join('') + "</ul>";
    }
}

function selectRoute(route) {
    inputBox.value = route;
    resultBox.style.display = "none";
    updateInfoBox(route);
}

function updateInfoBox(route) {
    const info = busInfo[route];
    infoBox.innerHTML = `
        <p>Bus No: <strong>${info.busNo}</strong></p>
        <p>Bus Route: <strong>${info.busRoute}</strong></p>
        <p>Bus Timing: <strong>${info.busTiming}</strong></p>
    `;
    infoBox.classList.add("visible");
}

function performSearch() {
    alert('Searching for: ' + inputBox.value);
}