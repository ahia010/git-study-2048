class Team {
    constructor(name) {
        this.name = name;
        this.played = 0;
        this.won = 0;
        this.drawn = 0;
        this.lost = 0;
        this.goalsFor = 0;
        this.goalsAgainst = 0;
        this.points = 0;
    }

    updateStats(goalsFor, goalsAgainst) {
        this.played += 1;
        this.goalsFor += goalsFor;
        this.goalsAgainst += goalsAgainst;
        if (goalsFor > goalsAgainst) {
            this.won += 1;
            this.points += 3;
        } else if (goalsFor === goalsAgainst) {
            this.drawn += 1;
            this.points += 1;
        } else {
            this.lost += 1;
        }
    }

    get goalDifference() {
        return this.goalsFor - this.goalsAgainst;
    }
}

class League {
    constructor() {
        this.teams = {};
    }

    addTeam(name) {
        if (!this.teams[name]) {
            this.teams[name] = new Team(name);
        }
    }

    recordMatch(homeTeam, awayTeam, homeGoals, awayGoals) {
        this.addTeam(homeTeam);
        this.addTeam(awayTeam);
        this.teams[homeTeam].updateStats(homeGoals, awayGoals);
        this.teams[awayTeam].updateStats(awayGoals, homeGoals);
    }

    getSortedTeams() {
        return Object.values(this.teams).sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
            return b.goalsFor - a.goalsFor;
        });
    }

    displayTable() {
        const sortedTeams = this.getSortedTeams();
        console.log("队名\t比赛场数\t赢\t平\t负\t进球数\t失球数\t积分");
        sortedTeams.forEach(team => {
            console.log(`${team.name}\t${team.played}\t${team.won}\t${team.drawn}\t${team.lost}\t${team.goalsFor}\t${team.goalsAgainst}\t${team.points}`);
        });
    }
}

const league = new League();

// 输入比赛结果
league.recordMatch("队A", "队B", 2, 1);
league.recordMatch("队C", "队D", 0, 0);
league.recordMatch("队A", "队C", 3, 2);
league.recordMatch("队B", "队D", 1, 1);

// 显示积分表
league.displayTable();

function shortestPalindrome(s) {
    const reverse = s.split('').reverse().join('');
    for (let i = 0; i < s.length; i++) {
        if (s.startsWith(reverse.substring(i))) {
            return reverse.substring(0, i) + s;
        }
    }
    return '';
}

// 示例
console.log(shortestPalindrome("race")); // 输出: "ecarace"
console.log(shortestPalindrome("google")); // 输出: "elgoogle"