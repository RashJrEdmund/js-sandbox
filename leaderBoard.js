// function to show a leaderBoard given an array of different user scores.

const getRanking = (arr) => {
    const map = {};
    const actualRank = {};
    arr.forEach((val, i) => {
        map[`${val}`] ? map[`${val}`].push(val) : map[`${val}`] = [val]
    });
    Object.keys(map).sort((a, z) => z - a).forEach((key, i) => {
        actualRank[`${i + 1}`] = map[`${key}`]
    })
    return actualRank;
};

const ranked = [100, 100, 12, 21, 50, 50, 15, 12, 80, 68, 70]

const leaderBoard = getRanking(ranked)
console.log(leaderBoard)