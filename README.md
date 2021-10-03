# Frontend Engineer Coding Challenge

## Before running application

Create a `dev.env` file based on `.env.example` and put all required environment variables.

## Run application

Use `ENV=dev npm start` command to run application.

## Thoughts for improvement

* I've figured out, that Glassnode Studio is using Highcharts library for building Chart, but unfortunately your need to have license to use it. As a demo solution I've selected Ant.design, but it has it's own limitations;
* As limitation, there was no possibility to implement logarithmic and linear scales and no proper way to set custom range for X, Y scale intervals and format the range values on Y scale (for example Hash Rate scale).

As a conclusion I think is more professional tool required to implement such kind of charts.
