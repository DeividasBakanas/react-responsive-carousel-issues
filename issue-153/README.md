# issue-153

## Getting started

```sh
npm run setup && npm run start
```

## Description

Issue: Failed to calculate Carousel items size initially when items are not images.

This issue causes not fluent carousel sliding (carousel does not move, until touch end or mouse up).

## Possible bug

Sizes calculation are made by method [`updateSizes`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L230).

Initially, on [`componentWillMount`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L81)
method [`setupCarousel`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L109) is called.

This method sets state to [`initialized = true`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L117). 
In the same render cycle `updateSizes` uses this value using [`this.state.initialized`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L231).

Because of using outdated [`this.state.initialized`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L231) value, `updateSizes` skips sizes calculations initially. 
