export const getImageUrl = (path) => {
    console.log("Path argument received:", path); 
    const relativePath = `/public/assets/${path}`;
    console.log("Constructed relative path:", relativePath); 
    const urlObject = new URL(relativePath, import.meta.url);
    console.log("URL object:", urlObject);
    console.log("Final URL href:", urlObject.href);
    return urlObject.href;
}

//so basically what this function does is it takes the path we passed and send it to an URL class and we 
//construct the url using URL class where our path and assests are attached to our website main
//for example guha.com is the one takes from import.meta.url and URL class attaches it with assets 
//path we make and final path we get its as guhan.com/assets/image.png