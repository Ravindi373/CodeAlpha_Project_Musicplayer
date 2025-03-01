class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentTrackIndex = 0;

        // Sample playlist - you can modify this with your own music files
        this.playlist = [
            {
                title: "Sample Song 1",
                artist: "Artist 1",
                source: "./music/song1.mp3",
                cover: "./images/cover1.jpg"
            },
            {
                title: "Sample Song 2",
                artist: "Artist 2",
                source: "./music/song2.mp3",
                cover: "./images/cover2.jpg"
            }
        ];

        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        // Controls
        this.playPauseBtn = document.getElementById('play-pause');
        this.prevBtn = document.getElementById('prev');
        this.nextBtn = document.getElementById('next');
        this.volumeSlider = document.getElementById('volume');
        
        // Info elements
        this.titleElement = document.getElementById('title');
        this.artistElement = document.getElementById('artist');
        this.coverElement = document.getElementById('cover');
        this.currentTimeElement = document.getElementById('current-time');
        this.durationElement = document.getElementById('duration');
        this.progressBar = document.querySelector('.progress');
        this.progressArea = document.querySelector('.progress-bar');
    }

    setupEventListeners() {
        // Playback controls
        this.playPauseBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.playPrevious());
        this.nextBtn.addEventListener('click', () => this.playNext());
        
        // Volume control
        this.volumeSlider.addEventListener('input', (e) => {
            this.audio.volume = e.target.value / 100;
        });

        // Progress bar
        this.progressArea.addEventListener('click', (e) => {
            const width = this.progressArea.clientWidth;
            const clickX = e.offsetX;
            const duration = this.audio.duration;
            this.audio.currentTime = (clickX / width) * duration;
        });

        // Audio events
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.playNext());
        this.audio.addEventListener('loadedmetadata', () => {
            this.durationElement.textContent = this.formatTime(this.audio.duration);
        });
    }

    loadTrack(index) {
        if (index >= 0 && index < this.playlist.length) {
            const track = this.playlist[index];
            this.audio.src = track.source;
            this.titleElement.textContent = track.title;
            this.artistElement.textContent = track.artist;
            this.coverElement.src = track.cover;
            this.currentTrackIndex = index;
        }
    }

    togglePlay() {
        if (this.audio.src) {
            if (this.isPlaying) {
                this.audio.pause();
                this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                this.audio.play();
                this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            this.isPlaying = !this.isPlaying;
        }
    }

    playPrevious() {
        let prevIndex = this.currentTrackIndex - 1;
        if (prevIndex < 0) prevIndex = this.playlist.length - 1;
        this.loadTrack(prevIndex);
        if (this.isPlaying) this.audio.play();
    }

    playNext() {
        let nextIndex = this.currentTrackIndex + 1;
        if (nextIndex >= this.playlist.length) nextIndex = 0;
        this.loadTrack(nextIndex);
        if (this.isPlaying) this.audio.play();
    }

    updateProgress() {
        const duration = this.audio.duration;
        const currentTime = this.audio.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        this.progressBar.style.width = `${progressPercent}%`;
        this.currentTimeElement.textContent = this.formatTime(currentTime);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const player = new MusicPlayer();
    player.loadTrack(0); // Load the first track
}); 