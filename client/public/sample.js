(function() {
const settings={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
};

document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();
    const files = document.querySelector('[type=file]').files
    settings.body = files[0];
    console.log(files[0]);
    let ajax = await fetch("/api/upload",settings);
    let data = await ajax.json();
    if (data) document.cookie = `csvFileName=${files[0].name}`;
    console.info(data);
});

document.getElementById("butt").addEventListener("click", async e => {
    let config = {
    method:"POST",
    body: JSON.stringify({ StudentId: "12333421"}),
    headers:{
        "Content-Type":"application/json"
        }
    };

    let ajax = await fetch("/api/add", config);
    let body = await ajax.json();
    console.info(body);
});

document.getElementById("butt2").addEventListener("click", async e => {
    let config = {
    method:"GET",
    headers:{
        "Content-Type":"application/json"
        }
    };

    let ajax = await fetch("/api/student/ASCCQ", config);
    let body = await ajax.json();
    console.info(body);
});

document.getElementById("butt3").addEventListener("click", async e => {
    let config = {
    method:"GET",
    headers:{
        "Content-Type":"application/json"
        }
    };

    let ajax = await fetch("/api/students", config);
    let body = await ajax.json();
    console.info(body);
});

})();



