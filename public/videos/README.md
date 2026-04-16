# 🎬 Hero Video Slideshow

Place your MP4 videos here for the homepage hero slideshow.

## How to Set Up Videos

### Step 1: Add Your Videos
Copy your MP4 files to this folder:
```
public/videos/
├── video1.mp4
├── video2.mp4
├── video3.mp4
```

### Step 2: Configure in index.html
Open `index.html` and find the video configuration at the bottom:

```javascript
window.heroVideos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
];
```

### Step 3: Refresh and Enjoy!
The videos will play with beautiful crossfade transitions.

---

## Video Recommendations

| Setting | Recommendation |
|---------|----------------|
| **Format** | MP4 (H.264 codec) |
| **Resolution** | 1920x1080 (Full HD) |
| **Duration** | 10-30 seconds each |
| **File Size** | Under 10MB per video |
| **Aspect Ratio** | 16:9 (landscape) |

## Optimization Tips

1. **Compress videos** for web using [HandBrake](https://handbrake.fr/) or similar
2. **Keep file sizes small** for fast loading on mobile
3. **Remove audio** tracks (videos play muted anyway)
4. **Use consistent lighting** and color grading across videos

## Transition Settings

In `src/config/content.js`, you can adjust:
```javascript
heroVideos: {
  transitionDuration: 1500,  // Crossfade time in ms (default: 1.5 seconds)
}
```

---

## Need Help?
If videos aren't playing:
1. Check file paths are correct
2. Ensure videos are in MP4 format
3. Check browser console for errors
