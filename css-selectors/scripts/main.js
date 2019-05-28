/**
 * Substitutes any HTML tags within pre/code tags with their ASCII substitutes
 *
 * @author: Jessica Nierth
 * @date: 28.05.2019
 */
(function($) {

    // Step 1: Get the
    var $preview = $('.preview');

    // Step 2: Escape the content
    var reg2 = '&gt;';
    var reg1 = '&lt';

    var content = $preview.html().replace(/</g , reg1);
    content = content.replace(/>/g, reg2 );

    $preview.empty().append(content);

})(jQuery);
