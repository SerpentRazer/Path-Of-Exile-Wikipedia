For my Path of Exile Wikipedia project, a variety of web technologies are employed to create a dynamic, user-friendly search interface. Here’s a brief overview of the technologies used and a general description of the code structure:

Technologies Used

  1. HTML (Hypertext Markup Language):
     The foundation of your webpage, defining the structure and content. It includes various elements like headers, divs, input fields, and buttons to create the layout.
  
  2. CSS (Cascading Style Sheets):
     Used to style the HTML elements. My main.css file customizes the appearance of the webpage, including layout, colors, and fonts. It also uses Flexbox for alignment and positioning and sets a background image for a visually appealing interface.

  3. JavaScript:
     Adds interactivity to the webpage. main.js file contains the logic for the search functionality and interaction with the user. It uses jQuery and jQuery UI for simpler DOM manipulation and to provide autocomplete features for the search bar.
    
  4. Bootstrap:
     A front-end framework that provides pre-designed components and a responsive grid layout. Bootstrap ensures that the site is accessible and looks good on different devices.
     
  5.jQuery and jQuery UI:
    JavaScript libraries that simplify HTML DOM tree traversal and manipulation, event handling, and animation. jQuery UI adds advanced interactions like the autocomplete widget used for the search bar.

Code Description

HTML (index.html):
The HTML file sets up the structure of your webpage. It includes:

  A head section where meta tags, links to CSS files, and the page title are defined.
A body section containing the main layout, including the logo, search bar, and item details area.
Links to external libraries like Bootstrap and jQuery are included for additional functionality and styling.
CSS (main.css):
This file styles the webpage to make it visually appealing and user-friendly. Key features include:

  Setting a background image and styling the body to center content.
Styling the search bar with custom colors, dimensions, and a background image for borders.
Ensuring the search bar and dropdown menu have a consistent design that matches the overall theme.
Styling individual item display areas to present item details clearly.
JavaScript (main.js):
This file contains the core functionality of the search interface. It includes:

  An array of items, each with a label, category, and image URL.
The autocomplete feature filters items based on the user's input.
Functions to display the selected item details when a search is performed.
Event handlers for user interactions, such as pressing enter in the search bar or clicking the search button.
Dropdown menu functionality to filter items by category.

  How It Works:
  
  When a user starts typing in the search bar, the autocomplete feature provides suggestions based on the available items. If the user selects an item from the suggestions or presses enter, the selected item’s details are displayed below the search bar. The dropdown menu allows users to filter items by category, enhancing the search functionality. Bootstrap ensures that the layout is responsive and looks good on various devices, while the CSS file adds custom styles to match the theme of Path of Exile.

Overall, my project combines several web technologies to create a cohesive, interactive, and visually appealing user experience.
