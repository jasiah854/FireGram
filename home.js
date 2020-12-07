const names = ["james342", "bob42", "jasiahXp3","Lisa_the_explorer","jasmine21x","buddyBoo762","Zac_is_Mac43", "x8whds", "mj23Goat", "im_NOT_the_last_jedi"];

for (var i = 0; i < 10; i++){
    console.log(`hello ${names[i]} times`);
    var div = document.createElement("div");                
    div.className = "card card-plus"
    div.innerHTML = `<img style="height: 350px; max-width: 650px; width: auto;"class="card-img-top" src="./images/img${i}.jpg" alt="img">
    <div class="card-body" style="border: 1px solid #ffc61a;">
    <h2 style="margin: 2px -5px; font-size: 1.2rem; color: #181818;">@${names[i]}</h2>
    <p class="card-text" style="color: #181818;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>`;             
    document.getElementById("module").appendChild(div);
} 
