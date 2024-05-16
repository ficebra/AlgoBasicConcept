function triInsert(tab) {
    for (let i = 0; i < tab.length; i++) {
        const eltCourant = tab[i];
        let j = i - 1;
        while (j >= 0 && tab[j] > eltCourant) {
            tab[j+1] = tab[j];
            j--;
        }
        tab[j+1] = eltCourant;
    }
}

const monTableau = [6, 5, 3, 1, 8, 7, 2, 4];
triInsert(monTableau);
console.log("Tableau trié :", monTableau);