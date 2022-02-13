![Cover image for Typing Effect with typed.js](https://res.cloudinary.com/practicaldev/image/fetch/s--JKCiU0Ye--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yk3eegw62ojxoh7yq2s0.png)

[![Jatin Sharma](https://res.cloudinary.com/practicaldev/image/fetch/s--6HN7dTzY--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/14a7b692-e1b9-4db5-a6fd-be595b7a856b.png)](https://dev.to/j471n)

[Jatin Sharma](https://dev.to/j471n)

Posted on 9 de dez.

# Typing Effect with typed.js

[#javascript](https://dev.to/t/javascript)[#webdev](https://dev.to/t/webdev)[#beginners](https://dev.to/t/beginners)[#tutorial](https://dev.to/t/tutorial)

As you may have already seen some website which has some kind of typing animation. It looks cool right but what if I tell you it is very easy to do.

I have already made an article about how you can make this type of effect with CSS but today we will build something different than that. In this effect, you can give multiple strings and it will display one by one.

First of all, let's visualize what I am talking about -

### Preview

[![preview](https://res.cloudinary.com/practicaldev/image/fetch/s--6q6iGbVl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/0vwGdE4.gif)](https://res.cloudinary.com/practicaldev/image/fetch/s--6q6iGbVl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/0vwGdE4.gif)

To make this work we need to use a library called [typed.js](https://mattboldt.github.io/typed.js/) So firstly add the following script to your project.

```
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```



Now let's look at the rest of code, how this is cooking.

### HTML

```
<h1>Hi, I am <span class="title"></span></h1>
```



HTML is very simple we just need to use only one element in order to make this work.

### JS

```
var options = {
  strings: ["Jatin Sharma", "React Developer", "Python Developer"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
};

var typed = new Typed(".title", options);
```





[![codepen](https://res.cloudinary.com/practicaldev/image/fetch/s--8AKOF1Df--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/MNtTdVp.png)](https://codepen.io/j471n/pen/qBPdXdm)

### Conclusion

It is as simple as that, now you can use this in your projects wherever you want. To learn how you can make typing effect in CSS visit the given link.

> You can now extend your support by buying me a Coffee.😊👇
> [![buymecoffee](https://res.cloudinary.com/practicaldev/image/fetch/s--GUX4imFy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://imgur.com/2QWo3cm.png)](https://www.buymeacoffee.com/j471n)

#### Also Read

- [Curved Timeline in CSS](https://dev.to/j471n/curved-css-timeline-5ab3)
- [How to use Web Storage API?](https://dev.to/j471n/how-to-use-web-storage-api-3o28)
- [Typing Effect by using CSS](https://dev.to/j471n/typing-effect-by-using-css-50p)