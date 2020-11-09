const orders = [31.54, 19.99, 4.55];

const cycki = orders.reduce((total, amount) => total + amount);
let yyy = 0;
const dupaa = orders.reduce((total, amount, index, array) => {
    total += amount;
    if(index === array.length-1) {
        return yyy = total / array.length;
    }

    return total;
});

const members = [1, 2, 3, 3, 4];
const uniqueMembers = members.reduce((total, member) => {
    if (total.indexOf(member) === -1) total.push(member);
    return total;
}, []);



// reduce stosujemy do
// 1. Dodawania liczb w array 2. obliczenie średniej w array 3. Sprawdzenie czy w arrayu znajdują się duplikaty
