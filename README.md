# Salem Early Beta

## Navigating the code
To find the HTML code and how HTML was used to build this site through JSX, navigate to the /src/components folder and open any file. Inside the file find the render() method and then the return statment inside that method. This is where any HTML code would be located. 
All CSS is found in the /src/Styles folder
All Data meant to emulate data coming from a server or API is located in the /src/Data folder

### CSS
This website was created using css grid instead of more common ways of designing sites like float. This was a mistake although css grid is a powerful tool it shoudl be used side by side with float and other elements. CSS grid causes some unwanted mishaps like the way objects move when the window is resized. 

### Header
The is not going to be the ending design for the site but this design was made with a basis in Jackson.com with the layout and color changed 
The top of the site consists of two navigations components. The first navigation component inludes areas to learn more about what Salem is and will be, the second navigation component includes ways to see what Salem has done. This will be useful to both new users of the site and returning users. Everything in the Header is made with <a></a> and will be links to other pages that are yet to be made. 

### ImageSlider
This component was made with an npm component Carousel. Carousel allows devs to have a more easily built image slider in react. 

### Paragraph Wrapper
#### Writing
This component is built in a way that allows the switching of the language by the click of a button. This is achieved through changing the state of the component with this.state. This is allowed because of the abiligy of React to run with components and not like vanilla HTML and Javascript. 
#### Drop Down
The Drop Down is made with basic Javascript practices. With an onClick attribute of an HTML element calling a Javascript mehtod that sets the name of the element as either seen or unseen then having a portion of my CSS be made seperetaley for two possible classes

### Sliding Objects
This is written by making a string of SlideBuilder components, which are simple div tags that have a head body and text underneath. SlideBuilder has a set width and a overflow-x: scroll; attribute in the CSS that allows it to scroll horizontally.  
