# Frontend Engineer Coding Challenge

## Requirements:

You will need a [Glassnode Studio Account](https://studio.glassnode.com/) and an API Key to fetch necessary data. You 
can obtain a free key by registering a new account (studio.glassnode.com) and navigating to the 
[Settings/API page](https://studio.glassnode.com/settings/api) to generate it. Once you have it you can learn more how 
to get data from our [docs](https://docs.glassnode.com/general-info/api-key).

Generate a repository for your solution from the provided template ("Use this template" button on github), and send us 
a link to your repository.

## How to Complete a Challenge

Simply organize your code in a folder, scripts and READMEs - anything you'd like to provide. 

## Time

We respect your time and the challenge is designed in such a way as not to take more than 3-4 hours. We just want to 
get a sense of your thought process and the way you do the work. If there are things you don't have time to implement, 
feel free to describe the intended approach to implementation in the README.

## Overview

Create a webapp that allows for a simple data presentation layer of on-chain metrics. It should render an interactive 
chart (with Price USD and selected On-Chain Metric). Users should be able to hover over the point on the chart and see 
a tooltip with information like:
- metric name
- metric value
- price value - in US dollars 
- date

Necessary endpoints:
- https://api.glassnode.com/v1/metrics/mining/difficulty_latest?a=BTC&i=24h
- https://api.glassnode.com/v1/metrics/mining/hash_rate_mean?a=BTC&i=24h
- https://api.glassnode.com/v1/metrics/market/price_usd_close?a=BTC&i=24h

You would need to provide an `apiKey` param to fetch data in your app (if you’re logged to studio, you will be able to 
see the response in your browser)

The app should have three pages:
- /
- /difficulty
- /hash-rate


## CORS

In order to get information from our API you have to use proxy server which can prevent CORS issue. There are few 
solutions you can use.

#### Use `CORS` browser extension

Chrome users: https://chrome.google.com/webstore/search/CORS?hl=en
Firefox users: https://addons.mozilla.org/en-US/firefox/search/?q=cors

#### Use `local-cors-proxy` npm package:

```
$ npx local-cors-proxy --proxyUrl https://api.glassnode.com --proxyPartial "/"
```
or
```
$ npm install -g local-cors-proxy
$ local-cors-proxy --proxyUrl https://api.glassnode.com --proxyPartial "/"
```

#### Use `cors-anywhere` app

Visit https://cors-anywhere.herokuapp.com/ for more information.


### Root page: `/`
Default entry point. It needs to contain a basic navigation component (navbar, sidebar or other) which will be displayed 
on other pages as well. In the place where content is going to be visible there should be a message:

```
Please select a metric you would like to display
```

### Difficulty Metric: `/difficulty`

It needs to contain basic navigation (see above) and chart component. Navigating to that page should fetch necessary 
information from our API and display it to the users. It needs to contain information about the Price (log scale) and 
Difficulty (lin scale).

### Hash Rate Metric: `/hash-rate`

It needs to contain basic navigation (see above) and chart component. Navigating to that page should fetch necessary 
information from our API and display it to the users. It needs to contain information about the Price (log scale) and 
Hash Rate (lin scale).

### Architecture

- Your solution should be written in React. You may use create-react-app, nextjs or anything else to bootstrap your development.
- For UI you can use any framework of your choice (AntDesign, Tailwind, etc.) or write your own CSS.
- You're free to use any charts library. Think about the best fit for solving the task.
- For state management you may use a state-management library such as Redux or similar, React Context API or React's setState().
- Make sure it works in latest Chrome, Safari or Firefox
- App should be responsive - it should look good on Mobile (>375px width) and Desktop (>1024px width)
