document.getElementById("lorem").onsubmit = async (event) => {
  event.preventDefault()
  // Get the currently selected element in the Designer
  const el = await webflow.getSelectedElement()
  if (el && el.textContent) {
    // If we found the element and it has the ability to update the text content,
    // replace it with some placeholder text
    el.setTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua."
    )
    // Finally, save the changes to the element & they will be reflected in the Designer
    await el.save()
  }
}
