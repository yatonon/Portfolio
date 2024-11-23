export const project = {
    id: 2,
    title: "社内コミュニケーションアプリ開発",
    imageUrl: "/src/assets/work2/work2_thumb.png",
    description: "数万人が利用する社内限定のチャットアプリの開発を行いました。本企画はチャレンジ的な要素もあり、導入する機能の提案から携わりました。",
    overview: "数万人が利用する社内限定のチャットアプリの開発を行いました。本企画はチャレンジ的な要素もあり、導入する機能の提案から携わりました。本アプリでは目的として社内のコミュニケーションの活性化、また社内の人材発掘的な要素も含まれており、そこに焦点を当てた機能を複数開発しました。また、Redmine を用いたチケット駆動開発を経験しました。",
    technologies: ["PHP", "HTML", "CSS/SASS", "JavaScript", "Vagrant"],
    sections: [
        {
            title: "既存のメッセージ機能に非同期処理を導入",
            items: [
                "Ajaxによる非同期通信で効率化",
                "サーバーとクライアント間の負荷を削減"
            ]
        },
        {
            title: "既存のメッセージ機能にリアルタイム性を実現",
            items: [
                "Pollingを利用したリアルタイム機能の実装"
            ]
        },
        {
            title: "グループ機能の開発",
            items: [
                "ユーザーがストレスなくコミュニケーションを取れるように設計",
                "非同期処理、リアルタイム性の実現を重点に改善",
                "メッセージ送信の効率化",
                "Ajaxによる非同期通信で効率化",
                "サーバーとクライアント間の負荷を削減",
                "Pollingを利用したリアルタイム機能の実装",
                "グループやメッセージ管理用のスキーマを構築",
                "過去の議論を参照可能"
            ]
        }
    ],
    ingenuity: `開発の提案から携わることができ、プロジェクトの目的に合わせて機能を提案し、実装することができました。
    <br>例として、社内の人材発掘的な要素に焦点を当てたユーザープロフィールを追加しました。
    <img src="/src/assets/work2/work2_image1.png" alt="before" className="float-left h-20 md:h-64  border-2 border-black"/>
    <img src="/src/assets/work2/work2_image2.png" alt="after" className="h-20 md:h-64  border-2 border-black"/>
    <br>また、リアルタイム性の実現に関しては websocket を使う選択肢もありましたが、社内のプロキシサーバーを利用する点と実装期間を考慮し、Polling 選択するなど、技術的な選択肢を検討しました。
    <img src="/src/assets/work2/work2_image3.png" alt="after" className="h-20 md:h-64 object-cover  border-2 border-black"/>
    <br>また、基礎的な内容ではありますが、DBの設計も行い、多対多のリレーションを持つテーブルを設計したり、過去の議論を参照可能にするなど、機能の拡張性を考慮した設計を行いました。
    <img src="/src/assets/work2/work2_image4.png" alt="before" className="float-left h-20 md:h-64  border-2 border-black"/>
    <img src="/src/assets/work2/work2_image5.png" alt="after" className="h-20 md:h-64  border-2 border-black"/>
    <br>グループ機能では、アプリの目的を踏まえて、招待制以外に参加者が希望する参加リクエスト形式の機能を提案し実装しました。
    <img src="/src/assets/work2/work2_image6.png" alt="after" className="h-20 md:h-64 object-cover  border-2 border-black"/>
    `
};

export const projectSummary = {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    imageUrl: project.imageUrl
};
