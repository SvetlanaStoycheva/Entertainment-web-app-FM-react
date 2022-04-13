## Entertainment web app // Frontend Mentor Project // React and CSS

- [see project]()
- Your users should be able to:

  - View the optimal layout for the app depending on their device's screen size
  - See hover states for all interactive elements on the page
  - Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
  - Add/Remove bookmarks from all movies and TV series
  - Search for relevant shows on all pages
  - The data is in local data.js file
  - The data is saved on the localStorage, so that the user can see the current bookmarked state when come back to the app.

  //https://github.com/steveanthony999/galeria_slideshow/blob/master/src/components/gallery/Gallery.js

@searchForm @reactRouter6 @importData @activeButtons

<p align-items: center>
    <img src='./readme-images/Screenshot-gallery-site-1.png' width='250'>
</p>
<br/>
<p align-items: center>
    <img src='./readme-images/Screenshot-gallery-site-2.png' width='250'>
</p>
<br/>
<p align-items: center>
    <img src='./readme-images/Screenshot-gallery-site-3.png' width='250'>
</p>
<br/>

#### Comments about the code

- import data from data.js: in order to see the images, in the data.js the images must have require ().default
  image: require('./assets/thumbnails/beyond-earth/trending/large.jpg').default,

#### Helpers

- for react-router-dom@6

  - npm install react-router-dom@6
  - [tutorial](https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/31400928#content)
  - [repo](https://github.com/john-smilga/react-router-6-tutorial)
