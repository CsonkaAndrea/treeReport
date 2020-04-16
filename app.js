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

///////////////////////////////////////////////////////////////////////////////////////////////////


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street', 2015, 0.8),
new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];

}

function reportParks(p) {

    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => {
        el.treeDensity()
        console.log(el);
    });


    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    console.log(ages);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}


function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);