import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.news) throw json

    let techNews = `•───── ୨❀୧ ─────•
    ❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active
    ㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: MICKEY 
    ☞ 𝑵𝑬𝑾𝑺: ${json.news}
      •───── ୨❀୧ ─────•
    `

    conn.sendFile(m.chat, json.thumbnail, 'https://telegra.ph/file/d257d118b743b15b83c30.jpg', techNews, m)

    m.react(done)
  } catch (e) {
    m.react(error)
  }
}
handler.help = ['technews']
handler.tags = ['news']
handler.command = ['technews']

export default handler
