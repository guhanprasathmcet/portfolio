export const getImageUrl = (path) => {
    return `/assets/${path}`;
}

//so basically what this function does is it takes the path we passed and send it to an URL class and we 
//construct the url using URL class where our path and assests are attached to our website main
//for example guha.com is the one takes from import.meta.url and URL class attaches it with assets 
//path we make and final path we get its as guhan.com/assets/image.png