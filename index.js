
async function getAddress() {
    const response = await fetch("http://ip.jsontest.com/");
    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    console.log(data);
    return data;
}

getAddress();