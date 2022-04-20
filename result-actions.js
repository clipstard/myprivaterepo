const mainRow = $('#main-row');

$('#finish-button').on('click', function () {
    window.location.href = 'index.html';
});

function randomColor() {
    const colors = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'light',
        'dark',
    ];

    const len = colors.length;
    const random = Math.floor(Math.random() * len);
    return colors[random % len];
}

function buildRow(label, icon) {
    return `
    <div class="alert alert-primary">
        <em class="fa fa-${icon} mr-1"></em> <span class="fw-bold text-${randomColor()}">${label}</span>
    </div>
    `;
}

function loadTitles() {
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function(response) {
            response.forEach(title => {
                mainRow.append(buildRow(title.label, title.icon));
            });
            console.log(response);
        },
    });
}

$(document).ready(function () {
    loadTitles();
});