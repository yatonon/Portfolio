import { useNavigate } from 'react-router-dom';
import { paths } from '@/config/paths';

import { Title } from '@/components/title';
import { Header } from '@/components/header';
import { ContactForm } from '@/components/contact_form';

import { Profile } from './index_components/Profile';
import { WorkSection } from './index_components/Worksection';

import { projectSummary as work1 } from './index_components/projects/work1';
import { projectSummary as work2 } from './index_components/projects/work2';
import { projectSummary as work3 } from './index_components/projects/work3';
import { projectSummary as work4 } from './index_components/projects/work4';
import { projectSummary as selfwork1 } from './index_components/projects/selfwork1';

interface ProfileData {
  startDay: string;
  endDay: string;
  value1: string;
  value2: string;
}

const headerContentsData = [
  '自己紹介',
  '組織開発',
  '個人開発',
  // '記事',
  'お問い合わせ'
];

const profileData: ProfileData[] = [
  { startDay: '2021/01', endDay: '現在', value1: '某大手IT企業', value2: 'SE、フロントエンジ二ア' },
  { startDay: '2020/12', endDay: '2022/12', value1: '新規会社 CTO', value2: '医療診療ECサービス開発' },
  { startDay: '2020/09', endDay: '2021/09', value1: '某大手IT企業別会社プロジェクト', value2: 'ゲーム向けプラットフォームアプリ開発' },
  { startDay: '2020/07', endDay: '2021/09', value1: '某大手IT企業新規別会社', value2: '社内コミュニケーションアプリ開発' },
  { startDay: '2018', endDay: '2019', value1: '建築系IT会社', value2: '建築業界向けプラットフォームアプリ開発' }
];

const works = [
  work4,
  work3,
  work2,
  work1
];
const selfworks = [
  selfwork1
];

export const HomeRoute = () => {
  // routeing 処理
  const navigate = useNavigate();
  // 組織開発 routing
  const handleNavigation = (id: number) => {
    navigate(paths.work.getHref(id));
  };
  // 個人開発 routing
  const handleSelfworkNavigation = (id: number) => {
    navigate(paths.selfwork.getHref(id));
  };
  // ヘッダークリック時の処理
  const handleItemClick = (index: number) => {
    const targetText = headerContentsData[index];
    const targetElement = Array.from(document.querySelectorAll('h2')).find(
      (element) => element.textContent === targetText
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Title />
      <Header contents={headerContentsData} onItemClick={handleItemClick} />
      {/* 自己紹介 */}
      <div className="bg-black w-full p-6 pt-20 md:pb-20">
        <div className="md:p-4 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {headerContentsData[0]}
          </h2>
          <Profile profileData={profileData} />
        </div>
      </div>
      {/* 組織開発 */}
      <div className="w-full p-6 pt-20 lg:px-40">
        <div className="md:p-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:pb-20">
            {headerContentsData[1]}
          </h2>
          <WorkSection handleNavigation={handleNavigation} projects={works} />
        </div>
      </div>
      {/* 個人開発 */}
      <div className="w-full p-6 pt-20 lg:px-40">
        <div className="md:p-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:pb-20">
            {headerContentsData[2]}
          </h2>
          <WorkSection handleNavigation={handleSelfworkNavigation} projects={selfworks} />
        </div>
      </div>
      {/* 問い合わせ */}
      <div className="bg-black w-full p-6 pt-20 lg:px-40">
        <div className="md:p-4 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {headerContentsData[3]}
          </h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
};
