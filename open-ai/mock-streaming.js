const { Readable } = require("stream");

function randomize(min = 1, max = 10) {
  return Math.floor(Math.random() * max) + min;
}

function jitter(minDelay, maxDelay) {
  const delay = randomize(minDelay, maxDelay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve();
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

function splitString(str) {
  const result = [];
  let index = 0;
  while (index < str.length) {
    const tokenLength = randomize();
    const token = str.substr(index, tokenLength);
    result.push(token);
    index += tokenLength;
  }

  return result;
}

function generateStreamChunks(str) {
  const tokens = splitString(str);
  const data = tokens.map((item, index) => ({
    id: index.toString(),
    system_fingerprint: `${Date.now().toString()}-${index.toString()}`,
    content: item,
  }));

  return data.map((item) => `${JSON.stringify(item)}\n`);
}

/**
 * Generates a mock streaming answer by splitting a string into chunks and yielding them asynchronously.
 * @param {string} str - The input string to be split into chunks.
 * @param {number} [minDelay=0] - The minimum delay (in milliseconds) between each chunk.
 * @param {number} [maxDelay=300] - The maximum delay (in milliseconds) between each chunk.
 * @yields {Object} - The parsed JSON object representing a chunk of the input string.
 */
async function* mockSteamAnswer(str, minDelay = 0, maxDelay = 300) {
  const chunks = generateStreamChunks(str);
  const readable = Readable.from(chunks);

  for await (const chunk of readable) {
    await jitter(minDelay, maxDelay)
    yield JSON.parse(chunk);
  }
}

async function main() {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.";

  function generateLoremIpsum(length) {
    let result = "";
    while (result.length < length) {
      result += loremIpsum;
    }
    return result.substring(0, length);
  }

  const str = generateLoremIpsum(300);
  const chunks = mockSteamAnswer(str);

  for await (const chunk of chunks) {
    console.log(chunk);
  }
}

// TODO: uncomment to test
main();
