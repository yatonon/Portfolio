export const project = {
    id: 1,
    title: "yato Lab ポートフォリオ作成",
    imageUrl: "src/assets/selfwork1/selfwork1_thumb.png",
    description: "本ポートフォリオです。React と TypeScript を使用して作成しました。",
    overview: "ポートフォリオの目的は、React のリハビリ、TypeScript の学習です。社会保険労務士の資格を取得するために２年ほど本業以外の学習が滞っていたため、振り返りと学習のいい機会になりました。様々な工夫をしたのでぜひ工夫点をご確認ください。デザインは、シンプルで見やすいものを意識しました。また、レスポンシブデザインにも対応しています。",
    technologies: ["React", "TypeScript", "Containerd", "AWSLamda", "DynamoDB"],
    sections: [
        {
            title: "フロントエンド開発",
            items: [
                "要件定義",
                "詳細設計",
                "Bulletproof React のディレクトリ構成導入",
                "Creat React App ではなく、Vite を用いたSPA開発",
                "TypeScript の導入",
            ]
        },
        {
            title: "サーバーレス開発",
            items: [
                "AWS Lambdaを用いたサーバーレス開発",
            ]
        },
        {
            title: "開発環境構築",
            items: [
                "Dokcer を避けた Containerd を用いた環境構築",
                "DevContainer を用いたコンテナ上での開発",
                "NardCtl Compose を用いた開発環境の構築",
            ]
        },
    ],
    ingenuity: `工夫点として、あまり開発に集中できなかった期間のリハビリを兼ねていたため、極力トレンドに従った構成でSPA開発を行いました。
    <br>SPA開発だとCRA よりも最近は Vite の方がビルドがはやくまたコンテナ開発がしやすいと考え Vite に挑戦しました。また、TypeScript の導入も行いました。
    <br>また、拡張性と保守性を考慮し、Bulletproof React のディレクトリ構成を参考にし設計を行い、構築しました。拡張予定のある組織開発、個人開発の項目は、1ページのみ簡単に追加するだけで修正できるような構成にしました。その他、メンテナンスを意識した設計を心がけました。
    <img src="src/assets/selfwork1/selfwork1_image1.png" alt="code" className="h-80 object-cover border-2 border-black"/>
    <br>開発環境は Docker を避け、Containerd を用いた環境構築を行いました。いくつか相違点もありましたが基本的な使い方は Docker での開発方法と近いと感じました
    <br>ポートフォリオの目的を考え、長期的に公開することや必要な機能、通信回数等を考慮し完全無料で公開したいと考え、Github Pages の利用を考えました。しかし、API 通信が必要なため、AWS Lambda と DynamoDB を用いたサーバーレス開発を行いました。(こちらも無期限無料枠を使用)`,
};

export const projectSummary = {
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    imageUrl: project.imageUrl
};
