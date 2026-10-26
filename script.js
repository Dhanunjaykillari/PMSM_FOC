function showTab(tabId, event) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content and activate clicked button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');

    // Re-render MathJax LaTeX formulas inside active tab if needed
    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, tabId]);
    }
}
