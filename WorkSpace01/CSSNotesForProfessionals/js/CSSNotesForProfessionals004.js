 setInterval(() => {
	if (box.classList.contains('active')) {
	  box.classList.remove('active');
  } else {
    box.classList.add('active');
  }
}, 1000)