export const project = {
    id: 4,
    title: "医療診療ECサービス開発",
    imageUrl: "src/assets/work4/work4_thumb.jpg",
    description: "4名の小規模なグループではありますがCTOとして、医療診療ECサービスの開発を行いました。患者は本アプリを通じて会員登録からweb受診予約、薬の購入から決済まですべて完結することができます。",
    overview: "病院と提携しCTOとして医療診療ECサービスを開発しました。要件定義から、基本設計、詳細設計、そしてテスト、本番環境の構築等すべてを担当し、またデザイン周りを特にコードのレビューを行いプロジェクトを完遂させました。",
    technologies: ["Ruby", "JavaScript", "ECS", "EKS", "RDS", "Kubernetes", "Route53", "CloudRun"],
    sections: [
        {
            title: "フロントエンド開発",
            items: [
                "UI設計と開発。顧客の視点で直感的に情報を取得できるレイアウトを意識",
                "レスポンシブ対応、その他UI改善",
                "カレンダー予約機能をフロントエンド側で実装し、インタラクティブなUIを提供",
                "問診票等、入力エクスペリエンスの向上",
                "ActionCableを活用したリアルタイムメッセージ機能をフロントエンド側に実装",
                "未読・既読の状態をリアルタイムで反映する仕組みを構築",
                "メッセージ入力エリアのデザインを改善し、操作性を向上",
                "ユーザーの詳細情報管理画面を開発し、住所や連絡先の編集機能を追加",
                "LPデザインを完成させ、サービスの特徴を強調するための視覚的な要素を強化",
                "ビデオチャット画面のデザインを整え、カメラのオン/オフや音声ミュート機能をフロントエンドに実装",
                "通話中の操作性を向上させるため、リアルタイムでのビジュアルフィードバックを追加",
                "ビデオ通話の接続エラー時の適切なエラーメッセージ表示を実現",
                "プライバシーポリシーや利用規約ページの作成",
                "デザインの一貫性を持たせ、法的文書も見やすいレイアウトに調整"
            ]
        },
        {
            title: "バックエンド開発",
            items: [
                "カレンダー予約機能のバックエンドAPIを設計し、予約データの保存や確認ロジックを構築",
                "TurboLinkを無効化し、予約ページでのスムーズな画面遷移を実現",
                "Stripe APIを用いて支払い機能を構築。トークン処理とデータの非公開化を徹底",
                "PayJPの導入により、クレジットカード情報の安全な登録と管理を実現",
                "決済処理成功/失敗時のレスポンスに応じたバックエンドロジックを実装",
                "ActionCableを利用したメッセージングシステムのサーバー側ロジックを実装",
                "既読/未読のデータをリアルタイムで更新するためのWebSocket通信を実現",
                "APIキー管理やトークン発行ロジックを構築し、ビデオ通話のセッション管理を実現",
                "接続セッション中のユーザーIDのバリデーションを実施",
                "問診票や予約情報を格納するデータベースを設計",
                "データの一貫性を保つため、トランザクションを適用",
                "管理者権限やユーザータイプごとのアクセス制限をバックエンドロジックで実現",
                "未認証ユーザーへの機能アクセスをブロックする仕組みを構築"
            ]
        },
        {
            title: "インフラ構築",
            items: [
                "Docker コンテナを活用し、アプリケーションをマイクロサービス化",
                "ECS タスクの自動スケーリングを設定し、高負荷時のパフォーマンスを確保",
                "Kubernetes を使用して複数の Pod を運用し、負荷分散を実現",
                "EKS によるクラスタ管理で安定稼働を達成し、リソース配分を効率化",
                "RDS を利用して MySQL データベースを運用し、自動バックアップを設定",
                "アクセス頻度の高いクエリにインデックスを付与し、クエリ処理速度を向上",
                "Route53 を使用して購入した独自ドメインを管理。HTTPS化のための証明書を取得",
                "DNS 設定を最適化し、複数エンドポイントへのリクエストルーティングを実現",
                "CloudRun を一部サービスに導入し、オンデマンドでのサーバーリソースの効率的な利用を実現"
            ]
        },
        {
            title: "その他",
            items: [
                "GitHub を活用したチーム開発フローを構築し、Pull Request ベースでのコードレビューを実施",
                "minimagic エラーの緊急対応を行い、依存関係を適切に解決",
                "deploy.sh スクリプトを作成し、デプロイプロセスを自動化",
                "デプロイ後の本番環境でエラーを早期発見・修正する仕組みを導入"
            ]
        }

    ],
    ingenuity: `本プロジェクトではスピードをとにかく意識した開発が求められました。そのため、gemライブラリが充実しており開発スピードが早い Ruby on Rails を採用しました。
    <br>また、本番環境も当初は GCP の Cloud Run でスピーディーに構築しましたが、後に AWS の ECS に移行し最終的には EKS に移行しました。このように、開発スピードと安定稼働の両立を意識しました。
    <br>その他実装が大変でしたが、ActionCable を用いたリアルタイムメッセージング機能や、ビデオ通話機能の実装においても、ユーザーが直感的に操作できるような UI/UX を意識しました。
    <br>結果、アプリ単体で受診予約を行い、医師とのアプリ内ビデオ通話による web 診療、そして診療結果に基づく薬の処方から、その決済までをすべて行うことが可能な高機能なサービスを開発しリリースをすることができました。
    `
};

export const projectSummary = {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    imageUrl: project.imageUrl
};
