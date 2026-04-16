# Modern Music Player

A sleek and responsive music player built with HTML, CSS, and JavaScript. This player features a modern design with a clean user interface and essential music playback functionality.

## Features

- Play/Pause, Previous, and Next track controls
- Progress bar with seek functionality
- Volume control
- Display of current track information (title, artist, cover art)
- Time display (current time and duration)
- Responsive design that works on all devices
- Modern glass-morphism UI design

## Setup

1. Clone or download this repository
2. Replace the sample playlist in `script.js` with your own music files:
   ```javascript
   this.playlist = [
       {
           title: "Your Song Title",
           artist: "Artist Name",
           source: "path/to/your/song.mp3",
           cover: "path/to/your/cover-art.jpg"
       },
       // Add more tracks as needed
   ];
   ```
3. Make sure your audio files and cover art images are in the correct location relative to your HTML file
4. Open `index.html` in a web browser

## File Structure

- `index.html` - The main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Music player functionality
- Your music files and cover art (to be added)

## Browser Support

The music player is compatible with all modern browsers that support the HTML5 Audio API:
- Chrome
- Firefox
- Safari
- Edge

## Live Demo

You can view the live demo here: [Music Player Demo](https://ravindi373.github.io/CodeAlpha_Project_Musicplayer/)

## Notes

- The player uses Font Awesome icons for the controls
- The design features a glass-morphism effect that works best on modern browsers
- Audio files should be in a web-compatible format (MP3, WAV, or OGG) 
