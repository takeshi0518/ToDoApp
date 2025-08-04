# アプリの概要

このアプリは MERN スタック(MongoDB, Express, React, Node.js)を使用構築したシンプルな ToDo 管理アプリです。
タスクの追加・編集・削除・完了マークなど、基本的なタスク管理機能を備えています。

## 仕様技術

- フロントエンド:React(vite)
- バックエンド:Node.js + Express
- データベース:MongoDB Atlas
- デプロイ:Render

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

### GET `/api/todos`

- 目的: 登録されている ToDo リストを取得する
- 使い方: ブラウザやクライアントからアクセスする

### POST `/api/todos`

- 目的: 新しい ToDo を追加する
- 使い方: title をリクエストボディに入れて送信する

### PATCH `/api/todos/:id`

- 目的: 指定した ID の ToDo を更新する
- 使い方: title を変更して送信

### DELETE `/api/todos:id`

- 目的: 指定した ID の ToDo を削除する
- 使い方: その ID に対してリクエストを送信

## CI/CD

このアプリは以下のタスクを GitHub Actions によって自動化しています。

- ESLint による静的コード解析 `npm run lint`
- テストの自動実行 `npm test`
- main ブランチにマージされた際に Render に自動デプロイ

詳細な設定は`.github/workflows/main.yml`に記述しています。

## ローカル環境でのセットアップ手順

### 1. リポジトリをクローン

git clone https://github.com/takeshi0518/ToDoApp.git

### 2. クライアントフォルダに移動してビルド

$cd client

.env ファイルを作成し、以下を追加してください
VITE_API_URL=http://localhost:8080/api/todos

$npm install  
$npm run build

### 3. サーバーフォルダに移動して localhost:8080 にアクセス

$cd ../server

.env ファイルを作成し、以下を追加してください
MONGO_URI=your_mongo_connection_string
PORT=8080

$npm install  
$npm run start

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
