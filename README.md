# 福島DXミートアップ2026

福島DXミートアップ2026のイベント告知サイトです。

## 概要

2026年2月24日（火）に開催される「福島DXミートアップ2026」の公式ウェブサイトです。地域企業が向かうべき「変革」の第一歩をテーマに、現場の実践知を共有するイベントです。

## 技術スタック

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel (デプロイ先)

## ファイル構成

```
fukushima/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScriptファイル
├── vercel.json         # Vercel設定ファイル
├── requirements_definition.md  # 要件定義書
└── docs/
    └── deployment_guide.md     # デプロイガイド
```

## デプロイ

このプロジェクトはVercelにデプロイされています。

### 初回デプロイ

1. GitHubにリポジトリをプッシュ
2. Vercelにログイン
3. 新しいプロジェクトを作成
4. GitHubリポジトリを選択
5. デプロイ設定を確認（`vercel.json`が自動的に読み込まれます）

### 自動デプロイ

GitHubリポジトリにプッシュすると、自動的にVercelでデプロイが実行されます。

## ローカル開発

1. リポジトリをクローン
2. ローカルサーバーで開く（例：`python -m http.server` または `npx serve`）

## ライセンス

© 2026 福島DXミートアップ2026 All Rights Reserved.
