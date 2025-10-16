document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const selected = dropdown.querySelector('.dropdown-selected');
    const list = dropdown.querySelector('.dropdown-list');
    const items = list.querySelectorAll('.dropdown-item');

    // Toggle dropdown open/close
    selected.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    // Handle item selection
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Update selected text
            selected.textContent = item.textContent;
            // Remove selected class from all
            items.forEach(i => i.classList.remove('selected'));
            // Add to current
            item.classList.add('selected');
            // Close dropdown
            dropdown.classList.remove('open');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});
