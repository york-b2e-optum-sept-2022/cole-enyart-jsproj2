const address = document.getElementById("address");
const headers = document.getElementById("headers");
const dateAndTime = document.getElementById("dateAndTime");
const jsonCheck = document.getElementById("jsonCheck");
const md5Calc = document.getElementById("md5Calc");

async function getAddress() {
    const response = await fetch("http://ip.jsontest.com/");
    const response2 = await fetch("http://headers.jsontest.com/");

    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    const data2 = await response2.json();

    await display((data.ip), JSON.stringify(data2));
    console.log(data, data2);

}

async function getDateTime() {
    const response = await fetch("http://date.jsontest.com");
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    console.log(data);
    try {
        dateAndTime.innerHTML += `${data.date}${data.time}`;
    } catch (error) {
        console.log("ERROR display");
        return null;
    }
}

async function getValid() {
    const text = {"key":"value"};
    const response = await fetch(`http://validate.jsontest.com/?json=${text}`);
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    console.log(data);
}

async function getMd5() {
    const text = "example text";
    const response = await fetch(`http://md5.jsontest.com/?text=${text}`);
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    console.log(data);
}

async function display(data, data2) {
    try {
        address.innerHTML += `${data}`;
        headers.innerHTML += `${data2}`;

    } catch (error) {
        console.log("ERROR display");
        return null;
    }
}

getAddress();
getDateTime();
