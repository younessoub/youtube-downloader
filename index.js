const fs = require('fs');
const ytdl = require('ytdl-core');
const readlineSync = require('readline-sync');

async function main() {
  try {
    const url = readlineSync.question('Enter the video Url : ');
    const validUrl = ytdl.validateURL(url);
    if (validUrl) {
      // getting video id in order to get video info
      const videoId = ytdl.getURLVideoID(url);
      const info = await ytdl.getInfo(videoId);

      // prompting user to choose a format
      const formats = ['videoandaudio', 'videoonly', 'audioonly'];
      const selectedFormat = readlineSync.keyInSelect(
        formats,
        'Choose a format',
      );
      if (selectedFormat === -1) {
        console.log('Canceled');
        return;
      }

      // selecting the available qualities for the selected format
      const available = ytdl.filterFormats(
        info.formats,
        formats[selectedFormat],
      );

      // prompting the user to choose a quality
      const availableQualities = available.map(
        (option) => `Option:\n\tQuality -> ${option.quality}\n\tQualityLablel -> ${option.qualityLabel}\n\tFormat -> ${option.mimeType}\n\tAudio Bitrate : ${option.audioBitrate}\n\tAudio Quality : ${option.audioQuality}`,
      );
      const selectedQuality = readlineSync.keyInSelect(
        availableQualities,
        'Choose an option',
      );
      if (selectedQuality === -1) {
        console.log('Canceled');
        return;
      }
      console.log(`Selected ${availableQualities[selectedQuality]}`);

      const selected = available[selectedQuality];
      // prompting the user to choose the path and the filename
      const savePath = readlineSync.question(
        'Enter a path for saving the file (example: C:\\Users\\John\\Desktop) : \n',
      );
      const fileName = readlineSync.question('Enter the file name: ');

      // downloading
      console.log('Downloading...');
      ytdl(url, { filter: (format) => format.itag === selected.itag }).pipe(
        fs.createWriteStream(`${savePath}\\${fileName}.${selected.container}`),
      );
    } else {
      console.log('Not a valid Url');
    }
  } catch (error) {
    console.log(error);
  }
}

main();
