
async function getAddress() {
    const response = await fetch("http://ip.jsontest.com/");
    const response2 = await fetch("http://headers.jsontest.com/");

    Promise.all([
        fetch('http://ip.jsontest.com/').then(resp => resp.json()),
        fetch('http://headers.jsontest.com/').then(resp => resp.json()),
        fetch('http://date.jsontest.com').then(resp => resp.json()),
        fetch('http://validate.jsontest.com/?json={"key":"value"}').then(resp => resp.json()),
        fetch('http://md5.jsontest.com/?text=example_text').then(resp => resp.json()),
    ]).then(console.log);

    if (response.ok === false) {
        console.log("Fetch ERROR");
        return null;
    }
    const data = await response.json();
    const data2 = await response2.json();
    console.log(data, data2);
    return (data, data2);
}

getAddress();