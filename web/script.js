document.addEventListener('DOMContentLoaded', () => {
    const functionList = document.getElementById('functionList');
    const searchInput = document.getElementById('searchInput');
    let functions = [];

    // Fetch data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            functions = data;
            renderFunctions(functions);
        })
        .catch(error => {
            console.error('Error loading data:', error);
            functionList.innerHTML = '<p style="color: red; text-align: center;">Error loading documentation data.</p>';
        });

    // Render functions
    function renderFunctions(data) {
        functionList.innerHTML = '';
        
        if (data.length === 0) {
            functionList.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: rgba(255,255,255,0.5);">No functions found.</p>';
            return;
        }

        data.forEach(func => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Clean up signature if needed (remove export default function part if it leaked, though regex should handle it)
            // The regex captured arguments, so we construct the full signature for display
            const fullSignature = `${func.name}(${func.signature})`;

            card.innerHTML = `
                <h2>${func.name}</h2>
                <div class="signature">${fullSignature}</div>
                <div class="file-name">${func.file}</div>
            `;
            
            functionList.appendChild(card);
        });
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredFunctions = functions.filter(func => 
            func.name.toLowerCase().includes(searchTerm) || 
            func.file.toLowerCase().includes(searchTerm)
        );
        renderFunctions(filteredFunctions);
    });
});
