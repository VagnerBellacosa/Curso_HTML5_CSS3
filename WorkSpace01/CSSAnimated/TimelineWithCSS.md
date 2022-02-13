![Cover image for Timeline with CSS](https://res.cloudinary.com/practicaldev/image/fetch/s--vB_kJ3Gh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wrci1dmfz3j5zsd7d5q1.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 10 de nov.

# Timeline with CSS

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#beginners](https://dev.to/t/beginners)[#tutorial](https://dev.to/t/tutorial)

In this article, we are gonna build a timeline for your website which you can use later on in your portfolio to display your work history or maybe something else you want. Let's first look at what are we building -

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--a-t4yAba--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/BLrZCnJ.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--a-t4yAba--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/BLrZCnJ.gif)

Now you have seen what we are up to so let's get hands in the code -

**HTML**

```
<div class="timeline">
  <div class="outer">
    <!-- .... card before this -->
    <div class="card">
      <div class="info">
        <h3 class="title">Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <!-- ..... you can add more div with "card" class -->
  </div>
</div>
```



In the HTML code, the `timeline` class is the main container and the `outer` class is the wrapper for all the cards. and then we have a `card` in which we add data.

Now let's look at the CSS -

**CSS**

```
/* Timeline Container */
.timeline {
  background: #fff;
  margin: 20px auto;
  padding: 20px;
}

/* Outer Layer with the timeline border */
.outer {
  border-left: 2px solid #333;
}

/* Card container */
.card {
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  background: #333;
  color: gray;
  border-radius: 8px;
  max-width: 400px;
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Title of the card */
.title {
  color: orangered;
  position: relative;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 999px;
  left: -39px;
  border: 3px solid orangered;
}
```



### Codepen is Here



See the Pen [css-timeline](https://codepen.io/j471n/pen/wvqXRjm) by Jatin ([@j471n](https://codepen.io/j471n)) on [CodePen](https://codepen.io/).

### Conclusion

This is just the beginning, you can customize it to the next level, and maybe I'll do in the future article to stay tuned for that if you have any suggestions then comment below.

> You can now extend your support by buying me a Coffee.😊👇

[![Buy Me A Coffee](https://res.cloudinary.com/practicaldev/image/fetch/s--Rb9xKs4G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/j471n)

- [10 CSS Resources that you should bookmark](https://dev.to/j471n/10-css-resources-that-you-should-bookmark-46l6)
- [Fully functional google search with next.js](https://dev.to/j471n/fully-functional-google-clone-with-nextjs-223o)
- [How to share anything from your website by Web Share API](https://dev.to/j471n/how-to-share-anything-from-your-website-by-web-share-api-1h5g)