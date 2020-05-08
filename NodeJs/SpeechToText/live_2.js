const recorder = require('node-record-lpcm16');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'es-MX';

const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  },
  interimResults: false, // If you want interim results, set this to true
};

// Create a recognize stream
let recognizeStream = client
  .streamingRecognize(request)
  .on('error', console.error)
  .on('data', data =>{
     process.stdout.write(
       data.results[0] && data.results[0].alternatives[0] ?
       `Texto : ${data.results[0].alternatives[0].transcript}\n` :
       `\n\nReached transcription time limit, press Ctrl+C\n`
     )
     recording.stop()
  } 
  );

// Start recording and send the microphone input to the Speech API.
// Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies

let recording = recorder
                      .record({
                        sampleRateHertz: sampleRateHertz,
                        threshold: 0,
                        // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
                        verbose: false,
                        recordProgram: 'sox', // Try also "arecord" or "sox"
                        silence: '10.0',
                      })


  recording.stream()
  .on('error', console.error)
  .pipe(recognizeStream);

console.log('Listening, press Ctrl+C to stop.');