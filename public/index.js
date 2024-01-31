var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document
    .querySelector('#main-form')
    .addEventListener('submit', function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        // When the form is submitted, run this code
        // Prevent the default form submission
        event.preventDefault();
        // Check to see if the style "newStyle" exists
        let style = yield webflow.getStyleByName('newStyle');
        if (!style) {
            // If the style doesn't exist, create it
            style = webflow.createStyle('newStyle');
            // Set the properties of the style
            style.setProperties({
                color: 'blue',
                'font-size': '20px',
                'font-family': 'Inconsolata',
            });
            // Save the style
            yield style.save();
        }
        // Get the selected element
        const el = yield webflow.getSelectedElement();
        // Try to add the custom style
        try {
            // Check to see if an element is selected
            if (el) {
                // If an element is selected, add the style to the element and show a success notification
                el.setStyles([style]);
                yield el.save();
                webflow.notify({ type: 'Success', message: 'Style added!' });
            }
            else {
                // If no element is selected, show an info notification
                webflow.notify({ type: 'Info', message: 'No element selected' });
            }
        }
        catch (e) {
            // If there's an error, log it and show an error notification
            console.error(e);
            webflow.notify({ type: 'Error', message: 'Error adding style' });
        }
    });
});
