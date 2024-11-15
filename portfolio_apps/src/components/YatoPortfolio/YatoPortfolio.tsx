import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { unnamed2 } from './unnamed2/unnamed2.js';
import { unnamed } from './unnamed/unnamed.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';
import classes from './YatoPortfolio.module.css';

interface Props {
  className?: string;
}
/* @figmaId 203:55 */
export const YatoPortfolio: FC<Props> = memo(function YatoPortfolio(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.contactme}>
        <div className={classes.title}>
          <div className={classes.unnamed37}>お問い合わせ</div>
        </div>
      </div>
      <div className={classes.articles}>
        <div className={classes.title2}>
          <div className={classes.unnamed38}>記事</div>
        </div>
      </div>
      <div className={classes.selfWorks}>
        <div className={classes.work1}>
          <button className={classes.buttonlink}>
            <div className={classes.unnamed39}>開発の詳細はこちら</div>
            <div className={classes.vector}>
              <VectorIcon className={classes.icon} />
            </div>
          </button>
          <div className={classes.pLtag}>
            <div className={classes.ruby}>Ruby</div>
          </div>
          <div className={classes.langagetitle}>
            <div className={classes.unnamed40}>主な使用言語等</div>
          </div>
          <div className={classes.introtext}>
            <div className={classes.introtext2}>introtext2</div>
          </div>
          <div className={classes.workname}>
            <div className={classes._2}>個人開発アプリ2</div>
          </div>
          <div className={classes.image2}></div>
        </div>
        <div className={classes.work2}>
          <button className={classes.buttonlink2}>
            <div className={classes.unnamed41}>開発の詳細はこちら</div>
            <div className={classes.vector2}>
              <VectorIcon2 className={classes.icon2} />
            </div>
          </button>
          <div className={classes.pLtag2}>
            <div className={classes.ruby2}>Ruby</div>
          </div>
          <div className={classes.langagetitle2}>
            <div className={classes.unnamed42}>主な使用言語等</div>
          </div>
          <div className={classes.introtext3}>
            <div className={classes.introtext1}>introtext1</div>
          </div>
          <div className={classes.workname2}>
            <div className={classes._1}>個人開発アプリ1</div>
          </div>
          <div className={classes.image22}></div>
        </div>
        <div className={classes.title3}>
          <div className={classes.unnamed43}>個人開発</div>
        </div>
      </div>
      <div className={classes.works}>
        <div className={classes.work3}>
          <button className={classes.buttonlink3}>
            <div className={classes.unnamed44}>開発の詳細はこちら</div>
            <div className={classes.vector3}>
              <VectorIcon3 className={classes.icon3} />
            </div>
          </button>
          <div className={classes.pLtag3}>
            <div className={classes.ruby3}>Ruby</div>
          </div>
          <div className={classes.pLtag4}>
            <div className={classes.rails}>Rails</div>
          </div>
          <div className={classes.langagetitle3}>
            <div className={classes.unnamed45}>主な使用言語等</div>
          </div>
          <div className={classes.introtext4}>
            <div className={classes.web}>
              web
              で医療機関登録、受診予約、ビデオ診療、カルテの作成、薬の購入から決済、発送まですべてを行えるアプリです。
            </div>
          </div>
          <div className={classes.workname3}>
            <div className={classes.EC}>医療診療ECサービス開発</div>
          </div>
          <div className={classes.image1}></div>
        </div>
        <div className={classes.work4}>
          <button className={classes.buttonlink4}>
            <div className={classes.unnamed46}>開発の詳細はこちら</div>
            <div className={classes.vector4}>
              <VectorIcon4 className={classes.icon4} />
            </div>
          </button>
          <div className={classes.pLtag5}>
            <div className={classes.ruby4}>Ruby</div>
          </div>
          <div className={classes.pLtag6}>
            <div className={classes.rails2}>Rails</div>
          </div>
          <div className={classes.langagetitle4}>
            <div className={classes.unnamed47}>主な使用言語等</div>
          </div>
          <div className={classes.introtext5}>
            <div className={classes.web2}>
              web
              で医療機関登録、受診予約、ビデオ診療、カルテの作成、薬の購入から決済、発送まですべてを行えるアプリです。
            </div>
          </div>
          <div className={classes.workname4}>
            <div className={classes.EC2}>医療診療ECサービス開発</div>
          </div>
          <div className={classes.image12}></div>
        </div>
        <div className={classes.title4}>
          <div className={classes.unnamed48}>組織開発</div>
        </div>
      </div>
      <div className={classes.profile}>
        <div className={classes.profile01}></div>
        <div className={classes.YatoSE2024}>
          <div className={classes.textBlock11}>はじめまして。yato です。</div>
          <div className={classes.textBlock12}>
            現在ソフトバンク株式会社にて、社内SE兼フロントエンドエンジニアとして大規模の人事・給与サービスの開発を行っております。
          </div>
          <div className={classes.textBlock13}>
            社内で労務管理、社会保険の知識が活かせることを踏まえ、エンジニアでありながら、社会保険労務士試験を目指し2024年に合格しました。
          </div>
          <div className={classes.textBlock14}>
            持ち前の好奇心とストイックさを活かし日々新しいことに挑戦していきます。
          </div>
        </div>
        <div className={classes.unnamed49}>
          <div className={classes.unnamed50}>
            <unnamed
              className={classes.unnamed2}
              text={{
                unnamed: <div className={classes.unnamed}>開始日</div>,
              }}
            />
            <unnamed
              className={classes.unnamed4}
              text={{
                unnamed: <div className={classes.unnamed3}>終了日</div>,
              }}
            />
            <unnamed
              className={classes.unnamed6}
              text={{
                unnamed: <div className={classes.unnamed5}>職歴・学歴</div>,
              }}
            />
          </div>
          <div className={classes.unnamed51}>
            <unnamed2
              className={classes.unnamed8}
              text={{
                unnamed: <div className={classes.unnamed7}>2021/04</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed10}
              text={{
                unnamed: <div className={classes.unnamed9}>現在</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed12}
              text={{
                unnamed: (
                  <div className={classes.unnamed11}>
                    <div className={classes.textBlock}>ソフトバンク株式会社</div>
                    <div className={classes.textBlock2}>SE、フロントエンジニア</div>
                  </div>
                ),
              }}
            />
          </div>
          <div className={classes.unnamed52}>
            <unnamed2
              className={classes.unnamed14}
              text={{
                unnamed: <div className={classes.unnamed13}>2020/12</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed16}
              text={{
                unnamed: <div className={classes.unnamed15}>2022/12</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed18}
              text={{
                unnamed: (
                  <div className={classes.unnamed17}>
                    <div className={classes.textBlock3}>新規会社　CTO</div>
                    <div className={classes.textBlock4}>医療診療ECサービス開発</div>
                  </div>
                ),
              }}
            />
          </div>
          <div className={classes.unnamed53}>
            <unnamed2
              className={classes.unnamed20}
              text={{
                unnamed: <div className={classes.unnamed19}>2020/09</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed22}
              text={{
                unnamed: <div className={classes.unnamed21}>2021/09</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed24}
              text={{
                unnamed: (
                  <div className={classes.unnamed23}>
                    <div className={classes.textBlock5}>SBイノベンチャー内プロダクト</div>
                    <div className={classes.textBlock6}>ゲーム向けプラットフォームアプリ開発</div>
                  </div>
                ),
              }}
            />
          </div>
          <div className={classes.unnamed54}>
            <unnamed2
              className={classes.unnamed26}
              text={{
                unnamed: <div className={classes.unnamed25}>2020/07</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed28}
              text={{
                unnamed: <div className={classes.unnamed27}>2021/09</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed30}
              text={{
                unnamed: (
                  <div className={classes.unnamed29}>
                    <div className={classes.textBlock7}>SBイノベンチャー株式会社</div>
                    <div className={classes.textBlock8}>社内コミュニケーションアプリ開発</div>
                  </div>
                ),
              }}
            />
          </div>
          <div className={classes.unnamed55}>
            <unnamed2
              className={classes.unnamed32}
              text={{
                unnamed: <div className={classes.unnamed31}>2018</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed34}
              text={{
                unnamed: <div className={classes.unnamed33}>2019</div>,
              }}
            />
            <unnamed2
              className={classes.unnamed36}
              text={{
                unnamed: (
                  <div className={classes.unnamed35}>
                    <div className={classes.textBlock9}>株式会社LocalWorks</div>
                    <div className={classes.textBlock10}>建築業界向けプラットフォームアプリ開発</div>
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className={classes.profile_title}>
          <div className={classes.unnamed56}>自己紹介</div>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.unnamed57}>社会保険労務士 × エンジニア</div>
        <div className={classes.yatoLab}>yato Lab</div>
      </div>
      <div className={classes.topMenu}>
        <div className={classes.profile2}>
          <div className={classes.unnamed58}>自己紹介</div>
        </div>
        <div className={classes.groupDevelopments}>
          <div className={classes.unnamed59}>組織開発</div>
        </div>
        <div className={classes.selfDevelopments}>
          <div className={classes.unnamed60}>個人開発</div>
        </div>
        <div className={classes.article}>
          <div className={classes.unnamed61}>記事</div>
        </div>
        <div className={classes.contact}>
          <div className={classes.unnamed62}>お問い合わせ</div>
        </div>
      </div>
    </div>
  );
});
