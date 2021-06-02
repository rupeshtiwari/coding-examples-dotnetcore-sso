// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(() => {
    $('#getValues').on('click', () => {
        $.get('https://localhost:44321/api/salary').then((s) => {
            $('#values').text(s);

        }).catch(e => {
            $('#values').text(e.statusText);
        });
    });
});