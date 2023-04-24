function solution(players, callings) {
  let playerInfo = {};
  players.forEach((player, index) => {
    playerInfo[player] = index;
  });

  callings.forEach((call) => {
    let idx = playerInfo[call];
    let frontPlayerName = players[idx - 1];

    players[idx] = players[idx - 1];
    players[idx - 1] = call;

    playerInfo[call] = idx - 1;
    playerInfo[frontPlayerName] = idx;
  });
  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
