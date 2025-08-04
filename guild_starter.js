// Starter Data - DO NOT MODIFY THIS DATA DIRECTLY
const guildMembers = [
    { name: 'Kaelen', class: 'Mage', level: 60, exp: 55000, status: 'online' },
    { name: 'Lyra', class: 'Archer', level: 58, exp: 48000, status: 'offline' },
    { name: 'Arik', class: 'Warrior', level: 60, exp: 62000, status: 'online' },
    { name: 'Seraphina', class: 'Healer', level: 59, exp: 51000, status: 'online' },
    { name: 'Grom', class: 'Warrior', level: 60, exp: 59000, status: 'offline' },
    { name: 'Elara', class: 'Mage', level: 57, exp: 42000, status: 'offline' },
    { name: 'Jax', class: 'Archer', level: 60, exp: 65000, status: 'online' },
    { name: 'Milo', class: 'Healer', level: 56, exp: 39000, status: 'offline' }
];

const reportOutput = document.getElementById('report-output');

// Function to append reports to the HTML
function appendReport(title, content) {
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

// Your code goes here!