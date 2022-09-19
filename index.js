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
        for (const property in data) {
            output += `<p><b>${property}:</b> ${data[property]}</p>`;
        }

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
        for (const property in data) {
            output += `<p><b>${property}:</b> ${data[property]}</p>`;
        }

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
        for (const property in data) {
            output += `<p><b>${property}:</b> ${data[property]}</p>`;
        }

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
        for (const property in data) {
            output += `<p><b>${property}:</b> ${data[property]}</p>`;
        }

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
        for (const property in data) {
            output += `<p><b>${property}:</b> ${data[property]}</p>`;
        }

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