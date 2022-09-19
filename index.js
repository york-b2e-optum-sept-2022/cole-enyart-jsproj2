const address = document.getElementById("address");
const headers = document.getElementById("headers");
const dateAndTime = document.getElementById("dateAndTime");
const jsonCheck = document.getElementById("jsonCheck");
const md5Calc = document.getElementById("md5Calc");

async function getAddress() {
    const response = await fetch("http://ip.jsontest.com/");
    const response2 = await fetch("http://headers.jsontest.com/");

    // Promise.all([
    //     fetch('http://ip.jsontest.com/').then(resp => resp.json()),
    //     fetch('http://headers.jsontest.com/').then(resp => resp.json()),
    //     fetch('http://date.jsontest.com').then(resp => resp.json()),
    //     fetch('http://validate.jsontest.com/?json={"key":"value"}').then(resp => resp.json()),
    //     fetch('http://md5.jsontest.com/?text=example_text').then(resp => resp.json()),
    // ]).then(console.log);

    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    const data2 = await response2.json();

    await display(JSON.stringify(data), JSON.stringify(data2));
    console.log(data, data2);

}

getAddress();

async function display(data, data2) {
    try {
        address.innerHTML += `${data}`;
        headers.innerHTML += `${data2}`;

    } catch (error) {
        console.log("ERROR display");
        return null;
    }
}