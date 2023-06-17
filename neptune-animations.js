export default class NeptuneAnimate {
	constructor(element, animationClass) {
	  this.element = element;
	  this.animationClass = animationClass;
	  this.animationEndEvent = this.getAnimationEndEvent();
	  this.stop = this.startAnimation();

	  this.element.addEventListener(this.animationEndEvent, this.handleAnimationEnd.bind(this));
	}

	getAnimationEndEvent() {
	  const el = document.createElement("div");
	  const animations = {
		animation: "animationend",
		OAnimation: "oAnimationEnd",
		MozAnimation: "animationend",
		WebkitAnimation: "webkitAnimationEnd"
	  };

	  for (const key in animations) {
		if (el.style[key] !== undefined) {
		  return animations[key];
		}
	  }

	  return "animationend";
	}

	handleAnimationEnd() {
	  this.element.classList.remove(this.animationClass);
	  this.element.removeEventListener(this.animationEndEvent, this.handleAnimationEnd);
	}

	startAnimation() {
	  this.element.classList.add(this.animationClass);
	}

	stopAnimation() {
		this.element.classList.remove(this.animationClass);
	}
  }
