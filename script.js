$(document).ready(function() {
    var animationInProgress = false;

    function addShape(type, color) {
        var shape = $('<div class="shape"></div>');

        if (type === 'circle') {
            shape.css({
                'background-color': color,
                'border-radius': '50%'
            });
        } else if (type === 'square') {
            shape.css({
                'background-color': color,
                'border-radius': '0'
            });
        } else if (type === 'love') {
            shape.addClass('love').css('--shape-color', color);
        }

        $('.shapeContainer').append(shape);

        if ($('.shape').length % 5 === 0) {
            $('.shapeContainer').append('<br>');
        }

        shape.animate({opacity: 1, left: 0}, 500);
    }

    function removeShape() {
        if ($('.shape').length === 0 || animationInProgress) return;

        animationInProgress = true;

        var lastShape = $('.shape').last();
        lastShape.fadeOut(500, function() {
            lastShape.remove();
            animationInProgress = false;
        });
    }

    $('#addShapeBtn').click(function() {
        if (animationInProgress) return;

        var type = $('#shapeType').val();
        var color = $('#shapeColor').val();
        addShape(type, color);
    });

    $('#removeShapeBtn').click(function() {
        removeShape();
    });
});
