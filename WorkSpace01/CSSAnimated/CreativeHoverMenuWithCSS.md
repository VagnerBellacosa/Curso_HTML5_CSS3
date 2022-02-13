![Cover image for Creative Hover Menu with CSS](https://res.cloudinary.com/practicaldev/image/fetch/s--RRms1_OK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c8i4szbq16f5d2hfaxn8.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 11 de dez. • Updated on 15 de dez.

# Creative Hover Menu with CSS

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#tutorial](https://dev.to/t/tutorial)[#beginners](https://dev.to/t/beginners)

In this article, we are going to make the navigation menu, but it will be in the verticle form, I'll recommend you to use this as the full page menu, we are not going to talk about how to toggle the hamburger and that stuff if you want me to explain that, then tell me in the comment section. I can cover that in a separate article. First Let's see what are we building-

### Preview

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--qP_bx860--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/qeWj4ly.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--qP_bx860--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/qeWj4ly.gif)

Before we look at the whole code first let me give you an overview of some effects.

**Glow Effect**
As you can see the glow effect in the text when you hover on it. this can be achieved by the following CSS property-

```
  text-shadow: 0 0 7px #fff, 
               0 0 10px #fff, 
               0 0 21px #fff, 
               0 0 42px #0fa,
               0 0 82px #0fa, 
               0 0 92px #0fa, 
               0 0 102px #0fa, 
               0 0 151px #0fa;
```



**Text Spaceing Effect**
I've used the animation with the letter-spacing property. you can achieve that by the following code-

```
@keyframes animate {
  from {
    opacity: 0;
    letter-spacing: 50px;
  }
  to {
    opacity: 1;
    letter-spacing: 5px;
  }
}
```



### HTML

```
<nav class="navbar">
  <ul class="nav_list">
    <!--....More Links...-->
    <li>
      <a href="#">
        <p class="link">about</p>
        <p class="hidden_link">about</p>
      </a>
    </li>
   <!--....More Links...-->
  </ul>
</nav>
```



In HTML we have the `.navbar` which wraps the whole navigation menu then we have the unordered list in which we have the `li` and inside that we have the anchor (`a`) tag which also contains the two paragraphs (`p`) tag one is the bigger one (`.link`) and the other one is hidden (`.hidden_link`) which will only be visible on `hover`.

### CSS

```
/* Default values */
* {
  margin: 0;
  padding : 0;
}
ul > li {
  list-style: none;
}

a {
  text-decoration: none;
}

/* Relative navigation list item */
.nav_list > li {
  position: relative;
  margin: 8px 0;
}

.nav_list > li > a {
  color: #fff;
  text-align: center;
}

.nav_list > li > a p {
  text-transform: uppercase;
}

.nav_list > li > a > .link {
  font-size: 2rem;
  transition: opacity 300ms ease-in-out;
}

.nav_list > li > a .hidden_link {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  color: #fff;
  background: transparent;
  text-align: center;
  text-shadow: 0 0 7px #fff, 
               0 0 10px #fff, 
               0 0 21px #fff, 
               0 0 42px #0fa,
               0 0 82px #0fa, 
               0 0 92px #0fa, 
               0 0 102px #0fa, 
               0 0 151px #0fa;

  /*  animation "from"  */
  opacity: 0;
  letter-spacing: 50px;
  pointer-events: none;
}

/* Low opacity of main Link */
.nav_list > li > a:hover > .link {
  opacity: 0.3;
}

/* Show the Hidden link with animation */
.nav_list > li > a:hover > .hidden_link {
  animation: show-link 400ms ease-in-out forwards;
}

@keyframes show-link {
  to {
    opacity: 1;
    letter-spacing: 5px;
    pointer-events: all;
  }
}
```



**Recommended Device-** Desktop/Laptop.


[![codepen](https://res.cloudinary.com/practicaldev/image/fetch/s--KwlJRhmm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://svgshare.com/i/coN.svg)](https://codepen.io/j471n/full/WNZxmpr)

### Conclusion

Now you can make this by yourself as well. you should now make the hamburger or the navigation toggle button and display this navbar. with some sliding animation maybe. If you have any queries or any suggestions comments section is always open.

> You can now extend your support by buying me a Coffee.😊👇
> [![buymecoffee](https://res.cloudinary.com/practicaldev/image/fetch/s--GUX4imFy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/2QWo3cm.png)](https://www.buymeacoffee.com/j471n)

#### Also Read

- [Typing Effect by using CSS](https://dev.to/j471n/typing-effect-by-using-css-50p)
- [Curved Timeline in CSS](https://dev.to/j471n/curved-css-timeline-5ab3)
- [Typing Effect with typed.js](https://dev.to/j471n/typing-effect-with-js-34b8)