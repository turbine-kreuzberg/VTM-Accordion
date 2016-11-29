/* ************************************************** *
 * VTM ACCORDION JS
 *
 * Version: 1.0
 * Author: Ricardo Hildebrand
 * Email: ricardo.hildebrand@votum.de
 * Date: 12/2016
 * ************************************************** */

var accordionTitles = document.getElementsByClassName('js-accordion-title');

for (var i = 0, len = accordionTitles.length; i < len; i++) {

    accordionTitles[i].addEventListener('click', function (event) {

        var parent = event.target.parentNode;

        removeTitleActiveClasses(parent.children);
        resetDescriptionHeights(parent.children);

        var clickedTitle = event.target,
            nextDescription = event.target.nextElementSibling;

        if (nextDescription.classList.contains('is-open')) {
            nextDescription.classList.remove('is-open');
        } else {
            addDescriptionHeight(nextDescription);
            removeDescriptionOpenClasses(parent.children);
            clickedTitle.classList.add('is-active');
            nextDescription.classList.add('is-open');
        }

    });

}


/**
 * resets accordion titles
 *
 * @param children
 */
function removeTitleActiveClasses(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        if (children[i].classList.contains('js-accordion-title')) {
            children[i].classList.remove('is-active');
        }
    }
}


/**
 * resets heights of accordion contents/descriptions
 *
 * @param children
 */
function resetDescriptionHeights(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        if (children[i].classList.contains('js-accordion-description')) {
            children[i].style.maxHeight = 0;
            children[i].style.height = 'auto';
        }
    }
}


/**
 * calculate and sets Height of Description/content to show
 *
 * @param nextDescription
 */
function addDescriptionHeight(nextDescription) {
    var height = nextDescription.scrollHeight + 96;
    nextDescription.style.maxHeight = height + 'px';
    nextDescription.style.height = height + 16 + 'px';
}


/**
 * resets accordion descriptions
 *
 * @param children
 */
function removeDescriptionOpenClasses(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        if (children[i].classList.contains('js-accordion-description')) {
            children[i].classList.remove('is-open');
        }
    }
}