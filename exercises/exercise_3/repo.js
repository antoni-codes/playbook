
export class Repo {
    constructor(author, name) {
        this.name = name
        this.author = author
        this.language =  "JavaScript"
        this.language = 
        this.numberOfCommits = 100
        this.stars = 199
        this.forks = 299
        this.issues_open = 10
        this.issues_close = 10
    }


    getTotalIssues() {
        return this.issues_open + this.issues_close
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}


const myRepo = new Repo("Emmanuel", "LaunchX")

console.log("Repository Name: " + myRepo.name)
console.log("Total Issues: " + myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())



