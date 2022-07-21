$(document).ready(function() {

    $('.search').each(function() {

        var self = $(this);
        var form = self.children('form');
        var input = form.children('input');
        var span = $('<span />').appendTo(form);
        var bar = self.children('.bar');
        var close = self.children('.close');
        var list = self.children('ul');

        input.keypress(function (e) {
            if(e.which && e.charCode) {
                resizeForText(input, span, $(this).val() + String.fromCharCode(e.keyCode | e.charCode));
            }
        });

        input.keyup(function(e) {
            if(e.keyCode === 8 || e.keyCode === 46) {
                resizeForText(input, span, $(this).val());
            }
        });

        resizeForText(input, span, self.val());

        form.submit(function(e) {
            e.preventDefault();
            if(!self.hasClass('prepare')) {
                input.blur();
                $('<span />').text(input.val()).appendTo(bar);
                self.addClass('prepare submit');
                setTimeout(function() {
                    self.removeClass('submit');
                }, 200);
                setTimeout(function() {
                    self.addClass('animate');
                    bar.animate({
                        width: (self.outerWidth() - 32)
                    }, 800, function() {
                        var searchW = ((list.outerWidth() + 32) > (72 + bar.outerWidth())) ? (list.outerWidth() + 32) : 72 + bar.outerWidth();
                        self.animate({
                            width: searchW
                        }, 400);
                        setTimeout(function() {
                            self.animate({
                                height: self.outerHeight() + list.outerHeight()
                            }, 500, function() {
                                list.addClass('show');
                                $(".resume-button").hide();
                                $(".content-wrapper-context").hide();
                                $(".tiles").show();
                            });
                        }, 200);
                    });
                    setTimeout(function() {
                        self.addClass('done');
                    }, 800);
                }, 1250);
            }
        });

        close.on('click', function(e) {
            self.removeClass('done');
            setTimeout(function() {
                input.val('');
                bar.animate({
                    width: 32
                }, 1000, function() {
                    self.addClass('reset');
                    bar.children('span').remove();
                    setTimeout(function() {
                        self.removeClass('animate reset prepare');
                        setTimeout(function() {
                            input.animate({
                                width: 32
                            }, 400, function() {
                                bar.removeAttr('style');
                            });
                        }, 200);
                    }, 400);
                });
                list.removeClass('show');
                $(".resume-button").show();
                $(".content-wrapper-context").show();
                $(".tiles").hide();

                setTimeout(function() {
                    self.animate({
                        height: 62
                    }, 400, function() {
                        self.animate({
                            width: 92
                        }, 400, function() {
                            self.removeAttr('style');
                        });
                    });
                }, 200);
            }, 500);
        });

    });

});

function resizeForText(input, span, text) {
    text = (!text) ? ' ' : text;
    span.text(text);
    input.width(span.width());
}