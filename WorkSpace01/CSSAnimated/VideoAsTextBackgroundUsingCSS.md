![Cover image for Video as Text background using CSS](https://res.cloudinary.com/practicaldev/image/fetch/s--s1U7lI89--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8cxadty45492bkswuf2i.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 13 de nov.

# Video as Text background using CSS

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#tutorial](https://dev.to/t/tutorial)[#beginners](https://dev.to/t/beginners)

In this article, we will use any video as the background of the text. As you may have already know you cannot use directly video as the text background, so well take the little help of css to make it work. First things first let's see what are building -

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--vFDafuGE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/mp1uZmU.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--vFDafuGE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/mp1uZmU.gif)

Now you have seen what we are up to so let's get hands into the code -

**HTML**

```
<div class="container">
  <video class="bg-video" autoplay loop>
    <source src="https://imgur.com/2cSaKIt.mp4" type="video/mp4" />
  </video>
  <p class="text">AWESOME TEXT</p>
</div>
```



In the HTML code, the `container` class is the main container to hold the video and tex. It has two children one is video and text.

Now let's style it with CSS -

**CSS**

```
* {
  margin: 0;
  padding: 0;
}

/* Container should be full height and full width */
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.container > .bg-video {
  width: 100%;
  height: 100%;
}

/* background-color and color should be the same as the below otherwise it won't work */
.container > .text {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: #000;
  color: #fff;
  font-weight: 900;
  font-size: 100px;
  font-family: sans-serif;
  /* Mix Blend Mode does the all magic */
  mix-blend-mode: multiply;
  user-select: none;
}
```



### Codepen is Here

See the Pen [video-as-text-background](https://codepen.io/j471n/pen/WNEgRQe) by Jatin [@j471n](https://codepen.io/j471n) on [CodePen](https://codepen.io/).

> You can now extend your support by buying me a Coffee.😊👇

[![Buy Me A Coffee](https://res.cloudinary.com/practicaldev/image/fetch/s--Rb9xKs4G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/j471n)

- [10 CSS Resources that you should bookmark](https://dev.to/j471n/10-css-resources-that-you-should-bookmark-46l6)
- [Fully functional google search with next.js](https://dev.to/j471n/fully-functional-google-clone-with-nextjs-223o)
- [How to share anything from your website by Web Share API](https://dev.to/j471n/how-to-share-anything-from-your-website-by-web-share-api-1h5g)