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
        address.innerHTML = `<div>${data.ip}</div>`;
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
        headers.innerHTML = `<div>${JSON.stringify(data)}</div>`;
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
        dateAndTime.innerHTML = `<div>${data.date}${data.time}</div>`;
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
        (data.validate
            ? jsonCheck.innerHTML = `<div>${data.validate}</div>`
            : jsonCheck.innerHTML = `<div>${data.validate}<br>${data.error}</div>`);
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
        md5Calc.innerHTML = `<div>${data.original}<br>${data.md5}</div>`;
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