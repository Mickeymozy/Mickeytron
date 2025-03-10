let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(
    m.chat,
    global.API('https://some-random-api.com', '/canvas/misc/youtube-comment', {
      avatar: await conn
        .profilePictureUrl(m.sender, 'image')
        .catch(_ => 'https://telegra.ph/file/d257d118b743b15b83c30.jpg'),
      comment: text,
      username: conn.getName(m.sender),
    }),
    'error.png',
    '*THANKS FOR COMMENT*',
    m
  )
}
handler.help = ['ytcomment <comment>']
handler.tags = ['maker']
handler.command = /^(ytcomment)$/i
export default handler
