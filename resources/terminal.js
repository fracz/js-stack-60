Reveal.addEventListener('fragmentshown', function (e) {
    var runCommand = $(e.fragment).attr('run-command');
    if (runCommand !== undefined) {
        var terminal = $(e.fragment).parent('section').find('.terminal:not(.executed)');
        if (terminal.length) {
            var command = terminal.find('.command .text').text().trim();//.replace("&", "&amp;");
            var commandTime = terminal.attr('time') || 2000;
            var commandDelay = terminal.attr('delay') || 1500;
            var typeSpeed = +terminal.attr('speed') || 80;
            terminal.find('.command').typed({
                strings: [command],
                typeSpeed: typeSpeed,
                contentType: 'html',
                callback: function () {
                    setTimeout(function () {
                        if (commandTime > 0) {
                            terminal.addClass('executing');
                        }
                        setTimeout(function () {
                            terminal.addClass('executed');
                            terminal.removeClass('executing');
                            // terminal.find('.result').html($(e.fragment).html().trim());
                        }, commandTime);
                    }, commandDelay);
                }
            });
        }
    }

    // var highlightLines = $(e.fragment).attr('highlight-lines');
    // if (highlightLines !== undefined) {
    //     var lines = highlightLines.split(',');
    //     var code = $(e.fragment).parent('section').find('code');
    //     lines.forEach(function(line){
    //
    //     });
    // }
}, false);
