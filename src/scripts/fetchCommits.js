// src/scripts/fetchCommits.js







export async function fetchCommits(repoOwner, repoName) {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const commits = await response.json();
    return commits.map(commit => ({
        title: commit.commit.message.split('\n')[0], // Get the title
        description: commit.commit.message.split('\n').slice(1).join('\n'), // Get the description
        avatar: commit.author ? commit.author.avatar_url : '', // Get the avatar URL
        commitURL: commit.html_url, // Get the avatar URL
        authorName: commit.author ? commit.author.login : "Unknown",
        authorURL: commit.author ? commit.author.html_url : "#",
        date: new Date(commit.commit.author.date) // Get the commit date
    }));
}

export function formatDate(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} Day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} Hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} Minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}