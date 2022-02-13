![Cover image for CSS Gradient Loading Animation](https://res.cloudinary.com/practicaldev/image/fetch/s--F8vBgUWw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p4td1f96f0f4xnm49ngw.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 22 de out.

# CSS Gradient Loading Animation

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#beginners](https://dev.to/t/beginners)[#tutorial](https://dev.to/t/tutorial)

## [CSS Animation (4 Part Series)](https://dev.to/j471n/series/15128)

[1CSS Gradient Loading Animation](https://dev.to/j471n/css-gradient-loading-animation-2695)[2Glassmorphism Loading Animation](https://dev.to/j471n/glassmorphism-loading-animation-4n2m)[3Glassmorphism Circle Loading Animation](https://dev.to/j471n/glassmorphism-circle-loading-animation-1cda)[4Clean Loading Animation](https://dev.to/j471n/clean-loading-animation-4cl9)

In this article we are gonna build a loading spinner for you website stay tuned for that first let's look what are we building -

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--_rkXU8OR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/uPnDE58.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--_rkXU8OR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/uPnDE58.gif)

We just need simple div to create this animation. For this animation we have used pseudo classes and a normal keyframe in which we just rotate the div.

**HTML**

```
<div class="loader"></div>
```



**CSS**

```
.loader {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10rem;
  border: 3px solid white;
  background: linear-gradient(#eb31b0, #e4c352, #7df8d6);
  box-shadow: 0px 0px 100px -50px black;
  animation: animate 1s linear infinite;
}

.loader::before {
  position: absolute;
  content: "";
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 10rem;
  border: 3px solid white;
  box-shadow: inset 0px 0px 100px -70px #111;
}

@keyframes animate {
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

So after that you can use it anywhere in your project. And let me know what do you think about it. If you like it then consider a follow.

- [Some Javascript Methods you should know](https://dev.to/j471n/some-javascript-methods-you-should-know-i15)
- [10 Git Commands everybody should know](https://dev.to/j471n/10-git-commands-everybody-should-know-3322)
- [Convert Next.js app to PWA](https://dev.to/j471n/convert-nextjs-app-to-pwa-3fd)

## [CSS Animation (4 Part Series)](https://dev.to/j471n/series/15128)

[1CSS Gradient Loading Animation](https://dev.to/j471n/css-gradient-loading-animation-2695)[2Glassmorphism Loading Animation](https://dev.to/j471n/glassmorphism-loading-animation-4n2m)[3Glassmorphism Circle Loading Animation](https://dev.to/j471n/glassmorphism-circle-loading-animation-1cda)[4Clean Loading Animation](https://dev.to/j471n/clean-loading-animation-4cl9)