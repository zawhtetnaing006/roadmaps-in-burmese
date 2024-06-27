document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');

    if (topic) {
        document.getElementById('topicTitle').innerText = topic;
        fetch('folders.json')
            .then(response => response.json())
            .then(data => {
                const topicData = data.topics[topic];
                if (topicData) {
                    let container = document.getElementById('step-content')
                    let groups = createGroupedSteps(topicData);
                    container.append(groups)
                }
            })
            .catch(error => {
                console.log(error);
                document.getElementById('step-content').innerText = 'Error loading topics';
            });
    } else {
        document.getElementById('step-content').innerText = 'No topic specified';
    }
});

function createGroupedSteps(steps) {
    let groupDiv = document.createElement('div');
    for (const [stepName, details] of Object.entries(steps)) {
        if (stepName != 'createdDate') {
            if (typeof details == 'object') {
                let subStepDiv = createStepDiv(stepName);
                subStepDiv.append(createGroupedSteps(details));
                groupDiv.append(subStepDiv)
            } else {
                groupDiv.append(createStepDiv(stepName))
            }
        }
    }
    return groupDiv;
}

function createStepDiv(stepName) {
    const stepDiv = document.createElement('div');
    const stepTitle = document.createElement('h2');
    stepTitle.innerText = formatStepTitle(stepName);
    stepDiv.classList.add('step');
    stepDiv.append(stepTitle);
    return stepDiv;
}

function formatStepTitle(title) {
    return title.replace(/_/g, '. ').replace(/-/g, ' ');
}