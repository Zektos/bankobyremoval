// Random removal version
export function GeneratePlate(): any {
    let bankoArray = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    // Generate full plate
    for (let i = 9; i < 99; i += 10) {
        let newNumbersArray: number[] = [];
        while (newNumbersArray.length < 3) {
            let newNumber = GenerateBankoNumber(i === 9 ? 1 : i - 9, i === 89 ? 90 : i);
            if(newNumbersArray.indexOf(newNumber) != -1) continue;
            newNumbersArray.push(newNumber);
        }
        
        // Sort array before adding to plate
        newNumbersArray.sort((a, b) => a - b);

        // Add new numbers to plate
        switch (i) {
            case 9:
                bankoArray[0][0] = newNumbersArray[0];
                bankoArray[1][0] = newNumbersArray[1];
                bankoArray[2][0] = newNumbersArray[2];
                break;
            case 19:
                bankoArray[0][1] = newNumbersArray[0];
                bankoArray[1][1] = newNumbersArray[1];
                bankoArray[2][1] = newNumbersArray[2];
                break;
            case 29:
                bankoArray[0][2] = newNumbersArray[0];
                bankoArray[1][2] = newNumbersArray[1];
                bankoArray[2][2] = newNumbersArray[2];
                break;
            case 39:
                bankoArray[0][3] = newNumbersArray[0];
                bankoArray[1][3] = newNumbersArray[1];
                bankoArray[2][3] = newNumbersArray[2];
                break;
            case 49:
                bankoArray[0][4] = newNumbersArray[0];
                bankoArray[1][4] = newNumbersArray[1];
                bankoArray[2][4] = newNumbersArray[2];
                break;
            case 59:
                bankoArray[0][5] = newNumbersArray[0];
                bankoArray[1][5] = newNumbersArray[1];
                bankoArray[2][5] = newNumbersArray[2];
                break;
            case 69:
                bankoArray[0][6] = newNumbersArray[0];
                bankoArray[1][6] = newNumbersArray[1];
                bankoArray[2][6] = newNumbersArray[2];
                break;
            case 79:
                bankoArray[0][7] = newNumbersArray[0];
                bankoArray[1][7] = newNumbersArray[1];
                bankoArray[2][7] = newNumbersArray[2];
                break;
            case 89:
                bankoArray[0][8] = newNumbersArray[0];
                bankoArray[1][8] = newNumbersArray[1];
                bankoArray[2][8] = newNumbersArray[2];
                break;
        }
    }

    // Remove random till legal plate (remove 12, 15 should remain)
    let removedCounter = 0;
    let overallColumnBlacklist = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0]
    ];
    let rowColumnBlacklist = [];

    let cCursor = 0;
    for (let rCursor = 0; rCursor < 3; rCursor++) {
        while (removedCounter < 4) { // Remove 4 from each row, without voiding column limit of 2 removals
            cCursor = GenerateBankoNumber(0, 8);
            // Check Blacklists
            if (rowColumnBlacklist.indexOf(cCursor) != -1) continue;
            if (overallColumnBlacklist[cCursor][1] > 1) continue;
            // Add to bankoArray and blacklists
            bankoArray[rCursor][cCursor] = 0;
            rowColumnBlacklist.push(cCursor);
            overallColumnBlacklist[cCursor][1]++;
            // Up the removed counter
            removedCounter++;
        }
        // Reset rowColumnBlacklist
        rowColumnBlacklist = [];
        // Reset removed counter
        removedCounter = 0;
        // rCursor auto Up in for loop
    }

    // Done, return the plate
    return bankoArray;
}

const GenerateBankoNumber = (min?: number, max?: number) => {
    return Math.floor(Math.random() * ((max ?? 90) - (min ?? 1) + 1)) + (min ?? 1);
}