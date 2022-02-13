![Cover image for Clean Loading Animation](https://res.cloudinary.com/practicaldev/image/fetch/s--aZ_0MQHr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gvjmvlp767ig2s8lzzix.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 2 de dez.

# Clean Loading Animation

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#beginners](https://dev.to/t/beginners)[#tutorial](https://dev.to/t/tutorial)

## [CSS Animation (4 Part Series)](https://dev.to/j471n/series/15128)

[1CSS Gradient Loading Animation](https://dev.to/j471n/css-gradient-loading-animation-2695)[2Glassmorphism Loading Animation](https://dev.to/j471n/glassmorphism-loading-animation-4n2m)[3Glassmorphism Circle Loading Animation](https://dev.to/j471n/glassmorphism-circle-loading-animation-1cda)[4Clean Loading Animation](https://dev.to/j471n/clean-loading-animation-4cl9)

In this article, we are going to build another loading animation with pure CSS. First, let's look at what are we building -

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--RPDCe5tR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/npSZAhG.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--RPDCe5tR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/npSZAhG.gif)

Now let's look at the code now -

### HTML

```
<div class="loading_container">
  <div class="loading"></div>
  <h3>loading...</h3>
</div>
```



We have the main `div` with class `loading_container` and it has two children `loading` and `h3`.

- `loading` - It is the main loader for this animation
- `h3` : it is the text which you can see in the preview

### CSS

```
/* Outer Loading Container */
.loading_container {    
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 150px;
}

/* Loader */
.loading {
  width: 100%;
  height: 100%;
  border-radius: 150px;
  border-right: 0.3rem solid white;
  animation: animate 2s linear infinite;
}

/* Animation */
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

/* loading text */
.loading_container > h3 {
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```





[![img](https://res.cloudinary.com/practicaldev/image/fetch/s--8AKOF1Df--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/MNtTdVp.png)](https://codepen.io/j471n/pen/gOWbjam)

## Conclusion

So after that you can use it anywhere in your project. And let me know what do you think about it. If you like it then consider a follow.

> You can now extend your support by buying me a Coffee.😊👇
> [![buymecoffee](https://res.cloudinary.com/practicaldev/image/fetch/s--GUX4imFy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/2QWo3cm.png)](https://www.buymeacoffee.com/j471n)

### Also Read

- [Curved Timeline in CSS](https://dev.to/j471n/curved-css-timeline-5ab3)
- [How to use Web Storage API?](https://dev.to/j471n/how-to-use-web-storage-api-3o28)
- [10 CSS Resources that you should bookmark](https://dev.to/j471n/10-css-resources-that-you-should-bookmark-46l6)

## [CSS Animation (4 Part Series)](https://dev.to/j471n/series/15128)

[1CSS Gradient Loading Animation](https://dev.to/j471n/css-gradient-loading-animation-2695)[2Glassmorphism Loading Animation](https://dev.to/j471n/glassmorphism-loading-animation-4n2m)[3Glassmorphism Circle Loading Animation](https://dev.to/j471n/glassmorphism-circle-loading-animation-1cda)[4Clean Loading Animation](https://dev.to/j471n/clean-loading-animation-4cl9)

## Discussion (0)