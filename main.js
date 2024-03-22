// Input handling and basic player movement
import kaboom from "kaboom";
// Start kaboom
kaboom();
const BULLET_SPEED =300;
loadSpriteAtlas( "/sprites/bulb.png", {
	bulb: {
	  x: 0,
	  y: 0,
	  width: 256,
	  height: 256,
	  sliceX: 4,
	  sliceY: 4,
	  anims: {
		idle: {
		  from: 12,
		  to: 12,
		},
		down: {
		  from: 0,
		  to: 3,
		  speed: 10,
		  loop: true,
		},
		left: {
		  from: 4,
		  to: 7,
		  speed: 10,
		  loop: true,
		},
		right: {
		  from: 8,
		  to: 11,
		  speed: 10,
		  loop: true,
		},
		up: {
		  from: 12,
		  to: 15,
		  speed: 10,
		  loop: true,
		},
	  },
	},
  });

loadSpriteAtlas("/sprites/hero.png", {
	hero: {
	  x: 0,
	  y: 0,
	  width: 256,
	  height: 256,
	  sliceX: 4,
	  sliceY: 4,
	  anims: {
		idle: {
		  from: 12,
		  to: 12,
		},
		down: {
		  from: 0,
		  to: 3,
		  speed: 10,
		  loop: true,
		},
		left: {
		  from: 4,
		  to: 7,
		  speed: 10,
		  loop: true,
		},
		right: {
		  from: 8,
		  to: 11,
		  speed: 10,
		  loop: true,
		},
		up: {
		  from: 12,
		  to: 15,
		  speed: 10,
		  loop: true,
		},
	  },
	},
  });
  const hero = add([
	sprite("hero"),   // sprite() component makes it render as a sprite
	pos(120, 80),     // pos() component gives it position, also enables movement
 // rotate() component gives it rotation
	anchor("center"), // anchor() component defines the pivot point (defaults to "topleft")
])
const bulb = add([
	sprite("bulb"),   // sprite() component makes it render as a sprite
	pos(200, 300),     // pos() component gives it position, also enables movement
	     // rotate() component gives it rotation
	anchor("center"), // anchor() component defines the pivot point (defaults to "topleft")
])
const heromovekeys = ["left", "right", "up", "down"];
const bulbmovekeys = ["a", "d", "w", "s"];
function playerMove(player , data){
    const SPEED = 250;
    // onKeyDown() registers an event that runs every frame as long as user is holding a certain key
    onKeyDown(data[0], () => {
        player.move(-SPEED, 0);
      });
  
      
    //   data.forEach((key) => {
    //     onKeyPress(key, () => {
    //       player.paused = false;
    //       player.play(`${key}`);
    //     });
    //     onKeyRelease(key, () => {
    //       if (
    //         !isKeyDown(data[0]) &&
    //         !isKeyDown(data[1]) &&
    //         !isKeyDown(data[2]) &&
    //         !isKeyDown(data[3])
    //       ) {
    //         player.paused = true;
    //       }
    //     });
    //   });
  
      onKeyDown(data[1], () => {
        player.move(SPEED, 0);
      });
  
      onKeyDown(data[2], () => {
        player.move(0, -SPEED);
      });
  
      onKeyDown(data[3], () => {
        player.move(0, SPEED);
      });
  
    //   Add multiple game objects
  
    //   player.onUpdate(() => {
    //     camPos(player.pos);
    //   });
  
}
playerMove(hero, heromovekeys);
playerMove(bulb,bulbmovekeys);

// const  dir = bulb.pos.sub(hero.pos).unit()
function spawnBullet(e ,) {
	const dir = hero.pos.sub(bulb.pos).unit()
	add([
		rect(12,12),
		area(),
		pos(e),
		anchor("center"),
		color(127, 127, 255),
		// outline(4),
		move(dir, -BULLET_SPEED),
		offscreen({ destroy: true }),
		// strings here means a tag
		"bullet",
	])
}

// onUpdate("bullet", (b) => {
// 	if (insaneMode) {
// 		b.color = rand(rgb(0, 0, 0), rgb(255, 255, 255))
// 	}
// })

onKeyPress("space", () => {
	spawnBullet(hero.pos.sub(16, 0))
	spawnBullet(hero.pos.add(16, 0))
})
