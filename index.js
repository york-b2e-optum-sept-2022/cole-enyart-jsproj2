const address = document.getElementById("address");
const headers = document.getElementById("headers");
const dateAndTime = document.getElementById("dateAndTime");
const jsonCheck = document.getElementById("jsonCheck");
const md5Calc = document.getElementById("md5Calc");

async function apiAddress() {
    const response = await fetch("http://ip.jsontest.com/");
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }

    const data = await response.json();
    try {
        let output = "";
        // convert data into array of keys, return data enumerable properties
        const keys = Object.keys(data);
        // iterate over keys, add values into output
        keys.forEach((key) => {
            output += `<p><b>${key}:</b> ${data[key]}</p>`;
        })

        address.innerHTML = output;
    } catch (error) {
        console.log("ERROR display");
        return null;
    }

    return data;
}

async function httpHeaders() {
    const response = await fetch("http://headers.jsontest.com/");
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }

    const data = await response.json();
    try {
        let output = "";
        // convert data into array of keys, return data enumerable properties
        const keys = Object.keys(data);
        // iterate over keys, add values into output
        keys.forEach((key) => {
            output += `<p><b>${key}:</b> ${data[key]}</p>`;
        })

        headers.innerHTML = output;
    } catch (error) {
        console.log("ERROR display");
        return null;
    }

    return data;
}

async function dateTime() {
    const response = await fetch("http://date.jsontest.com");
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }

    const data = await response.json();
    try {
        let output = "";
        // convert data into array of keys, return data enumerable properties
        const keys = Object.keys(data);
        // iterate over keys, add values into output
        keys.forEach((key) => {
            output += `<p><b>${key}:</b> ${data[key]}</p>`;
        })

        dateAndTime.innerHTML = output;
    } catch (error) {
        console.log("ERROR display");
        return null;
    }

    return data;
}

async function checkValid() {
    const text = document.getElementById("json").value;
    const response = await fetch(`http://validate.jsontest.com/?json=${text}`);
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }

    const data = await response.json();
    try {
        let output = "";
        // convert data into array of keys, return data enumerable properties
        const keys = Object.keys(data);
        // iterate over keys, add values into output
        keys.forEach((key) => {
            output += `<p><b>${key}:</b> ${data[key]}</p>`;
        })

        jsonCheck.innerHTML = output;
    } catch (error) {
        console.log("ERROR display");
        return null;
    }

    return data;
}

async function calcMd5() {
    const text = document.getElementById("md5").value;
    const response = await fetch(`http://md5.jsontest.com/?text=${text}`);
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }

    const data = await response.json();
    try {
        let output = "";
        // convert data into array of keys, return data enumerable properties
        const keys = Object.keys(data);
        // iterate over keys, add values into output
        keys.forEach((key) => {
            output += `<p><b>${key}:</b> ${data[key]}</p>`;
        })

        md5Calc.innerHTML = output;
    } catch (error) {
        console.log("ERROR display");
        return null;
    }

    return data;
}

async function start() {
    await apiAddress();
    await httpHeaders();
    setInterval(await dateTime, 1000);
}

start();