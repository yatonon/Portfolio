import { ProfileTable } from './profiletable';

interface ProfileData {
  startDay: string;
  endDay: string;
  value1: string;
  value2: string;
}

interface ProfileProps {
  profileData: ProfileData[];
}

export const Profile = ({ profileData }: ProfileProps) => {
  const tableHeader: string[] = ['開始日', '終了日', '職歴・学歴'];

  return (
    <div className="flex flex-col md:flex-row p-4 md:m-8 w-full">
    <div className="flex-1 flex">
      <div className="">
        <div className="w-fit mx-auto">
          <img 
            src={`${import.meta.env.BASE_URL}src/assets/index/profile.png`}
            alt="profile" 
            className="rounded-2xl w-72 h-72 md:w-96 md:h-96 object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 p-4">
          はじめまして yato です。<br/>
          現在某大手IT企業にて、社内SE兼フロントエンドエンジニアとして大規模の人事・給与サービスの開発を行っております。<br/>
          社内で労務管理、社会保険の知識が活かせることを踏まえ、エンジニアでありながら、社会保険労務士試験を目指し2024年に合格しました。<br/>
          持ち前の好奇心とストイックさを活かし日々新しいことに挑戦していきます。
        </p>
      </div>
    </div>
    <div className="flex-1 ml-4 flex flex-col md:p-4">
      <ProfileTable headers={tableHeader} data={profileData} columnWidths={[1, 1, 3]} />
    </div>
  </div>
  );
};