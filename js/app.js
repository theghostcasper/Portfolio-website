var myFullpage = new fullpage('#fullpage', {
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['Home', 'Portfolio', 'Contact'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Portfolio', 'Contact'],
		//Scrolling
		css3: false,
		scrollingSpeed: 1300,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 400,
		scrollBar: false,
		easing: 'easeOutBack',
		easingcss3: 'ease-out',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: false,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: true,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: true,
		fadingEffect: true,
		normalScrollElements: '.normal-scroll',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 5,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#2F2F2F','#2F2F2F','#2F2F2F','#2F2F2F'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
		lazyLoading: true,
		//events
		onLeave: function(origin, destination, direction){
		},
		afterLoad: function(origin, destination, direction){},
		afterRender: function(){},
		afterResize: function(width, height){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(section, origin, destination, direction){},
		onSlideLeave: function(section, origin, destination, direction){}
		});
		document.querySelectorAll('.nav-item').forEach((item)=>{
				item.addEventListener('click',(e)=>{
				document.querySelector('.navbar-toggler').classList.add("collapsed");
				//aria-expanded="true"
				document.querySelector(".navbar-toggler").setAttribute("aria-expanded", false);
				document.getElementById("navbarToggleExternalContent").classList.remove('show');
			})
		});