

fetch(test1Path)
    .then((data) => data.text())
    .then((text) => {
        console.log(text);
    });
