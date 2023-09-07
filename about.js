// Mendapatkan elemen-elemen dari halaman HTML
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      // Mendapatkan mode tampilan (Dark/Light Mode) dari localStorage
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
         // Jika mode tampilan adalah "dark-mode", tambahkan kelas "dark" pada elemen body
            body.classList.add("dark");
          }

// Event listener untuk mengganti mode tampilan (Dark/Light Mode)
      modeToggle.addEventListener("click" , () =>{
           // Toggling kelas "dark" pada elemen body
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

// Memeriksa apakah elemen body memiliki kelas "dark" (mode tampilan "dark-mode")
        if(!body.classList.contains("dark")){
            // Jika tidak memiliki kelas "dark" (mode tampilan "light-mode"), simpan mode "light-mode" ke localStorage
            localStorage.setItem("mode" , "light-mode");
        }else{
           // Jika memiliki kelas "dark" (mode tampilan "dark-mode"), simpan mode "dark-mode" ke localStorage
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// Event listener untuk menampilkan dan menyembunyikan kolom pencarian
        searchToggle.addEventListener("click" , () =>{
          // Toggling kelas "active" pada elemen "searchToggle"
        searchToggle.classList.toggle("active");
      });
 
      
// Event listener untuk membuka sidebar navigasi
sidebarOpen.addEventListener("click" , () =>{
  // Menambahkan kelas "active" pada elemen "nav" untuk membuka sidebar navigasi
    nav.classList.add("active");
});

// Event listener pada elemen body untuk menutup sidebar navigasi jika pengguna mengklik di luar area sidebar
body.addEventListener("click" , e =>{
    let clickedElm = e.target;

          // Memeriksa apakah elemen yang di-klik bukan "sidebarOpen" atau "menu" navigasi
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        // Jika bukan, menghapus kelas "active" dari elemen "nav" untuk menutup sidebar navigasi
        nav.classList.remove("active");
    }
});


