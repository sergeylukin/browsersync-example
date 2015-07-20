# Starting point for Browsersync driven development

[![Browsersync example app](https://raw.githubusercontent.com/sergeylukin/browsersync-example/master/extras/header.png)](https://sergeylukin.github.io/browsersync-example/)

## About

This little web app was developed by [Sergey Lukin](http://sergeylukin.com)
([@sergey_lukin](https://twitter.com/sergey_lukin))
using [Browsersync](http://www.browsersync.io/) with a single purpose -
provide a basic starting point for anyone interested in `Browsersync`
to test it's capabilities. Think of it as a DIY kit which is assembled in a
very minimal setup and which you could change/enhance while using
`Browsersync` to get the feeling of how it is developing against multiple
devices/browsers simultaneously.

This project was created to serve as an practical example for a blog post
released on [Code4Startup.com](https://code4startup.com/) (link coming soon!)

[Try it now!](https://sergeylukin.github.io/browsersync-example/)

Here is just a short snapshot of how Browsersync allows navigating this app
across multiple devices/browsers:

![Browsersync example app demo usage](https://raw.githubusercontent.com/sergeylukin/browsersync-example/master/extras/action.gif)

Here is a short video demo of me fixing some bugs and adding some features
using `Browsersync`:

[![Working on web app using Browsersync](https://raw.githubusercontent.com/sergeylukin/browsersync-example/master/extras/development_video_placeholder.jpg)](https://vimeo.com/133319548)


## How to start

- Install `browsersync` using

  ```
  npm install -g browsersync
  ```

- Change directory to this project and run

  ```
  browser-sync start --server --files="**/*"
  ```

- Connect as many devices as possible and give this small alarm clock a try :)


## What you can do with it

I'd highly recommend cloning this repo and start hacking with it. Here is what
I'd suggest adding/changing in this app (for best experience don't forget to
use `Browsersync` ;) ):

- Every time I'm trying out this web app, I find it cumbersome starting to search for the time I want
  to set alarm to in huge select dropdown that starts with 00:00. It would be helpful to be able to
  simply increase and/or decrease hours/minutes separately one by one.

- There is currently no sound produced when the alarm is activated. I would highly recommend fixing this situation.
  Let all your devices beep all at once in their full glory when synced with `Browsersync` and alarm is activated :)

- Currently alarm is activated when view is rendered at exactly same minute and second as alarm was set to. While this
  is OK it isn't perfect. What if browser will "freeze" for at least a second just when the alarm was supposed to
  be activated? It will miss it. Alarm clock should be more reliable than that, shouldn't it? See if you can find a better
  solution.



## Credits

I'd like to thank following resources as this project wouldn't exist or
wouldn't be that awesome without them:

- [code4startup.com](https://code4startup.com/) for encouraging me to write   a blog post (link coming soon!) which this project comes along with

- Great [Golden Cocoon palette](http://www.colourlovers.com/palette/3819835/Golden_Cocoon)
  from [colourlovers.com](http://colourlovers.com)
