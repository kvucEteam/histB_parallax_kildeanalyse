$(document).ready(function() {
// init controller
	// var controller = new ScrollMagic.Controller();

	//gør mobil venlig:
	var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
	 console.log('isMobile ' + isMobile);

	if(isMobile == true) {
		var controller = new ScrollMagic.Controller({container: '#scroll-wrapper'});
		$('#scroll-wrapper').css('overflow', 'scroll');
	} else {
		var controller = new ScrollMagic.Controller();
	}
	//gjort mobil venlig ;)

////////////////////////////////// INTRO //////////////////////////////////

	//animationer der skal kaldes
	var timeLineIntro1 = new TimelineMax();
	timeLineIntro1
		.to('#scene-intro-1 h4', 1, {opacity : 0, scale: 0.5})
		.to('#arrow-up', 1, {opacity : 0, scale: 0.5, delay: -1})
		.to('#arrow-down', 1, {opacity : 0, scale: 0.5, delay: -0.5});

	var timeLineIntro2 = new TimelineMax();
	timeLineIntro2
		.from('#intro-container-2', 1, {opacity : 0, scale: 0, delay:0.3});

	var timeLineIntro2span1 = new TimelineMax();
	timeLineIntro2span1
		.to('#intro-4-span', 1, {opacity:1, ease:Power2.easeIn});

	var timeLineIntro2span2 = new TimelineMax();
	timeLineIntro2span2
		.to('#intro-41-span', 1, {opacity:1, ease:Power2.easeIn});

	var timeLineIntro3 = new TimelineMax();
	timeLineIntro3
		.from('#intro-container-4', 1, {opacity : 0, scale: 0});

	//scener
	var intro1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: '100%'
	}).setTween(timeLineIntro1);

	var intro1 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: '50%'
	}).setPin('#intro-container-1');

	//SECTION 2
	var intro2 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-2 .left .spacer',
		triggerHook:'onLeave',
		//offset: '100',
		duration: '430%'
	}).setPin('#intro-container-2');

	var intro2Time = new ScrollMagic.Scene({
		triggerElement: '#arrow-down',
		duration: '100%'
	}).setTween(timeLineIntro2);

	var intro2Expl = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-4 .right .spacer',
		triggerHook:'onLeave',
		duration: '330%'
	}).setPin('#intro-container-3');

	var intro2ExplfadeIn1 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-5',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2span1);

	var intro2ExplfadeIn2 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-6',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2span2);

	var intro3 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-8 .left .spacer',
		triggerHook: 'onLeave',
		duration: '250%'
	}).setPin('#intro-container-4');

	var intro3Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-9',
		triggerHook: 'onLeave',
		duration: '80%'
	}).setTween(timeLineIntro3);

	controller.addScene([
		intro1,intro1Time,
		intro2, intro2Time, intro2Expl, intro2ExplfadeIn1,intro2ExplfadeIn2,
		intro3, intro3Time
	]);

////////////////////////////////// BRIKKER /////////////////////////////////////////////

//BRIKKER BEGYNDER

	//animationer der skal kaldes
	var brick1Parallax = new TimelineMax();
	brick1Parallax.to('#brick-1', 1, {y:'-40%', ease: Linear.easeNone});

	var brick2Parallax = new TimelineMax();
	brick2Parallax.to('#brick-2', 1, {y:'-60%', ease: Linear.easeNone});

	var brickTxtParallax = new TimelineMax();
	brickTxtParallax.to('#brick-txt', 1, {y:'-80%', ease: Linear.easeNone});

	var brick3Parallax = new TimelineMax();
	brick3Parallax.to('#brick-3', 1, {y:'-120%', ease: Linear.easeNone});

	var brick4Parallax = new TimelineMax();
	brick4Parallax.to('#brick-4', 1, {y:'-140%', ease: Linear.easeNone});


	//Scener
	var brikker1 = new ScrollMagic.Scene({
		triggerElement: '#brick-1',
		triggerHook:'onLeave',
		duration: '460%'
	}).setPin('#brick-1', {pushFollowers: false});

	var brikker1Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-1',
		triggerHook:'onLeave',
		duration: '660%'
	}).setTween(brick1Parallax);

	//Brick layer 2
	var brikker2 = new ScrollMagic.Scene({
		triggerElement: '#brick-2',
		triggerHook:'onLeave',
		duration: '360%'
	}).setPin('#brick-2', {pushFollowers: false});

	var brikker2Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2',
		triggerHook:'onLeave',
		duration: '460%'
	}).setTween(brick2Parallax);

	
	var brikkerTekst = new ScrollMagic.Scene({

		triggerElement: '#brick-txt',
		duration: '360%'
	}).setPin('#brick-txt', {pushFollowers: false});

	var brikkerTxtParallax = new ScrollMagic.Scene({
		triggerElement:'#brick-txt',
		duration: '460%'
	}).setTween(brickTxtParallax);

	//Brick layer 3
	var brikker3 = new ScrollMagic.Scene({
		triggerElement: '#brick-3',
		triggerHook:'onLeave',
		duration: '360%'
	}).setPin('#brick-3', {pushFollowers: false});

	var brikker3Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-3',
		triggerHook:'onLeave',
		duration: '360%'
	}).setTween(brick3Parallax);

	//Brick layer 4
	var brikker4 = new ScrollMagic.Scene({
		triggerElement: '#brick-4',
		triggerHook:'onLeave',
		duration: '260%'
	}).setPin('#brick-4', {pushFollowers: false});

	var brikker4Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-4',
		triggerHook:'onLeave',
		duration: '60%'
	}).setTween(brick4Parallax);


	controller.addScene([
		brikker1, 
		brikker1Parallax,
		
		brikker2,
		brikker2Parallax,

		brikkerTekst,
		brikkerTxtParallax,

		brikker3,
		brikker3Parallax,

		brikker4,
		brikker4Parallax
	]);


////////////////////////////////// DE 7 TRIN //////////////////////////////////

// 1. HVAD

	//animationer der skal kaldes
	//spørgsmålet fader ind og vokser
	var timeLine1 = new TimelineMax();
	timeLine1.from('#quest-1', 3.7, {opacity : 0, scale: 0});
	//bevæg spørgsmål mod venstre
	var timeLine2 = new TimelineMax();
	timeLine2.to('#quest-1', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	//fade den forklarende tekst ind
	var explFadeIn = new TimelineMax();
	explFadeIn.from('#hvad-txt', 1, {opacity : 0});

	//scener
	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#scene-2 .left .no-spacer',
		triggerHook:'onLeave',
		duration: '100%'
	}).setPin('#no-1');

	var scene1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
		offset:'300',
	 	duration: '100%'
	}).setTween(timeLine1);

	var scene1Time2 = new ScrollMagic.Scene({
		triggerElement: '#scene-2-1',
		offset:'300',
	 	duration: '100%'
	}).setTween(timeLine2);

	var scene1Quest = new ScrollMagic.Scene({
		triggerElement: '#scene-2 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '384%'
	}).setPin('#quest-1');

	var scene1Time3 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(explFadeIn);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-3 .right .spacer',
		triggerHook:'onLeave',
		duration: '164%'
	}).setPin('#expl-container-1');

//scener tilføjes til controller
	controller.addScene([
		scene1, scene1Quest, scene1Time, scene1Time2,scene1Time3, scene2
	]);


// 2. HVEM

	//animationer der skal kaldes
	var hvemFadeGrow = new TimelineMax();
	hvemFadeGrow.from('#quest-2', 3.7, {opacity : 0, scale: 0});
		
	var hvemX = new TimelineMax();
	hvemX.to('#quest-2', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	
	var hvemFadeIn1 = new TimelineMax();
	hvemFadeIn1
	.from('#hvem-txt-1', 1, {opacity : 0})
	.from('#hvem-txt-2', 1, {opacity : 0, delay:2});

	//scener

	var hvem1 = new ScrollMagic.Scene({
		triggerElement: '#scene-4 .left .no-spacer',
		triggerHook:'onLeave',
		duration: '100%'
	}).setPin('#no-2');

	var hvemTime = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
		offset:'300',
	 	duration: '100%'
	}).setTween(hvemFadeGrow);

	var hvemTime2 = new ScrollMagic.Scene({
		triggerElement: '#scene-4-1',
		triggerHook:'onLeave',
	 	duration: '100%'
	}).setTween(hvemX);

	var hvemQuest = new ScrollMagic.Scene({
		triggerElement: '#scene-4 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '409%'
	}).setPin('#quest-2');

	var hvemTime3 = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(hvemFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var hvemExpl = new ScrollMagic.Scene({
		triggerElement: '#scene-5 .right .spacer',
		triggerHook:'onLeave',
		duration: '189%'
	}).setPin('#expl-container-2');

//scener tilføjes til controller
controller.addScene([
		hvem1, hvemTime, hvemTime2, hvemTime3, hvemQuest, hvemExpl
	]);


// 3. HVORNÅR

	//animationer der skal kaldes
	var hvornaarFadeGrow = new TimelineMax();
	hvornaarFadeGrow.from('#quest-3', 3.7, {opacity : 0, scale: 0});
		
	var hvornaarMoveX = new TimelineMax();
	hvornaarMoveX.to('#quest-3', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	
	var hvornaarFadeIn1 = new TimelineMax();
	hvornaarFadeIn1
	.from('#hvornaar-txt-1', 1, {opacity : 0})
	.from('#hvornaar-txt-2', 1, {opacity : 0, delay:2});

	//scener
	var hvornaar1 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1 .left .no-spacer',
		triggerHook:'onLeave',
		duration: '100%'
	}).setPin('#no-3');

	var hvornaarTime = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1',
		offset:'300',
	 	duration: '100%'
	}).setTween(hvornaarFadeGrow);

	var hvornaarTime2 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-2',
		triggerHook:'onLeave',
	 	duration: '100%'
	}).setTween(hvornaarMoveX);

	var hvornaarQuest = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '409%'
	}).setPin('#quest-3');

	var hvornaarTime3 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-3',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(hvornaarFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var hvornaarExpl = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-3 .right .spacer',
		triggerHook:'onLeave',
		duration: '189%'
	}).setPin('#expl-container-3');

//scener tilføjes til controller
controller.addScene([
		hvornaar1, hvornaarTime, hvornaarTime2, hvornaarTime3, hvornaarQuest, hvornaarExpl
	]);

// 4. TIL HVEM

	//animationer der skal kaldes
	//spørgsmålet fader ind og vokser
	var tilHvemFadeGrow = new TimelineMax();
	tilHvemFadeGrow.from('#quest-4', 3.7, {opacity : 0, scale: 0});
	
	//bevæg spørgsmål mod venstre
	var tilHvemMoveX = new TimelineMax();
	tilHvemMoveX.to('#quest-4', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	
	//fade den forklarende tekst ind
	var tilHvemFadeIn1 = new TimelineMax();
	tilHvemFadeIn1
	.from('#til-hvem-txt-1', 1, {opacity : 0});

	//scener
	var tilHvem1 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1 .left .no-spacer',
		triggerHook:'onLeave',
		duration: '100%'
	}).setPin('#no-4');

	var tilHvemTime = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1',
	 	offset:'300',
	 	duration: '100%'
	}).setTween(tilHvemFadeGrow);

	var tilHvemTime2 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-2',
		triggerHook:'onLeave',
	 	duration: '100%'
	}).setTween(tilHvemMoveX);

	var tilHvemQuest = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '373%'
	}).setPin('#quest-4');

	var tilHvemTime3 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-3',
		offset:'200',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(tilHvemFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var tilHvemExpl = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-3 .right .spacer',
		triggerHook:'onLeave',
		duration: '153%'
	}).setPin('#expl-container-4');

//scener tilføjes til controller
controller.addScene([
		tilHvem1, tilHvemTime, tilHvemTime2, tilHvemTime3, tilHvemQuest, tilHvemExpl
	]);

// 5. OM HVAD

	//animationer der skal kaldes
	var omHvadFadeGrow = new TimelineMax();
	omHvadFadeGrow.from('#quest-5', 3.7, {opacity : 0, scale: 0});
		
	var omHvadMoveX = new TimelineMax();
	omHvadMoveX.to('#quest-5', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	
	var omHvadFadeIn1 = new TimelineMax();
	omHvadFadeIn1
	.from('#om-hvad-txt-1', 1, {opacity : 0});

	//scener
	var omHvad1 = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-1 .left .no-spacer',
		triggerHook:'onLeave',
		duration: '100%'
	}).setPin('#no-5');

	var omHvadTime = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-1',
	 	offset:'300',
	 	duration: '100%'
	}).setTween(omHvadFadeGrow);

	var omHvadTime2 = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-2',
	 	triggerHook:'onLeave',
	 	duration: '100%'
	}).setTween(omHvadMoveX);

	var omHvadQuest = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-1 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '383%'
	}).setPin('#quest-5');

	var omHvadTime3 = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-3',
		offset:'200',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(omHvadFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var omHvadExpl = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-3 .right .spacer',
		triggerHook:'onLeave',
		duration: '163%'
	}).setPin('#expl-container-5');

//scener tilføjes til controller
controller.addScene([
		omHvad1, omHvadTime, omHvadTime2, omHvadTime3, omHvadQuest, omHvadExpl
	]);

// 6. HVILKE VIRKEMIDLER

	//animationer der skal kaldes
	var virkemidlerFadeGrow = new TimelineMax();
	virkemidlerFadeGrow.from('#quest-6', 3.7, {opacity : 0, scale: 0});
		
	var virkemidlerMoveX = new TimelineMax();
	virkemidlerMoveX.to('#quest-6', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	
	var virkemidlerFadeIn1 = new TimelineMax();
	virkemidlerFadeIn1.from('#virkemidler-txt-1', 1, {opacity : 0});

	//scener
	var virkemidler1 = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-1 .left .no-spacer',
		triggerHook: 'onLeave',
		duration: '100%'
	}).setPin('#no-6');

	var virkemidlerTime = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-1',
		offset:'300',
	 	duration: '100%'
	}).setTween(virkemidlerFadeGrow);

	var virkemidlerTime2 = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-2',
		triggerHook:'onLeave',
	 	duration: '100%'
	}).setTween(virkemidlerMoveX);

	var virkemidlerQuest = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-1 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '354%'
	}).setPin('#quest-6');

	var virkemidlerTime3 = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-3',
		triggerHook: 'onLeave',
		offset:'200',
	 	duration: '100%'
	}).setTween(virkemidlerFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var virkemidlerExpl = new ScrollMagic.Scene({
		triggerElement:'#virkemidler-3 .right .spacer',
		triggerHook:'onLeave',
		duration: '134%'
	}).setPin('#expl-container-6');

//scener tilføjes til controller
controller.addScene([
		virkemidler1, virkemidlerTime, virkemidlerTime2, virkemidlerTime3, virkemidlerQuest, virkemidlerExpl
	]);

// 7. HVILKE KONSEKVENSER?

	//animationer der skal kaldes
	var konsekvenserFadeGrow = new TimelineMax();
	konsekvenserFadeGrow.from('#quest-7', 3.7, {opacity : 0, scale: 0});
		
	var konsekvenserMoveX = new TimelineMax();
	konsekvenserMoveX.to('#quest-7', 5, {xPercent: -96, delay: 1, ease:Power2.easeOut});
	
	var konsekvenserFadeIn1 = new TimelineMax();
	konsekvenserFadeIn1
		.from('#konsekvenser-txt-1', 2, {opacity : 0})
		.from('#konsekvenser-txt-2', 2, {opacity : 0, delay:4})
		.from('#konsekvenser-txt-3', 2, {opacity : 0, delay:4});

	//scener
	var konsekvenser1 = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-1 .left .no-spacer',
		triggerHook:'onLeave',
		duration: '100%'
	}).setPin('#no-7');

	var konsekvenserTime = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-1',
		offset:'300',
	 	duration: '100%'
	}).setTween(konsekvenserFadeGrow);

	var konsekvenserTime2 = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-2',
		triggerHook:'onLeave',
	 	duration: '100%'
	}).setTween(konsekvenserMoveX);

	var konsekvenserQuest = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-1 .right .spacer',
		triggerHook:'onLeave',
	 	duration: '503%'
	}).setPin('#quest-7');

	var konsekvenserTime3 = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-3',
		triggerHook: 'onLeave',
		offset:'200',
	 	duration: '200%'
	}).setTween(konsekvenserFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var konsekvenserExpl = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-3 .right .spacer',
		triggerHook:'onLeave',
		duration: '283%'
	}).setPin('#expl-container-7');

//scener tilføjes til controller
controller.addScene([
		konsekvenser1, konsekvenserTime, konsekvenserTime2, konsekvenserTime3, konsekvenserQuest, konsekvenserExpl
	]);


//BRIKKER BEGYNDER IGEN

	//animationer der skal kaldes
	var brick21Parallax = new TimelineMax();
	brick21Parallax.to('#brick-2-1', 1, {y:'-40%', ease: Linear.easeNone});

	var brick22Parallax = new TimelineMax();
	brick22Parallax.to('#brick-2-2', 1, {y:'-60%', ease: Linear.easeNone});

	var brick2TxtParallax = new TimelineMax();
	brick2TxtParallax.to('#brick-2-txt', 1, {y:'-50%', ease: Linear.easeNone});

	var brick23Parallax = new TimelineMax();
	brick23Parallax.to('#brick-2-3', 1, {y:'-100%', ease: Linear.easeNone});

	var brick24Parallax = new TimelineMax();
	brick24Parallax.to('#brick-2-4', 1, {y:'-120%', ease: Linear.easeNone});

	//Scenes
	var brikker21 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-1',
		triggerHook:'onLeave',
		duration: '660%'
	}).setPin('#brick-2-1', {pushFollowers: false});

	var brikker21Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-1',
		triggerHook:'onLeave',
		duration: '860%'
	}).setTween(brick21Parallax);

	//Brick layer 2
	var brikker22 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-2',
		triggerHook:'onLeave',
		duration: '560%'
	}).setPin('#brick-2-2', {pushFollowers: false});

	var brikker22Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-2',
		triggerHook:'onLeave',
		duration: '660%'
	}).setTween(brick22Parallax);

	
	var brikker2Tekst = new ScrollMagic.Scene({
		triggerElement: '#brick-2-txt',

		duration: '1360%'
	}).setPin('#brick-2-txt', {pushFollowers: false});

	var brikker2TxtParallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-txt',
		duration: '160%'
	}).setTween(brick2TxtParallax);

	//Brick layer 3
	var brikker23 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-3',
		triggerHook:'onLeave',
		duration: '660%'
	}).setPin('#brick-2-3', {pushFollowers: false});

	var brikker23Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-3',
		triggerHook:'onLeave',
		duration: '560%'
	}).setTween(brick23Parallax);

	//Brick layer 4
	var brikker24 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-4',
		triggerHook:'onLeave',
		duration: '460%'
	}).setPin('#brick-2-4', {pushFollowers: false});

	var brikker24Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-4',
		triggerHook:'onLeave',
		duration: '360%'
	}).setTween(brick24Parallax);

	controller.addScene([
		brikker21, 
		brikker21Parallax,
		
		brikker22,
		brikker22Parallax,

		brikker2Tekst,
		brikker2TxtParallax,

		brikker23,
		brikker23Parallax,

		brikker24,
		brikker24Parallax
	]);


// 8. OUTRO

	//animationer der skal kaldes
	var outroFadeIn = new TimelineMax();
	outroFadeIn
	.from('#outro-txt', 1, {opacity : 0});

	var outro2FadeIn = new TimelineMax();
	outro2FadeIn
	.from('#outro-2-txt', 1, {opacity : 0});

	var outro2FadeOut = new TimelineMax(); 
	outro2FadeOut
	.to('#expl-container-9, #brick-2-txt',1,{opacity : 0});

	//scener
	var outroFade = new ScrollMagic.Scene({
		triggerElement: '#outro-1',
		triggerHook: 'onLeave',
		offset:'500',
	 	duration: '100%'
	}).setTween(outroFadeIn);

	var outro2Fade = new ScrollMagic.Scene({
		triggerElement: '#outro-2',
		triggerHook: 'onLeave',
		offset:'500',
	 	duration: '100%'
	}).setTween(outro2FadeIn);

	var outro2FadeAway = new ScrollMagic.Scene({
		triggerElement: '#outro-fadeOut',
		triggerHook: 'onLeave',
	 	duration: '200%'
	}).setTween(outro2FadeOut);

	//SEKTION 2 - uddybning pinnes og fades ind

	var outroExpl = new ScrollMagic.Scene({
		triggerElement: '#outro-1 .right .spacer3',
		triggerHook:'onLeave',
		duration: '159%'
	}).setPin('#expl-container-8', {pushFollowers: false});

	var outro2Expl = new ScrollMagic.Scene({
		triggerElement: '#outro-2 .right .spacer3',
		triggerHook:'onLeave',

		duration: '459%'
	}).setPin('#expl-container-9');

	var pinFooter = new ScrollMagic.Scene({
		triggerElement: '#footer',
		triggerHook:'onEnter',
		duration: '200%'
	}).setPin('#footer');

//scener tilføjes til controller
controller.addScene([
		outroFade, outroExpl, outro2Fade, outro2Expl, outro2FadeAway, pinFooter
	]);
});	