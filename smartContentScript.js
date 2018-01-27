var recommendedContent  = function () {


    ///////////////////////////////////////////////////
    // Stage #1: Prepare CSS and inject it to the page
    ///////////////////////////////////////////////////

    // If the script setup doesn't already exists in the page then:
    if(!document.querySelector('.reco__container')){
    // Create a div container for the HTML of the recommended content popup.
    var containerDiv = document.createElement('div');
    // Set the proper CSS selector
    containerDiv.classList.add('reco__container');

    // populate containerDiv with the relevant elements.
    containerDiv.innerHTML += 
        '<div class="reco__content"> \n' +
            '<div class="reco__content-box">\n' +
                    '<a href="#" class="reco__content-close Marker--js">&times;</a>\n' +
                    // '<div class="reco__content-block">\n' +

                    // '</div>\n' +
                    // '<div class="reco__content-block">\n' +

                    // '</div>\n' +
                    // '<div class="reco__content-block">\n' +

                    // '</div>\n' +
                    // '<div class="reco__content-block">\n' +

                    // '</div>\n' +
            '</div>\n' +
        '</div>'


    // Add the containerDiv to the body.
    document.body.appendChild(containerDiv);

    // Create the <style> tag and populate it.
    var style = document.createElement("style");


    // Add the scripts own style tag, to avoid clashing with the pages own css.
    style.innerHTML = 
        '.reco__container{\n' +
            'position: relative;\n' +
        '}\n' +

        '.reco__content {\n' +
        'height: 100vh;\n' +
        'width: 100%;\n' +
        'position: fixed;\n' +
        'top: 0;\n' +
        'left: 0;\n' +
        'background-color: rgba(0, 0, 0, 0.8);\n' +
        'z-index: 9998;\n' +
        'opacity: 1;\n' +
        'transform: scale(1);\n' +
        'transition: all .2s;\n' +
        'animation: cascade .5s ease-out;\n' +
    '}\n' +
    
    '.reco__content.close {\n' +
        'z-index: -9998;\n' +
        'opacity: 0;\n' +
        'visibility: hidden;\n' +
    '}\n' +

    '.reco__content-box {\n' +
        'position: absolute;\n' +
        'top: 50%;\n' +
        'left: 50%;\n' +
        'width: 75%;\n' +
        'height: 50%;\n' +
        'background-color: #fff;\n' +
        'box-shadow: 0 20px 40px rgba(0, 0, 0, .2);\n' +
        'border-radius: 3px;\n' +
        'overflow: hidden;\n' +
        'opacity: 1;\n' +
        'transform: translate(-50%, -50%);\n' +
        'transition: all .4s .2s;\n' +
        'display: flex;\n' +
        'justify-content: space-between;\n' +
        'align-items: center;\n' +
        'transition: all .2s;\n' +
        'animation: elementSlide 2s ease-in;\n' +
    '}\n' +
    
    '.reco__content-block {\n' +
        'height: 80%;\n' +
        'width: 20%;\n' +
        'background-color: rgb(255, 140, 0);\n' +
        'margin: 15px;\n' +
        'border: 4px ridge #777;\n' +
        'display: flex;\n' +
        'flex-direction: column;\n' +
        'justify-content: center;\n' +
        'text-align: center;\n' +
    '}\n' +
    
    '.reco__content-block > p,\n' +
    '.reco__content-block > h3 {\n' +
        'font-family: "Arial Black", Gadget, sans-serif;\n' +
        'color:  rgb(79, 128, 255);\n' +
        'text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n' +
        'text-transform: uppercase;\n' +
        'padding: 5px;\n' +
    '}\n' +
    
    '.reco__content-block > p {\n' +
        'font-size: 15px;\n' +
    '}\n' +
    '.reco__content-block > h3 {\n' +
        'font-size: 20px;\n' +
    '}\n' +
    
    '.reco__content-close {\n' +
        'color: rgb(0, 0, 0);\n' +
        'text-decoration: none;\n' +
        'position: absolute;\n' +
        'top: 2.5px;\n' +
        'right: 5px;\n' +
        'font-size: 30px;\n' +
        'display: inline-block;\n' +
        'line-height: 1;\n' +
        'transition: all .2s;\n' +
        'z-index: 9999;\n' +
    '}\n' +

    '.reco__content-close:hover {\n' +
        'color: rgb(8, 173, 2);\n' +
    '}\n' +

    '@-webkit-keyframes cascade {\n' +
        'from {transform: scale(0.8); opacity:0;}\n' +
        'to {transform: scale(1); opacity:1;}}\n' +

      '@-moz-keyframes cascade {\n' +
        'from {transform: scale(0.8); opacity:0;}\n' +
        'to {transform: scale(1); opacity:1;}}\n' +

      '@-o-keyframes cascade {\n' +
        'from {transform: scale(0.8); opacity:0;}\n' +
        'to {transform: scale(1); opacity:1;}}\n' +

    
    '@keyframes cascade {\n' +
        'from {transform: scale(0.8); opacity:0;}\n' +
        'to {transform: scale(1); opacity:1;}}\n' +
    
    '@-webkit-keyframes elementSlide {\n' +
        'from {transform: translate(-200%, -50%);}\n' +
        'to {transform: translate(-50%, -50%);}}\n' +
        '@-moz-keyframes elementSlide {\n' +
        'from {transform: translate(-200%, -50%);}\n' +
        'to {transform: translate(-50%, -50%);}}\n' +
        '@-o-keyframes elementSlide {\n' +
        'from {transform: translate(-200%, -50%);}\n' +
        'to {transform: translate(-50%, -50%);}}\n' +
    
    '@keyframes elementSlide {\n' +
        'from {transform: translate(-200%, -50%);}\n' +
        'to {transform: translate(-50%, -50%);}}'

	// Add the <style> element to the page
    document.head.appendChild(style);


    // Remove closing class when creating a new popup.
    containerDiv.classList.remove('close');

    // Declare variables relevent for the popup window functionality.
    var close = document.querySelector('.Marker--js');
    var recoConent = document.querySelector('.reco__content');

    // When close is clicked add a class that turns the pop-up opacity to 0, and makes the z-index negative.
    close.addEventListener('click', function (e) {
        recoConent.classList.toggle('close');
    });



    ///////////////////////////////////////////////////
    // Stage #2: Collect all of the pages keywords and 
    //           organize them by number of repetition.
    ///////////////////////////////////////////////////

    // Define a regex expression designed to find a collection of redundant transition, and keywords.
    var expression = /(?:www\.|\.com|\W|\d|\bhome\b|\bcategory\b|\bshop\b|\bnow\b|\bselect\b|\boff\b|\brecommendations\b|\bvideo\b|\bsubscribe\b|\bphoto\b|\bvideos\b|\bworking\b|\bout\b|\band\b|\btime\b|\bperson\b|\byear\b|\bway\b|\bday\b|\bthing\b|\bworld\b|\blife\b|\bhand\b|\bpart\b|\beye\b|\bplace\b|\bweek\b|\bcase\b|\bpoint\b|\bgovernment\b|\bcompany\b|\bnumber\b|\bgroup\b|\bproblem\b|\bfact\b|\bbe\b|\bhave\b|\bdo\b|\bsay\b|\bget\b|\bmake\b|\bgo\b|\bknow\b|\btake\b|\bsee\b|\bcome\b|\bthink\b|\blook\b|\bwant\b|\bgive\b|\buse\b|\bfind\b|\btell\b|\bask\b|\bseem\b|\bfeel\b|\btry\b|\bleave\b|\bcall\b|\bgood\b|\bnew\b|\bfirst\b|\blast\b|\blong\b|\bgreat\b|\blittle\b|\bown\b|\bother\b|\bold\b|\bright\b|\bbig\b|\bhigh\b|\bdifferent\b|\bsmall\b|\blarge\b|\bnext\b|\bearly\b|\bimportant\b|\bfew\b|\bpublic\b|\bbad\b|\bsame\b|\bable\b|\bto\b|\bof\b|\bin\b|\bfor\b|\bon\b|\bwith\b|\bat\b|\bby\b|\bfrom\b|\bup\b|\babout\b|\binto\b|\bover\b|\bafter\b|\bthe\b|\band\b|\ba\b|\bthat\b|\bI\b|\bit\b|\bnot\b|\bhe\b|\bas\b|\byou\b|\bthis\b|\bbut\b|\bhis\b|\bthey\b|\bher\b|\bshe\b|\bor\b|\ban\b|\bwill\b|\bmy\b|\bone\b|\ball\b|\bwould\b|\bthere\b|\btheir\b|\byour\b|\bs\b|\bhow\b|\bthese\b|\bcan\b|\bis\b|\bt\b|\bwhat\b|\bsays\b|\bways\b|\breally\b|\bthings\b|\bwhy\b|\bare\b|\binformation\b|\bmyself\b|\bshares\b|\breveals\b|\bpeople\b|\bneed\b|\bpacked\b|\bgoing\b|\bwas\b|\bloss\b|\bthan\b|\beasier\b|\bdonate\b|\bsome\b|\binstagram\b|\binsta\b|\bfacebook\b|\btwitter\b|\bfree\b|\bhandle\b)/ig





    // Create an array out of the page's meta tags: 'description' and 'keywords' + h1-h3 textContent, and all img.alts.

    //var allKeySources = [...document.querySelectorAll('meta[name="description"],meta[name="keywords"],h1,h2,h3,img[alt]:not([alt=""]')]
    var allKeySources = Array.prototype.slice.call(document.querySelectorAll('meta[name="description"],meta[name="keywords"],h1,h2,h3,img[alt]:not([alt=""]'));


    // Extract all of the strings out of allKeySources.
    function funnelWords(arr){
    // Designate an array for the strings that are to be extracted from the above elements.
    var allKeyWords = [];
    // Use switch to extract strings from the relevant location for each element.
    for(var i = 0; i<arr.length; i++ ){
    switch (allKeySources[i].tagName.toLowerCase()) {
    case 'meta':
    allKeyWords.push(allKeySources[i].content);
        break;
    case 'img':
    allKeyWords.push(allKeySources[i].alt);
        break;
    case 'h1':
    case 'h2':
    case 'h3':
    allKeyWords.push(allKeySources[i].textContent);
        break;
    }
    }
    // Turn the strings into one string, replace the redundant words with whitespace, turn the string back into
    // an array and delete empty strings.
    return allKeyWords.toString().replace(expression,' ').toLowerCase().split(' ').filter(function(word){return word.length>2});
    }

    // Organize the array by most frequent appearence in it, while deleting each string's doubles.
    function sortByFrequency(array) {
        var frequency = {};

        array.forEach(function(value) { frequency[value] = 0; });

        var uniques = array.filter(function(value) {
            return ++frequency[value] == 1;
        });

        return uniques.sort(function(a, b) {
            return frequency[b] - frequency[a];
        });
    }

    // Collect key words in var.
    var allKeyWords = funnelWords(allKeySources);
    // Return most frequent key words by order of appearing most.
    var wordsForAds = sortByFrequency(allKeyWords);

    ///////////////////////////////////////////////////
    // Stage #3: Create a Word class and use it to inject
    // the most frequent used key - words into the
    // previously injected HTML of the script.
    ///////////////////////////////////////////////////

    // Create a class for the main key words of the site.
    function MainKeyWord(word, frequency) {
        this.word = word;
        this.frequency = frequency;

        // Create the needed HTML for each word.
        this.create = function (placementSelector) {
            // Create a div container for the HTML of the recommended content popup.
            var contentBlock = document.createElement('div');
            // Set the proper CSS selector
            contentBlock.classList.add('reco__content-block');
            // Set each HTML with this.word and this.frequency.
            contentBlock.innerHTML += 
            '<p>Place here content related to this site\'s most common keyword <strong>#'+ this.frequency +'</strong></p>\n' +
            '<h3>'+ this.word +'</h3>\n'
            // Append the div container to the selcted element.
            placementSelector.appendChild(contentBlock);
        }
    }

    // Use only the 4 first words from wordsForAds, iterate through them to create for each
    // its own MainKeyWord object.
    var finalKeyWords = wordsForAds.splice(0, 4).map(function (word, index) {
        return new MainKeyWord(word, index + 1);
    });

    // Define the placementSelector for MainKeyWord.create().
    var injectionPoint = document.querySelector('.reco__content-box');

    // Append each item in finalKeyWords into the placementSelector.
    finalKeyWords.forEach(function (word) {
        word.create(injectionPoint);
    });

    };
};

recommendedContent();
