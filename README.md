# YouTube Downloader

This Node.js application allows you to download videos and audio from YouTube URLs, offering flexible format selection and providing user-friendly prompts for input.

## Features

- Downloads videos and audio from YouTube.
- Selects between video & audio, audio only, or video only formats.
- Provides a list of available qualities for each format.
- Prompts for the desired save path and filename.
- Uses the `ytdl-core` library for efficient downloads.
- Employs `readlineSync` for clear user interaction.

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
Enter the video Url : https://www.youtube.com/watch?v=3176Sw8A0EE

[1] videoandaudio
[2] videoonly
[3] audioonly
[0] CANCEL

Choose a format [1, 2, 3, 0]: 1

[1] Option:
        Quality -> hd720
        QualityLablel -> 720p
        Format -> video/mp4; codecs="avc1.64001F, mp4a.40.2"
        Audio Bitrate : 192
        Audio Quality : AUDIO_QUALITY_MEDIUM
[2] Option:
        Quality -> medium
        QualityLablel -> 360p
        Format -> video/mp4; codecs="avc1.42001E, mp4a.40.2"
        Audio Bitrate : 96
        Audio Quality : AUDIO_QUALITY_LOW
[0] CANCEL

Choose an option [1, 2, 0]: 1
Selected Option:
        Quality -> hd720
        QualityLablel -> 720p
        Format -> video/mp4; codecs="avc1.64001F, mp4a.40.2"
        Audio Bitrate : 192
        Audio Quality : AUDIO_QUALITY_MEDIUM
Enter a path for saving the file (example: C:\Users\John\Desktop) :
C:\Users\John\Desktop
Enter the file name:
myvideo
```

## Additional Notes:

    Respect YouTube's Terms of Service and only download content you have the right to use.
    This application is intended for educational purposes and personal use. Using it for illegal or malicious activities is strictly prohibited.
    Feel free to contribute to the project by submitting pull requests or providing feedback!

## Credits:

    ytdl-core library (https://github.com/fent/node-ytdl-core)
    readlineSync library (https://github.com/anseki/readline-sync)
