
const issue = {
    title: 'Client Form Issue',
    repositoryNameAssociated: 'Launch X',
    status: 'Waiting',
    numberOfComments: 3,
    labels: 'form',
    author: "Antonicodes",
    dateCreated: "2022-04-25/19:42:25",
    lastUpdate: new Date(),

    getTitleAndAuthor() {
        return this.title + " by " + this.author
    },

    getGeneralInfo() {
        return `The issue from ${this.repositoryNameAssociated} created at ${this.dateCreated}, has ${this.numberOfComments} comments`
    }
}

console.log(`Issue Information: ${issue.getTitleAndAuthor()}`);
console.log(issue.getGeneralInfo())
console.log("Last Update: " + issue.lastUpdate)
