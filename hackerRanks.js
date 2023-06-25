function climbingLeaderboard(ranked, player) {
  // Write your code here
  const getRanking = (arr) => {
    const map = {};
    const actualRank = {};
    arr.forEach((val) => {
      map[`${val}`] ? map[`${val}`].push(val) : (map[`${val}`] = [val]);
    });

    Object.keys(map)
      .sort((a, z) => z - a)
      .forEach((key, i) => {
        actualRank[`${i + 1}`] = map[`${key}`];
      });
    return actualRank;
  };

  const p1Ranking = [];

  player.forEach((score) => {
    const leaderBoard = getRanking([...ranked, score]);
    const ranks = Object.keys(leaderBoard).sort((a, z) => a - z);

    for (let i of ranks) {
      if (leaderBoard[`${i}`].includes(score)) {
        p1Ranking.push(i);
        break;
      }
    }
  });

  return p1Ranking;
}

// url = https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
