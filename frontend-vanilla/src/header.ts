async function getData() {
    const url = "./header.html";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.text();
        console.log(result);

        const header = document.getElementById("header");
        if (header) {header.innerHTML = result;}

    } catch (error) {
        console.error(error.message);
    }
}

getData();