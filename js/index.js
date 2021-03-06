const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = siteContent["nav"]["img-src"]

let anchors = document.querySelectorAll('a');
let navtextArray = ["Services", "Product", "Vision", "Features", "About", "Contact"]
for(let i = 0; i < anchors.length;i++ ){
  anchors[i].style.color ='green';
  anchors[i].innerHTML = navtextArray[i];
}

let navigation = document.querySelector('.container nav');
let newFirstAnchor = document.createElement('a');
newFirstAnchor.innerHTML = "Blog";
newFirstAnchor.style.color ='green';
let newLastAnchor = document.createElement('a');
newLastAnchor.innerHTML = 'Store';
newLastAnchor.style.color = 'green';
navigation.prepend(newFirstAnchor);
navigation.appendChild(newLastAnchor);


let ClassH1 = document.querySelector('.cta-text h1').innerHTML = "DOM Is Awesome";
let button = document.querySelector('button').innerHTML = "Get Started";
let imgCodeSnippet = document.getElementById('cta-img').src = siteContent["cta"]["img-src"];
let h4 = document.querySelectorAll('h4');
let h4text = ["Features", "About", "Services", "Product", "Vision","Contact"]
for(let i = 0; i < h4.length; i++){
  h4[i].innerHTML = h4text[i];
  h4[i].style.color = 'gold';
  h4[i].style.textShadow ='2px 2px black'
}

let textContentPara = document.querySelectorAll('.text-content p');
textContentPara[0].innerHTML = siteContent['main-content']['features-content'];
textContentPara[1].innerHTML = siteContent['main-content']['about-content'];
let middleImg = document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];
textContentPara[2].innerHTML = siteContent['main-content']['services-content'];
textContentPara[3].innerHTML = siteContent['main-content']['product-content'];
textContentPara[4].innerHTML = siteContent['main-content']['vision-content'];

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].innerHTML = siteContent['contact']['address'];
contactPara[1].innerHTML = siteContent['contact']['phone'];
contactPara[2].innerHTML = siteContent['contact']['email'];
let footerPara = document.querySelector('footer p').innerHTML = siteContent['footer']['copyright'];