# Vercelへのデプロイ手順

`vercel` コマンドがインストールされていないため、以下のいずれての方法でデプロイを行ってください。

## 方法1: Vercel Dashboardからのデプロイ (推奨)
GitHubリポジトリを経由する場合の最も標準的な方法です。

1. このプロジェクトフォルダ (`/Users/ryota/Desktop/fukushima`) をGitHubにプッシュしてください。
2. [Vercel Dashboard](https://vercel.com/dashboard) にアクセスします。
3. "Add New..." -> "Project" をクリックします。
4. GitHubリポジトリを選択し、"Import" をクリックします。
5. 設定はそのままで "Deploy" をクリックします。
   - Framework Preset: Other (自動検出されるはずです)
   - Root Directory: `./`

## 方法2: Vercel CLIのインストールと実行
コマンドラインから直接デプロイしたい場合は、以下の手順でツールをインストールします。

1. ターミナルで `npm i -g vercel` を実行してインストールします。
2. インストール完了後、`vercel login` でログインします。
3. プロジェクトフォルダ (`/Users/ryota/Desktop/fukushima`) で `vercel` コマンドを実行します。
4. 画面の指示に従い、プロジェクト名などを設定してデプロイします。

### ドメイン設定について
デプロイ完了後、Vercelのプロジェクト設定画面 (Settings > Domains) で以下のドメインを追加してください。
- `fukushima-dxmeetup.jdxa.org`
(※ JDX側のDNS設定で、CNAMEレコードをVercelに向ける必要があります)
