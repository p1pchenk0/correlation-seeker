const CorrelationSeeker = require('./CorrelationSeeker');

const seeker = new CorrelationSeeker({
    dataset: [
        {
            good: 100,
            bad: 13431,
            ugly: 2342412,
            nice: 12343,
        },
        {
            good: 14234,
            bad: 12345,
            ugly: 124236,
            nice: 23417,
        },
        {
            good: 243418,
            bad: 3419,
            ugly: 2340,
            nice: 22341,
        },
        {
            good: 234222,
            bad: 42323,
            ugly: 23244,
            nice: 246565,
        },
        {
            good: 23566,
            bad: 2746456,
            ugly: 45646528,
            nice: 2564569,
        },
        {
            good: 45645630,
            bad: 35651,
            ugly: 36562,
            nice: 35463,
        }
    ]
});

seeker.checkRelations();

console.log(seeker.checkedRelations);
