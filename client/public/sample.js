const settings={
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
};

const settings1={
    method:"POST",
    headers:{
        "Content-Type":"application/pdf"
    }
};

document.getElementById("form").addEventListener("submit", e => {
    const files = document.querySelector('[type=file]').files
  const formData = new FormData();

  formData.append("data", files[0]);
  settings1.body = formData;
    fetch("/api/bitch",settings1).then(res => console.log(res));
})



