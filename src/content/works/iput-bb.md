---
title: 'WinsoR'
description: '授業内製作 窓の施錠監視システム'
date: '2024-02-01'
image: '/iput-bb.png'
---

<a href="https://github.com/shallow90125/iput-bb" target="_blank">shallow90125/iput-bb</a>

<a href="https://iput-bb.vercel.app" target="_blank">iput-bb.verel.app</a>

### 概要

大学のグループワークで製作したシステムです  
窓や扉の施錠状態を監視するシステムです  
動画を見てもらえるとわかりやすいと思います

### デモ動画

授業の最終発表のときに行ったデモです (音がうまく録れてません)

<iframe width="560" height="315" src="https://www.youtube.com/embed/3IDSiPg5nZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class=" w-full aspect-video h-full"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/yzKJA34_jV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class=" w-full aspect-video h-full"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/beS6TpvEAUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class=" w-full aspect-video h-full"></iframe>

### 機能

- 施錠状態の確認  
  アプリからリアルタイムでドアや窓の施錠状態を確認できる

- プッシュ通知  
  PWA化しているので端末にインストールすることで解錠時にプッシュ通知を受け取れる

- アカウント認証  
  メールアドレスを使用してアカウントを作成でき、自身のデバイスを管理できる

### 仕組み

画面にWebアプリを写していて、ドアの鍵の部分にくっついている灰色のケースの中にマイコン (M5 Stack) が入っている  
ドアの鍵を回すと、鍵側に取り付けた磁石がマイコンに貼り付けた磁気センサに近づく  
マイコンで磁気センサの値がしきい値を上回ると解錠、下回ると施錠されたと判定し、サーバーへ更新内容を送信する  
サーバーはDBを更新する  
アプリはユーザーが登録したマイコンのデータをリッスンしており、変更をリアルタイムで見ることができる

という感じです

### 使用技術

- Next.js  
  APIサーバーとアプリ  
  UIライブラリは shadcn/ui  
  Next Auth と Firebase Authentication で認証

- Firebase  
  Firestore (DB), Authentication (認証), Messaging (プッシュ通知)

- Vercel  
  アプリのホスティング

- M5 Stack  
  磁気センサで開閉状態の検知、APIに送信

### 工夫 苦労

- 開発し直し  
  最初に製作したときは Chakra UI を使用していたのですが、Next.js 触りたての頃に製作したためコードが汚すぎる、Chakra UI のCSR特有のちらつきが嫌いになったなどの理由からほぼ一から実装し直しました

- 環境変数を型安全にした  
  https://github.com/shallow90125/iput-bb/blob/e97d51bb1ade155bf3d14db170a924641f6b8d6f/src/utils/env.ts

- Firestoreのクエリのフィールド名を型安全にしたり、コンバーターを汎用化した  
  https://github.com/shallow90125/iput-bb/blob/e97d51bb1ade155bf3d14db170a924641f6b8d6f/src/utils/firebase/get-collection.ts  
  https://github.com/shallow90125/iput-bb/blob/e97d51bb1ade155bf3d14db170a924641f6b8d6f/src/utils/keys.ts
