# issue-153

## Getting started

```sh
npm run setup && npm run start
```

## Description

Issue: Failed to calculate Carousel items size initially when items are not images.

This issue causes not fluent carousel sliding (carousel does not move, until touch end or mouse up).

## Possible bug

Sizes calculation are made by method `updateSizes`.

Initially, on [`componentWillMount`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L81)
method `setupCarousel` is called.

This method sets state to `initialized = true`. 
In the same render cycle [`updateSizes`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L231) tries to use this value using `this.state.initialized`.

Because of using outdated `this.state.initialized` value, `updatesSizes` skips sizes calculations initially. 
