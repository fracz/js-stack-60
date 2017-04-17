Reveal.addEventListener('fragmentshown', function (e) {
    var runCommand = $(e.fragment).attr('run-command');
    if (runCommand !== undefined) {
        var terminal = $(e.fragment).parent('section').find('.terminal:not(.executed)');
        if (terminal.length) {
            var command = terminal.find('.command .text').text().trim();
            var commandTime = terminal.attr('time') || 2000;
            terminal.find('.command').typed({
                strings: [command],
                typeSpeed: 80,
                callback: function () {
                    setTimeout(function () {
                        terminal.addClass('executing');
                        setTimeout(function () {
                            terminal.addClass('executed');
                            terminal.removeClass('executing');
                            // terminal.find('.result').html($(e.fragment).html().trim());
                        }, commandTime);
                    }, 1500);
                }
            });
        }
    }
}, false);
