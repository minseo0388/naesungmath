document.addEventListener('DOMContentLoaded', () => {
    const functionList = document.getElementById('functionList');
    const contentDisplay = document.getElementById('contentDisplay');
    const searchInput = document.getElementById('searchInput');
    let functions = [];

    // Fetch data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Sort functions alphabetically
            functions = data.sort((a, b) => a.name.localeCompare(b.name));
            renderSidebar(functions);
        })
        .catch(error => {
            console.error('Error loading data:', error);
            functionList.innerHTML = '<p style="padding: 1rem; color: red;">Error loading data.</p>';
        });

    // Render Sidebar List
    function renderSidebar(data) {
        functionList.innerHTML = '';

        if (data.length === 0) {
            functionList.innerHTML = '<p style="padding: 1rem; color: #999;">No functions found.</p>';
            return;
        }

        data.forEach(func => {
            const item = document.createElement('div');
            item.className = 'function-item';
            item.textContent = func.name;
            item.addEventListener('click', () => {
                // Remove active class from all items
                document.querySelectorAll('.function-item').forEach(el => el.classList.remove('active'));
                // Add active class to clicked item
                item.classList.add('active');
                // Display content
                displayFunction(func);
            });
            functionList.appendChild(item);
        });
    }

    // Display Function Details
    function displayFunction(func) {
        const fullSignature = `${func.name}(${func.signature})`;

        contentDisplay.innerHTML = `
            <div class="function-detail">
                <h2>${func.name}</h2>
                
                <div class="detail-section">
                    <h3>Signature</h3>
                    <div class="code-block">${fullSignature}</div>
                </div>

                <div class="detail-section">
                    <h3>Source File</h3>
                    <div class="file-info">${func.file}</div>
                </div>
            </div>
        `;
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredFunctions = functions.filter(func =>
            func.name.toLowerCase().includes(searchTerm)
        );
        renderSidebar(filteredFunctions);
    });
});
