# next-styled-component

## フォルダー構成

- components: コンポーネント
  - ページ毎のフォルダー
    - Index.tsx: ページアクセス時に発火する必要があるAPIなどはここに処理を書く
    - Presenter.tsx: マークアップ
    - hooks: ページ専用のカスタムフックフォルダー
- context: コンテキスト
- hooks: 共通のカスタムフック
- interfaces: 型定義
  - enums: <const>を使用し値を他の場所で扱うもの
  - models: 普通の型定義
- layouts: 各ページの基本レイアウトファイルが入ってる
- pages: ページ
- public: 画像などを入れる
- services: 共通の変数を入れる
- styles: css関連
  - ts: TypeScriptファイル
    - color.ts: CSSの色の定義はこちらに
  - globals.css: グローバルCSSファイル
- utils: 共通の関数を入れる
