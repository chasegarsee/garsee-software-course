const favoriteLocationsData = [
  {
    image: 'images/colorado.JPG',
    title: 'Colorado',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    date: 'March 2, 2022',
    tags: [
      'Travel',
      'Nature'
    ]
  },
  {
    image: 'images/chiang-mai.JPG',
    title: 'The Baristro',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique',
    date: 'February 17, 2022',
    tags: [
      'Travel',
      'Coffee Shop'
    ]
  },
  {
    image: 'images/france.JPG',
    title: 'Paris',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    date: 'Jan 3, 2022',
    tags: [
      'Camera',
      'Nature'
    ]
  },
  {
    image: 'images/forrest.JPG',
    title: 'Thai Rain Forrest',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    date: 'Dec 15, 2021',
    tags: [
      'Work',
      'Nature'
    ]
  },
  {
    image: 'images/vegas.JPG',
    title: 'Vegas',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    date: 'Nov 1, 2021',
    tags: [
      'Travel',
      'Pool Vibes'
    ]
  },
  {
    image: 'images/home.JPG',
    title: 'Home',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    date: 'Nov 1, 2021',
    tags: [
      'Home',
      'Family'
    ]
  },
  {
    image: 'images/bering-sea.jpg',
    title: 'Airplanes',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    date: 'Nov 1, 2021',
    tags: [
      'Travel',
      'Vibes'
    ]
  },
  
]
addFavoriteLocations(favoriteLocationsData);
function addFavoriteLocations(locations){            
  locations.forEach((location, key) => {           
    const locationWrapper = document.createElement("div");
    locationWrapper.className = 'location'
    document.getElementById("places-list").appendChild(locationWrapper);
    
   const imageWrapper =  document.createElement("div")
   imageWrapper.className = 'image-wrapper'
   document.getElementsByClassName("location")[key].appendChild(imageWrapper);

  const image = document.createElement('img')
  image.className = 'thumbnail'
  image.setAttribute('src', location.image)
  image.setAttribute('width', '109')
  image.setAttribute('alt', '')
  document.getElementsByClassName("image-wrapper")[key].appendChild(image);

  const section = document.createElement('section')
  section.className = 'location-text-wrapper'
  imageWrapper.after(section)

  const title = document.createElement('h2') 
  title.className = 'thumbnail-title'
  title.appendChild(document.createTextNode(location.title))

  
  const paragraph = document.createElement('p')
  paragraph.appendChild(document.createTextNode(location.paragraph))
  
  const locationInfoWrapper = document.createElement('div')
  locationInfoWrapper.className = 'location-info-wrapper'

  document.getElementsByClassName("location-text-wrapper")[key].appendChild(title);
  document.getElementsByClassName("location-text-wrapper")[key].appendChild(paragraph)
  document.getElementsByClassName("location-text-wrapper")[key].appendChild(locationInfoWrapper)

   const date = document.createElement('div')
   date.appendChild(document.createTextNode(location.date))
   date.className = 'location-info-text tag'
   document.getElementsByClassName("location-info-wrapper")[key].appendChild(date)
   addTags(location.tags)
   function addTags(tags) {
    tags.forEach(tag => {
      const locationTag = document.createElement('div')
      locationTag.className ='location-info-text tag'
      locationTag.appendChild(document.createTextNode(tag))
      date.after(locationTag)
    })
  } 
 })
};