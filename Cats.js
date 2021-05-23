// countCats([
//     ['##', 'dd', '00'],
//     ['^^', '..', 'ss'],
//     ['AA', 'dd', 'Oo'] => 1;

function countCats(backyards) {
    let cats = 0;
    //переменная для субмассива при вроверке
    let secondLevelOk = 0;
    // переменная для склееного массива
    let bigMass = [];
    // функция для поиска котов в склееном массиве
    let checkFunc = function () {
        if (secondLevelOk === backyards.length) {
            bigMass = backyards.reduce(function (a, b) {
                return a.concat(b);
                console.log("bigMass:" + bigMass)
            });
            for (let indexBM of bigMass) {
                if (indexBM == '^^') {
                    cats++
                }

            }
            return cats
            console.log(cats);
        } else {
        }
        console.log("checkFunc:backyards.length" + backyards.length)
    }

    // проверка на массив 1 уровень
    if (Array.isArray(backyards)) {
        console.log("massive - 1 level");
        console.log("backyards.length:" + backyards.length)
        // проверка на массив 2 уровня
        for (let indexBackyards = 0; indexBackyards < backyards.length; indexBackyards++) {
            if (Array.isArray(backyards[indexBackyards])) {
                console.log("massive - 2 level backyards[" + indexBackyards + "]")
                secondLevelOk++;
                console.log(secondLevelOk);
                checkFunc();
            } else {
                console.log("ne massive - 2 level backyards[" + indexBackyards + "]")
            }
        }

    } else {
        console.log("ne massive - 1 level")
    }

}
countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]);


