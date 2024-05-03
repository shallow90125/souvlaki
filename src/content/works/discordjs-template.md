---
title: 'discord.js template'
description: 'ファイルベースでの Discord Bot 開発用テンプレート'
date: '2024-04-22'
image: '/og.png'
---

<a href="https://github.com/shallow90125/discordjs-template" target="_blank">shallow90125/discordjs-template</a>

### 概要

DiscordのBotをdiscord.jsで開発する際、Next.jsみたいにファイルベースでイベントやコマンドを定義できるといいなと思い、作ったテンプレート  
DiscordのBotをよく作っているので、改良を重ねている

### 工夫

- PrettierではなくBiomeを使って見たが結構良かった  
  prettier-plugin-svelteやprettier-plugin-tailwindcssのようなプラグインを必要としないプロジェクトでは全然あり

- ここを頑張ったけどもっときれいに書けたかもしれない  
  https://github.com/shallow90125/discordjs-template/blob/8eab5a33efd1487b5273e09c9914747225cf95cb/src/utils/discord/command.ts
