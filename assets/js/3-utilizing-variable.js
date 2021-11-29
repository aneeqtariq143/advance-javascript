var hoisted = 'this got hoisted';
try {
    console.log(hoisted);
    console.log(notHoisted1);
} catch (err) {
    console.log(err)
}
let notHoisted1 = 5;
try {
    console.log(notHoisted2);
} catch (err) {
    console.log(err)
}
const notHoisted2 = [1, 2, 3];
try {
    notHoisted2 = 'new value';
} catch (err) {
    console.log(err)
}
notHoisted2.push(5);