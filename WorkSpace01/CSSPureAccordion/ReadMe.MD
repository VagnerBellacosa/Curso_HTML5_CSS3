[![EDUCBA](https://www.educba.com/academy/wp-content/uploads/2020/05/cropped-website_logo_transparent_background_white.png)](https://www.educba.com/software-development/)

[EDUCBA](https://www.educba.com/)



# Pure CSS Accordion

By ![Mrunali Pange](https://www.educba.com/academy/wp-content/uploads/2021/02/Mrunali-Pange.png)[Mrunali Pange](https://www.educba.com/author/mrunali-pange/)

[Home](https://www.educba.com/) » [Software Development](https://www.educba.com/software-development/) » [Software Development Tutorials](https://www.educba.com/software-development/software-development-tutorials/) » [CSS Tutorial](https://www.educba.com/software-development/software-development-tutorials/css-tutorial/) » **Pure CSS Accordion**

![Pure CSS Accordion](https://www.educba.com/academy/wp-content/uploads/2021/01/Pure-CSS-Accordion.jpg)

## Definition of Pure CSS Accordion

- The Pure CSS accordion is the animated control element of the vertical list, items, and thumbnail.
- The Pure CSS accordion is the control function of the assembled vertical list in the web application.
- The Pure CSS accordion is the element used to manage the space of lists and their information in the web application.
- The Pure CSS accordion shows the header of description and information display as per the user’s requirements in the web application.
- The Pure CSS accordion is hiding the information of the stacked standing list and displays as per necessity.
- The Pure CSS accordion is to make short size web page and create more user interaction using the topic heading.

**Syntax:**

The Pure CSS accordion for HTML page syntax is below.

<div class="accordion"><span id="accordion1"> </span><div class="accordions"><dl class="accordion1"><dd><a href="#accordion1"> Title of the ACCORDION ITEM… </a><div><p>The Description or information of the ACCORDION ITEM…</p></div><dd></dl></div></div>

**Description:**

- The class=”accordion” is using for Pure CSS accordion in the HTML page.
- The class=”accordions” is using to bind the title and information of the accordion elements.
- The class=”accordion1″ with <dd> tag used for create data of the list.
- The <span> tag with id=”accordion1″ is used connect description and their list respectively.

The Pure CSS accordion for style sheet syntax is below.

```
.accordion {position: relative;width: 500px;color: black;}.accordions {overflow: hidden;}.accordions dl dd a {background-color: grey;border: 1px solid;display: block;}.accordions dl dd div {overflow: hidden;}.accordions dl dd div {text-align: center;}.accordions dl dd a:hover {box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;}#accordion1:target ~ .accordions .accordion1 dd div {height: 110px;}
```

**Description:**

- The .accordions is set in the hidden description box and show after the hover effect.
- The <span> tag with .accordions set the height of description box.
- The Pure CSS accordion sets other styles as per the user’s requirement and website management.

### How does Pure CSS accordion work?

There are two pure.css links in the framework. These responsive and non-responsive links for accordion are below.

- The pure.css responsive framework link for the accordion is adding to the HTML files.

```
< link rel=”stylesheet” href=“https://unpkg.com/purecss@2.0.3/build/base-min.css”>
```

- The pure.css non-responsive framework link for the accordion is adding to the HTML files.

```
< link rel=”stylesheet” href=“https://unpkg.com/purecss@2.0.3/build/pure-nr-min.css”>
```

- The pure.css alternate CDNs file for the accordion is add in the HTML files.

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/2.0.3/pure-min.css"/>
```

- The Pure CSS accordion syntax adds to the web page.

```
<body><div class="accordion"><span id="accordion1"> </span><span id="accordion3"> </span><div class="accordions"><dl class="accordion1"><dd><a href="#accordion1"> FIRST ITEM </a><div><p>
```

The Pure CSS accordion is the element used to manage the space of lists and their information in the web application.

 Popular Course in this category

![Sale](https://cdn.educba.com/academy/wp-content/uploads/2021/11/cyber-monday-sale-1.png)[CSS Training (9 Courses, 9+ Projects)9 Online Courses | 9 Hands-on Projects | 61+ Hours | Verifiable Certificate of Completion | Lifetime Access
4.5 (7,187 ratings)Course Price
$79 ~~$599~~
**View Course**](https://www.educba.com/software-development/courses/css-course/?btnz=edu-blg-inline-banner1)

------

Related Courses

[Bootstrap Training (2 Courses, 6+ Projects)](https://www.educba.com/software-development/courses/bootstrap-training-course/?btnz=edu-blg-inline-banner1)[jQuery Training (8 Courses, 5 Projects)](https://www.educba.com/software-development/courses/jquery-training-course/?btnz=edu-blg-inline-banner1)

```
</p></div><dd></dl></div></div></body>
```

- The Pure CSS accordion style sheet syntax adds in the HTML page.

<style>.accordion {position: relative;width: 500px;color: black;margin: 52px auto;}.accordions {background-color: white;overflow: hidden;}.accordions dl dd a {background-color: grey;border: 1px solid;display: block;font-size: 20px;padding: 5px 22px;}.accordions dl dd div {height: 0;overflow: hidden;box-shadow: 0 0 2px rgba(0, 0, 1, 1) inset;}.accordions dl dd div {color: blue;font-size: 12px;padding: 5px;text-align: center;}.accordions dl dd a:hover {box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;}#accordion1:target ~ .accordions .accordion1 dd div {height: 110px;}</style>

### Examples

Let us discuss the example of Pure CSS Accordion.

#### Example #1: The basic Pure CSS accordion Example and output are below

**Code:**

<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title> Pure CSS Accordion </title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"><style>.accordion {position: relative;width: 500px;color: black;margin: 52px auto;}.accordions {background-color: white;overflow: hidden;}.accordions dl dd a {background-color: grey;border: 1px solid;display: block;font-size: 20px;padding: 5px 22px;}.accordions dl dd div {height: 0;overflow: hidden;box-shadow: 0 0 2px rgba(0, 0, 1, 1) inset;}.accordions dl dd div {color: blue;font-size: 12px;padding: 5px;text-align: center;}.accordions dl dd a:hover {box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-moz-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;}#accordion1:target ~ .accordions .accordion1 dd div {height: 110px;}#accordion2:target ~ .accordions .accordion2 dd div {height: 240px;}#accordion3:target ~ .accordions .accordion3 dd div {height: 200px;}</style></head><body><div class="accordion"><span id="accordion1"> </span><span id="accordion2"> </span><span id="accordion3"> </span><div class="accordions"><dl class="accordion1"><dd><a href="#accordion1"> FIRST ACCORDION ITEM </a><div><p>

The Pure CSS accordion is the animated control element of the vertical list, items, and thumbnail.

The Pure CSS accordion is the control function of the assembled vertical list in the web application.

```
</p></div><dd></dl><dl class="accordion2"><dd><a href="#accordion2"> SECOND ACCORDION ITEM </a><div><p>
```

The Pure CSS accordion is the element used to manage the space of lists and their information in the web application.

The Pure CSS accordion shows the header of description and information display as per the user’s requirements in the web application.

```
</p></div></dd></dl><dl class="accordion3"><dd><a href="#accordion3"> THIRD FIRST ACCORDION ITEM </a><div><p>
```

The Pure CSS accordion is hidden the information of the stacked standing list and displays it as per necessity.

The Pure CSS accordion is to make short size web page and create more user interaction using the topic heading.

</p></div></dd></dl></div></div></body></html>

![Pure CSS Accordion 1](https://www.educba.com/academy/wp-content/uploads/2021/01/Pure-CSS-Accordion-1.png)

#### Example #2: The Pure CSS accordion with images Example and output is below

**Code:**

<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title> Pure CSS Accordion </title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"><style>.accordion {position: relative;width: 500px;color: black;margin: 52px auto;}.accordions {overflow: hidden;}.accordions dl dd a {background-color: grey;border: 1px solid;display: block;font-size: 20px;padding: 5px 22px;}.accordions dl dd div {height: 0;overflow: hidden;box-shadow: 0 0 2px rgba(0, 0, 1, 1) inset;}.accordions dl dd a:hover {box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-moz-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;}#accordion1:target ~ .accordions .accordion1 dd div {height: 250px;}#accordion2:target ~ .accordions .accordion2 dd div {height: 240px;}</style></head><body><div class="accordion"><span id="accordion1"> </span><span id="accordion2"> </span><span id="accordion3"> </span><div class="accordions"><dl class="accordion1"><dd><a href="#accordion1"> FIRST ACCORDION ITEM </a><div><p><img src="images/Desert.jpg" alt="" /></p></div><dd></dl><dl class="accordion2"><dd><a href="#accordion2"> SECOND ACCORDION ITEM </a><div><p><img src="images/Desert.jpg" alt="" /></p></div></dd></dl></div></div></body></html>

![Pure CSS Accordion 2](https://www.educba.com/academy/wp-content/uploads/2021/01/Pure-CSS-Accordion-2.png)

![Pure CSS accordion](https://www.educba.com/academy/wp-content/uploads/2021/01/Pure-CSS-Accordion-3.png)

#### Example #3: The Pure CSS accordion with combined information and image Example and output is below

**Code:**

<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title> Pure CSS Accordion </title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"><style>.accordion {position: relative;width: 500px;color: black;margin: 52px auto;}.accordions {background-color: white;overflow: hidden;}.accordions dl dd a {background-color: grey;border: 1px solid;display: block;font-size: 20px;padding: 5px 22px;}.accordions dl dd div {height: 0;overflow: hidden;box-shadow: 0 0 2px rgba(0, 0, 1, 1) inset;}.accordions dl dd a:hover {box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-moz-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;-webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0.5, 0.6) inset;}#accordion1:target ~ .accordions .accordion1 dd div {height: 100px;}#accordion2:target ~ .accordions .accordion2 dd div {;}</style></head><body><div class="accordion"><span id="accordion1"> </span><span id="accordion2"> </span><span id="accordion3"> </span><div class="accordions"><dl class="accordion1"><dd><a href="#accordion1"> FIRST ACCORDION ITEM </a><div><p>

The Pure CSS accordion is the animated control element of the vertical list, items, and thumbnail.

The Pure CSS accordion is the control function of the assembled vertical list in the web application.

</p></div><dd></dl><dl class="accordion2"><dd><a href="#accordion2"> SECOND ACCORDION ITEM </a><div><p><img src="images/Desert.jpg" alt="" /></p></div></dd></dl></div></div></body></html>

![first accordian item](https://www.educba.com/academy/wp-content/uploads/2021/01/first-accordian-item.png)

![output 1](https://www.educba.com/academy/wp-content/uploads/2021/01/output-1-7.png)

### Conclusion

The Pure CSS accordion is an animated, user-friendly, and space-saving function in websites. The Pure CSS accordion is helpful to interact with users and get information as per requirement. The Pure CSS accordion helps to make elegant and attractive web applications.

### Recommended Articles

This is a guide to the Pure CSS Accordion. Here we discuss the Introduction, Working of Map Foreach Function, Rules and Regulations for Map Foreach. You may also have a look at the following articles to learn more –

1. [CSS Radio Button](https://www.educba.com/css-radio-button/)
2. [CSS offset](https://www.educba.com/css-offset/)
3. [CSS calc()](https://www.educba.com/css-calc/)
4. [CSS Grid Layout](https://www.educba.com/css-grid-layout/)

[ALL IN ONE SOFTWARE DEVELOPMENT BUNDLE (600+ COURSES, 50+ PROJECTS) 600+ Online Courses 50+ projects 3000+ Hours Verifiable Certificates Lifetime AccessLearn More](https://www.educba.com/software-development/courses/software-development-course/?btnz=edu-blg-inline-banner3)

**0SHARES**

[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fwww.educba.com%2Fpure-css-accordion%2F)

[Tweet](https://twitter.com/intent/tweet?text=Pure+CSS Accordion&url=https%3A%2F%2Fwww.educba.com%2Fpure-css-accordion%2F)

[Share](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fwww.educba.com%2Fpure-css-accordion%2F)



Primary Sidebar

###### CSS Tutorial



-  Pure CSS

  

  - [Pure CSS](https://www.educba.com/pure-css/?source=leftnav)
  - [Pure CSS Accordion](https://www.educba.com/pure-css-accordion/?source=leftnav)
  - [Pure CSS?Slider](https://www.educba.com/pure-css-slider/?source=leftnav)

-  CSS

  

  - [Introduction To CSS](https://www.educba.com/introduction-to-css/?source=leftnav)
  - [What Is CSS?](https://www.educba.com/what-is-css/?source=leftnav)
  - [Uses Of CSS](https://www.educba.com/uses-of-css/?source=leftnav)
  - [Advantages Of CSS](https://www.educba.com/advantages-of-css/?source=leftnav)
  - [Career In CSS](https://www.educba.com/career-in-css/?source=leftnav)
  - [CSS Commands](https://www.educba.com/css-commands/?source=leftnav)
  - [Is Css Case Sensitive](https://www.educba.com/is-css-case-sensitive/?source=leftnav)
  - [CSS Object-Fit](https://www.educba.com/css-object-fit/?source=leftnav)
  - [CSS Object-Position](https://www.educba.com/css-object-position/?source=leftnav)
  - [Types Of CSS Selectors](https://www.educba.com/types-of-css-selectors/?source=leftnav)
  - [CSS Radio Button](https://www.educba.com/css-radio-button/?source=leftnav)
  - [CSS Attribute Selector](https://www.educba.com/css-attribute-selector/?source=leftnav)
  - [CSS First Child Of Class](https://www.educba.com/css-first-child-of-class/?source=leftnav)
  - [CSS Selector Nth Child](https://www.educba.com/css-selector-nth-child/?source=leftnav)
  - [CSS Parent Selector](https://www.educba.com/css-parent-selector/?source=leftnav)
  - [CSS Child Selector](https://www.educba.com/css-child-selector/?source=leftnav)
  - [CSS Not Selector](https://www.educba.com/css-not-selector/?source=leftnav)
  - [CSS Descendant Selector](https://www.educba.com/css-descendant-selector/?source=leftnav)
  - [CSS Inline Style](https://www.educba.com/css-inline-style/?source=leftnav)
  - [Checkbox CSS](https://www.educba.com/checkbox-css/?source=leftnav)
  - [CSS Appearance](https://www.educba.com/css-appearance/?source=leftnav)
  - [CSS Font Properties](https://www.educba.com/css-font-properties/?source=leftnav)
  - [CSS Font-Variant](https://www.educba.com/css-font-variant/?source=leftnav)
  - [CSS Pagination](https://www.educba.com/css-pagination/?source=leftnav)
  - [CSS Table Styling](https://www.educba.com/css-table-styling/?source=leftnav)
  - [CSS Table Cell Padding](https://www.educba.com/css-table-cell-padding/?source=leftnav)
  - [CSS Padding Color](https://www.educba.com/css-padding-color/?source=leftnav)
  - [CSS Text Formatting](https://www.educba.com/css-text-formatting/?source=leftnav)
  - [CSS Text Effects](https://www.educba.com/css-text-effects/?source=leftnav)
  - [CSS For Text-Shadow](https://www.educba.com/css-for-text-shadow/?source=leftnav)
  - [CSS Text-Stroke](https://www.educba.com/css-text-stroke/?source=leftnav)
  - [CSS Text-Indent](https://www.educba.com/css-text-indent/?source=leftnav)
  - [CSS Rotate Text](https://www.educba.com/css-rotate-text/?source=leftnav)
  - [CSS Text Color](https://www.educba.com/css-text-color/?source=leftnav)
  - [CSS Center Div](https://www.educba.com/css-center-div/?source=leftnav)
  - [CSS Arrow](https://www.educba.com/css-arrow/?source=leftnav)
  - [CSS Arrow Down](https://www.educba.com/css-arrow-down/?source=leftnav)
  - [CSS Offset](https://www.educba.com/css-offset/?source=leftnav)
  - [CSS Cursor](https://www.educba.com/css-cursor/?source=leftnav)
  - [CSS Layout](https://www.educba.com/css-layout/?source=leftnav)
  - [CSS Grid Layout](https://www.educba.com/css-grid-layout/?source=leftnav)
  - [Button In CSS](https://www.educba.com/button-in-css/?source=leftnav)
  - [CSS Button Border](https://www.educba.com/css-button-border/?source=leftnav)
  - [Text-Align In CSS](https://www.educba.com/text-align-in-css/?source=leftnav)
  - [CSS Horizontal Align](https://www.educba.com/css-horizontal-align/?source=leftnav)
  - [CSS Position](https://www.educba.com/css-position/?source=leftnav)
  - [CSS Box Sizing](https://www.educba.com/css-box-sizing/?source=leftnav)
  - [CSS Box-Shadow](https://www.educba.com/css-box-shadow/?source=leftnav)
  - [CSS Text Underline](https://www.educba.com/css-text-underline/?source=leftnav)
  - [CSS Text Outline](https://www.educba.com/css-text-outline/?source=leftnav)
  - [CSS Blinking Text](https://www.educba.com/css-blinking-text/?source=leftnav)
  - [Text Decoration CSS](https://www.educba.com/text-decoration-css/?source=leftnav)
  - [CSS Vertical Align](https://www.educba.com/css-vertical-align/?source=leftnav)
  - [CSS Word Wrap](https://www.educba.com/css-word-wrap/?source=leftnav)
  - [CSS Padding](https://www.educba.com/css-padding/?source=leftnav)
  - [CSS Font Color](https://www.educba.com/css-font-color/?source=leftnav)
  - [CSS Color Generator](https://www.educba.com/css-color-generator/?source=leftnav)
  - [CSS Margin Right](https://www.educba.com/css-margin-right/?source=leftnav)
  - [CSS Margin Color](https://www.educba.com/css-margin-color/?source=leftnav)
  - [CSS Color Codes](https://www.educba.com/css-color-codes/?source=leftnav)
  - [CSS Color Transparent](https://www.educba.com/css-color-transparent/?source=leftnav)
  - [CSS Color Chart](https://www.educba.com/css-color-chart/?source=leftnav)
  - [CSS Link Color](https://www.educba.com/css-link-color/?source=leftnav)
  - [CSS Z-Index](https://www.educba.com/css-z-index/?source=leftnav)
  - [CSS Curved Border](https://www.educba.com/css-curved-border/?source=leftnav)
  - [CSS Border Left](https://www.educba.com/css-border-left/?source=leftnav)
  - [CSS Left](https://www.educba.com/css-left/?source=leftnav)
  - [CSS Gradient Generator](https://www.educba.com/css-gradient-generator/?source=leftnav)
  - [Radial Gradient In CSS](https://www.educba.com/radial-gradient-in-css/?source=leftnav)
  - [CSS Shape Generator](https://www.educba.com/css-shape-generator/?source=leftnav)
  - [CSS Triangle Generator](https://www.educba.com/css-triangle-generator/?source=leftnav)
  - [CSS Background-Color](https://www.educba.com/css-background-color/?source=leftnav)
  - [CSS Background Image](https://www.educba.com/css-background-image/?source=leftnav)
  - [CSS Background-Clip](https://www.educba.com/css-background-clip/?source=leftnav)
  - [CSS Background-Blend-Mode](https://www.educba.com/css-background-blend-mode/?source=leftnav)
  - [CSS Drop Shadow](https://www.educba.com/css-drop-shadow/?source=leftnav)
  - [CSS Line Height](https://www.educba.com/css-line-height/?source=leftnav)
  - [CSS Line Break](https://www.educba.com/css-line-break/?source=leftnav)
  - [Sticky Footer CSS](https://www.educba.com/sticky-footer-css/?source=leftnav)
  - [CSS Header Design](https://www.educba.com/css-header-design/?source=leftnav)
  - [CSS Border Style](https://www.educba.com/css-border-style/?source=leftnav)
  - [CSS Border Generator](https://www.educba.com/css-border-generator/?source=leftnav)
  - [Sticky Sidebar CSS](https://www.educba.com/sticky-sidebar-css/?source=leftnav)
  - [CSS Transparent Border](https://www.educba.com/css-transparent-border/?source=leftnav)
  - [CSS Border Radius](https://www.educba.com/css-border-radius/?source=leftnav)
  - [CSS Translate](https://www.educba.com/css-translate/?source=leftnav)
  - [CSS Transform](https://www.educba.com/css-transform/?source=leftnav)
  - [CSS 3D Transforms](https://www.educba.com/css-3d-transforms/?source=leftnav)
  - [CSS Text Transform](https://www.educba.com/css-text-transform/?source=leftnav)
  - [CSS Transition Effects](https://www.educba.com/css-transition-effects/?source=leftnav)
  - [CSS Transition Property](https://www.educba.com/css-transition-property/?source=leftnav)
  - [CSS Animation Transition](https://www.educba.com/css-animation-transition/?source=leftnav)
  - [Negative Margin CSS](https://www.educba.com/negative-margin-css/?source=leftnav)
  - [CSS Navigation Bar](https://www.educba.com/css-navigation-bar/?source=leftnav)
  - [CSS Overflow](https://www.educba.com/css-overflow/?source=leftnav)
  - [CSS Overflow-Wrap](https://www.educba.com/css-overflow-wrap/?source=leftnav)
  - [CSS Lists](https://www.educba.com/css-lists/?source=leftnav)
  - [CSS Image Opacity](https://www.educba.com/css-image-opacity/?source=leftnav)
  - [CSS Strikethrough](https://www.educba.com/css-strikethrough/?source=leftnav)
  - [CSS Curved Text](https://www.educba.com/css-curved-text/?source=leftnav)
  - [CSS Position Absolute](https://www.educba.com/css-position-absolute/?source=leftnav)
  - [CSS Word-Spacing](https://www.educba.com/css-word-spacing/?source=leftnav)
  - [CSS List-Style](https://www.educba.com/css-list-style/?source=leftnav)
  - [CSS Order](https://www.educba.com/css-order/?source=leftnav)
  - [CSS Box Model](https://www.educba.com/css-box-model/?source=leftnav)
  - [CSS Inner Border](https://www.educba.com/css-inner-border/?source=leftnav)
  - [CSS Icon](https://www.educba.com/css-icon/?source=leftnav)
  - [Menu Icon CSS](https://www.educba.com/menu-icon-css/?source=leftnav)
  - [CSS Multiple Borders](https://www.educba.com/css-multiple-borders/?source=leftnav)
  - [Opacity In CSS](https://www.educba.com/opacity-in-css/?source=leftnav)
  - [CSS Float Right](https://www.educba.com/css-float-right/?source=leftnav)
  - [CSS Clear Float](https://www.educba.com/css-clear-float/?source=leftnav)
  - [CSS Clip](https://www.educba.com/css-clip/?source=leftnav)
  - [CSS Disabled](https://www.educba.com/css-disabled/?source=leftnav)
  - [CSS Border Padding](https://www.educba.com/css-border-padding/?source=leftnav)
  - [Border Images In CSS](https://www.educba.com/border-images-in-css/?source=leftnav)
  - [Visibility In CSS](https://www.educba.com/visibility-in-css/?source=leftnav)
  - [CSS Border Color](https://www.educba.com/css-border-color/?source=leftnav)
  - [CSS Visibility](https://www.educba.com/css-visibility/?source=leftnav)
  - [CSS Validator](https://www.educba.com/css-validator/?source=leftnav)
  - [CSS Clearfix](https://www.educba.com/css-clearfix/?source=leftnav)
  - [CSS Counter](https://www.educba.com/css-counter/?source=leftnav)
  - [CSS Letter Spacing](https://www.educba.com/css-letter-spacing/?source=leftnav)
  - [CSS Root](https://www.educba.com/css-root/?source=leftnav)
  - [CSS Zoom](https://www.educba.com/css-zoom/?source=leftnav)
  - [CSS Calc()](https://www.educba.com/css-calc/?source=leftnav)
  - [CSS.Supports()](https://www.educba.com/css-supports/?source=leftnav)
  - [CSS Scale()](https://www.educba.com/css-scale/?source=leftnav)
  - [CSS Hyphens](https://www.educba.com/css-hyphens/?source=leftnav)
  - [CSS Loader](https://www.educba.com/css-loader/?source=leftnav)
  - [Media Query CSS](https://www.educba.com/media-query-css/?source=leftnav)
  - [CSS @Keyframes](https://www.educba.com/css-keyframes/?source=leftnav)
  - [CSS @Bottom](https://www.educba.com/css-bottom/?source=leftnav)
  - [CSS?Page-Break-After Property](https://www.educba.com/css-page-break-after-property/?source=leftnav)
  - [CSS Page-Break](https://www.educba.com/css-page-break/?source=leftnav)
  - [CSS Position Fixed](https://www.educba.com/css-position-fixed/?source=leftnav)
  - [CSS Skew()](https://www.educba.com/css-skew/?source=leftnav)
  - [CSS Row](https://www.educba.com/css-row/?source=leftnav)
  - [CSS?Masking](https://www.educba.com/css-masking/?source=leftnav)
  - [CSS Scrollbar](https://www.educba.com/css-scrollbar/?source=leftnav)
  - [CSS Overlay](https://www.educba.com/css-overlay/?source=leftnav)
  - [CSS Important](https://www.educba.com/css-important/?source=leftnav)
  - [CSS Cursor Hand](https://www.educba.com/css-cursor-hand/?source=leftnav)
  - [CSS Inherit](https://www.educba.com/css-inherit/?source=leftnav)
  - [CSS Position Relative](https://www.educba.com/css-position-relative/?source=leftnav)
  - [CSS Compressor](https://www.educba.com/css-compressor/?source=leftnav)
  - [CSS Tricks](https://www.educba.com/css-tricks/?source=leftnav)
  - [CSS Outline Property](https://www.educba.com/css-outline-property/?source=leftnav)
  - [CSS Flexbox Properties](https://www.educba.com/css-flexbox-properties/?source=leftnav)
  - [CSS Flex-Direction](https://www.educba.com/css-flex-direction/?source=leftnav)
  - [CSS Content Property](https://www.educba.com/css-content-property/?source=leftnav)
  - [CSS Typography](https://www.educba.com/css-typography/?source=leftnav)
  - [CSS Formatter](https://www.educba.com/css-formatter/?source=leftnav)
  - [CSS Nowrap](https://www.educba.com/css-nowrap/?source=leftnav)
  - [CSS Column](https://www.educba.com/css-column/?source=leftnav)
  - [GridView CSS](https://www.educba.com/gridview-css/?source=leftnav)
  - [CSS?Viewport](https://www.educba.com/css-viewport/?source=leftnav)
  - [CSS Minify](https://www.educba.com/css-minify/?source=leftnav)
  - [CSS Combinators](https://www.educba.com/css-combinators/?source=leftnav)
  - [CSS In React](https://www.educba.com/css-in-react/?source=leftnav)
  - [CSS Matrix?](https://www.educba.com/css-matrix/?source=leftnav)
  - [CSS Pseudo Elements](https://www.educba.com/css-pseudo-elements/?source=leftnav)
  - [CSS Pseudo Classes](https://www.educba.com/css-pseudo-classes/?source=leftnav)
  - [CSS Pointer Events](https://www.educba.com/css-pointer-events/?source=leftnav)
  - [CSS?Resize](https://www.educba.com/css-resize/?source=leftnav)
  - [CSS Inheritance](https://www.educba.com/css-inheritance/?source=leftnav)
  - [CSS Interview Questions](https://www.educba.com/css-interview-questions/?source=leftnav)
  - [Cheat Sheet CSS](https://www.educba.com/cheat-sheet-css/?source=leftnav)

-  CSS3

  

  - [What Is CSS3?](https://www.educba.com/what-is-css3/?source=leftnav)
  - [CSS3 Interview Questions](https://www.educba.com/css3-interview-questions/?source=leftnav)
  - [Cheat Sheet CSS3](https://www.educba.com/cheat-sheet-css3/?source=leftnav)

-  Sass

  

  - [How To Install SASS](https://www.educba.com/install-sass/?source=leftnav)
  - [SASS Interview Questions](https://www.educba.com/sass-interview-questions/?source=leftnav)
  - [What Is Sass](https://www.educba.com/what-is-sass/?source=leftnav)
  - [SASS Comments](https://www.educba.com/sass-comments/?source=leftnav)
  - [Sass Variables](https://www.educba.com/sass-variables/?source=leftnav)
  - [SASS Import](https://www.educba.com/sass-import/?source=leftnav)
  - [SASS If Else](https://www.educba.com/sass-if-else/?source=leftnav)
  - [SASS Nesting](https://www.educba.com/sass-nesting/?source=leftnav)
  - [SASS @Each](https://www.educba.com/sass-each/?source=leftnav)
  - [SASS @At-Root](https://www.educba.com/sass-at-root/?source=leftnav)
  - [SASS @Extend](https://www.educba.com/sass-extend/?source=leftnav)
  - [SASS @Media](https://www.educba.com/sass-media/?source=leftnav)
  - [SASS @For](https://www.educba.com/sass-for/?source=leftnav)
  - [SASS Map](https://www.educba.com/sass-map/?source=leftnav)
  - [SASS Selectors](https://www.educba.com/sass-selectors/?source=leftnav)
  - [SASS Color Functions](https://www.educba.com/sass-color-functions/?source=leftnav)
  - [SASS Mixins](https://www.educba.com/sass-mixins/?source=leftnav)



Related Courses

#### [CSS Training Course](https://www.educba.com/software-development/courses/css-course/?source=leftnav)

#### [Bootstrap Training Course](https://www.educba.com/software-development/courses/bootstrap-training-course/?source=leftnav)

#### [JQuery Training Course](https://www.educba.com/software-development/courses/jquery-training-course/?source=leftnav)

Footer

###### About Us

- [Blog](https://www.educba.com/blog/?source=footer)
- [Who is EDUCBA?](https://www.educba.com/about-us/?source=footer)
- [Sign Up](https://www.educba.com/software-development/signup/?source=footer)
- [Corporate Training](https://www.educba.com/corporate/?source=footer)
- [Certificate from Top Institutions](https://www.educba.com/educbalive/?source=footer)
- [Contact Us](https://www.educba.com/contact-us/?source=footer)
- [Verifiable Certificate](https://www.educba.com/software-development/verifiable-certificate/?source=footer)
- [Reviews](https://www.educba.com/software-development/reviews/?source=footer)
- [Terms and Conditions](https://www.educba.com/terms-and-conditions/?source=footer)
- [Privacy Policy](https://www.educba.com/privacy-policy/?source=footer)
-  

###### Apps

- [iPhone & iPad](https://itunes.apple.com/in/app/educba-learning-app/id1341654580?mt=8)
- [Android](https://play.google.com/store/apps/details?id=com.educba.www)

###### Resources

- [Free Courses](https://www.educba.com/software-development/free-courses/?source=footer)
- [Java Tutorials](https://www.educba.com/software-development/software-development-tutorials/java-tutorial/?source=footer)
- [Python Tutorials](https://www.educba.com/software-development/software-development-tutorials/python-tutorial/?source=footer)
- [All Tutorials](https://www.educba.com/software-development/software-development-tutorials/?source=footer)

###### Certification Courses

- [All Courses](https://www.educba.com/software-development/courses/?source=footer)
- [Software Development Course - All in One Bundle](https://www.educba.com/software-development/courses/software-development-course/?source=footer)
- [Become a Python Developer](https://www.educba.com/software-development/courses/python-certification-course/?source=footer)
- [Java Course](https://www.educba.com/software-development/courses/java-course/?source=footer)
- [Become a Selenium Automation Tester](https://www.educba.com/software-development/courses/selenium-training-certification/?source=footer)
- [Become an IoT Developer](https://www.educba.com/software-development/courses/iot-course/?source=footer)
- [ASP.NET Course](https://www.educba.com/software-development/courses/asp-net-course/?source=footer)
- [VB.NET Course](https://www.educba.com/software-development/courses/vb-net-course/?source=footer)
- [PHP Course](https://www.educba.com/software-development/courses/php-course/?source=footer)

© 2020 - EDUCBA. ALL RIGHTS RESERVED. THE CERTIFICATION NAMES ARE THE TRADEMARKS OF THEIR RESPECTIVE OWNERS.



[![quiz](https://www.educba.com/academy/wp-content/uploads/2021/05/quiz.png)](javascript:void(0);)