Reveal.addEventListener('fragmentshown', function (e) {
    var command = $(e.fragment).attr('run-command');
    if (command) {
        var terminal = $(e.fragment).parent('section').find('.terminal:not(.executed)');
        if (terminal.length) {
            terminal.find('.command').typed({
                strings: ["npm init -y"],
                typeSpeed: 80,
                callback: function () {
                    setTimeout(function () {
                        terminal.addClass('executing');
                        setTimeout(function () {
                            terminal.addClass('executed');
                            terminal.removeClass('executing');
                            terminal.find('.result').html($(e.fragment).html().trim());
                        }, 2000);
                    }, 1500);
                }
            });
        }
    }
}, false);
