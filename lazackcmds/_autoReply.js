export async function all(m) {
  // when someone sends a group link to the bot's dm
  if (
    (m.mtype === 'groupInviteMessage' ||
      m.text.startsWith('https://chat') ||
      m.text.startsWith('open this link')) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    // Removed the button sending code
    this.sendMessage(
      m.chat,
      {
        text: `Hello @${m.sender.split('@')[0]}\nyou can rent the bot to join a group\n\n_For more info you can DM the owner_\n*Type* \`\`\`.owner\`\`\` *to contact the owner*`.trim(),
      },
      { quoted: m }
    );

    m.react('😜');
  }

  return !0;
}
