#!/usr/bin/env node
/**
 * 🎬 STICKMAN SAKUGA SCENE DIRECTOR
 * 
 * Directs and executes cinematic stickman fight scenes automatically
 * from natural language prompts or structured JSON choreography.
 * 
 * Usage:
 *   node scripts/direct_scene.js --prompt "Cyan deflects laser with katana and finishes with slow-mo kick" --ratio 9:16 --open
 *   npm run direct -- --prompt "epic duel in neon arena" --ratio 9:16
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Parse CLI arguments
const args = process.argv.slice(2);
function getArg(name, fallback = null) {
  const index = args.findIndex(a => a === `--${name}` || a.startsWith(`--${name}=`));
  if (index === -1) return fallback;
  if (args[index].includes('=')) {
    return args[index].split('=')[1];
  }
  return args[index + 1] !== undefined ? args[index + 1] : true;
}

const prompt = getArg('prompt', 'Cyan and Crimson standoff, high speed katana clash, hyper laser duel, and bullet-time aerial slam');
const ratio = getArg('ratio', '9:16'); // '9:16' | '16:9'
const openVal = getArg('open', 'true');
const shouldOpen = openVal !== false && openVal !== 'false' && openVal !== '0';
const recordVal = getArg('record', 'false');
const shouldRecord = recordVal === true || recordVal === 'true' || recordVal === '1';

console.log('====================================================');
console.log('🎬 STICKMAN SAKUGA SCENE DIRECTOR (AI PROMPT AGENT)');
console.log('====================================================');
console.log(`📝 Prompt:       "${prompt}"`);
console.log(`📱 Aspect Ratio: ${ratio}`);
console.log(`⏺ Auto-Record:   ${shouldRecord ? 'YES' : 'NO'}`);
console.log(`🌐 Auto-Open:     ${shouldOpen ? 'YES' : 'NO'}`);

// AI Prompt Synthesizer
function parsePromptToTimeline(text, aspect) {
  const q = text.toLowerCase();
  const isVertical = aspect === '9:16' || q.includes('9:16') || q.includes('vertical') || q.includes('short') || q.includes('tiktok');
  
  // Identify key themes
  const hasKatana = q.includes('katana') || q.includes('sword') || q.includes('blade') || q.includes('slash');
  const hasBeam = q.includes('laser') || q.includes('beam') || q.includes('energy') || q.includes('blast') || q.includes('cannon');
  const hasTeleport = q.includes('teleport') || q.includes('flash') || q.includes('behind') || q.includes('portal');
  const hasKick = q.includes('kick') || q.includes('roundhouse') || q.includes('slam') || q.includes('martial') || q.includes('punch');
  const hasBow = q.includes('bow') || q.includes('arrow') || q.includes('archer');
  const hasShield = q.includes('shield') || q.includes('barrier') || q.includes('block') || q.includes('deflect');
  const hasDaggers = q.includes('dagger') || q.includes('daggers');

  const title = hasShield ? 'DEFENSE MATRIX: SHIELD VS LASER' :
                hasBow ? 'LIGHT ARROW SAKUGA SNIPER' :
                (hasKatana && hasBeam) ? 'BLADE VS HYPER CANNON' :
                hasTeleport ? 'FLASH-STEP CONFRONTATION' :
                hasBeam ? 'ENERGY SURGE APOCALYPSE' :
                hasKatana ? 'WAY OF THE PLASMA SWORD' : 'CLASH OF TITANS';

  // Construct structured timeline
  return {
    version: '1.0',
    title: title,
    prompt: text,
    aspectRatio: isVertical ? '9:16' : '16:9',
    totalFrames: 900, // 15.0s at 60 FPS
    scenes: [
      {
        id: 'scene1',
        title: 'SCENE I: CONFRONTATION',
        subtitle: 'ARENA STANDOFF & INTENT',
        durationFrames: 270,
        dialogue: [
          { startFrame: 10, endFrame: 130, speaker: 'CYAN', text: 'You shouldn\'t have come back, Crimson.', color: '#00f0ff' },
          { startFrame: 140, endFrame: 260, speaker: 'CRIMSON', text: 'This arena is your grave.', color: '#ff0055' }
        ],
        cyanAction: hasKatana ? 'katanaStance' : 'idle',
        redAction: hasBeam ? 'energyStance' : 'katanaStance',
        sfx: ['standoffDrone']
      },
      {
        id: 'scene2',
        title: hasBeam ? 'SCENE II: HYPER BEAM & BLADE RUSH' : 'SCENE II: HIGH-SPEED CLASH',
        subtitle: '60 FPS SAKUGA INTERLOCK',
        durationFrames: 300,
        dialogue: [
          { startFrame: 280, endFrame: 420, speaker: '', text: 'HIGH SPEED INTERCEPT // 60 FPS', color: '#f59e0b' },
          { startFrame: 430, endFrame: 560, speaker: 'CRIMSON', text: 'BEHOLD TRUE DESTRUCTION!', color: '#ff0055' }
        ],
        cyanAction: hasTeleport ? 'teleportDodge' : (hasKatana ? 'bladeClash' : 'dashRush'),
        redAction: hasBeam ? 'laserCannon' : 'bladeClash',
        sfx: ['swordClang', 'laser', 'screenShake']
      },
      {
        id: 'scene3',
        title: 'SCENE III: BULLET-TIME CLIMAX',
        subtitle: '0.15X SAKUGA DILATION & SLAM',
        durationFrames: 330,
        dialogue: [
          { startFrame: 580, endFrame: 720, speaker: 'CYAN', text: 'This is the end of the line.', color: '#00f0ff' },
          { startFrame: 740, endFrame: 890, speaker: '', text: 'CRITICAL IMPACT // VICTORY', color: '#00f0ff' }
        ],
        cyanAction: hasKick ? 'aerialOrbitKick' : 'finishSlam',
        redAction: 'knockoutFlight',
        sfx: ['bulletTime', 'criticalHit', 'groundSlam']
      }
    ]
  };
}

const timelineData = parsePromptToTimeline(prompt, ratio);

// Save generated scene data
const customScenePath = path.resolve(__dirname, '../claude-animator/custom_scene.json');
fs.writeFileSync(customScenePath, JSON.stringify(timelineData, null, 2), 'utf-8');
console.log(`\n💾 Saved Choreography JSON: ${customScenePath}`);

// Generate direct URLs
const encodedPrompt = encodeURIComponent(prompt);
const ratioParam = timelineData.aspectRatio === '9:16' ? '9:16' : '16:9';
const recordParam = shouldRecord ? '&record=true' : '';
const localHtmlPath = path.resolve(__dirname, '../claude-animator/index.html');
const localUrl = `file:///${localHtmlPath.replace(/\\/g, '/')}?prompt=${encodedPrompt}&ratio=${ratioParam}${recordParam}`;
const cloudUrl = `https://stickmanvideosystem.github.io/stickman-video-director/?prompt=${encodedPrompt}&ratio=${ratioParam}${recordParam}`;

console.log('\n🚀 Links Generated:');
console.log(`🌐 Local Studio:  ${localUrl}`);
console.log(`☁️ Cloud GitHub:  ${cloudUrl}`);

// Auto-open in browser if requested
if (shouldOpen) {
  console.log('\n🖥️ Launching scene in your browser...');
  const openCmd = process.platform === 'win32' ? `start "" "${localUrl}"` :
                  process.platform === 'darwin' ? `open "${localUrl}"` : `xdg-open "${localUrl}"`;
  exec(openCmd, (err) => {
    if (err) console.error('Failed to open browser automatically:', err.message);
    else console.log('✅ Studio opened successfully!');
  });
}
