class CorrelationSeeker {
    constructor(options) {
        this.dataset = options.dataset;
        this.checkedRelations = {};
        this.averages = this.calculateAverages();
    }

    calculateAverages() {
        const averages = {};

        for (const columnName of Object.keys(this.dataset[0])) {
            averages[columnName] = 0;

            for (const item of this.dataset) {
                averages[columnName] += item[columnName];
            }

            averages[columnName] /= this.dataset.length;
        }

        return averages;
    }

    calculateDeviation(first, second) {
        let atTheTop = 0;
        let firstSum = 0;
        let secondSum = 0;

        for (const item of this.dataset) {
            atTheTop += (item[first] - this.averages[first]) * (item[second] - this.averages[second]);

            firstSum += Math.pow(item[first] - this.averages[first], 2);
            secondSum += Math.pow(item[second] - this.averages[second], 2);
        }

        return atTheTop / Math.sqrt(firstSum * secondSum);
    }

    checkRelations() {
        for (const columnName of Object.keys(this.dataset[0])) {
            for (const secondColumnName of Object.keys(this.dataset[0])) {
                if (columnName === secondColumnName
                    || this.checkedRelations[`${columnName} ${secondColumnName}`]
                    || this.checkedRelations[`${secondColumnName} ${columnName}`]) continue;

                this.checkedRelations[`${columnName} ${secondColumnName}`] = this.calculateDeviation(columnName, secondColumnName);
            }
        }
    }
}

module.exports = CorrelationSeeker;
