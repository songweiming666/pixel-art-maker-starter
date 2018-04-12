// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
// Your code goes here!
function makeGrid(numWidth, numHeight) {
    let tr = "";
    let td = "";
    for (let x = 1; x <= numWidth; x++) {
        td += "<td></td>";
    };
    for (let y = 1; y <= numHeight; y++) {
        tr += "<tr>" + td + "</tr>";
    };
    return tr;
}

$("[type='submit']").click(function (evt) {
    evt.preventDefault();
    $('#pixelCanvas').empty();
    let widthpg = Number($('#inputWidth').val());
    let heightpg = Number($('#inputHeight').val());
    let grid = makeGrid(widthpg, heightpg);
    $('#pixelCanvas').append(grid);
})

$('#pixelCanvas').on('click', 'td', function () {
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
});



