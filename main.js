let user = 0
function papier(){
    user=0
    fight()
}
function kamien(){
    user=1
    fight()
}
function nozyce(){
    user=2
    fight()
}
function fight(){
    let computer = Math.floor(Math.random()*3)
    switch (computer){
        case 0:
            document.getElementById("message").innerHTML =("Komputer wybrał papier<br>")
            switch (user){
                case 0:
                    document.getElementById("message").innerHTML +=("Remis!")
                    break;
                case 1:
                    document.getElementById("message").innerHTML +=("Przegrana!")
                    break;
                case 2:
                    document.getElementById("message").innerHTML +=("Wygrana!")
                    break;
            }
            break;
        case 1:
            document.getElementById("message").innerHTML =("Komputer wybrał kamień<br>")
            switch (user){
                case 0:
                    document.getElementById("message").innerHTML +=("Wygrana!")
                    break;
                case 1:
                    document.getElementById("message").innerHTML +=("Remis!")
                    break;
                case 2:
                    document.getElementById("message").innerHTML +=("Przegrana!")
                    break;
            }
            break;
        case 2:
            document.getElementById("message").innerHTML =("Komputer wybrał nożyce<br>")
            switch (user){
                case 0:
                    document.getElementById("message").innerHTML +=("Przegrana!")
                    break;
                case 1:
                    document.getElementById("message").innerHTML +=("Wygrana!")
                    break;
                case 2:
                    document.getElementById("message").innerHTML +=("Remis!")
                    break;
            }
            break;
    }
}