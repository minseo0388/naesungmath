document.addEventListener('DOMContentLoaded', () => {
    const functionList = document.getElementById('functionList');
    const contentDisplay = document.getElementById('contentDisplay');
    const searchInput = document.getElementById('searchInput');
    const langButtons = document.querySelectorAll('.lang-btn');

    let functions = [];
    let currentLang = 'js'; // Default language

    // Fetch data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Sort functions alphabetically
            functions = data.sort((a, b) => a.name.localeCompare(b.name));
            renderSidebar();
        })
        .catch(error => {
            console.error('Error loading data:', error);
            functionList.innerHTML = '<p style="padding: 1rem; color: red;">Error loading data.</p>';
        });

    // Language Switcher Logic
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update current language
            currentLang = btn.getAttribute('data-lang');

            // Re-render sidebar and clear main content
            renderSidebar();
            contentDisplay.innerHTML = `
                <div class="welcome-message">
                    <h2>Welcome to Naesungmath Docs</h2>
                    <p>Select a function from the sidebar to view its details.</p>
                </div>
            `;
        });
    });

    // Render Sidebar List
    function renderSidebar(filterText = '') {
        functionList.innerHTML = '';

        // Filter functions:
        // 1. Must exist in the current language
        // 2. Must match search text
        const filteredFunctions = functions.filter(func => {
            const hasLang = !!func[currentLang];
            const matchesSearch = func.name.toLowerCase().includes(filterText.toLowerCase());
            return hasLang && matchesSearch;
        });

        if (filteredFunctions.length === 0) {
            functionList.innerHTML = '<p style="padding: 1rem; color: #999;">No functions found.</p>';
            return;
        }

        filteredFunctions.forEach(func => {
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
        const langData = func[currentLang];

        if (!langData) {
            contentDisplay.innerHTML = '<p>Data not available for this language.</p>';
            return;
        }

        contentDisplay.innerHTML = `
            <div class="function-detail">
                <h2>${func.name} <span style="font-size: 0.5em; color: #999; vertical-align: middle;">(${currentLang.toUpperCase()})</span></h2>
                
                <div class="detail-section">
                    <h3>Signature</h3>
                    <div class="code-block">${langData.signature}</div>
                </div>

                <div class="detail-section">
                    <h3>Source File</h3>
                    <div class="file-info">${langData.file}</div>
                </div>

                <div class="detail-section">
                    <h3>Usage Example</h3>
                    <div class="example-block">${func.example || 'No example available'}</div>
                </div>
            </div>
        `;
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        renderSidebar(e.target.value);
    });
});
