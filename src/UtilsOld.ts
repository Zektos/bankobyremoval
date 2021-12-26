export function GeneratePlate(): any {
    let totalNumberCount = 0; // Exactly 15
    let column1Array = []; // Min 1, Max 3
    let column2Array = []; // Min 1, Max 3
    let column3Array = []; // Min 1, Max 3
    let column4Array = []; // Min 1, Max 3
    let column5Array = []; // Min 1, Max 3
    let column6Array = []; // Min 1, Max 3
    let column7Array = []; // Min 1, Max 3
    let column8Array = []; // Min 1, Max 3
    let column9Array = []; // Min 1, Max 3
    let row1Array = []; // Exactly 5
    let row2Array = []; // Exactly 5
    let row3Array = []; // Exactly 5

    // Generate 1 number for each column
    for (let i = 9; i < 99; i += 10) {
        let newNumber = GenerateBankoNumber(i === 9 ? 1 : i - 9, i === 89 ? 90 : i);
        switch (i) {
            case 9:
                column1Array.push(newNumber);
                break;
            case 19:
                column2Array.push(newNumber);
                break;
            case 29:
                column3Array.push(newNumber);
                break;
            case 39:
                column4Array.push(newNumber);
                break;
            case 49:
                column5Array.push(newNumber);
                break;
            case 59:
                column6Array.push(newNumber);
                break;
            case 69:
                column7Array.push(newNumber);
                break;
            case 79:
                column8Array.push(newNumber);
                break;
            case 89:
                column9Array.push(newNumber);
                break;
        }
        totalNumberCount++;
    }

    // Generate the rest of the numbers
    while (totalNumberCount < 15) {
        let newNumber = GenerateBankoNumber();

        if (newNumber < 10) { // Number matches column 1
            if (column1Array.length < 3 && column1Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column1Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 20) {
            if (column2Array.length < 3 && column2Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column2Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 30) {
            if (column3Array.length < 3 && column3Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column3Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 40) {
            if (column4Array.length < 3 && column4Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column4Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 50) {
            if (column5Array.length < 3 && column5Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column5Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 60) {
            if (column6Array.length < 3 && column6Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column6Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 70) {
            if (column7Array.length < 3 && column7Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column7Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 80) {
            if (column8Array.length < 3 && column8Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column8Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
        if (newNumber < 91) {
            if (column9Array.length < 3 && column9Array.indexOf(newNumber) === -1) { // Check if max is reached, and that the number is not already in column
                column9Array.push(newNumber);
                totalNumberCount++;
            }
            continue;
        }
    }

    // Sort Arrays
    column1Array.sort((a, b) => b - a);
    column2Array.sort((a, b) => b - a);
    column3Array.sort((a, b) => b - a);
    column4Array.sort((a, b) => b - a);
    column5Array.sort((a, b) => b - a);
    column6Array.sort((a, b) => b - a);
    column7Array.sort((a, b) => b - a);
    column8Array.sort((a, b) => b - a);
    column9Array.sort((a, b) => b - a);

    let arraysOf3: any[] = [];
    let arraysOf2: any[] = [];
    let arraysOf1: any[] = [];
    let arraysOf0: any[] = [];

    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                if (column1Array.length === i) arraysOf0.push(1);
                if (column2Array.length === i) arraysOf0.push(2);
                if (column3Array.length === i) arraysOf0.push(3);
                if (column4Array.length === i) arraysOf0.push(4);
                if (column5Array.length === i) arraysOf0.push(5);
                if (column6Array.length === i) arraysOf0.push(6);
                if (column7Array.length === i) arraysOf0.push(7);
                if (column8Array.length === i) arraysOf0.push(8);
                if (column9Array.length === i) arraysOf0.push(9);
                break;
            case 1:
                if (column1Array.length === i) arraysOf1.push(1);
                if (column2Array.length === i) arraysOf1.push(2);
                if (column3Array.length === i) arraysOf1.push(3);
                if (column4Array.length === i) arraysOf1.push(4);
                if (column5Array.length === i) arraysOf1.push(5);
                if (column6Array.length === i) arraysOf1.push(6);
                if (column7Array.length === i) arraysOf1.push(7);
                if (column8Array.length === i) arraysOf1.push(8);
                if (column9Array.length === i) arraysOf1.push(9);
                break;
            case 2:
                if (column1Array.length === i) arraysOf2.push(1);
                if (column2Array.length === i) arraysOf2.push(2);
                if (column3Array.length === i) arraysOf2.push(3);
                if (column4Array.length === i) arraysOf2.push(4);
                if (column5Array.length === i) arraysOf2.push(5);
                if (column6Array.length === i) arraysOf2.push(6);
                if (column7Array.length === i) arraysOf2.push(7);
                if (column8Array.length === i) arraysOf2.push(8);
                if (column9Array.length === i) arraysOf2.push(9);
                break;
            case 3:
                if (column1Array.length === i) arraysOf3.push(1);
                if (column2Array.length === i) arraysOf3.push(2);
                if (column3Array.length === i) arraysOf3.push(3);
                if (column4Array.length === i) arraysOf3.push(4);
                if (column5Array.length === i) arraysOf3.push(5);
                if (column6Array.length === i) arraysOf3.push(6);
                if (column7Array.length === i) arraysOf3.push(7);
                if (column8Array.length === i) arraysOf3.push(8);
                if (column9Array.length === i) arraysOf3.push(9);
                break;
        }
    }


    //
    let currentRowCounter = 3;
    while (currentRowCounter > 0) {
        let newRow = [];
        let blackList: any[] = [];
        while (newRow.length < 5) {
            let shiftedNumb: any = undefined;
            let rndColumn: any = undefined;
            if (arraysOf3.length > 0) {
                ShuffleArray(arraysOf3);
                arraysOf3.every((v) => {
                    if (blackList.indexOf(v) === -1) {
                        rndColumn = arraysOf3.shift();
                        arraysOf2.push(rndColumn);
                        return false;
                    }
                    return true;
                });
            }
            if (rndColumn == undefined && arraysOf2.length > 0) {
                ShuffleArray(arraysOf2);
                arraysOf2.every((v) => {
                    if (blackList.indexOf(v) === -1) {
                        rndColumn = arraysOf2.shift();
                        arraysOf1.push(rndColumn);
                        return false;
                    }
                    return true;
                });
            }
            if (rndColumn == undefined && arraysOf1.length > 0) {
                ShuffleArray(arraysOf1);
                arraysOf1.every((v) => {
                    if (blackList.indexOf(v) === -1) {
                        rndColumn = arraysOf1.shift();
                        arraysOf0.push(rndColumn);
                        return false;
                    }
                    return true;
                });
            }

            if (blackList.indexOf(rndColumn) != -1 || rndColumn == undefined) debugger;

            switch (rndColumn as number) {
                case 1:
                    shiftedNumb = column1Array.shift();
                    break;
                case 2:
                    shiftedNumb = column2Array.shift();
                    break;
                case 3:
                    shiftedNumb = column3Array.shift();
                    break;
                case 4:
                    shiftedNumb = column4Array.shift();
                    break;
                case 5:
                    shiftedNumb = column5Array.shift();
                    break;
                case 6:
                    shiftedNumb = column6Array.shift();
                    break;
                case 7:
                    shiftedNumb = column7Array.shift();
                    break;
                case 8:
                    shiftedNumb = column8Array.shift();
                    break;
                case 9:
                    shiftedNumb = column9Array.shift();
                    break;
            }

            if (shiftedNumb != undefined) {
                blackList.push(rndColumn);
                newRow.push(shiftedNumb);
                // debugging
                totalNumberCount--;
            }
        }
        switch (currentRowCounter) {
            case 1:
                row1Array = newRow;
                break;
            case 2:
                row2Array = newRow;
                break;
            case 3:
                row3Array = newRow;
                break;

            default:
                break;
        }
        currentRowCounter--;
        newRow = [];
        blackList = [];
    }

    // Sort Rows
    row1Array.sort((a, b) => a - b);
    row2Array.sort((a, b) => a - b);
    row3Array.sort((a, b) => a - b);

    console.log(row1Array, row2Array, row3Array);

    return [row1Array, row2Array, row3Array];
}

const GenerateBankoNumber = (min?: number, max?: number) => {
    return Math.floor(Math.random() * ((max ?? 90) - (min ?? 1) + 1)) + (min ?? 1);
}

const ShuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}