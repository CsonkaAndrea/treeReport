{
    class Parks {
        constructor(name, buildYear, numberOfTrees, area) {
            this.name = name;
            this.buildYear = buildYear;
            this.numberOfTrees = numberOfTrees;
            this.area = area;
        }

        density() {
            const result = this.area / this.numberOfTrees
            return result
        }

        calculateAge() {
            let age = new Date().getFullYear() - this.buildYear
            return age
        }

        hasMoreThan1000Trees() {
            if (this.numberOfTrees > 1000) {
                return `${this.name} has more than 1000 trees,`
            }
        }
    }

    class Streets {
        constructor(name, buildYear, streetLength, classification = 'big') {
            this.name = name;
            this.buildYear = buildYear;
            this.streetLength = streetLength;
            this.classification = classification;
        }
        returnLength() {
            return this.streetLength
        }
        streetClassification() {
            return `${this.name} is classified as ${this.classification}.`
        }
    }

    const parkOne = new Parks('Big One', 1990, 3600, 53330)
    const parkTwo = new Parks('Old One', 1870, 123, 457770)
    const parkThree = new Parks('Park', 1985, 501, 776000)

    const streetOne = new Streets('01', 1984, 7800)
    const streetTwo = new Streets('02', 1867, 13004, 'big')
    const streetThree = new Streets('03', 1971, 26031, 'huge')
    const streetFour = new Streets('04', 1963, 3200, 'small')


    const trees = [parkOne.density(), parkTwo.density(), parkThree.density()]
    const ages = [parkOne.calculateAge(), parkTwo.calculateAge(), parkThree.calculateAge()]
    const length = [streetOne.returnLength(), streetTwo.returnLength(), streetThree.returnLength(), streetFour.returnLength()]
    const classi = [streetOne.streetClassification(), streetTwo.streetClassification(), streetThree.streetClassification(), streetFour.streetClassification()]
    const treeNumber = [parkOne.hasMoreThan1000Trees(), parkTwo.hasMoreThan1000Trees(), parkThree.hasMoreThan1000Trees()]

    function counter(params) {
        let sum = 0;
        for (let param of arguments) {
            sum += param
        }
        return Math.round(sum)
    }

    function averageCounter(sum, args) {
        const result = Math.round(sum / arguments.length - 1)
        return result
    }

    function stringFromArray(arr) {
        const result = arr.join('\n')
        return result
    }

    function parkMeasure(ar) {
        let result = []
        if (ar !== "undefined") {
            result.push(ar)
        }
        return result
    }

    const resultOne = counter(...trees)
    const resultTwo = averageCounter(counter(...ages), ...ages)
    const resultThree = stringFromArray(parkMeasure(...treeNumber))
    const resultFourPerOne = counter(...length)
    const resultFourPerTwo = averageCounter(counter(...length), ...length)
    const resultFive = stringFromArray(classi)

    console.log(`1, The density of the parks: ${resultOne}.`)
    console.log(`2, The average age of the parks: ${resultTwo}.`)
    console.log(`3, ${resultThree}`);
    console.log(`4/1, The total length of the streets: ${resultFourPerOne}`)
    console.log(`4/2, The average length of the streets: ${resultFourPerTwo}`)
    console.log(`5, ${resultFive}`);

}