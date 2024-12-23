export const project = {
    id: 3,
    title: "ゲーム向けプラットフォームアプリ開発",
    imageUrl: "src/assets/work3/work3_thumb.jpg",
    description: "本開発は、ゲームプレイヤー向けの webアプリケーション、IOS,android 向けの naitive アプリ、そして LINE と Discord 向けの bot を作成しました。",
    overview: "本開発は、ゲームプレイヤー向けの webアプリケーション、IOS, android 向けの naitive アプリ、そして LINE と Discord 向けの bot を作成しました。ユーザーは, web, スマホアプリ, bot 等さまざまな方法を通じて本サービスに参加します。",
    technologies: ["React", "Python", "Django", "JavaScript", "GCP","Firebase"],
    sections: [
        {
            title: "フロントエンド開発",
            items: [
                "プロパティやパラメータのエラー修正",
                "正規表現や一部処理の動作不具合を修正",
                "特定条件下での正常な動作を保証する修正",
                "パフォーマンス向上のためのコード修正",
                "新しいトーナメント機能の追加および編集対応",
                "条件に応じた削除機能や操作制御の実装",
                "UI 要素（例: ボタンやチェックボックス）の操作性改善",
                "検索や表示に関する新規機能の実装",
                "冗長な状態管理を改善",
                "複雑なロジックを役割ごとに分割し、メソッドを整理",
                "スマートフォン向けのレスポンシブデザイン対応",
                "不要な UI 要素の削除と改善",
                "英語、韓国語、日本語に対応したローカライズの実装 i18n（多言語対応）",
                "日付や時間の表示ロジックの調整"
            ]
        },
        {
            title: "バックエンド開発",
            items: [
                "不具合に関連するカラム名やキー名の修正",
                "不要なコードやデバッグ用の出力の削除",
                "タイムゾーン関連処理の修正",
                "データ取得方法を改善",
                "新規 API の作成",
                "検索機能やソート機能の改善",
                "日付や通知に関連する機能の調整",
                "冗長な処理をメソッド化",
                "RESTful な設計に基づいて API を改善",
                "データ保存方法やシリアライザーの修正",
                "新規カラムやテーブルの追加",
                "マイグレーションファイルの作成"
            ]
        },
        {
            title: "bot開発(LINE, Discord)",
            items: [
                "不要なパラメータや変数の削除",
                "特定のバグを解消（例: 変数宣言の文字列増加問題）",
                "ヘルプ機能や応答機能の実装",
                "特定の操作に関連する機能の追加（例: 退会後のフラグ設定）",
                "設定ファイルの更新や調整（例: 認証情報の管理）",
                "UI 要素のスタイル調整（例: テキストエリアやカスタム機能のスタイル調整）",
                "コメントや不要なコードの追加・調整",
                "キャッシュクリアや Git 設定の更新"
            ]
        },
    ],
    ingenuity: `RESTful な設計に基づいて API を改善し、データ保存方法や Django にてシリアライザーの修正を行いました。
    <br>また、 bot の作成ではクロスプラットフォームに対応すべくLINEとDiscordのbotを開発しました。
    <br>チーム内で時間差での作業も多発したため、コードの整理やコメントの追加、git ではコミットログにも注意しコンフリクト解消等、他のメンバーが追いやすい状態を保ちました。
    <br>また、トーナメントを行う機能を firebase を活用して実現しました。
    `
};

export const projectSummary = {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    imageUrl: project.imageUrl
};
