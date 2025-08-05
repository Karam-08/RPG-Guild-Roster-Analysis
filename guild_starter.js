// Starter Data - DO NOT MODIFY THIS DATA DIRECTLY
const guildMembers = [
    {name: 'Kaelen', class: 'Mage', level: 60, exp: 55000, status: 'online'},
    {name: 'Lyra', class: 'Archer', level: 58, exp: 48000, status: 'offline'},
    {name: 'Arik', class: 'Warrior', level: 60, exp: 62000, status: 'online'},
    {name: 'Seraphina', class: 'Healer', level: 59, exp: 51000, status: 'online'},
    {name: 'Grom', class: 'Warrior', level: 60, exp: 59000, status: 'offline'},
    {name: 'Elara', class: 'Mage', level: 57, exp: 42000, status: 'offline'},
    {name: 'Jax', class: 'Archer', level: 60, exp: 65000, status: 'online'},
    {name: 'Milo', class: 'Healer', level: 56, exp: 39000, status: 'offline'}
];

const reportOutput = document.getElementById('report-output');

// Function to append reports to the HTML
 function appendReport(title, content){
     const section = document.createElement('div');
     section.className = 'report-section';
     const h2 = document.createElement('h2');
     h2.textContent = title;
     const pre = document.createElement('pre');
     pre.textContent = content;
     section.appendChild(h2);
     section.appendChild(pre);
     reportOutput.appendChild(section);
 }

// Task 1: Announce the Lineup
let names = []
guildMembers.forEach(guildMember => {
    names.push(guildMember.name)
});
appendReport("Lineup:", names.join(", "))

// Task 2: Find a specific member
let Arik = guildMembers.find(guildMember => guildMember.name === 'Arik')
appendReport("Finding a specific person:", JSON.stringify(Arik, null, 2));

// Task 3: Check for Online members
online = guildMembers.filter(guildMember => guildMember.status === "online")
appendReport("Online Members:", JSON.stringify(online, null, 2));

// Task 4: Get a List of all Mages
Mages = guildMembers.filter(guildMember => guildMember.class === "Mage")
appendReport("Mages:", JSON.stringify(Mages, null, 2));

// Task 5: Upgrade Member Status
raidStatus = {raidReady: true}
guildMemberStatus = guildMembers.map(guildMembers => ({
    ...guildMembers,
    ...raidStatus
}))
appendReport("Guild Member Status:", JSON.stringify(Mages, null, 2));

// Task 6: Verify everyone is at max level
maxLevel = guildMembers.every(guildMember => guildMember.level === '60')
appendReport("Members at Max level:", JSON.stringify(maxLevel, null, 2))

// Task 7: Calculate total guild XP
let totalXP = []
guildMembers.forEach(guildMember => {
    totalXP.push(guildMember.exp)
});
totalXP.reduce(myFunc)

function myFunc(total, num) {
  return total + num;
}

console.log(totalXP)