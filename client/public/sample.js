const settings={
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
};

const settings={
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    }
};
fetch("/students",settings).then(res => res.json()).then(res => {
    document.getElementById("students").innerText=res.map(s => s.Name).reduce((s1, s2) => s1 + " Booty " + s2);
});




