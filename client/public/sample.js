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
    let ajax = await fetch("/api/upload",settings);
    let data = await ajax.json();
    console.info(data);
});
})();



