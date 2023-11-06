let votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];

const rankTeams = function (votes) {
  if (votes.length === 1) {
    return votes[0];
  } else if (votes.length === 2) {
    return votes[1];
  } else if (votes.length > 2) {
  }
};

console.log(rankTeams(votes));
