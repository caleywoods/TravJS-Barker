// const keys = Array.from( document.querySelectorAll( '.key' ) );
// console.log(keys);
// keys.forEach( key => key.addEventListener('transitionend', removePlaying) );

window.addEventListener( "keydown", (e) => {
	const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key   = document.querySelector(`div[data-key="${e.keyCode}"]`);

	if ( !sound ) return;

	key.classList.add( 'playing' );
	sound.currentTime = 0;
	sound.play();
});

function removePlaying( e ) {
	if ( e.propertyName !== 'transform' ) return;

	e.target.classList.remove( 'playing' );
}