# issue-154

## Getting started

```sh
npm run setup && npm run start
```

## Description

Issue: Unexpected items flick in touch devices when Carousel is controlled with not image items.

__This issue can only be reproduced in touch capable devices (touch screens).__

Controlled carousel - carousel with `onChange` and `selectedItem` props supplied.

## Possible bug

I found that this issue is related to method [`resetPosition`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L332).

This method is called every time [swipe ends](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L288). 

Method [`onSwipeEnd`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L287) is called before metods [`increment`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L355) or [`decrement`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L351) so:
1. Item is swiped by user to a certain position.  
2. Item is swiped to it's initial position.
3. Item is swiped to next position (`increment` or `decrement` is called).

This causes unexpected items flick. Which is very noticable in touch devices.