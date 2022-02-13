
![Cover image for Typing Effect by using CSS](https://res.cloudinary.com/practicaldev/image/fetch/s--N64kbo71--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1gawvendrasxebzk8f6k.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 3 de dez.

# Typing Effect by using CSS

[#css](https://dev.to/t/css)[#webdev](https://dev.to/t/webdev)[#beginners](https://dev.to/t/beginners)[#tutorial](https://dev.to/t/tutorial)

As you may have already seen some website which has some kind of typing animation. It looks cool right but what if I tell you it is very easy to do and you can do it with just CSS only, not without using JS.

First of all, let's visualize what I am talking about -

### Preview

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--e0J3cZIC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/7PBxp4Q.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--e0J3cZIC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/7PBxp4Q.gif)

Now let's look at the code, how can we make that happen

### HTML

```
<h1 class="typing">You had me at 'hello'.</h1>
```



HTML is very simple we just need to use only one element in order to make this work.

### CSS

```
/* Typing Class */
.typing {
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
  border-right: 0.15em solid orangered;
  animation: typing 3.5s steps(40, end) infinite,
             cursor-blink 0.75s step-end infinite;
}

/* The typing effect for the text */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The cursor  blinking effect */
@keyframes cursor-blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orangered;
  }
}
```





[![codepen](https://res.cloudinary.com/practicaldev/image/fetch/s--8AKOF1Df--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/MNtTdVp.png)](https://codepen.io/j471n/pen/JjrdRmL)

### Conclusion

It is as simple as that, now you can use this in your projects wherever you want. You can also make that work with JS, but that's another story for another time.

> You can now extend your support by buying me a Coffee.😊👇
> [![buymecoffee](https://res.cloudinary.com/practicaldev/image/fetch/s--GUX4imFy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/2QWo3cm.png)](https://www.buymeacoffee.com/j471n)

#### Also Read

- [Curved Timeline in CSS](https://dev.to/j471n/curved-css-timeline-5ab3)
- [How to use Web Storage API?](https://dev.to/j471n/how-to-use-web-storage-api-3o28)
- [Video as Text background using CSS](https://dev.to/j471n/video-as-text-background-using-css-58im)