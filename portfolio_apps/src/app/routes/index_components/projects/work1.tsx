export const project = {
    id: 1,
    title: "建築業界向けプラットフォームアプリ開発",
    imageUrl: "src/assets/work1/work1_thumb.jpg",
    description: "建築業界向けの大規模Webアプリケーションの開発に従事しました。会社としてスピード感のある開発を意識しており、アジャイルでかつチームをまたぐコミュニケーションを取り、様々な課題の解決に取り組みました。",
    overview: "建築業界向けの大規模Webアプリケーションの開発に従事しました。会社としてスピード感のある開発を意識しており、アジャイルでかつチームをまたぐコミュニケーションを取り、様々な課題の解決に取り組みました。",
    technologies: ["Ruby", "HTML", "CSS/SASS", "JavaScript", "Ruby on Rails", "Slim", "Sentry", "CircleCI", "RuboCop"],
    sections: [
        {
            title: "フロントエンド開発",
            items: [
                "LP関連作業",
                "ランディングページ（LP）のリニューアル・フォーム実装",
                "レスポンシブデザイン対応",
                "ヘッダー、フッター、パーシャル分割",
                "FLOCSSに基づくCSSリファクタリング",
                "フォームバリデーション追加",
                "UI・UX改善（エラーメッセージ表示、文言修正、コンポーネント配置）",
                "CSS/JS作業",
                "CSS・SASSファイルの修正・最適化",
                "アニメーションやスタイル調整",
                "JavaScriptによるイベント処理や動作確認",
                "非同期通信バグの修正",
                "SEO対応",
                "metaタグ、canonical設定、パンくずリスト修正",
                "不要なタグ・コードの削除"
            ]
        },
        {
            title: "バックエンド開発",
            items: [
                "ルーティング・コントローラーの修正",
                "redirect処理の追加",
                "非同期通信のリファクタリング",
                "パラメータ操作・非同期通信削除",
                "バリデーションロジック調整",
                "API修正",
                "不要なリクエストの削除やバグ解消",
                "Sentryによるエラーハンドリング追加",
                "バッチ処理",
                "バッチエラー対応",
                "一時コメントアウトや原因追求"
            ]
        },
        {
            title: "テストとデバッグ",
            items: [
                "エラー修正",
                "入力フォーカス問題の解消",
                "既存機能におけるバグ修正（例: SMS送信エラー）",
                "例外処理の改善やテスト追加",
                "リグレッションテスト",
                "ABテスト用の機能実装と検証",
                "テストコード追加や修正"
            ]
        },
        {
            title: "DevOpsおよびCI/CD",
            items: [
                "CircleCI設定",
                "定時ジョブのスケジュール変更",
                "依存関係管理",
                "gemの追加・更新（Sentry, RuboCop）",
                "不要なファイルやメソッドの削除",
                "コードスタイル統一",
                "Slim-LintやRubocopによるコードチェック導入・修正",
                "HTML/CSS/JSのリファクタリング"
            ]
        },
        {
            title: "その他",
            items: [
                "マーケティング・キャンペーン対応",
                "QUOカードキャンペーン関連の修正",
                "Google OptimizeやGAタグの設置・削除",
                "ドキュメントとコメント管理",
                "コメント追加や整理",
                "コードの可読性向上作業"
            ]
        }
    ],
    ingenuity: `本プロジェクトでは、チームでのシステム開発における重要な点を学び、そして実践することができました。
    <br>git を用いた issue や アサイン機能を用いて自分の役割を明確化することや、コーディングにおいては Rubocop や slim による可読性の高いコードを作成すること、CIを用いてテスト駆動を活かした保守性の高いコードを作成することを心がけました。
    <br>業務の立ち位置上、マーケティングの部署と関わりが深く、GA や Google Optimize を用いて SEO や集客を意識したフロント開発を行いました。
    <br>Ruby on Rails では、DRY原則をもとに、partial を使うなどコードの共通化やリファクタリングを行い、保守性の高いコードを心がけました。`
};

export const projectSummary = {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    imageUrl: project.imageUrl
};
