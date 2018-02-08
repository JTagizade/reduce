var fs = require('fs')

var league = fs.readFileSync('text.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('-'))
  .reduce((teams, line) => {
    teams[line[0]] = teams[line[0]] || []
    teams[line[0]].push({
      country: line[1],
      league: line[2],
      color: line[3]
    })
    return teams
  }, {})

console.log(JSON.stringify(league, null, 2))
