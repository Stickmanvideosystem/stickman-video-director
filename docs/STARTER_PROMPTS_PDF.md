# 🎬 DIRECTOR Guide: 10 Starter Prompts & 5 Monetization Blueprints

Extracted directly from the **DIRECTOR Guide: Turn Claude into a video studio with 8 free repos**.

---

## 🚀 10 Copy-Paste Starter Prompts

### 1. The One-Line Launch Film
> Fast test to see the engine in action (~1 minute render).
```text
make a modern slick and punchy video for a modern startup that works on inference
```

### 2. A Launch Film for a Real Website
> Pulls real images and branding from the site.
```text
I want you to create a highly professional SaaS product launch video. Go and look up [website]. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things). It should show what an incredible motion designer you are, like it's your showreel for a resume. Go all out.
```

### 3. The 15-Second Motion-Graphics Showreel
```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
```

### 4. The 30-Second Business Explainer (Fill in the blank)
```text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]. Render it to an MP4 with ffmpeg in headless Chrome.
```

### 5. The Recipe Explainer
```text
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingredients + measurements as they're going into the cup. Should be a 30s video.
```

### 6. The Lyric Video
```text
make a dynamic lyrics motion graphics video based on the attached music, perfectly syncing the lyrics and animation to the vocals and beat. make it feel like an incredible motion designer’s showreel for a résumé. go all out.
```

### 7. The Cartoon Scene (Clawd)
```text
Read ANIMATION_GUIDE.md, then make a 15-second video of Clawd trying to catch a butterfly.
```

### 8. The Styled Story Film with Narration
```text
Make a 45-second film in the watercolor style about the coffee farm my family runs. Warm female narrator.
```

### 9. The 9:16 App Ad (TikTok / Instagram Safe-Zone)
```text
Make a 45-50 second vertical video for my app: a glance inside the app. Show every feature, use motion, be creative. I want it good enough for your CV.
- Real, not mocked: record each feature being used in the simulator (tap a filter, open a result, add it).
- Stretch your imagination: let each feature break out of the phone and change the world around it.
- The bar: a motion designer's showreel piece. The best motion you can do. Go all out.
- Nothing made up: every number and label on screen comes from the recordings.
- No stock sound effects; I'll add the music.
- Keep text clear of the TikTok/Instagram interface.
- Let viewers follow: each feature stays on screen for at least 2.5 seconds.
```

### 10. The 9:16 Faceless Story Short
```text
Create a pure javascript animation. 30-60s, vertical 9:16, paper cut-out shadow theatre style with gentle, fitting audio (made in code) on the topic: What makes a place feel like home?
```

---

## 💼 5 Monetization Blueprints

1. **15-Second Launch Films for Local Brands & Startups**
   - *Deliverable:* 15s in 16:9, a 9:16 cut for Reels/TikTok, and 3 high-res still frames.
2. **White-Label Motion-Design Packages for Marketing Agencies**
   - *Deliverable:* 30s explainer in 2 styles + a 9:16 cutdown (unbranded for agency resale).
3. **Lyric Videos for Independent Musicians**
   - *Deliverable:* Full 1080p lyric video + 15s 9:16 chorus promotional clip.
4. **Faceless Explainer / Animation YouTube Channel**
   - *Deliverable:* 3 shorts a week in a consistent visual style (history, science, explainers).
5. **9:16 Social Ads for Meta / TikTok Advertisers**
   - *Deliverable:* 3 hook variants with UI-safe margins for A/B creative testing.

---

## 🛠️ The 8 Integrated Engines in `/engines`
1. `engines/lemo-opuscar` - 59 ready film styles
2. `engines/mg-styles-15` - 15 motion design styles with complete prompts
3. `engines/ClaudeAnimationBase` - Hand-painted cartoon kit featuring Clawd
4. `engines/pdoom-video` - Word-synced 3D karaoke lyric video engine
5. `engines/PDoomVideo` - Multi-scene music video with subagent architecture
6. `engines/opus-video-prompts` - 18 full prompts and 54 public case studies
7. `engines/awesome-claude-5-5-videos` - 424 curated video posts and research library
8. `engines/awesome-opus5-5-videos` - 703 viral video prompts with side-by-side remakes

