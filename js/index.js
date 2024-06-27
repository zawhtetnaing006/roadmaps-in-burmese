document.addEventListener('DOMContentLoaded', () => {
    fetch('folders.json')
        .then(response => response.json())
        .then(data => {
            const topicsList = document.getElementById('topicsList');

            // Iterate through each topic
            for (const topic in data.topics) {
                const listItem = document.createElement('li');
                listItem.classList.add('topic-item');

                const link = document.createElement('a');
                link.classList.add('topic-link');
                link.href = `details.html?topic=${encodeURIComponent(topic)}`;
                link.innerHTML = `<i class="topic-icon">&#10029;</i>${topic}`;
                link.setAttribute('title', `Explore ${topic}`);
                
                listItem.appendChild(link);
                topicsList.appendChild(listItem);
            }
        })
        .catch(error => console.error('Error fetching topics:', error));
});