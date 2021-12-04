![CSS Scale()](https://cdn.educba.com/academy/wp-content/uploads/2020/06/psd-6.jpg.webp)

## Introduction to CSS Scale()

A CSS scale() function is defined as a CSS Transformation property which allows resizing an element in the Two-dimensional Plane. It is used to increase or decrease the size of an element. When a scale transformation is applied it is necessary to instruct the browser about the numbers to resize. Therefore, this scale() zooms in and out the elements. The scaling number is defined by a vector in a plane we can resize the dimensions at any different scales with the help of CSS data type called transform-function.

**Syntax:**

The Scaling() function is done with two or one values that help in specifying scaling to be applied in all directions. The general Syntax is expressed as:

```
scale( sx ) ; // with one argument on horizontal plane.
```

The single parameter sets it for width or height. It means it assigns the value evenly to both X and Y axis. The values here are unitless and considered to be as a multiplier concept.

The other syntax with two arguments is:

```
scale(sx,sy);
```

Here sx – The element is resized in horizontal.
sy – The element is resized in vertical.

**Example:**

This shrink its size to half
`.bb {Transform:scale(0.6);}Next sample double the Y-Axis:.bb {`

 Popular Course in this category

![Sale](https://cdn.educba.com/academy/wp-content/uploads/2021/11/cyber-monday-sale-1.png)[CSS Training (9 Courses, 9+ Projects)9 Online Courses | 9 Hands-on Projects | 61+ Hours | Verifiable Certificate of Completion | Lifetime Access
4.5 (7,162 ratings)Course Price
$79 ~~$599~~
**View Course**](https://www.educba.com/software-development/courses/css-course/?btnz=edu-blg-inline-banner1)

------

Related Courses

[Bootstrap Training (2 Courses, 6+ Projects)](https://www.educba.com/software-development/courses/bootstrap-training-course/?btnz=edu-blg-inline-banner1)[jQuery Training (8 Courses, 5 Projects)](https://www.educba.com/software-development/courses/jquery-training-course/?btnz=edu-blg-inline-banner1)

So, the first thing we do is to create an HTML page for an element and to apply special effects using CSS3. The important note here is when scaling is applied to an image make sure that the original dimension of the image should be greater than the size at which the scaling is performed on an image. If the value that we provide is greater than one the Scaling is done upwards on the element which looks huge in the specified direction. If the specified number is one then it remains unchanged. And next, if the value is between zero range the element is scaled downwards. Another important point is negative values are allowed here but they don’t do any scaling instead they flip in any direction.

### How Does the scale() Method Work in CSS?

Below are the scale() function and its description:

| **scale() function**                      | **Description**                                              |
| ----------------------------------------- | ------------------------------------------------------------ |
| Transform:scale(3);Transform: scale(0.5); | Here the value 3 would transform the size to 3 times of its original image size.And the value 0.5 transforms the size to half of its original image size. |
| Transform: scale(0);                      | Scaled out of the plane and not visible.                     |
| Transform: scale(3,1);                    | Horizontal size is scaled up by three and the vertical is unchanged |

### Examples to Implement scale() Function in CSS

The following section creates a Sample code that outlines the HTML page and the CSS is embedded inside the head.

#### Example #1

**Code:**

<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Example on CSS Scale() </title><style>img {-webkit-transform: scale (1.5);-moz-transform: scale (1.5);-ms-transform: scale (2);transform: scale(1.5);opacity: 0.7;}.new{margin: 60px;width:105px;height:120px;background: url("sas-img.png") no-repeat;}</style></head><body><h1> Example On CSS Scale() </h1><div class="new"><imgsrc="sas-img.png" alt="Python"></div></body></html>

**Output:**

![CSS Scale() Example 1](https://cdn.educba.com/academy/wp-content/uploads/2020/06/CSS-Scale-Example-1.png.webp)

**Explanation:** Here We have created a Class ‘new’ and assigned CSS Properties to the image. So now Scaling is done to the image. And the resulting output is given below:

#### Example #2

**Code:**

```
<!DOCTYPE html><html><head><style type="text/css">div.box {width:150px;height:90px;background-color:#FFA07A;margin-left:150px;margin-top:150px;position:relative;}div.boxenlarge {transform: scale(1, 4);-moz-transform: scale(1, 4);-ms-transform: scale(1, 4);-webkit-transform: scale(1, 4);-o-transform: scale(1, 4);}</style></head><body><div class="box" onmouseover="this.className='box boxenlarge'" onmouseout="this.className='box'">Scaling up top and bottom</div></body></html>
```

**Output:**

![CSS Scale() Example 2](https://cdn.educba.com/academy/wp-content/uploads/2020/06/CSS-Scale-Example-2.png.webp)

**Explanation:** Here in the above code scaling is applied when a user presses the box over an element by rolling the mouse. So, when we move over the element the class names are masked by the additional class names. And we define the dimensions to have a good effect on the transforms by CSS. Next coming to transformation part Scale 1 is applied along the X-axis and 4 along the Y-axis. The element grows 1 by the width and 4 by its weight.

#### Example #3

**Code:**

```
<!DOCTYPE html><html><head><style type="text/css">.scalehov {width: 100px;transition: all .4s ease-in-out;}.scalehov:hover {transform: scale(1.5);}</style></head><body><img class="scalehov" src="rect.jpg" alt=""></body></html>
```

**Output:**

![CSS Scale() Example 3](https://cdn.educba.com/academy/wp-content/uploads/2020/06/CSS-Scale-Example-3.png.webp)

#### Example #4

Here the <div> element in the HTML document is scaled and made some transformation.

**Code:**

<!DOCTYPE html><html><head><meta charset="utf-8"><title>scale() function Demo</title><style>div {display: inline-block;overflow: hidden;}div img {display: block;transition: 2s;}div img:hover {transform: scale(1.6);}</style></head><body><h1>Scale() function Demo </h1><div><imgsrc="scale_fish.png" alt=""></div><div><imgsrc="scale_fish1.png" alt=""></div><div><imgsrc="scale_fish2.png" alt=""></div></body></html>

**Output:**

![Hover Example 4](https://cdn.educba.com/academy/wp-content/uploads/2020/06/CSS-Scale-Example-4.png.webp)

**Explanation:** Therefore in the above code, I have created three image files, when we act by moving on the image, The picture gradually increases its size. Here Scaling is done evenly in all dimensions as we specified a single value ‘1.6’.

#### Example #5

Choosing scaling value individually with both X-axis. Here a negative value is been assigned.

**Code:**

**Scale_1.html**

```
<html><div class="module"><div class="object">🔥Summer🔥</div><div class="object">💩Winter💩</div><div class="object">💦Spring💦</div></div></html>
```

**.css**

```
.module{font-family: Arial, Helvetica, sans-serif;width: 90%;height: 90%;display: inline-flex;justify-content: right;align-items: center;perspective: 30px;}.object {width: 5em;height: 5em;padding: 2em;margin: 1.5em;text-align: center;background-color: #FFF000;border-top: 0.4em solid greenyellow;box-shadow: 2px 2px 5px 0px royalblue;}.object {transform: scale(-0.66, -0.6);}
```

**Output:**

The below result shows the element upside down as the scaling value is marked in negative.

![Module Example 5](https://cdn.educba.com/academy/wp-content/uploads/2020/06/CSS-Scale-Example-5.png.webp)

### Conclusion

Therefore, the examples provided here works well in all the browsers which are useful today by all the web developers. The scaling () function with the help of CSS Transitions works well effectively as this function allows to create interactive pages. And finally, this CSS3 scale makes spectacular different effects in the HTML document by changing the properties of an image. Recent research is done with the transition on animations where we can perform scale properties but it is quite problematic when accessing on the website.

### Recommended Articles

This is a guide to CSS Scale(). Here we discuss a brief overview on CSS Scale() and its different examples along with its code implementation. You can also go through our other suggested articles to learn more –

1. [Uses of CSS in Technology](https://www.educba.com/what-is-css/)
2. [Tips and Tricks to use CSS Commands](https://www.educba.com/css-commands/)
3. [Introduction to Top 6 Advantages of CSS](https://www.educba.com/advantages-of-css/)
4. [CSS Header Design (Examples)](https://www.educba.com/css-header-design/)