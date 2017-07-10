# issue-155

## Getting started

```sh
npm run setup && npm run start
```

Open `http://localhost:4040` in your browser.

## Description

Issue: `onChange` called when `Carousel` prop `selectedItem` changed.

## Expected behavior

`onChange` is usually called when some changes were made inside of component to inform parent component about change.

## Current behavior

When parrent component changes `selectedItem` prop `onChange` is called.

## Possible bug

When parrent component changes `selectedItem`, method [`componentWillReceiveProps`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L84) is called. 
If item position has changed it calls method [`moveTo`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L359) which calls [`selectItem`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L390) that invokes [`handleOnChange`](https://github.com/leandrowd/react-responsive-carousel/blob/master/src/components/Carousel.js#L392) which is responsible for `onChange` call.

## Reproduced issue

When button `Change selectedItem` is pressed, state property `SelectedItem` is changed in a parrent component. This property is supplied to `Carousel` prop `selectedItem` so this change will trigger `componentWillReceiveProps` in `Carousel`. Message about triggered `Carousel`'s `onChange` will be printed in browser's console.