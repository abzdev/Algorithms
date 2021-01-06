function isTouching(movingRect, fixedRect) {
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      return true;
      }
    else {
      return false;
    }
  }
  
function bounceOff(object3, object4) {
    if (object3.x - object4.x < object4.width/2 + object3.width/2
        && object4.x - object3.x < object4.width/2 + object3.width/2
        && object3.y - object4.y < object4.height/2 + object3.height/2
        && object4.y - object3.y < object4.height/2 + object3.height/2) {
        object3.velocityX *= -1;
        object3.velocityY *= -1;
        object4.velocityX *= -1;
        object4.velocityY *= -1;
    }
  }