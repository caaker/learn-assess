function breakingRecords(scores) {
  let low = scores[0];
  let min = 0;
  let high = scores[0];
  let max = 0;
  for(let i = 1; i < scores.length; i++) {
    if(scores[i] < low) {
      low = scores[i];
      min += 1;
    } else if(scores[i] > high) {
      high = scores[i];
      max += 1;
    }
  }
  return [max, min];
}

/*
Question
--------------------
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
She tabulates the number of times she breaks her season record for most points and least points in a game.
Points scored in the first game establish her record for the season, and she begins counting from there.
*/