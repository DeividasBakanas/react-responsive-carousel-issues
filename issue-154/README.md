# issue-154

## Getting started

```sh
npm run setup && npm run start
```

## Description

Issue: Unexpected items flick in touch devices when Carousel is controlled and not with image items.

__This issue can only be reproduced in touch capable devices (touch screens).__

Controlled carousel - carousel with `onChange` and `selectedItem` props supplied.

## Possible bug

I found that this issue is related to method [`resetPosition`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L332).

This method is called every time [swipe ends](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L288). 

Method [`onSwipeEnd`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L287) is called before metods [`increment`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L355) or [`decrement`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L351) so:
1. Item is swiped by user to a certain position.  
2. `onSwipeEnd` is called and `resetPosition` swipes item to it's initial position.
3. `increment` / `decrement` is called and it swipes item to next position.

This sequence causes unexpected items flick which is very noticeable in touch devices and not that noticeable with emulated touch.