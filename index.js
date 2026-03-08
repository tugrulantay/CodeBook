
function searchFunction() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let ul = document.querySelector("ul");
    let li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let text = a.textContent;

        // Reset original text
        a.innerHTML = text;

        if (text.toLowerCase().includes(filter) && filter !== "") {
            let regex = new RegExp(filter, "gi");
            a.innerHTML = text.replace(regex, match => `<mark>${match}</mark>`);
            li[i].style.display = "";
        } 
        else if (filter === "") {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}