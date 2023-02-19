# 13 - Timers and Intervals

### setInterval

A JavaScript function for calling a function repeatedly over an Interval.
For example, `setInterval(myFunction, 1000)` would call myFunction every second (however this could take longer if other code needs to finish running.)

This function return an ID, and the interval can be cancelled by calling `clearInterval(intervalID)`

---

### setTimeout

A JavaScript function for delaying execution of a callback function.
For example, `setTimeout(myFunction, 1000);` would call myFunction after 1 second (however this could take longer if other code needs to finish running).
This function returns an ID, and the timeout can be cancelled by calling `clearTimeout(timeoutID);`

### requestAnimationFrame

A JavaScript function for calling a callback function before the next browser repaint. These are oftentimes used for animations to update the animation every frame.
This function return an ID, and the callback can be cancelled by calling `cancelAnimationFrame(animationFrameID)`
