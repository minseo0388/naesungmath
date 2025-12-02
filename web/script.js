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
        // Default to JS if available, otherwise first available language
        const languages = ['js', 'cs', 'py'].filter(lang => func[lang]);
        const defaultLang = languages[0];

        // Generate Tabs HTML
        const tabsHtml = languages.map(lang => {
            const label = lang === 'js' ? 'JavaScript' : (lang === 'cs' ? 'C#' : 'Python');
            return `<button class="tab-button ${lang === defaultLang ? 'active' : ''}" data-lang="${lang}">${label}</button>`;
        }).join('');

        // Generate Content HTML for each language
        const contentHtml = languages.map(lang => {
            const data = func[lang];
            return `
                <div class="tab-content ${lang === defaultLang ? 'active' : ''}" id="content-${lang}">
                    <div class="detail-section">
                        <h3>Signature</h3>
                        <div class="code-block">${data.signature}</div>
                    </div>
                    <div class="detail-section">
                        <h3>Source File</h3>
                        <div class="file-info">${data.file}</div>
                    </div>
                </div>
            `;
        }).join('');

        contentDisplay.innerHTML = `
            <div class="function-detail">
                <h2>${func.name}</h2>
                
                <div class="language-tabs">
                    ${tabsHtml}
                </div>

                ${contentHtml}

                <div class="detail-section">
                    <h3>Usage Example</h3>
                    <div class="example-block">${func.example || 'No example available'}</div>
                </div>
            </div>
        `;

        // Add Event Listeners for Tabs
        const tabButtons = contentDisplay.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');

                // Update active tab button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update active content
                contentDisplay.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                contentDisplay.getElementById(`content-${lang}`).classList.add('active');
            });
        });
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
