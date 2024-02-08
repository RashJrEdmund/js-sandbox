// function to show a leaderBoard given an array of different user scores.
// const ranked = [100, 100, 12, 21, 50, 50, 15, 12, 80, 68, 70]

const initialBoard = [100, 100, 50, 40, 40, 20, 10]
const p1Scores = [5, 25, 50, 120]

const createSpacing = () => console.log('\n \n') // for creating space between results.

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

const rankWithforLoopRecuApproach = (ranked, player) => {
    // Write your code here

    const uniqueRanking = Array.from(new Set(ranked));
    const p1Ranking = [];

    for (let i = 0; i < player.length; i++) {
        for (let j = 0; j < uniqueRanking.length; j++) {
            if (player[i] >= uniqueRanking[j]) { // 
                p1Ranking.push(j + 1);
                break;
            }

            if (j === uniqueRanking.length - 1) {
                p1Ranking.push(uniqueRanking.length + 1)
            }
        }
    }

    console.log({ p1Ranking, uniqueRanking, player })
    return p1Ranking
}

const binarySearchApproach = (ranked, player) => {
    const uniqueRanking = Array.from(new Set(ranked));
    const p1Ranking = [];

    for (let i = 0; i < player.length; i++) {
        let left = 0;
        let right = uniqueRanking.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (player[i] === uniqueRanking[mid]) {
                p1Ranking.push(mid + 1);
                break;
            } else if (player[i] > uniqueRanking[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

            if (left > right) {
                p1Ranking.push(left + 1);
            }
        }
    }

    return p1Ranking;
}


console.time('getRanking: compiled in')
const leaderBoard = getRanking([...initialBoard, ...p1Scores]) // getRanking method is by far the heaviest task
console.log(leaderBoard)
console.timeEnd('getRanking: compiled in')

createSpacing();

console.time('forLoopleaderBoard: compiled in')
const forLoopLeaderBoard = rankWithforLoopRecuApproach(initialBoard, p1Scores) // getRanking method is by far the heaviest task
console.log(forLoopLeaderBoard)
console.timeEnd('forLoopleaderBoard: compiled in')

createSpacing();

console.time('binaryLeaderBoard: compiled in')
const binaryLeaderBoard = binarySearchApproach(initialBoard, p1Scores) // getRanking method is by far the heaviest task
console.log(binaryLeaderBoard)
console.timeEnd('binaryLeaderBoard: compiled in');
