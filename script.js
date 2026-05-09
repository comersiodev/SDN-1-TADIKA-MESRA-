<script>

document
.getElementById("loginBtn")
.addEventListener("click", ()=>{

    const nama =
    document
    .getElementById("namaUser")
    .value.trim();

    const tanggal =
    document
    .getElementById("tanggalUser")
    .value;

    const email =
    document
    .getElementById("emailUser")
    .value.trim();

    if(
        !nama ||
        !tanggal ||
        !email
    ){

        alert(
        "Isi semua data!"
        );

        return;

    }

    localStorage.setItem(
    "loginData",

    JSON.stringify({

        nama,
        tanggal,
        email

    }));

    window.location.href =
    "index.html";

});

</script>