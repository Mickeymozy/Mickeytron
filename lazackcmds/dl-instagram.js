let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw 'You need to give the URL of Any Instagram video, post, reel, image';
  const wait = 'Please wait while we process your request...';
  m.reply(wait);

  let res;
  try {
    res = await fetch(`https://api.guruapi.tech/insta/v1/igdl?url=${text}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  } catch (error) {
    throw `An error occurred: ${error.message}`;
  }

  let api_response;
  try {
    api_response = await res.json();
  } catch (error) {
    throw 'Failed to parse API response';
  }

  if (!api_response || !api_response.media) {
    throw 'No video or image found or Invalid response from API.';
  }

  const mediaArray = api_response.media;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url;

    let cap = `HERE IS THE ${mediaType.toUpperCase()} >,<`;

    if (mediaType === 'video') {
      conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
    } else if (mediaType === 'photo') {
      conn.sendFile(m.chat, mediaURL, 'instagram.jpg', cap, m);
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|igdl|ig|insta)$/i;

export default handler;
