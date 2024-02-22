const fs = require('fs')
const ytdl = require('ytdl-core')
const readlineSync = require('readline-sync')

async function main() {
    try {
        const url = readlineSync.question('Enter the video Url : ')
        const validUrl = ytdl.validateURL(url)
        if (validUrl) {
            const videoId = ytdl.getURLVideoID(url)
            const info = await ytdl.getInfo(videoId)
            const formats = ['videoandaudio', 'videoonly', 'audioonly']
            const selectedFormat = readlineSync.keyInSelect(formats, "Choose a format")
            if (selectedFormat === -1) {
                console.log("Canceled")
                return
            }
            const available = ytdl.filterFormats(info.formats, formats[selectedFormat])
            const availableQualities = available.map(option => `Option:\n\tQuality -> ${option.quality}\n\tQualityLablel -> ${option.qualityLabel}\n\tFormat -> ${option.mimeType}\n\tAudio Bitrate : ${option.audioBitrate}\n\tAudio Quality : ${option.audioQuality}`)
            const selectedQuality = readlineSync.keyInSelect(availableQualities, "Choose an option")
            if (selectedQuality === -1) {
                console.log("Canceled")
                return
            }
            console.log(`Selected ${availableQualities[selectedQuality]}`)
            const selected = available[selectedQuality]
            const savePath = readlineSync.question("Enter the path for saving the file example(C:\\Users\\John\\Desktop): \n")
            const fileName = readlineSync.question("Enter the file name: ")

            ytdl(url, { filter: format => format.itag == selected.itag })
                .pipe(fs.createWriteStream(`${savePath}/${fileName}.${selected.container}`))
        } else {
            console.log("Not a valid Url")
        }
    } catch (error) {
        console.log(error)
    }
}

main()
