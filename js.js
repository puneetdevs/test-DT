// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {

        // First get ahold of the legacy getUserMedia, if present
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise test
        return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
        });
    };
}

// var receive_type = $('input[type=radio][name=receive_type]:checked').val();
var receive_type = 'Audio';

navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {

}).catch(function(err) {

    if (receive_type === 'Audio') {

        $('#answer-dash-btn').remove();

        var message = "<div class='container microphone-error-block'><p class='microphone-slash-error'> <i class='fa fa-microphone-slash'></i> To enable audio/video calls on dashboard, please allow browser access to your microphone else Please answer the call on phone when there is an incoming audio call. <a href='javascript:void(0)' class='enable-microphone' onClick='enable_microphone()'>Allow Access</a> </p></div>";

        $('#blockAudioVideoModal').find('.modal-message').append(message);
        // $('#blockAudioVideoModal').modal('show');

        $('#tdanger').show().children('div').append(message).show().fadeOut(100000000);

        $('.hide_video').attr('disabled', true);
        $('.hide_video').css('cursor', 'not-allowed');

    } else {

        disable_dash_terp_status_ddown();

        var message = "<p>To enable audio/video calls on dashboard, please allow browser access to your microphone else Please select the audio option and accept the call on phone when there is an incoming audio call.</p>";

        $('#blockAudioVideoModal').find('.modal-message').append(message);
        // $('#blockAudioVideoModal').modal('show');

        $('#tdanger').show().children('div').append(message).show().fadeOut(100000000);

        $('.hide_video').attr('disabled', true);
        $('.hide_video').css('cursor', 'not-allowed');
    }
});

navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {

}).catch(function(err) {

    if (receive_type === 'Audio') {

        var message = "<div class='container camera-error-block'><p>To enable video calls option on dashboard, please allow browser access to your camera.</p></div>";

        $('#blockAudioVideoModal').find('.modal-message').append(message);
        // $('#blockAudioVideoModal').modal('show');

        $('#tdanger').show().children('div').append(message).show().fadeOut(100000000);

        $('.hide_video').attr('disabled', true);
        $('.hide_video').css('cursor', 'not-allowed');
    } else {

        disable_dash_terp_status_ddown();

        var message = "<p>To enable video calls on dashboard, please allow browser access to your camera else Please select the audio option and accept the call when there is an incoming audio call.</p>";

        $('#blockAudioVideoModal').find('.modal-message').append(message);
        // $('#blockAudioVideoModal').modal('show');

        $('#tdanger').show().children('div').append(message).show().fadeOut(100000000);

        $('.hide_video').attr('disabled', true);
        $('.hide_video').css('cursor', 'not-allowed');
    }
});

function disable_dash_terp_status_ddown() {
    $('#terp-status').val('Away');
    $('#terp-status').trigger('change');
    $('#terp-status').prop('disabled', true);
}


function enable_microphone() {
    //Code to enable microphone
}