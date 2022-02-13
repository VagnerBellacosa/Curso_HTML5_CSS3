![Cover image for Glassmorphism Circle Loading Animation](https://res.cloudinary.com/practicaldev/image/fetch/s--aC_Kfjx6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4chr7ci7wtjbn5z7licp.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 2 de nov.

# Glassmorphism Circle Loading Animation

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#beginners](https://dev.to/t/beginners)[#tutorial](https://dev.to/t/tutorial)

## [CSS Animation (4 Part Series)](https://dev.to/j471n/series/15128)

[1CSS Gradient Loading Animation](https://dev.to/j471n/css-gradient-loading-animation-2695)[2Glassmorphism Loading Animation](https://dev.to/j471n/glassmorphism-loading-animation-4n2m)[3Glassmorphism Circle Loading Animation](https://dev.to/j471n/glassmorphism-circle-loading-animation-1cda)[4Clean Loading Animation](https://dev.to/j471n/clean-loading-animation-4cl9)

In this article we are gonna build a loading spinner with the glassmorphism, stay tuned for that first let's look what are we building -

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--71ZpZNmo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/xPPG8l8.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--71ZpZNmo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/xPPG8l8.gif)

We just need simple `div` to create this animation. For this animation we have used pseudo classes and a normal keyframe in which we just `rotate` the `.loader`.

**HTML**

```
<div class="loader"></div>
```



**CSS**

```
/* Main Loader */
.loader {
  position: relative;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  animation: circleAnimation 1s linear infinite;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
}

/* Glassmorphism */
.loader::before {
  inset: 10px;
  background: rgba(233, 30, 99, 0.05);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
}

/* animated Circle */
.loader::after {
  top: -50%;
  left: -50%;
  width: 100%;
  height: 100%;
  background: #ff6198;
}

@keyframes circleAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```



**Codepen is Here**



### Conclusion

So after that, you can use it anywhere in your project. And let me know what do you think about it. If you like it then consider a follow, because I am gonna build more things like this.

> You can now extend your support by buying me a Coffee.😊👇

[![Buy Me A Coffee](https://res.cloudinary.com/practicaldev/image/fetch/s--wLCD6792--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://cdn.buymeacoffee.com/uploads/project_updates/2021/05/918bc0ffae9a1865553d54bc11e65c4b.gif)](https://www.buymeacoffee.com/j471n)

### Also Read

- [10 CSS Resources that you should bookmark](https://dev.to/j471n/10-css-resources-that-you-should-bookmark-46l6)
- [Some Strange Concept of JavaScript](https://dev.to/j471n/some-strange-concept-of-javascript-4icc)
- [Some Javascript Methods you should know](https://dev.to/j471n/some-javascript-methods-you-should-know-i15)

## [CSS Animation (4 Part Series)](https://dev.to/j471n/series/15128)

[1CSS Gradient Loading Animation](https://dev.to/j471n/css-gradient-loading-animation-2695)[2Glassmorphism Loading Animation](https://dev.to/j471n/glassmorphism-loading-animation-4n2m)[3Glassmorphism Circle Loading Animation](https://dev.to/j471n/glassmorphism-circle-loading-animation-1cda)[4Clean Loading Animation](https://dev.to/j471n/clean-loading-animation-4cl9)

## Discussion (0)