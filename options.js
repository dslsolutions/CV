/** rsCard Options */
var rsOptions = {
    rtl: false,	
	timeline: {
		topSpace: 50,
		itemsSpace: 25		
	},
	refSlider: {		
		speed: 800, //Slide transition duration (in ms)		
		auto: false, //Slides will automatically transition
		pause: 6000, //The amount of time (in ms) between each auto transition
		autoHover: true, //Auto show will pause when mouse hovers over slider		
		adaptiveHeight: true, //Dynamically adjust slider height based on each slide's height
		adaptiveHeightSpeed: 500 //Slide height transition duration (in ms).
	},
	postSlider: {
		speed: 800, //Slide transition duration (in ms)
		auto: true, //Slides will automatically transition
		pause: 6000, //The amount of time (in ms) between each auto transition
		autoHover: true //Auto show will pause when mouse hovers over slider
	},
	clientsSlider: {
		items: 5,
		singleItem: false,
		autoPlay: true,
		stopOnHover: true,
		itemsDesktopSmall: [992, 4],
		itemsTabletSmall: [767, 3],
		itemsMobile: [320, 1]
	},
    calendar: {
		startYear: '2017',
		startMonth: '0', // moths are starting form 0-11
		endYear: '2018',
		endMonth: '0',
		weekStart: 'Domingo', // possible values Sunday/Monday
		weekNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],		                
		busyDays: [ // new Date(year, month, day)
			new Date(2017, 0, 29),
			new Date(2017, 0, 31),
			new Date(2017, 0, 4),
			new Date(2017, 0, 30),

			new Date(2017, 1, 3),
			new Date(2017, 1, 13),
			new Date(2017, 1, 29),

			new Date(2017, 2, 3),
			new Date(2017, 2, 13),
			new Date(2017, 2, 29),

			new Date(2017, 3, 5),
			new Date(2017, 3, 18),
			new Date(2017, 3, 21),
			new Date(2017, 3, 25),

			new Date(2017, 4, 3),
			new Date(2017, 4, 15),
			new Date(2017, 4, 28),
			new Date(2017, 4, 29),
			new Date(2017, 4, 30),
			new Date(2017, 4, 31),

			new Date(2017, 5, 10),
			new Date(2017, 5, 8),
			new Date(2017, 5, 30),

			new Date(2017, 6, 3),
			new Date(2017, 6, 13),
			new Date(2017, 6, 29),

            //Agosto
			new Date(2017, 7, 1),
			new Date(2017, 7, 4),
			new Date(2017, 7, 8),
			new Date(2017, 7, 11),
			new Date(2017, 7, 15),
			new Date(2017, 7, 18),
			new Date(2017, 7, 22),
			new Date(2017, 7, 25),
			new Date(2017, 7, 29),
			
			//Septiembre

			new Date(2017, 8, 1),
			new Date(2017, 8, 5),
			new Date(2017, 8, 12),
			new Date(2017, 8, 8),
			new Date(2017, 8, 15),

            //Octubre
			new Date(2017, 9, 3),
			new Date(2017, 9, 13),
			new Date(2017, 9, 29),

			//Noviembre

			new Date(2017, 10, 5),
			new Date(2017, 10, 18),
			new Date(2017, 10, 25),

			//Diciembre
			new Date(2017, 11, 3),
			new Date(2017, 11, 15),
			new Date(2017, 11, 28),
			new Date(2017, 11, 29),
			new Date(2017, 11, 30),
			new Date(2017, 11, 31)
		]
    }	
};