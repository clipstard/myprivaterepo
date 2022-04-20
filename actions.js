
const mainRow = $('#main-row');
var submitting = false;
var timer = null;

function capitalCase(str) {
    return str[0].toUpperCase() + str.substring(1);
}

function initIcons() {
    const icons = [
        'hammer',
        'pencil',
        'trowel',
        'school',
        'wrench',
        'landmark',
        'box',
        'brain',
        'bell',
        'hourglass',
    ];
    $('select[name=title-icon]').each(function() {
        if (!$(this).html()) { // verificam daca inca nu e initializat
            icons.forEach(icon => {
                $(this).append(
                    `<option value="${icon}">${capitalCase(icon)}</option>`
                );
            });
        }

    });
}

function validateValue(value) {
    return value.length >= 3 && value.length <=20;
}

function previousRowsAreValid() {
    let flag = true;
    $('input[name=title-name]').each(function() {
        if (!validateValue($(this).val())) {
            flag = false;
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid')
        }
    });

    return flag;
}

function buildRow() {
    return `
        <div class="row parent-element">
            <div class="col-6">
                 <input type="text" class="form-control input-element" name="title-name">
            </div>
            <div class="col-6 split-in-half">
                 <select class="form-select select-element" name="title-icon"></select>
            </div>
        </div>`;
}

function addRow() {
    if (previousRowsAreValid()) {
        mainRow.append(buildRow());
        initIcons();
    }
}

function navigate() {
    timer = setTimeout(() => {
        window.location.href = 'result.html';
    }, 2500); // asteptam 2.5 secunde
}

function makeRequest() {
    const articles = [];

    // cautam dupa grupa, apoi selectam fiecare element din aceasta grupa
    $('.parent-element').each(function () {
        console.log(($(this)));
        //find selector poate gasi si dupa clasa si dupa atribute (de ex 'input[name=title-name]')
        articles.push({
            label: $(this).find('input.input-element').val(),
            icon: $(this).find('.select-element').val(),
        });
    });

    if (submitting) {
        window.clearTimeout(timer);
        navigate();
        return;
    }

    console.log(articles);
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'POST',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(articles),
        success: function() {
            $('.container').append(`<h2 class="alert alert-success mt-4">Datele sunt salvate, redirectionez...</h2>`);
            submitting = true;
            navigate();
        },
    });
}

function finish() {
    if (previousRowsAreValid()) {
        makeRequest();
    }
}

$('#add-button').on('click', addRow);
$('#finish-button').on('click', finish);

$(document).ready(function () {
    initIcons();
});