const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

marked.setOptions({
    breaks: true,
    gfm: true
});

function renderPreview() {
    preview.innerHTML = marked.parse(editor.value);
}

function changeTheme() {
    const theme = document.getElementById('theme').value;
    preview.className = 'preview-content theme-' + theme;
}

function downloadPDF() {
    window.print();
}

editor.addEventListener('input', renderPreview);

// Initial render
renderPreview();
