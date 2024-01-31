document
	.querySelector('#main-form')
	.addEventListener('submit', async function (event) {
		// When the form is submitted, run this code
		// Prevent the default form submission
		event.preventDefault();

		// Check to see if the style "newStyle" exists
		let style = await webflow.getStyleByName('newStyle');
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
			await style.save();
		}

		// Get the selected element
		const el = await webflow.getSelectedElement();

		// Try to add the custom style
		try {
      // Check to see if an element is selected
			if (el) {
        // If an element is selected, add the style to the element and show a success notification
        el.setStyles([style]);
			  await el.save();
			  webflow.notify({ type: 'Success', message: 'Style added!' });
      } else {
        // If no element is selected, show an info notification
        webflow.notify({ type: 'Info', message: 'No element selected' });
      }
		} catch (e) {
			// If there's an error, log it and show an error notification
			console.error(e);
			webflow.notify({ type: 'Error', message: 'Error adding style' });
		}
	});
