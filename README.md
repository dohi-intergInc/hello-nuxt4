# hello-nuxt4

Nuxt 4 の研修用サンプルプロジェクトです。

## セットアップ

### DevContainer（推奨）

1. VS Code で「Dev Containers」拡張機能をインストール
2. このプロジェクトを VS Code で開く
3. コマンドパレットから **Dev Containers: Reopen in Container** を実行
4. 自動で `npm install` が実行されます

### ローカル

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でアプリにアクセスできます。

## プロジェクト構成

```
hello-nuxt4/
├── .devcontainer/        # DevContainer 設定
│   └── devcontainer.json
├── app/                  # Nuxt 4 アプリケーションディレクトリ
│   ├── app.vue           # ルートコンポーネント
│   ├── components/       # コンポーネント（自動インポート）
│   │   └── Counter.vue
│   └── pages/            # ページ（ファイルベースルーティング）
│       ├── index.vue
│       └── about.vue
├── server/               # サーバーサイド（API等）
│   └── api/
│       └── hello.ts
├── nuxt.config.ts        # Nuxt 設定
├── package.json
└── tsconfig.json
```

## Nuxt 4 の主な特徴

- **`app/` ディレクトリ**: アプリコードが `app/` 配下に統一
- **自動インポート**: `ref`, `computed` 等の Vue API や `components/` 配下のコンポーネントが自動インポート
- **ファイルベースルーティング**: `pages/` 配下のファイルが自動的にルートになる
- **サーバーエンジン (Nitro)**: `server/` ディレクトリで API ルートを定義可能
