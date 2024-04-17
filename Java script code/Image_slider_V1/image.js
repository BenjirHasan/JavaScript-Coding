// Create necessary HTML elements
const img = document.createElement("img");
img.setAttribute("src", "images.jpeg");
img.setAttribute("alt", "Slide");
document.body.appendChild(img);

var photos = ["image/images.jpeg", "image/download1.jpeg", "image/download.jpeg"];
var imgTag = document.querySelector("img");

var count = 0;

function prev()
{
    count--

    if (count < 0)
    {
        count = photos.length - 1;
        imgTag.src = photos[count];
    }

    else
    {
        imgTag.src = photos[count];
    }
}

function next()
{
    count++

    if (count>=photos.length)
    {
        count = 0;
        imgTag.src = photos[count];
    }

    else
    {
        imgTag.src = photos[count];
    }
    
}
setInterval(next, 3000);