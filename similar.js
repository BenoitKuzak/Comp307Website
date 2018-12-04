$(document).ready(function() {
    $('.tag-bar .tag').click(function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });
});

function submitSimilar() {
    postData = {
        id1: $('select[name=game]').val(),
        id2: $('input[name=curgame]').val(),
    }
    renderPopupMessage("Thank you for suggesting a game!","You're Welcome!");
    $.ajax({
        url: 'index.html',
        type: 'POST',
        dataType: 'json',
        data: postData,
        success: function(result) {
        },
        error: function(error) {
            console.log(error);
        }
    });

}