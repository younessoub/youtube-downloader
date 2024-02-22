# YouTube Downloader

This Node.js application allows you to download videos and audio from YouTube URLs, offering flexible format selection and providing user-friendly prompts for input.

## Features

* Downloads videos and audio from YouTube.
* Selects between video & audio, audio only, or video only formats.
* Provides a list of available qualities for each format.
* Prompts for the desired save path and filename.
* Uses the `ytdl-core` library for efficient downloads.
* Employs `readlineSync` for clear user interaction.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/youtube-downloader.git`
2. Install dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Enter the YouTube URL when prompted.
3. Choose between video & audio, audio only, or video only (numbers correspond to options).
4. Select the desired quality by entering the corresponding number.
5. Specify the save path and filename when prompted.

## Example
```bash
Enter the video Url : https://www.youtube.com/watch?v=MV_3Dpw-BRY

[1] videoandaudio
[2] videoonly
[3] audioonly
[0] CANCEL

Choose a format [1, 2, 3, 0]: 3

[1] Option:
        Quality -> tiny
        QualityLablel -> null
        Format -> audio/webm; codecs="opus"
        Audio Bitrate : 160
        Audio Quality : AUDIO_QUALITY_MEDIUM
[2] Option:
        Quality -> tiny
        QualityLablel -> null
        Format -> audio/mp4; codecs="mp4a.40.2"
        Audio Bitrate : 128
        Audio Quality : AUDIO_QUALITY_MEDIUM
[3] Option:
        Quality -> tiny
        QualityLablel -> null
        Format -> audio/webm; codecs="opus"
        Audio Bitrate : 64
        Audio Quality : AUDIO_QUALITY_LOW
[4] Option:
        Quality -> tiny
        QualityLablel -> null
        Format -> audio/webm; codecs="opus"
        Audio Bitrate : 48
        Audio Quality : AUDIO_QUALITY_LOW
[0] CANCEL

Choose an option [1...4 / 0]: 1
Selected Option:
        Quality -> tiny
        QualityLablel -> null
        Format -> audio/webm; codecs="opus"
        Audio Bitrate : 160
        Audio Quality : AUDIO_QUALITY_MEDIUM
Enter the path for saving the file, example " C:\Users\John\Desktop ":
.
Enter the file name: nightcall
```
## Additional Notes:

    Respect YouTube's Terms of Service and only download content you have the right to use.
    This application is intended for educational purposes and personal use. Using it for illegal or malicious activities is strictly prohibited.
    Feel free to contribute to the project by submitting pull requests or providing feedback!

## Credits:

    ytdl-core library (https://github.com/fent/node-ytdl-core)
    readlineSync library (https://github.com/anseki/readline-sync)

