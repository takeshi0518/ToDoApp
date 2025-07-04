# アプリの概要

このアプリは MERN スタック(MongoDB, Express, React, Node.js)を使用構築したシンプルな ToDo 管理アプリです。
タスクの追加・編集・削除・完了マークなど、基本的なタスク管理機能を備えています。

## 仕様技術

- フロントエンド:React(vite)
- バックエンド:Node.js + Express
- データベース:MongoDB Atlas
- デプロイ:Render
- その他:axios, dotenv, mongoose, express-validator など

## 主な機能

- タスクの新規追加
- タスクの一覧表示
- タスクの編集・削除
- タスク完了・未完了切り替え
- バリデーション(空欄禁止、文字制限)

## ワイヤーフレーム

![ToDoAppのワイヤーフレーム](./client/public/docs/Wireframe.png)

## デザインカンプ

![ToDoAppのデザイン](./client/public/docs/ToDoApp-design.png)

## API 仕様

## ローカル環境でのセットアップ手順

### 1. リポジトリをクローン

git clone https://github.com/your-username/mern-todo-app.git

### 2. サーバーサイドの準備

$cd server $npm install
`.env` に以下を追加: MONGO_URI=your_mongo_connection_string
PORT=8080

### 3. クライアントサイドの準備

$cd client $npm install $npm run dev

## Git 運用メモ

### ブランチ命名

- `chore/` コードなどの整理
- `feat/` 新機能追加
- `fix/` バグの修正
- `docs/` ドキュメント関連の修正
- `refactor` リファクタリング
- `style` フォーマット・スペース・インデントの調整

### コミットメッセージ規則

- `feat: ユーザー登録機能を追加`
- `fix: ログイン処理でクラッシュするバグを修正`
- `docs: READMEにAPI仕様を追記`
